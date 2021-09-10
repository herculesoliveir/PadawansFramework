import React, { useEffect, useState } from 'react';
import TableAlbuns from '../table.albuns.componets';
import Api from '../../Api';
import { Link } from 'react-router-dom';
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
]

const Albuns = () => {

    const [albuns,setAlbuns] = useState([]);

    useEffect(()=>{
        (async()=>{
            let res = await Api.Request('albums',null,'GET');
            setAlbuns(res);            
        })()
    },[])

    const requestFilter = async url => {
        let res = await Api.Request('albums' + url,null,'GET');
        setAlbuns(res);
    }


    return (
            <div className="main-div">
                <h2 className='header'>Albuns</h2>
                <h5 className='header'>Essa é a página de Albuns.</h5>
                <FiltroComponent imputs={ImputFiltros} submitUrlAndRequest={url => requestFilter(url)}/>
                <div className='tableStyle'>
                    <TableAlbuns data={albuns}/>
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
export default Albuns;