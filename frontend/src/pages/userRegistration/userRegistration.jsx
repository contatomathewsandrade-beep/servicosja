import React, { useState } from 'react';
import { IMaskInput } from 'react-imask';
import styles from './Registration.module.css';

export default function UserRegistration() {
    // 1. Estados para Inputs Mascarados
    const [cpf, setCpf] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [cep, setCep] = useState('');
    const [telefone, setTelefone] = useState('');
    
    // 2. Estado para Select
    const [sexo, setSexo] = useState('');
    
    // 3. Estados para campos não-mascarados (Exemplo)
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    
    // Função de handler genérica para selects
    const handleSelectChange = (e) => {
        setSexo(e.target.value);
    };

    return (
        <div className={styles.userRegistrationContainer}>
            <div className={styles.registrationForm}>
                <h5>A um click da solução do seu problema.</h5>
                <h2>CADASTRE-SE!</h2>
                <form>
                    <input 
                        type="text" 
                        placeholder="Nome Completo" 
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required 
                    />
                    
                    <div className={styles.input50}>
                        {/* CPF: 000.000.000-00 */}
                        <IMaskInput
                            mask="000.000.000-00"
                            value={cpf}
                            onAccept={(value) => setCpf(value)}
                            placeholder='Cpf'
                            type="text" 
                            required 
                        /> 
                        
                        {/* DATA DE NASCIMENTO: 00/00/0000 */}
                        <IMaskInput
                            mask="00/00/0000"
                            value={dataNascimento}
                            onAccept={(value) => setDataNascimento(value)}
                            placeholder='Data de nascimento'
                            type="text"
                            required 
                        /> 
                    </div>
                    
                    {/* SELETOR DE SEXO (Substituindo o input de texto) */}
                    <select 
                        id="sexo" 
                        value={sexo} 
                        onChange={handleSelectChange}
                        required
                    >
                        <option value="" disabled hidden>Sexo</option>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                        <option value="nao-informado">Prefiro não informar</option>
                    </select>
                    
                    <input 
                        type="text" 
                        placeholder='Endereço' 
                        value={endereco}
                        onChange={(e) => setEndereco(e.target.value)}
                    /> 
                    
                    {/* CEP: 00000-000 */}
                    <IMaskInput
                        mask="00000-000"
                        value={cep}
                        onAccept={(value) => setCep(value)}
                        placeholder='Cep'
                        type="text" 
                        required 
                    /> 
                    
                    {/* TELEFONE: (00) 00000-0000 (Máscara Dinâmica) */}
                    <IMaskInput
                        mask={['(00) 0000-0000', '(00) 00000-0000']}
                        value={telefone}
                        onAccept={(value) => setTelefone(value)}
                        placeholder='Telefone'
                        type="tel" 
                        required 
                    /> 
                    
                    <input type="email" placeholder="Email" required />
                    <input type="email" placeholder="Confirme seu Email" required />
                    <input type="password" placeholder="Senha" required />
                    <input type="password" placeholder="Confirme a Senha" required />
                    <button type="submit">Cadastrar</button>
                </form>
            </div>

            <div className={styles.registrationImage}>
                <img src="/img/registration/registrationUser.png" alt="Imagem de cadastro de usuário" />
            </div>
        </div>
    );
}