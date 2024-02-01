import { Injectable } from '@nestjs/common';
import {DbServiceService} from '../../common-services/db-service/db-service.service'
import * as xlsx from 'xlsx';
import * as fs from 'fs';
const { parse } = require("csv-parse");
var path = require('path');

@Injectable()
export class FileServiceService {
    constructor(private prisma: DbServiceService){

    }
    
  async fileinfo(data){

    const res1 = await this.prisma.file.create({data})
    return res1
}
    
  async convertExcelToCSV(filePath: string) {
    // Read the Excel file
    console.log('dsadas')
    const workbook = xlsx.readFile(filePath);

    // Assume the first sheet is the one to convert
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];

    // Convert Excel to CSV
    const csvData = xlsx.utils.sheet_to_csv(worksheet);

    // Write CSV data to a new file
    const csvFilePath = 'converted.csv';
    fs.writeFileSync(csvFilePath, csvData);
    console.log('csvData',csvData)
    

    var data  = []
     await  fs.createReadStream(path.join(__dirname,"../../../converted.csv"))
        .pipe(parse({ delimiter: ",", from_line: 2 }))
        .on("data",async function (row) {
            // name	identifier	total_weight	verified_weight
           await data.push(row)
            // let percentage = row[0][3]/row[0][2] * 100
            // const newProd = await this.prisma.product.create({
            // })
            console.log(row);
        })
        console.log('data12321',data)
        var res = Promise.all(data.map(async (i) => {
                let percentage = i[3] / i[2] * 100 ;
                 var res = await this.prisma.product.create({
                    data:{ name: i[0],identifier: i[1],
                    total_weight: i[2], verified_weight: i[3], verified_weight_percentage: `${percentage}`
                }});
                return res
            }))

    return {
        status:200,
        message: 'coverted and added to db',
        response:`file at path ,${csvFilePath}`}
  }
}