import { LightningElement,track,wire } from 'lwc';
import getcontactlist from '@salesforce/apex/c/wiredecoraticedemocomponentclassfromvs.getaccountlist' ;

const columns1=[
    {label:'Name' , field : "Name" },
    {label:'Player Record Id' , field : "ID" },
    {label:'Test Columns' , field : "Last Name" },
];
export default class Wiredecorativedemo extends LightningElement {

    @track columns=columns1; 
    @track data = [];

    @wire(getcontactlist)
    wireconlistclass({data , error}){
        if(data){
            this.data=data;
        } else if (error){
            console.log("Error Has been Occured");
        }
    }
}