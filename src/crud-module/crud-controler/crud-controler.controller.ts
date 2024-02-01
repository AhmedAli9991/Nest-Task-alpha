import { Body, Controller, Get, Post } from '@nestjs/common';
import{CrudServiceService} from '../crud-service/crud-service.service'
import {UserDto} from '../../Dtos/crud-dto'
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
        return  this.CrudService.getCrud()
    }    
}
