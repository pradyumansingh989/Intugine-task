import React from 'react';

const ShowDel=(props)=>{
    console.log("Show"+props.value);
    var filterValue=props.name;
    console.log("The value of filter"+filterValue);
    return(
        <>
             {props.value.map((ship,index)=>{  
                  if(ship.current_status_code===filterValue)
                  {
                      return(<>
                       <tr>
                <td>{ship.awbno}</td>
                <td>{ship.carrier.substring(0,10)}</td>
                <td>{ship.from.substring(0,10)}</td>
                <td>{ship.to.substring(0,10)}</td>
                <td>{ship.carrier.substring(0,10)}</td>
                <td>{ship.pickup_date.substring(0,10)}</td>
                <td>{ship.extra_fields.expected_delivery_date.substring(0,10)}</td>
                <td>{ship.current_status}</td>
                      </tr>
                      </>)
                  }
                  }
              )} 
             
        </>
    )
}
export default ShowDel;