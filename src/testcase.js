/*const user =[{
    name :"yasodha",
    pic :"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg"
  },
 {
    name:"sasi",
    pic :"https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?cs=srgb&dl=pexels-masha-raymers-2726111.jpg&fm=jpg"
 },
  { name : "hariharan" ,
  pic : "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?cs=srgb&dl=pexels-masha-raymers-2726111.jpg&fm=jpg"
  
  
  },
];
  
  const people= ["yasodha","sasi","hariharan"];*/

  /*function Msg(name,pic) {
 /* console.log(Props);
  return (
    <div>
      <h1>Hi,{name}👨‍🦱👨‍🦱👨🧡❣💥💟 </h1>
      <img className="profile" src={pic} alt={name} />
    </div>
  );
}*/
/*function welcome({name}){
return(
  <div>
    <h1>hi,{name}</h1>
  </div>
);
}*/
{
    {people.map((personName)=>
    
    <welcome name={personName}/>)
    }
  }
  {user.map((user)=>(
    <Msg name={user.name} pic={user.pic} />
    ))
}