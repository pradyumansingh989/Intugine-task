import React, { useState } from 'react';
import usetate from '../App'
const TableInt=(props)=>{
    console.log("The value of name in TableInt "+props.name);
    return(
        <>
            <div class="table-container">
    <table>
        <thead>
            <tr>
                <th>AWB NUMBER</th>
                <th>TRANSPORTER</th>
                <th>SOURCE</th>
                <th>DESTINATION</th>
                <th>BRAND</th>
                <th>START DATE</th>
                <th>ETD</th>
                <th>STATUS</th>
            </tr>
        </thead>
        <tbody>  
         {usetate.value.map((ship,index)=>{
                  
                    if(ship.current_status_code==="INT")
                    {
                        return(<>
                         <tr>
                  <td>{ship.awbno}</td>
                  <td>{ship.carrier}</td>
                  <td>{ship.from}</td>
                  <td>{ship.to}</td>
                  <td>{ship.carrier}</td>
                  <td>{ship.pickup_date}</td>
                  <td>{ship.carrier}</td>
                  <td>{ship.current_status}</td>
                        </tr>
                        </>)
                    }
                    }
                )}
                
                {/* <ShowDel value={props.value} name={props.name}/> */}
        </tbody>
    </table>
    
</div>
        </>
    )

}
export default TableInt;