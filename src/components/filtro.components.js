import React, { useEffect, useState } from 'react';

function FiltroComponent ({props, imputs, submitUrlAndRequest}){

    const [AllImputs, setAllImputs] = useState([]);

    const creatImputs = data => {
        let imputarray = [];
        data.map((v)=>{
            return imputarray.push({
                ...v,
                value:'',
            });
        })
        setAllImputs (imputarray);
    }


    const updateValue = (v,i)=>{
        let clone = [...AllImputs];
        clone[i] = {...clone[i], value:v};
        setAllImputs(clone);
    }

    const sumitForm = e => {
        e.preventDefault();
        
        let url = '?'
        AllImputs.forEach((v,i) => {
            if(v.value != ''){
                url += `${v.paramUrl}=${v.value}`;
            }
        });

        return submitUrlAndRequest(url);
    }

    useEffect(()=>{
        creatImputs(imputs)           
    },[imputs])

    return (
        <div className="flex-content-inputs">
            <form onSubmit={e => sumitForm(e)}>
                {AllImputs.map((v,i)=>{
                    return(
                        <React.Fragment key={i + 10}>
                            {v.type === 'select' ? (
                                <select onChange={t => updateValue(t.target.value,i)} key={i} className="ImputFiltro">
                                    <option key={99999} selected value="">Selecione um</option>
                                    {v.options.map((o,j) => {
                                        return (
                                            <option key={j + 100} value={o.value}>{o.key}</option>
                                        )
                                    })}
                                </select>
                            ) : (
                                <input key={i} className='ImputFiltro' type={v.type} value={v.value} placeholder={v.label} onChange={t => updateValue(t.target.value,i)} />                        
                            )}
                        </React.Fragment>
                        )
                    })
                }
                <button type="submit" className="button-filtro">
                    Filtrar
                </button>
            </form>
        </div>
    )

}

export default FiltroComponent