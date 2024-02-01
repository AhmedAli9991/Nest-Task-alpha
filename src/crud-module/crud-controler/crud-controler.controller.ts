import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import{CrudServiceService} from '../crud-service/crud-service.service'
import {UserDto} from '../../dtos/crud-dto'
@Controller('crud')
export class CrudControlerController {
    constructor(private CrudService:CrudServiceService){

    }
    @Get("all")
    getRoute(){
        return  this.CrudService.getCrud()
    }
    @Post("addUser")
    addUserRoute(@Body() User:UserDto){
        return  this.CrudService.addCrud(User)
    }    
    @Get("oneUser/:id")
    getUserbyId(@Param() prams){
        return this.CrudService.getOneUser(prams.id)
    } 
    @Delete("deleteOne/:id")
    deletebyId(@Param() prams){
        return this.CrudService.deleteOne(prams.id)
    }   
    @Put("updateOne/:id")
    updateOne(@Param() prams, @Body() User:UserDto){
        return this.CrudService.updateUser(prams.id,User)
    }   
}
