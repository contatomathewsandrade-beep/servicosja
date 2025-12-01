import { useState, useCallback } from "react";

export default function ProviderServices() {
    const [loading, setLoading] = useState(false);
    const [providers, setPoviders] = useState([]);
    const [refetchProviders, setRefetchProviders] = useState(true);
    const [providerAccount, setProviderAccount] = useState([])
    const url = '/api';

    // Nota: register e login não foram envolvidos em useCallback pois não são usados como dependências em outros useEffects aqui.
    const register = (formData) => {
        setLoading(true);
        return new Promise((resolve, reject) => { 
            fetch(`${url}/accounts/registro/prestador/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(formData)
            })
            .then(async (response) => {
                const result = await response.json(); 
                if (!response.ok) {
                    reject(result); 
                } else {
                    resolve(result); 
                }
            })
            .then((result) => {
                if (result) {
                    localStorage.setItem(
                        'auth',
                        JSON.stringify({ token: result.access, user: result.nome_completo })
                    );
                    console.log(result);
                }
            })
            .catch((error) => {
                console.log('Erro na requisição ou validação:', error);
                throw error;
            })
            .finally(() => {
                setLoading(false);
                console.log('finalizado');
            });
        });
    };

     const login = async (formData) => {
    setLoading(true);

    try {
        const response = await fetch(`${url}/auth/token/login/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json(); 
        console.log("Resposta da API:", result);

        const authData = { 
            access: result.access,
            refresh: result.refresh,
            user_id: result.user_id,
            nome: result.nome,
            email: result.email ,
            profile_id: result.profile_id,
        };

        localStorage.setItem(
            'auth',
            JSON.stringify(authData)
        );
        
        return result; 

    } catch (error) {
        console.error(' Erro na requisição ou validação:', error);
        throw error; 
    } finally {
        setLoading(false);
        console.log('finalizado');
    }
};

     const getProviders = useCallback(() => {
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
    }, [url, setLoading, setPoviders, setRefetchProviders])


     const getProviderPerfil = useCallback(( id) => {
        setLoading(true)
        fetch(`${url}/accounts/prestadores/${id}/`, {
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*'
            },
        })
        .then((response) => response.json()) 
        .then((result) => {
            setProviderAccount(result)
            console.log(result)
        })
        .catch((error)=> {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
            
        })
    }, [url, setLoading, setProviderAccount])


    const findmaterial = useCallback((response) => {
         setLoading(true)
        fetch(`${url}/accounts/prestadores/?possui_material_proprio=${response}`, {
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
            
        })
    }, [url, setLoading, setPoviders])

    const find24h = useCallback((hora) => {
           setLoading(true)
        fetch(`${url}/accounts/prestadores/?disponibilidade=${hora}`, {
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
            
        })
    }, [url, setLoading, setPoviders])

    const findWeekend = useCallback((response) => {
           setLoading(true)
        fetch(`${url}/accounts/prestadores/?atende_fim_de_semana=${response}`, {
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
            
        })
    }, [url, setLoading, setPoviders])

   return { 
        register,
        loading,
        getProviders,
        providers, 
        refetchProviders,
        findmaterial,
        find24h,
        setRefetchProviders,
        findWeekend ,
        login,
        getProviderPerfil,
        providerAccount
        };
}