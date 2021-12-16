import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./CadastroUsuario.css";

function CadastroUsuario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");

  const [isValid, setIsValid] = useState(false);

  const nomeChangeHandle = event => {
    if (event.target.value.trim().legth > 0) {
      setIsValid(true);
    }
    console.log(event.target.value);
    setNome(event.target.value);
  };

  const emailChangeHandle = event => {
    if (event.target.value.trim().legth > 0) {
      setIsValid(true);
    }
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const userNameChangeHandle = event => {
    if (event.target.value.trim().legth > 0) {
      setIsValid(true);
    }
    console.log(event.target.value);
    setUsername(event.target.value);
  };

  const senhaChangeHandle = event => {
    if (event.target.value.trim().legth > 0) {
      setIsValid(true);
    }
    console.log(event.target.value);
    setSenha(event.target.value);
  };

  const handleOnclick = event => {
    event.preventDefault();

    //validação dos dados
    if (nome.trim().legth <= 0) {
      setIsValid(false);
      return;
    }

    if (email.trim().legth <= 0) {
      setIsValid(false);
      return;
    }

    if (username.trim().legth <= 0) {
      setIsValid(false);
      return;
    }

    if (senha.trim().legth <= 0) {
      setIsValid(false);
      return;
    }

    //Submissão dos dados
    doPost({ id: null, nome, email, username, senha });

    // limpando o formulário
    setNome("");
    setEmail("");
    setUsername("");
    setSenha("");
  };

  const doPost = async usuario => {
    console.log(usuario);
    await fetch("http://localhost:5000/camerausuarios", {
      method: "POST", // salvar recurso
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario)
    });
  };

  return (
    <div className="cadastro-usuario">
      <div className="cadastro-usuario-wrapper">
        <h2>Registre a sua conta</h2>

        <Form onSubmit={handleOnclick} validated={isValid}>
          <Form.Group>
            <Form.Label>Nome</Form.Label>
            <Form.Control
              required
              onChange={nomeChangeHandle}
              type="text"
              value={nome}
              placeholder="Digite o seu Nome"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              onChange={emailChangeHandle}
              type="email"
              value={email}
              placeholder="Digite o seu Email"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Nome de usuario</Form.Label>
            <Form.Control
              required
              onChange={userNameChangeHandle}
              type="text"
              value={username}
              placeholder="Digite o seu nome de usuário"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Senha </Form.Label>
            <Form.Control
              required
              onChange={senhaChangeHandle}
              type="password"
              value={senha}
              placeholder="Digite a sua senha"
            />
          </Form.Group>

          <Button className="margin-top" variant="primary" type="submit">
            Cadastrar
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default CadastroUsuario;
