import { Injectable } from '@nestjs/common';

@Injectable()
export class CrudServiceService {

    getCrud(){
       return {
        status:200,
        message:'works fine',
        resposne:'hello from service' 
        } 
    }

    addCrud(){
        return {
         status:200,
         message:'works fine',
         resposne:[] 
         } 
     }
 
}
