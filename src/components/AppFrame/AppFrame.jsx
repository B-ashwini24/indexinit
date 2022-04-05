import Header from "../../pages/Header/Header";
import DisplayList from "../DisplayList/DisplayList";
import { useState } from "react";
import Button from "../Button/Button";
import CustName from "../CustName/CustName";
import Input from "../Input/Input";
import ServiceInput from "../ServiceInput/ServiceInput";
import ShowTotalTip from "../ShowTotalTip/ShowTotalTip";
import Footer from "../../pages/Footer/Footer";


const AppFrame=() =>
{
    const [bill,setBill] = useState('')
    const [exp,setExp]= useState('0')
    const [custname,setCustname]=useState('0')
    const [tip,setTip]=useState('0')
  
    const [custlist,setCustlist]=useState([{cname:'ashwini',tipamount:'123'}])
    const [total,setTotal]=useState({ Numofcust:0,totaltip:0})
   
   /* const totaltip={
       // Numofcust:0,
       // totaltip:0

    }
    const customer= {
      //  cname:'',
       // tipamount:0
    }*/
    const totaltiphandle =(event)=>{
       
        var ttal=0
        const val=custlist.map((c1)=>{
           
            console.log(parseInt(c1.tipamount))
            ttal=ttal+parseInt(c1.tipamount)
             return ttal
         })
        const custobj= {};
        custobj.Numofcust=custlist.length;
        custobj.totaltip=ttal
      
        setTotal(custobj)
       console.log(total)
     
        }
        
   
      const addCust=(event)=>{
          if(bill && custname)
          {
            const c1={};
            c1.cname=custname
            c1.tipamount=tip
            let clist=[...custlist]
            clist.push(c1)
            setCustlist(clist)
            console.log(clist)

            setBill('');
            setCustname('');
            setExp('');
          }
     }  

    return (
        <div>
            <Header/>
            
            <Input value={bill} inputhandle={(event)=>{
                setBill(event.target.value);
             }}/>
              <hr></hr>
            <ServiceInput value={exp} selhandle={(event)=> {
                setExp(event.target.value);
               
             }} />
            <CustName value={custname} cnamehandle={(event)=>{
                setCustname(event.target.value);
              
                const rating=exp;
                var multiplier;
             
                if(bill)
                {
                    if(rating==='1')
                    {
                    
                        multiplier=20;
                    }
                    if(rating==='2')
                    {
                    
                        multiplier=10;
                    }
                    if(rating==='3')
                    {
                    
                        multiplier=5;
                    }
                
              
                var tipamount= parseInt(bill)*(multiplier/100);
             
                setTip(tipamount);
             }
              
            }}/>
            <Button 
               
                
             addCust={addCust} 
              totaltiphandle={totaltiphandle} 
            
              />
            
                 
        
        <hr></hr>
     
            <DisplayList custhandle={custlist}/>
        <hr></hr>
           
            <ShowTotalTip totalhandle={total}/>
            <Footer/>
        </div>
    )
}

export default AppFrame;