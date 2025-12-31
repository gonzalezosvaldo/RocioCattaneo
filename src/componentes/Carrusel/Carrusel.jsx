import { useState, useRef } from 'react';
import './Carrusel.css';

function Carrusel({ slides }) {
  const [index, setIndex] = useState(0);
  const startX = useRef(0);

  const handleStart = (e) => {
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const handleEnd = (e) => {
    const endX = e.changedTouches
      ? e.changedTouches[0].clientX
      : e.clientX;

    const diff = startX.current - endX;

    if (diff > 50) {
      setIndex((prev) => (prev + 1) % slides.length);
    } else if (diff < -50) {
      setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  return (
    <div
      className="carousel"
      onMouseDown={handleStart}
      onMouseUp={handleEnd}
      onTouchStart={handleStart}
      onTouchEnd={handleEnd}
    >
      <img
        src={slides[index].src}
        alt={slides[index].text}
        className="carousel-img"
        draggable={false}
      />

      <div className="carousel-caption">
        {slides[index].text}
      </div>
    </div>
  );
}

export default Carrusel;