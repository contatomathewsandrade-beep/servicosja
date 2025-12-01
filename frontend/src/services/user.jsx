// services/user.js (UserServices)

import { useState } from "react";

export default function UserServices() {
    const [loading, setLoading] = useState(false);
    const url = '/api';

    const register = (formData) => {
        setLoading(true);
        
        // Retorna a Promise do fetch. Não precisamos de um 'new Promise' wrapper.
        // O componente UserRegistration lidará com o .then e .catch.
        return fetch(`${url}/accounts/registro/cliente/`, { // 👈 Retorna o fetch diretamente
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Geralmente, 'Access-Control-Allow-Origin' é um header de resposta
                // do servidor, não do cliente. Removi-o, mas se for necessário
                // por algum motivo no seu ambiente, você pode mantê-lo.
            },
            body: JSON.stringify(formData)
        })
        .then(async (response) => {
            const result = await response.json(); 

            if (!response.ok) {
                // Lança um erro para cair no .catch seguinte
                throw result; 
            }
            
            // LÓGICA CORRIGIDA: Salva no localStorage APENAS se a resposta for OK (HTTP 2xx)
            if (result && result.access && result.nome_completo) {
                localStorage.setItem(
                    'auth',
                    JSON.stringify({ token: result.access, user: result.nome_completo })
                );
                console.log('Dados salvos no localStorage:', result);
            }
            
            // Retorna o resultado de sucesso
            return result; 
        })
        .catch((error) => {
            // Este catch lida com erros de rede ou o erro 'result' lançado acima
            console.error('Erro na requisição ou validação:', error);
            // Re-lança o erro para o componente poder capturá-lo no seu .catch
            throw error; 
        })
        .finally(() => {
            setLoading(false);
            console.log('finalizado');
        });
    };
    
    return{register , loading}
}