import styles from './DisplayList.module.css'

const DisplayList=(props)=>{
    const litems=props.custhandle.map((custhandle,index)=>{
        return(
            <li key={index}>{`${custhandle.cname}   is offering  ${custhandle.tipamount}`}</li>
        )
    })
    return (
        <div className={styles.listcontainer} style={{border:'2px solid pink',padding:'30'}} >
          <ul>
           <h3> customer List</h3>
            {litems}
          </ul>
            
        </div>
    )
}
export default DisplayList;