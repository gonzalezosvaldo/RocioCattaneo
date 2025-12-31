import Boton from '../Boton/Boton';
import Carrusel from '../Carrusel/Carrusel';
import './Fotos.css';

function Fotos() {
  const slides = [
    { src: '/img/Foto.jpeg', text: 'San Carlos de Bariloche, Centro Civico' },
    { src: '/img/Foto1.jpeg', text: 'Subiendo al Campanario, parte del Circuito Chico' },
    { src: '/img/Foto2.jpeg', text: 'Escabiando como siempre' },
    { src: '/img/Foto3.jpeg', text: 'En el Cerro Catedral cagados de frio, a punto de tomar una chocolatada bien caliente' },
    { src: '/img/Foto4.jpeg', text: 'Adri y Rochi peronchos' },
    { src: '/img/Foto5.jpeg', text: 'No recuerdo contexto, Je' },
    { src: '/img/Foto6.jpeg', text: 'Primera foto en la nieve, durante la primera parada en el Cerro Catedral' },
    { src: '/img/Foto7.jpeg', text: 'Pijamada, comiendo algo rico y seguro viendo friends (COMO SIEMPRE)' },
    { src: '/img/Foto8.jpeg', text: 'Vos admirando mi belleza y dandote cuenta de que estas robando' },
    { src: '/img/Foto9.jpeg', text: 'En el puerto de Los Bosques de Arrayanes' },
    { src: '/img/Foto10.jpeg', text: 'Cinee' },
    { src: '/img/Foto11.jpeg', text: 'Nosotros despues de una pelea' },
    { src: '/img/Foto12.jpeg', text: 'Hampton By Hilton Bariloche. Yendo a cenar afuera' },
    { src: '/img/Foto13.jpeg', text: 'Foto de toda mi galeria en la que mejor saliste...' },
    { src: '/img/Foto14.jpeg', text: 'En el mirador del Campanario' },
    { src: '/img/Foto15.jpeg', text: '💞Tu ultimo dia en el Doubletree by Hilton💞' },
    

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