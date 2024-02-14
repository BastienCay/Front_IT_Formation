import { Theme } from "./theme.model";

export class SousTheme {
        id!: Number;
        designation: string;
        theme: Theme;

        constructor(designation: string,theme: Theme){
                this.designation = designation;
                this.theme = theme;
        }
}