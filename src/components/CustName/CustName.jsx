const CustName=(props)=>{
    return (
        <>
            <label>Customer Name:</label>
            <input type="text" 
            value={props.value} 
            onChange={props.cnamehandle}/>
        </>
    );
};
 export default CustName;