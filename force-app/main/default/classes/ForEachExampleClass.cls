public with sharing class ForEachExampleClass {

    @auraEnabled(cacheable=true)
    public Static list<contact> getconlist(){
        list<contact> conlist = [select id, name from contact limit 15];
        return conlist;
    }
}
