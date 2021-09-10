import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

function TableAll({props,data}){

    const [all,setAll] = useState ([]);

    useEffect(()=>{
      setAll(data)
    },[data])

    return (
        <MDBTable className='caption-top scroolTable'>
          {/* <caption>List of users</caption> */}
          <MDBTableHead>
            <tr>
              <th scope='col'>USER ID</th>
              <th scope='col'>ID</th>
              <th scope='col'>TITLE</th>
              <th scope='col'>COMPLETED</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {all.map((v,i)=>{
              return(
                <tr>
                  <th scope='row'>{v.userId}</th>
                  <td>{v.id}</td>
                  <td>{v.title}</td>
                  <td>{v.completed ? 'Completo' : 'Não Completo'}</td>
                </tr>
                )
              })}

          </MDBTableBody>
        </MDBTable>
      );
}

export default TableAll