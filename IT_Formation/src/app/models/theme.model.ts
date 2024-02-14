// export default interface Theme {
//     id: Number;
//     designation: String;

// }


export class Theme {
    id!: Number;
    designation: String;

    constructor(designation: String){
        this.designation = designation;
    }


}