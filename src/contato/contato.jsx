import React from "react";
import "./contato.css";

const Contato = () => {
  return (
    <div className="contato-container">
      <h1>Contato</h1>
      <div className="contato-info">
        <div className="contato-item">
          <img
            src="https://cdn.prod.website-files.com/64ec1685a1410b0086180a3f/64f184c0aff4ad96e1a805cc_envelope-plus.svg"
            alt="Email"
          />
          <a href="mailto:contato@alanrocha.dev.br">contato@alanrocha.dev.br</a>
        </div>
        <div className="contato-item">
          <img
            src="https://cdn.prod.website-files.com/64ec1685a1410b0086180a3f/64f1865fea83ec94b1ab0b31_whatsapp%20(5).svg"
            alt="WhatsApp"
          />
          <a href="https://wa.me/+5521998579960">(21) 9985-79960</a>
        </div>
        <div className="contato-item">
          <img
            src="https://cdn.prod.website-files.com/64ec1685a1410b0086180a3f/64f18666a1681bab1fe1afae_phone-plus.svg"
            alt="Telefone"
          />
          <a href="tel:+5521998579960">(21) 9985-79960</a>
        </div>
      </div>
      <form className="contato-form">
        <label>
          Nome Completo
          <input type="text" required />
        </label>
        <label>
          E-mail
          <input type="email" required />
        </label>
        <label>
          Cargo / Empresa
          <input type="text" />
        </label>
        <label>
          Orçamento
          <select>
            <option>Selecione um valor</option>
            <option>Preço sob consulta</option>
            <option>Até R$ 1.000</option>
            <option>R$ 1.000 - R$ 5.000</option>
            <option>Acima de R$ 5.000</option>
          </select>
        </label>
        <label>
          Descrição do projeto
          <textarea required></textarea>
        </label>
        <button type="submit">Enviar mensagem</button>
      </form>
    </div>
  );
};

export default Contato;
