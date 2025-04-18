import '../styles/hero.css'
import HeroImage from "../assets/imagenes/Hero.webp"; // imagen de fondo

const Hero = ({ showMessage }) => {
  const handleViewWorkClick = (e) => {
    e.preventDefault();
    showMessage('Explorando nuestros proyectos...', 'success');
    
    setTimeout(() => {
      document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
    }, 800);
  };

  return (
    <section className="hero">
      {/* Banner de fondo con la imagen importada */}
      <div
        className="hero-banner"
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        
        <div className="hero-overlay"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <h1>Cuidamos, sanamos y ofrecemos amor: sé parte de la transformación</h1>
          <p>
            Nuestra ONG se dedica a rescatar caballos maltratados, brindándoles un espacio seguro
            donde pueden sanar tanto física como emocionalmente.
          </p>
          <a href="#projects" className="btn" onClick={handleViewWorkClick}>
            Conoce nuestro trabajo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;