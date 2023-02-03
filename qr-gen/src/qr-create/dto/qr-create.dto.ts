/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";


export class qrDto {
    @IsNotEmpty ()
    @IsString ()

    public text: string;
}