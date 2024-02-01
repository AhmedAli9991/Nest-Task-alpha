import { extname } from 'path';
import { existsSync, mkdirSync } from 'fs';
import { diskStorage } from 'multer';
import { HttpException, HttpStatus } from '@nestjs/common';

export const PATH_DOWNLOADED_FILE = `src`;
export const SUPPORTED_FILES = ['jpg', 'xlsx', 'xls','sheet', 'jpeg', 'png', 'gif'];


export const multerConfig = {
    dest: './uploads',
};

export const multerOptions = {
    limits: {
        fileSize: 1024 * 20,
    },
    fileFilter: (req: any, file: any, cb: any) => {
        const ext: string = file.originalname.split('.').pop() || '';
        if (SUPPORTED_FILES.indexOf(ext?.toLowerCase()) !== -1) {
            cb(null, true);
        } else {
            cb(new HttpException(`Unsupported file type ${extname(file.originalname)}`, HttpStatus.BAD_REQUEST), false);
        }
    },
    storage: diskStorage({
        /* Destination storage path details */
        destination: (req: any, file: any, cb: any) => {
            const uploadPath = multerConfig.dest;
            /* Create folder if doesn't exist */
            if (!existsSync(PATH_DOWNLOADED_FILE)) {
                mkdirSync(PATH_DOWNLOADED_FILE);
            }
            cb(null, PATH_DOWNLOADED_FILE);
        },
        /* File modification details */
        filename: (req: any, file: any, cb: any) => {
            /* Calling the callback passing the random name generated with the original extension name */
            cb(null, `${file.originalname}`);
        },
    }),
};