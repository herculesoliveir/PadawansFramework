import React, {useEffect, useState, useMemo} from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';


function TablePosts({props,data}) {
    
    const [posts,setPosts] = useState([]);  

    useEffect(()=>{
        setPosts(data)
    },[data])

    return (
        <MDBTable align="middle">
          <MDBTableHead>
            <tr>
              <th scope='col' className='w-25'>
                USER ID
              </th>
              <th scope='col' className='w-25'>
                ID
              </th>
              <th scope='col' className='w-25'>
                TITLE
              </th>
              <th scope='col' className='w-25'>
                BODY
              </th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
              {posts.map((v,i)=>{
                  return(
                    <tr key={i}>
                        <td>
                            {v.userId}
                        </td>
                        <td>
                            {v.id}
                        </td>
                        <td>
                            {v.title}
                        </td>
                        <td>
                            {v.body}
                        </td>
                    </tr>
                  )
              })}
            
            </MDBTableBody>
        </MDBTable>
      );
}

export default TablePosts;