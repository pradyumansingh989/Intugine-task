import './App.js';
import React,{useEffect, useState} from 'react';
import NavBar from './components/NavBar'
import Table from './components/Table';
import axios from 'axios';
import Box from './components/Box';
// import Left from './components/Left';
// import {Route,Switch} from 'react-dom'
// import TableInt from './components/TableInt'
function App() {
  const [usetate,setState]=useState([]);

  useEffect(()=>{
      axios.get("http://localhost:3000/").then((response)=>{
        const data=response.data;
        console.log(data);
        setState(data);
        
        console.log("Data Has been inserted in table");
      }).catch((e)=>{
        console.log("Error retry");
      });
    },[]);
    var i=0;
    var del=0;
    var ood=0;
    var int=0;
    var dex=0;
    var nfi=0;
    for(i in usetate)
    {
      if(usetate[i].current_status_code==="DEL")
      {
          del=del+1;
      }else if(usetate[i].current_status_code==="OOD"){
          ood=ood+1;
      }else if(usetate[i].current_status_code==="INT"){
        int++;
    }else if(usetate[i].current_status_code==="DEX"){
      dex++;
    }else if(usetate[i].current_status_code==="NFI"){
      nfi++;
  }
    }
    
    return(
        <>
          <NavBar/>
          <Box del={del} ood={ood} int={int} dex={dex} nfi={nfi} value={usetate}/>
          <Table value={usetate} name="DEL"/>   
</>
    )
}

export default App;