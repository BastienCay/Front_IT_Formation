import { Theme } from "./theme.model";

export class SousTheme {

        designation: string;
        theme: Theme;

        constructor(designation: string,theme: Theme){
                this.designation = designation;
                this.theme = theme;
        }
}