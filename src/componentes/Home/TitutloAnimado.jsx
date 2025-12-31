import { useEffect, useState } from 'react';

function TituloAnimado() {
  const textoCompleto = 'Bienvenida Rocio Cattaneo';

  const [textoVisible, setTextoVisible] = useState('');
  const [indice, setIndice] = useState(0);
  const [pausado, setPausado] = useState(false);

  useEffect(() => {
    // si está en pausa, no escribimos
    if (pausado) return;

    const intervalo = setInterval(() => {
      setTextoVisible(textoCompleto.slice(0, indice));
      setIndice((prev) => prev + 1);

      // cuando termina de escribir
      if (indice > textoCompleto.length) {
        clearInterval(intervalo);
        setPausado(true);

        // pausa de 2 segundos con el texto completo
        setTimeout(() => {
          setIndice(0);
          setTextoVisible('');
          setPausado(false);
        }, 2000);
      }
    }, 120); // velocidad de escritura

    return () => clearInterval(intervalo);
  }, [indice, pausado, textoCompleto]);

  return (
  <div className="titulo-wrapper">
    <h1 className="titulo-principal typing">
      {textoVisible}
    </h1>
  </div>
  );
}

export default TituloAnimado;