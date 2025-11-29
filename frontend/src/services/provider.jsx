import { useState } from "react";

export default  function ProviderServices() {
    const [loading, setLoading] = useState(false)
    const [providers , setPoviders] = useState([])
    const [ refetchProviders , setRefetchProviders] = useState(true)
    const url = '/api';



    const register = (formData) => {
        setLoading(true)
        fetch(`${url}/accounts/registro/prestador/`, {
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*'
            },
            body: JSON.stringify(formData)
        })
        .then((response) => response.json()) 
        .then((result) => {
           if(result.access){
                localStorage.setItem(
                    'auth',
                    JSON.stringify({token:result.access , user:result.nome_completo})
                )
            console.log(result.nome_completo , result.access)
           }
        })
        .catch((error)=> {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
           console.log('finalizado')
        })
    }

       const getProviders = () => {
        setLoading(true)
        fetch(`${url}/accounts/prestadores/`, {
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*'
            },
        })
        .then((response) => response.json()) 
        .then((result) => {
            
            setPoviders(result)
        })
        .catch((error)=> {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
            setRefetchProviders(false)
        })
    }

    return{register , loading , getProviders , providers , refetchProviders}
}

