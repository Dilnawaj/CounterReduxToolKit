import { createStore } from "redux";
import { evaluate } from 'mathjs';
const INITIAL_VALUE={
   counter:6,
   privacy:false
}

const counterReducer =(store =INITIAL_VALUE , action) => {
   
   if(action.type==='INCREMENT'){
      
      return {...store,counter :store.counter + 1};
   }
   else if (action.type === 'DECREMENT') {
     
      return {...store,counter :   store.counter - 1};
   } 
   else if(action.type==='ADD')
   {
      return {...store,counter:store.counter + Number(action.payload.value) }

   }
   else if(action.type=="SUBTRACT"){
      return {...store,counter:store.counter-Number(action.payload.value)}
   }
   else if(action.type=="PRIVACY_TOGGLE")
   {
return {...store,privacy :!store.privacy};
   }
   return store;
}

 const counterStore=createStore(counterReducer); // reducer is a function that returns the next state
 export default counterStore;


