const BASE_API = 'https://jsonplaceholder.typicode.com/';

const generateHeader = (method, data,file) => {
    let HeadeRequest =  {
        method: `${method}`,
    }
    let headers = {
        'X-Requested-With': 'XMLHttpRequest',
    };
    
    if(!file){
        headers["Content-Type"] = 'application/json' ;
    }
    
    return ((object, headers, body, file) => {
        
        Object.defineProperty(object, 'headers', {
            value: headers,
            writable: true
        });
        
        if(method === 'POST'){
            Object.defineProperty(object, 'body', {
                value: body == null ? {} : !file ? JSON.stringify(body) : body,
                writable: true
            });
        }
        
        return object;
    })(HeadeRequest, headers, data,file);
}


const fetchRequest = async (rota,data=null, method, file) => {
    
    let response = await fetch(`${BASE_API}${rota}`, generateHeader(method,data,file));

    if(response.status === 401){
        return {error: true, status: 401}
    }else{
        return response.json();
    }    
}


export default {

    Request: async (rota,data, method, file=false) => {
        return await fetchRequest(rota,data,method,file);
    },

};