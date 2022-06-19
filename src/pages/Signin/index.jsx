import React, { useState } from 'react'
import Button from '../../components/Button';
import Input from '../../components/Input';
import * as C from './style';
import {Link, useNavigate} from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import logo from '../logoNsBrazil.png';

const Signin = ({Text }) => {
  const {signin} = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {

   if(!email | !senha){

    setError("Preencha todos os campos");
    return;
   }
   const res = signin(email, senha);

   if(res){
    setError(res);
    return;
   }

   navigate("/home");

  }

  return (
    <C.Container>
    
      
      <C.Content>
      <C.Label>Login </C.Label>

        
        <br />
       <Input 
       type="email"
       placeholder="digite seu email"
       value={email}
       onChange={(e) => [setEmail(e.target.value), setError("")]}
       />
       <Input 
       type="password"
       placeholder="Digite sua senha"
       value={senha}
       onChange={(e)=> [setSenha(e.target.value), setError("")]}
       />
       <C.LabelError>{error}</C.LabelError>
      <Button Text="Acessar" onClick={handleLogin} />
      
   <C.LabelSignup>
    Não tem uma conta?
    <C.Strong>
    <Link to="/signup">&nbsp; Registre-se </Link>
    </C.Strong>

   </C.LabelSignup>
      </C.Content>
    </C.Container>
   
  )
}

export default Signin;
