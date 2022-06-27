import { LightningElement,track } from 'lwc';

export default class HelloworldComp1 extends LightningElement {
    @track 
    whatever ='Talib';
    anyname ='Teqfocus' ;
    changehandler(event){
        this.anyname=event.target.value; 
    } 
} 