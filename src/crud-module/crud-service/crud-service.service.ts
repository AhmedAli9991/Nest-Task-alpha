import { Injectable } from '@nestjs/common';
import {DbServiceService} from '../../common-services/db-service/db-service.service'
import { User, Prisma } from '@prisma/client';


interface user {
    email : string,
    password : string,
    name : string

}

@Injectable()
export class CrudServiceService {
    constructor(private prisma: DbServiceService){

    }
    async getCrud(){
        try{
        const userList = await this.prisma.user.findMany()
        return {
            status:200,
            message:'list of all user',
            resposne:userList 
            } }
        catch(err){
            return{
                status:500,
                message:'error in getting all user',
                resposne:err
                } 
        }
    }

    async getOneUser(id:number){
        try{
        const userList = await this.prisma.user.findFirst(
            {where: { id: Number(id) }})
           return {
            status:200,
            message:'one user',
            resposne:userList 
            }
        } 
        catch(err){
            return{
                status:500,
                message:'error in getting one user',
                resposne:err
                } 
        }
    }
    
    async deleteOne(id:number){
        try{
        const userList = await this.prisma.user.delete(
            {where: { id: Number(id) }})
           return {
            status:200,
            message:'user deleted',
            resposne:userList 
            }}
            catch(err){
                return{
                    status:500,
                    message:'error in deleting user',
                    resposne:err
                    } 
            } 
    }

    async addCrud(data:any){
        try{
        const newUser = await this.prisma.user.create({data})
        return {
         status:201,
         message:'user created',
         resposne:newUser
         } }
         catch(err){
            return{
                status:500,
                message:'error in creating user',
                resposne:err
                } 
         }
     }

 async updateUser(id:number,data:any){
        try{
        const newUser = await this.prisma.user.update({
            where: { id: Number(id) },
            data,
          })
        return {
         status:201,
         message:'user created',
         resposne:newUser
         } }
         catch(err){
            return{
                status:500,
                message:'error in creating user',
                resposne:err
                } 
         }
     }
     
}
