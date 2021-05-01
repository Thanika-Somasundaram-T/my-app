//import data from './datum/data.mjs';
import getBill from './services/math.mjs';

//import toReturnBill from "./components/render.js";
import Bill from "./services/bill.js";


function App() 
{  
  
   const data=getBill();
   return(
   <div>
     {Bill(data)}
     </div>
   );

      
}


export default App;
