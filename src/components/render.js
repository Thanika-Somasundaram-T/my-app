function render(result) {
    
    return (
      
        
            
             
               
                <tr>
                <td>{result.itemName}</td>
                <td>{result.units}</td>
                <td>{result.lineItemPrice}</td>
                <td>{result.itemDiscount}</td>
                <td>{result.tax}</td>
                <td>{result.finalPrice}</td>
              </tr>
             

                   
       
     
    );
  }
  export default render;