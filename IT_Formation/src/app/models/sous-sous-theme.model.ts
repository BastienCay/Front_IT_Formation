import { SousTheme } from "./sous-theme.model";

export class SousSousTheme {
    id!: Number;
    designation: String;
    sousTheme!: SousTheme;

    constructor(designation: String){
        this.designation = designation;
    }


}