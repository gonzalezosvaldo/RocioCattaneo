import Boton from '../Boton/Boton';
import Carrusel from '../Carrusel/Carrusel';
import './Fotos.css';

function Fotos() {
  const slides = [
    { src: `${import.meta.env.BASE_URL}img/Foto.jpeg`, text: 'San Carlos de Bariloche, Centro Civico' },
    { src: `${import.meta.env.BASE_URL}img/Foto1.jpeg`, text: 'Subiendo al Campanario, parte del Circuito Chico' },
    { src: `${import.meta.env.BASE_URL}img/Foto2.jpeg`, text: 'Escabiando como siempre' },
    { src: `${import.meta.env.BASE_URL}img/Foto3.jpeg`, text: 'En el Cerro Catedral cagados de frio, a punto de tomar una chocolatada bien caliente' },
    { src: `${import.meta.env.BASE_URL}img/Foto4.jpeg`, text: 'Adri y Rochi peronchos' },
    { src: `${import.meta.env.BASE_URL}img/Foto5.jpeg`, text: 'No recuerdo contexto, Je' },
    { src: `${import.meta.env.BASE_URL}img/Foto6.jpeg`, text: 'Primera foto en la nieve, durante la primera parada en el Cerro Catedral' },
    { src: `${import.meta.env.BASE_URL}img/Foto7.jpeg`, text: 'Pijamada, comiendo algo rico y seguro viendo friends (COMO SIEMPRE)' },
    { src: `${import.meta.env.BASE_URL}img/Foto8.jpeg`, text: 'Vos admirando mi belleza y dandote cuenta de que estas robando' },
    { src: `${import.meta.env.BASE_URL}img/Foto9.jpeg`, text: 'En el puerto de Los Bosques de Arrayanes' },
    { src: `${import.meta.env.BASE_URL}img/Foto10.jpeg`, text: 'Cinee' },
    { src: `${import.meta.env.BASE_URL}img/Foto11.jpeg`, text: 'Nosotros despues de una pelea' },
    { src: `${import.meta.env.BASE_URL}img/Foto12.jpeg`, text: 'Hampton By Hilton Bariloche. Yendo a cenar afuera' },
    { src: `${import.meta.env.BASE_URL}img/Foto13.jpeg`, text: 'Foto de toda mi galeria en la que mejor saliste...' },
    { src: `${import.meta.env.BASE_URL}img/Foto14.jpeg`, text: 'En el mirador del Campanario' },
    { src: `${import.meta.env.BASE_URL}img/Foto15.jpeg`, text: '💞Tu ultimo dia en el Doubletree by Hilton💞' },
    

  ];

  return (
    <div>
      <h1 className='titulo-seccion'>UN POCO DE NOSOTROS</h1>
      <p>En este apartado puse unas fotitos nuestras, no tenemos muchas pero algo hay...</p>

      <Carrusel slides={slides} />

      <Boton texto="🏠" destino="/" />
      <Boton texto="💌" destino="/Carta" />
    </div>
  );
}

export default Fotos;