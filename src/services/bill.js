import render from "../components/render.js";
function Bill(data) {
    const { lineItems ,total}=data;
    
    

    return (
      
        <table>
              <thead>
                <tr>
                <th>NAME</th>
                <th>UNIT</th>
                <th>ITEM PRICE</th>
                <th>DISCOUNT</th>
                <th>TAX</th>
                <th>FINAL PRICE</th>
                </tr>
                
              </thead>
           
             <tbody>
              {lineItems.map(render)}
              </tbody>     
         </table>

         
          
            
       
    
    );
  }
  export default Bill;