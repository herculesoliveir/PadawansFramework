import React, {useEffect, useState} from 'react';
import TablePosts from '../table.posts.components';
import Api from '../../Api';
import { Link } from 'react-router-dom'
import FiltroComponent from '../filtro.components';

const ImputFiltros = [
    {
        type:"number",
        label:"User Id",
        paramUrl: 'userId'
    },
    {
        type:"number",
        label:"Id",
        paramUrl: 'id'
    },
    {
        type:"text",
        label:"Titulo",
        paramUrl: 'title'
    },
    {
        type:"text",
        label:"Body",
        paramUrl: 'body'
    },
]


const Posts = () => {
    
    const [posts,setPosts] = useState([]);  

    useEffect(()=>{
      (async ()=>{
        let res = await Api.Request('Posts',null,'GET');
        setPosts(res);
      })();
    },[])

    const requestFilter = async url => {
        let res = await Api.Request('Posts' + url,null,'GET');
        setPosts(res);
    }

    return (
        <div className="main-div">
            <h2 className='header'>Posts</h2>
            <h5 className='header'>Essa é a página de posts.</h5>
            <FiltroComponent imputs={ImputFiltros} submitUrlAndRequest={url => requestFilter(url)}/>
            <div className='tableStyle'>
                <TablePosts data={posts}/>
            </div>
            <div className='flexDiv'>
                <Link to='/' >
                    <button className='retroceder'>
                        HOME PAGE
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Posts;