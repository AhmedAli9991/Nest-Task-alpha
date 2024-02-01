import { Body, Controller, Delete, Get, Param, Post, Put, Response, UseGuards,Request } from '@nestjs/common';
import{UserServiceService} from '../user-service/user-service.service'
import {UserDto,LoginDto} from '../../dtos/crud-dto'
import {AuthGuard} from '../../common-services/auth-guard/auth-guard.service'
@Controller('crud')
export class UserControlerController {
    constructor(private CrudService:UserServiceService){

    }
    @Get("all")
    @UseGuards(AuthGuard)
    getRoute(){
        return  this.CrudService.getCrud()
    }
    @Post("addUser")
    addUserRoute(@Body() User:UserDto){
        return  this.CrudService.addCrud(User)
    }  
    @Post("Login")
    async login (@Body() User:LoginDto,@Response() res){        
        try{
        const jwt = await this.CrudService.Login(User)
        console.log('jwt',jwt)
        res.cookie('accessToken', jwt, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            expires: new Date(Date.now() + 1 * 24 * 60 * 1000),
        });
        return res.send({
                status:200,
                message:'Logged in',
                resposne:{success:true} 
                })
        }
        catch(err){
            return res.send({
                status:500,
                message:'error in getting one user',
                resposne:err
                } )
        }
    }    

    @Post("logout")
    @UseGuards(AuthGuard)
    Logout(@Response() res,@Request() req){
        try{
        res.clearCookie('accessToken')
        return res.send({
            status:200,
            message:'logged out',
            response :{success :true}
        })
        }catch(err){
            return res.send({
                status:500,
                message:'error in getting one user',
                resposne:err
                } )      
              }
    }
    @Get("oneUser/:id")
    @UseGuards(AuthGuard)
    getUserbyId(@Param() prams){
        return this.CrudService.getOneUser(prams.id)
    } 
    @Delete("deleteOne/:id")
    @UseGuards(AuthGuard)
    deletebyId(@Param() prams){
        return this.CrudService.deleteOne(prams.id)
    }   
    @Put("updateOne/:id")
    @UseGuards(AuthGuard)
    updateOne(@Param() prams, @Body() User:UserDto){
        return this.CrudService.updateUser(prams.id,User)
    }   
}
