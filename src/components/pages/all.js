import React, { useEffect, useState } from 'react';
import Api from '../../Api';
import TableAll from '../table.all.components';
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
        type:"select",
        label:"Completo",
        paramUrl: 'completed',
        options: [
            {key: "Completo", value: true},
            {key: "Não completo", value: false},
        ]
    },
]


const All = () => { 

    const [all,setAll] = useState([]);

    useEffect(()=>{
        (async ()=>{
            let res = await Api.Request('todos',null,'GET')
            setAll(res);
        })()
    },[])

    const requestFilter = async url => {
        let res = await Api.Request('todos' + url,null,'GET');
        setAll(res);
    }


    return(
        <div className="main-div">
            <h2 className='header'>Todos</h2>
            <h5 className='header'>Essa é a página Todos.</h5>
            <FiltroComponent imputs={ImputFiltros} submitUrlAndRequest={url => requestFilter(url)}/>
            <div className='tableStyle'>
                <TableAll data={all}/>
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
export default All;