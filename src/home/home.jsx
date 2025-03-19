import React from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import "../home/home.css";

const Home = () => {
  return (
    <div>
      <Navbar />

      <main id="home" className="main">
        <div className="hero">
          <h1>Ajuda empresas a se conectarem com o digital</h1>
          <p>Desenvolvimento de soluções para o seu negócio</p>

          <div className="hero-buttons">
            <button className="btn">Nossos Serviços</button>
            <button className="btn btn--primary">Entrar em Contato</button>
          </div>
        </div>

        <section className="services">
          <h2>Áreas de Atuação</h2>
          <div className="service-list">
            <div className="service-item">
              <img
                src="https://cdn-icons-png.freepik.com/256/14183/14183471.png?semt=ais_hybrid"
                alt="UX/UI"
              />
              <div>UX/UI</div>
            </div>
            <div className="service-item">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5234/5234318.png"
                alt="Web Design"
              />
              <div>Web Design</div>
            </div>
            <div className="service-item">
              <img
                src="https://img.icons8.com/external-flaticons-flat-flat-icons/512w/external-front-end-computer-programming-flaticons-flat-flat-icons.png"
                alt="Frontend"
              />
              <div>Frontend</div>
            </div>
            <div className="service-item">
              <img
                src="https://img.freepik.com/premium-vector/backend-icon_933463-16212.jpg"
                alt="Backend"
              />
              <div>Backend</div>
            </div>
            <div className="service-item">
              <img
                src="https://img.freepik.com/vetores-gratis/bases-de-dados-com-estilo-cloud-glyph_78370-6680.jpg"
                alt="Banco de dados"
              />
              <div>Banco de dados</div>
            </div>
          </div>
        </section>

        <section className="our-services">
          <h2>Nossos Serviços</h2>
          <div className="service-grid">
            <div className="service-content">
              <img
                src="https://gwdcriacoes.com.br/wp-content/uploads/2024/11/criacao-de-sites.png"
                alt="Criação de Sites"
                className="service-image"
              />
              <div className="service-text">
                <h3>Criação de Sites</h3>
                <p>
                  Desenvolvemos sites modernos e responsivos para atender às
                  suas necessidades.
                </p>
                <ul>
                  <li>Sites Institucionais</li>
                  <li>Blogs e Portfólios</li>
                  <li>Manutenção e Suporte</li>
                </ul>
              </div>
            </div>

            <div className="service-content">
              <div className="service-text">
                <h3>Landpages</h3>
                <p>
                  Criamos landpages otimizadas para conversão e engajamento.
                </p>
                <ul>
                  <li>Design Atraente</li>
                  <li>SEO e Performance</li>
                  <li>Integração com Marketing</li>
                </ul>
              </div>
              <img
                src="https://institutopatriciamedrado.org.br/wp-content/uploads/2019/03/Novo-Site-1.jpg"
                alt="Landpages"
                className="service-image"
              />
            </div>

            <div className="service-content">
              <img
                src="https://conceito.de/wp-content/uploads/2024/02/subscribe-3534409_1280.jpg"
                alt="Sistemas de Login e Autenticação"
                className="service-image"
              />
              <div className="service-text">
                <h3>Sistemas de Login e Autenticação</h3>
                <p>
                  Implementamos sistemas seguros de login e autenticação para
                  sua aplicação.
                </p>
                <ul>
                  <li>Autenticação OAuth</li>
                  <li>Recuperação de Senha</li>
                  <li>Controle de Acesso</li>
                </ul>
              </div>
            </div>

            <div className="service-content">
              <div className="service-text">
                <h3>E-commerce</h3>
                <p>
                  Criamos lojas virtuais completas para expandir seu negócio
                  online.
                </p>
                <ul>
                  <li>Catálogo de Produtos</li>
                  <li>Integração com Pagamentos</li>
                  <li>Gestão de Pedidos</li>
                </ul>
              </div>
              <img
                src="https://eucontador.com.br/wp-content/uploads/2019/12/E-Commerce-1.png"
                alt="E-commerce"
                className="service-image"
              />
            </div>
          </div>
        </section>

        <section className="cta">
          <h2>Digitalize seu negócio.</h2>
          <p>Não perca tempo e entre já em contato conosco!</p>
          <button className="btn btn--primary">ENTRE EM CONTATO</button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
