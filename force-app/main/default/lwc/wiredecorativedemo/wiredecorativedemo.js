import { LightningElement,track,wire } from 'lwc';

const columns1=[
    {label:'Name' , field : "Name" },
    {label:'Player Record Id' , field : "ID" },
    {label:'Test Columns' , field : "Last Name" },
];
export default class Wiredecorativedemo extends LightningElement {

    @track columns=columns1;
}