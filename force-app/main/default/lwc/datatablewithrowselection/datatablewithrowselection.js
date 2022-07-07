import { LightningElement , track , wire , api} from 'lwc';
import contactlist from "@salesforce/apex/datatablewithrowselectionclass.getcontact";

const columns = [
    {label : 'Contact Name', fieldName : 'Name'},
    {label : 'Contact Phone' , fieldName : 'Phone'}
];

export default class Datatablewithrowselection extends LightningElement {
    @track buttonlable = "Show Contact";
    @track isvisible = false;
    @track data = [];
    columns = columns;
    @api recordId; //It Store the current record Page id .

    // Get Related Contactlist From Apex Class.
        connectedCallback(){
             contactlist({lwcRecordId : this.recordId})
            .then(result => {
                this.data = result;
            })
            .catch(err =>{
                console.log("Show Error When It Come");
            })
        }

    // Show Hide Button Functionality.
        handleonclick(event){
            const label = event.target.label;
                
                if(label === "Show Contact" ){
                    this.buttonlable = "Hide Contact";
                    this.isvisible= true;
                
                }
                else if(label === "Hide Contact"){
                    this.buttonlable = "Show Contact";
                    this.isvisible= false;
                }
        }
}