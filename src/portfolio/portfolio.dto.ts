import { IsNumber, IsString, IsArray, ValidateNested, ArrayMinSize, IsDefined } from "class-validator";
import { Type } from 'class-transformer';
import { PhotoDto } from "../photo/photo.dto";

export class PortfolioDTO {
    constructor(init?: PortfolioDTO) {
        Object.assign(this, init)
    }

    id: number;

    @IsString()
    name: string;

    @IsString()
    subTitle: string;


    //  type check not working on nested object
    @IsArray() 
    @ValidateNested({ each: true, })
    @ArrayMinSize(1)
    @Type(() => PhotoDto)
    @IsDefined()
    photos: PhotoDto[];
}
// import { Photo } from "src/photo/photo.entity";
// import { IsNumber, IsString, IsArray, ValidateNested, ArrayMinSize } from "class-validator";
// import { Type } from 'class-transformer';

// export class PortfolioDTO {
//     constructor(init?: PortfolioDTO) {
//         Object.assign(this, init)
//     }

//     id: number;

//     @IsString()
//     name: string;

//     @IsString()
//     subTitle: string;

//     @Type(() => Photo)
//     previewPhoto: Photo;

//     @IsArray()
//     @ValidateNested({ each: true })
//     @ArrayMinSize(1)
//     @Type(() => Photo)
//     photos: Photo[];
// }


// {
//     "name": "The huge progject",
//     "subTitle": "Up close photos of ships",
//     "previewPhoto" :  {
//         "name": "The big ship",
      
//            "description": "Picture of an amazing ship set againt the beautifull sunset",
      
//            "filename": "big_ship.jpeg",
      
//            "views": 534534,
      
//            "isPublished": false
//       },
//       "photos":[
//         {
//             "name": "The big ship",
          
//                "description": "Picture of an amazing ship set againt the beautifull sunset",
          
//                "filename": "big_ship.jpeg",
          
//                "views": 534534,
          
//                "isPublished": false
//           }, {
//             "name": "The big ship",
          
//                "description": "Picture of an amazing ship set againt the beautifull sunset",
          
//                "filename": "big_ship.jpeg",
          
//                "views": 534534,
          
//                "isPublished": false
//           }
//       ]
// }