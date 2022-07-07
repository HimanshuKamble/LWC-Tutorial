public with sharing class datatablewithrowselectionclass {

    @AuraEnabled(cacheable=true)        
    public static list<contact> getcontact(Id lwcRecordId){
            list<contact> contactlist = [select Id, Name, Phone , AccountId from contact where AccountId =: lwcRecordId ];
            return contactlist ;       
        }    
}
