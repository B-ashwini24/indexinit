const ServiceInput=(props)=>{
    return (
        <div>  
            <label>How was your Experience:</label>
            <select value={props.value} onChange={props.selhandle}>
            <option value='0'>choose</option>
                <option value='1'>Excellent : 20%</option>
                <option value='2'>Good : 10%</option>
                <option value='3'>Poor : 5%</option>
            </select>
        
        
        </div>
    )

}

export default ServiceInput;