import { useState } from "react";
import "./App.css";


export default function App() {
  const users = [
  { 
    
    name :"yasodha",
    pic : "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg"
  
},
  {
  
    name : "sasi",
    pic : "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?cs=srgb&dl=pexels-masha-raymers-2726111.jpg&fm=jpg"
  
},
{
  pic : "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?cs=srgb&dl=pexels-masha-raymers-2726111.jpg&fm=jpg",
  name : "hari"
}
  ];
  return (
    <div className="App">
     {
      users.map((personName)=>(
        <Msg
    name ={personName.name}
    pic = {personName.pic}
  />
      ))
     }
     
    </div>
  );
}
function Counter() {
//let like = 10;
const[like,setlike] = useState(0);
const[dislike,setDislike] = useState(0);
  return(
    <div className="container">
      <button className="button-like" onClick={()=> setlike(like + 1)}>👍{like}</button>
      <button className="button-dislike"onClick={()=> setDislike(dislike +1)}>👎{dislike}</button>
    
    </div>
  );
}
function Msg({name,pic}) {
  return (
    <div className="container">  
    <table className="table">
     <tr className="tr">      
      <td>    
      <img className="profile" src={pic} alt={name} />
    <h1>Hi,{name}👨‍🦱👨‍🦱👨🧡❣💥💟</h1>        
      <Counter/>
      </td>
      </tr>          
      </table> 
    </div>
  );
}

