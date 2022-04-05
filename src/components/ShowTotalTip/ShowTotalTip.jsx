
import styles from './ShowTotalTip.module.css'

const ShowTotalTip=({totalhandle})=>{
    
  
    return (
        <div className={styles.tablecontainer}>
           <table >
               <tbody >
                   <tr >
                       <td>no of customer</td><td>Total tip</td>
                   </tr>
                   <tr>
                       <td>{totalhandle.Numofcust}</td><td>{totalhandle.totaltip}</td>
                   </tr>
               </tbody>
           </table>
                
            
        
        </div>
    );
};

export default ShowTotalTip;