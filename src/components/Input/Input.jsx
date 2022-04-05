const Input=({value,inputhandle})=>{
return (
    <div>
       <label>Enter Bill Amount:</label> 
       <input type="text" 
            value={value} 
            onChange={inputhandle} >
        </input>
    </div>
);
};

export default Input;