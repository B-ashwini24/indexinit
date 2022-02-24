var name1="aibohphobia"
var res=fnpalin(name1)
console.log("palin"+res)
function fnpalin(str)
{
    for(var i=0;i<str.length;i++)
    {
        for(var j=str.length-1;j>=0;j--)
        {
            if((str[i])===(str[j]))
            {
                return true
                
            }
            else{
               return false
            } 
               
              
        }
       
    }
   
}