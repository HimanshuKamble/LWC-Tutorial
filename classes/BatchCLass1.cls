public class BatchCLass1 implements Database.Batchable<sobject>{
	
    public Database.QueryLocator start(Database.BatchableContext bc){
        string Acclist = ('select Id,Name,Phone from Account');
        return Database.getQueryLocator(Acclist);
    }
    public void execute(Database.BatchableContext bc, List<Account> listfromstartmethod){
        for(Account a : listfromstartmethod){
            a.Fax = '123456';
        }
        Update listfromstartmethod;
    }   
    public void Finish(Database.BatchableContext bc){
        // NO Code 
    } 
}

// Anonymous Window
/* database.executeBatch(new BatchCLass1());  */