import React from 'react';
//import ShowDel from './ShowDel';
//import Table from './Table';
const Box=(props)=>{  
    
    return(
        <>
            <div className="box">
              
              <button className="inside" >
                    <span>DEL</span>
                    <span>{props.del}</span>
                </button>
            <button className="inside" >
                    <span>INT</span>
                    <span>{props.int}</span>
                </button>
                <button className="inside">
                    <span>OOD</span>
                    <span>{props.ood}</span>
                </button>
                
                <button className="inside">
                    <span>DEX</span>
                    <span>{props.dex}</span>
                </button>
                <button className="inside">
                    <span>NFI</span>
                    <span>{props.nfi}</span>
                </button>
                
            </div>
        </>
    )
}
export default Box;