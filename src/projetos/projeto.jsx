import React, { useEffect } from "react";
import "../projetos/projeto.css";

const Portfolio = () => {
  const portfolioData = [
    {
      id: 1,
      title: "Projeto 1",
      image: require("../projetos/assets/nettstudios.png"),
      link: "https://www.nettstudios.com.br",
    },
    {
      id: 2,
      title: "Projeto 2",
      image: require("../projetos/assets/coffee-shop.png"),
      link: "https://alanrochagomes.github.io/coffee-shop/",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const backToTopButton = document.getElementById("back-to-top");
      if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        {/* <span className="subtitle" data-aos="fade-up">
          CONHEÇA ALGUNS SITES QUE CRIAMOS
        </span> */}
        <h1 className="title" data-aos="fade-up">
          Portfólio
        </h1>
      </div>

      <div className="portfolio-grid">
        {portfolioData.map((item) => (
          <div
            key={item.id}
            className="portfolio-item"
            data-aos="fade-up"
            data-aos-delay={item.id * 100}
          >
            <div className="laptop">
              <div className="laptop-screen">
                <img
                  src={item.image}
                  alt={item.title}
                  className="site-screenshot"
                />
              </div>
              <div className="laptop-base">
                <div className="laptop-trackpad"></div>
              </div>
            </div>
            <a
              href={item.link}
              className="site-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver site →
            </a>
          </div>
        ))}
      </div>

      <button
        id="back-to-top"
        onClick={scrollToTop}
        style={{
          display: "none",
          position: "fixed",
          bottom: "120px",
          right: "20px",
          zIndex: "1000",
          padding: "10px 15px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        ↑ Voltar ao topo
      </button>
    </div>
  );
};

export default Portfolio;
