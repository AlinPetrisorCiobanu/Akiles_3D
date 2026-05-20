import { useState } from "react";
import android16 from "../../assets/img/android16.png";

function HeroCharacter() {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x =
      (e.clientX - rect.left) / rect.width - 0.5;

    const y =
      (e.clientY - rect.top) / rect.height - 0.5;

    setStyle({
      transform: `
        perspective(1200px)
        rotateY(${x * 18}deg)
        rotateX(${-y * 12}deg)
        translateX(${x * 20}px)
        translateY(${y * 10}px)
      `,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: `
        perspective(1200px)
        rotateY(0deg)
        rotateX(0deg)
        translateX(0px)
        translateY(0px)
      `,
    });
  };

  return (
    <div
      className="character-wrapper"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={android16}
        alt="Figura 3D Android 16"
        className="hero-character"
        style={style}
      />
    </div>
  );
}

export default HeroCharacter;