import React from "react";
import "./sobre.css";

const Sobre = () => {
  return (
    <div className="sobre-container">
      <h1>Como fazemos</h1>
      <div className="sobre-content">
        <div className="sobre-secao">
          <div className="sobre-texto">
            <h2>Quem somos</h2>
            <p>
              Sou AlanRocha.Dev, desenvolvedor web especializado na criação e
              manutenção de sites.
            </p>
          </div>
          <div className="sobre-texto">
            <h2>O que fazemos</h2>
            <p>
              Conectamos empresas ao mundo digital com soluções web
              personalizadas
            </p>
          </div>
          <div className="sobre-texto">
            <h2>Como fazemos</h2>
            <p>
              Construímos sites e landing pages que comunicam o valor da sua
              marca de forma eficiente
            </p>
          </div>
        </div>
        <div className="sobre-imagem">
          <img
            src="https://cdn.prod.website-files.com/64ec1685a1410b0086180a3f/64f157b973fc956b92825501_m1.png"
            alt="Descrição da imagem"
          />
        </div>
      </div>
      <div className="missao-visao-valores">
        <h2>Atendimento é nossa prioridade</h2>
        <p> Nossa missão e valores</p>
        <div className="valores-content">
          <div className="valor">
            <img
              src="https://cdn.prod.website-files.com/64ec1685a1410b0086180a3f/64f1165d08a92882a3490997_flag%20(1).svg"
              alt="Ícone Missão"
            />
            <h3>Missão</h3>
            <p>
              Atender as suas necessidades com um serviço sob medida, oferecendo
              soluções tecnológicas, eficientes e inovadoras.
            </p>
          </div>
          <div className="valor">
            <img
              src="https://cdn.prod.website-files.com/64ec1685a1410b0086180a3f/64f11695c9fc2ea1cc939236_eye.svg"
              alt="Ícone Visão"
            />
            <h3>Visão</h3>
            <p>
              Ser reconhecida como a agência de referência, conhecida por sua
              excelência, inovação e compromisso em ajudar nossos clientes a
              alcançarem seus objetivos de negócios.
            </p>
          </div>
          <div className="valor">
            <img
              src="https://cdn.prod.website-files.com/64ec1685a1410b0086180a3f/64f1169d85a291838413d6d6_gem.svg"
              alt="Ícone Valores"
            />
            <h3>Valores</h3>
            <p>
              Comprometimento com altos padrões de qualidade em todos os
              aspectos do nosso trabalho, desde o atendimento ao cliente até a
              entrega de projetos finais.
            </p>
          </div>
        </div>
      </div>

      <div className="nossa-historia">
        <h2>Nossa História</h2>
        <p>
          O AlanRocha.Dev tem como objetivo oferecer serviços de criação de
          sites, manutenção e desenvolvimento de landing pages, além de sistemas
          de autenticação e e-commerce.
        </p>
        <p>
          Nosso propósito é atender às suas necessidades com um serviço sob
          medida, oferecendo soluções tecnológicas, eficientes e inovadoras para
          suas demandas. Com uma abordagem centrada no cliente, a AlanRocha.Dev
          busca proporcionar uma experiência única e personalizada, com um
          atendimento premium.
        </p>
        <p>
          Com uma visão voltada para o resultado, estamos prontos para ajudar
          você e a sua empresa a alcançarem seus objetivos de negócios.
        </p>
      </div>
    </div>
  );
};

export default Sobre;
