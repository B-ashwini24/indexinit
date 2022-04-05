const Button=({totaltiphandle,addCust})=>{
    return (
      
            <>
                <button 
                    onClick={addCust} >Add Customer
                    
                </button>
                
           
                <button 
                    onClick={totaltiphandle} >customer tip and customer
                    
                </button>
            </>
        
    );

};
export default Button;