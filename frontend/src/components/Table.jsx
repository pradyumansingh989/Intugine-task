import React from 'react';
import ShowDel from './ShowDel';
import usetate from '../App';
const Table=(props)=>{
    console.log("The value of table"+usetate);
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
         {/* {props.value.map((ship,index)=>{
                  
                    if(ship.current_status_code===props.name)
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
                )} */}
                
                <ShowDel value={props.value} name="DEL"/>
        </tbody>
    </table>
    
</div>
        </>
    )

}
export default Table;