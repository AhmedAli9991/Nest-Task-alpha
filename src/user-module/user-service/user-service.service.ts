import { Injectable } from '@nestjs/common';
import {DbServiceService} from '../../common-services/db-service/db-service.service'
import {JwtServiceService} from '../../common-services/jwt-service/jwt-service.service'

import { User, Prisma } from '@prisma/client';

@Injectable()
export class UserServiceService {
    constructor(private prisma: DbServiceService, private jwt :JwtServiceService){

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
    

    async Login(data: any){
        try{
        const userTologin = await this.prisma.user.findFirst(
            {where: { email: String(data.email),  password: String(data.password) }})
            const jwt = await this.jwt.signIn(userTologin)            
           return jwt
        } 
        catch(err){
            return err
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
