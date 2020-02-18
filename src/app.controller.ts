import { Controller, Get, Res } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from "path";
import { createGzip } from 'zlib';
import { Response } from 'express';

@Controller('')
export class AppController {

    @Get()
    get(@Res() res: Response) {
        res.writeHead(200, { 'Content-Type': 'text/html', 'Content-Encoding': 'gzip' });
        createReadStream(join(__dirname, '../..', 'client', 'index.html')).pipe(createGzip()).pipe(res)
    }
}
