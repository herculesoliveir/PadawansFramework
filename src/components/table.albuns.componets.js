import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

function TableAlbuns({props, data}){

    const [albuns,setAlbuns] = useState([]);

    useEffect(()=>{
        setAlbuns(data)             
    },[data])

    return (
        <MDBTable className='caption-top'>
          {/* <caption>List of users</caption> */}
          <MDBTableHead>
            <tr>
              <th scope='col'>USER ID</th>
              <th scope='col'>ID</th>
              <th scope='col'>TITLE</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
             {albuns.map((v,i)=>{
              return(
              <tr key={i}>
                  <th scope='row'>{v.userId}</th>
                  <td>
                    {v.id}
                  </td>
                  <td>
                    {v.title}
                  </td>
              </tr>
              )
            })}
            
          </MDBTableBody>
        </MDBTable>
      );
}

export default TableAlbuns;