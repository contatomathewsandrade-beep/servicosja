import { useState } from 'react';
import { IMaskInput } from 'react-imask';
import styles from './Registration.module.css';
import UserServices from '../../services/user';
import Loading from '../loading/loading';

// Função auxiliar para remover caracteres não numéricos
const cleanNonNumeric = (value) => {
    return value ? value.replace(/[^0-9]/g, '') : '';
};

export default function UserRegistration() {
    const [formDataUser, setFormDataUser] = useState({});
    const {register , loading} = UserServices()
    
    const caseSensitiveFields = ['password', 'password2', 'genero'];

    const handleChangeSetDataUser = (e) => {
        const { name, value } = e.target;
        
        // Mantém a lógica de conversão para minúsculas para campos não mascarados
        const newValue = caseSensitiveFields.includes(name) 
            ? value 
            : value.toLowerCase(); 
        
        setFormDataUser(prevData => ({
            ...prevData,
            [name]: newValue
        }));
    };
    
    // Função ajustada para lidar com IMaskInput
    // O IMaskInput tem uma propriedade chamada `unmaskedvalue` no evento que onAccept envia.
    const handleMaskedInputChange = (value, masked, e) => {
        
        const name = e.target.name; 
        
        let valueToSave;
        
        if (name === 'dt_nascimento') {
            // Salva o valor com máscara (DD/MM/AAAA)
            valueToSave = value; 
        } else {
            // Para CPF, CEP e Telefone, salva apenas os dígitos (unmaskedValue)
            valueToSave = cleanNonNumeric(value);
        }
        
        setFormDataUser(prevData => ({
            ...prevData,
            [name]: valueToSave
        }));
    };
    
   

    if(loading){
        return(
            <Loading/>
        )
    }

    return (
        <div className={styles.userRegistrationContainer}>
            <div className={styles.registrationForm}>
                <h5>A um click da solução do seu problema.</h5>
                <h2>CADASTRE-SE!</h2>
                <form>
                    
                    <input 
                        type="text" 
                        placeholder="Nome Completo" 
                        name='nome_completo' 
                        onChange={handleChangeSetDataUser} 
                        value={formDataUser.nome_completo || ''} 
                        required 
                    />
                    
                    <div className={styles.input50}>
                        
                        <IMaskInput
                            mask="000.000.000-00"
                            name='cpf' 
                            // IMaskInput usa 'onAccept' para capturar o valor
                            onAccept={(value, mask) => handleMaskedInputChange(value, mask, { target: { name: 'cpf' } })}
                            value={formDataUser.cpf || ''}
                            placeholder='Cpf'
                            type="text" 
                            required 
                        /> 
                        
                        
                        <IMaskInput
                            mask="00/00/0000"
                            name='dt_nascimento'
                            // IMaskInput usa 'onAccept' para capturar o valor
                            onAccept={(value, mask) => handleMaskedInputChange(value, mask, { target: { name: 'dt_nascimento' } })} 
                            value={formDataUser.dt_nascimento || ''}
                            placeholder='Data de nascimento'
                            type="text"
                            required 
                        /> 
                    </div>
                    
                    
                    <select 
                        id="sexo" 
                        name='genero' 
                        value={formDataUser.genero || ''} 
                        onChange={handleChangeSetDataUser} 
                        required
                    >
                        <option value="" disabled hidden>Sexo</option>
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                        <option value="nao-informado">Prefiro não informar</option>
                    </select>

                    <div className={styles.input50}>
                    
                        <input 
                            type="text" 
                            placeholder='Rua' 
                            name='rua' 
                            value={formDataUser.rua || ''}
                            onChange={handleChangeSetDataUser} 
                            required
                        /> 

                        <input 
                            type="number" 
                            placeholder='Numero' 
                            name='numero_casa' 
                            value={formDataUser.numero_casa || ''}
                            onChange={handleChangeSetDataUser} 
                            required
                        /> 
                    
                    </div>
                    <IMaskInput
                        mask="00000-000"
                        name='cep' 
                        // IMaskInput usa 'onAccept' para capturar o valor
                        onAccept={(value, mask) => handleMaskedInputChange(value, mask, { target: { name: 'cep' } })}
                        value={formDataUser.cep || ''} 
                        placeholder='Cep'
                        type="text" 
                        required 
                    /> 
                    
                    
                    <IMaskInput
                        mask={['(00) 0000-0000', '(00) 00000-0000']}
                        name='telefone_contato' 
                        // IMaskInput usa 'onAccept' para capturar o valor
                        onAccept={(value, mask) => handleMaskedInputChange(value, mask, { target: { name: 'telefone_contato' } })}
                        value={formDataUser.telefone_contato || ''} 
                        placeholder='telefone_contato'
                        type="tel" 
                        required 
                    /> 
                    
                    
                    <input type="email" placeholder="Email" name='email' onChange={handleChangeSetDataUser} value={formDataUser.email || ''} required />
                    <input type="password" placeholder="Senha" name='password' onChange={handleChangeSetDataUser} value={formDataUser.password || ''} required />
                    <input type="password" placeholder="Confirme a Senha" name='password2' onChange={handleChangeSetDataUser} value={formDataUser.password2 || ''} required />
                    
                    <button onClick={(e) => { e.preventDefault(); register(formDataUser); }} type="submit">Cadastrar</button>
                </form>
            </div>

            <div className={styles.registrationImage}>
                <img src="/img/registration/registrationUser.png" alt="Imagem de cadastro de usuário" />
            </div>
        </div>
    );
}