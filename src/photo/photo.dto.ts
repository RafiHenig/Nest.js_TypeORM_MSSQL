import { IsString, IsNumber, IsArray, IsBoolean } from 'class-validator';

export class PhotoDto {
    constructor(init?: PhotoDto) {
        Object.assign(this, init)
        return this;
    }

    @IsString()
    name: string;

    @IsString()
    description?: string;

    @IsString()
    filename?: string;

    @IsBoolean()
    mainPhoto: boolean;
}


//  {
//   "name": "The big ship",

//      "description": "Picture of an amazing ship set againt the beautifull sunset",

//      "filename": "big_ship.jpeg",

//      "views": 234,

//      "isPublished": false
// }