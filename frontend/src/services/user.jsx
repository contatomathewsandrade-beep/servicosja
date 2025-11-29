import { useState } from "react";

export default  function UserServices() {
    const [loading, setLoading] = useState(false)
    const url = '/api';



    const register = (formData) => {
        setLoading(true)
        fetch(`${url}/accounts/registro/cliente/`, {
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*'
            },
            body: JSON.stringify(formData)
        })
        .then((response) => response.json()) 
        .then((result) => {
         
            console.log(result)
           
        })
        .catch((error)=> {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
           console.log('finalizado')
        })
    }
    return{register , loading}
}

