import Boton from "../Boton/Boton";
import "./Home.css";
import TituloAnimado from "./TitutloAnimado.jsx";
import { useState, useEffect } from "react";

const DEFAULT_PASSWORD = "rocio";

function Home() {
  /* =====================
     ESTADOS
  ===================== */
  const [isUnlocked, setIsUnlocked] = useState(false);

const [storedPassword, setStoredPassword] = useState(
  localStorage.getItem("password") || DEFAULT_PASSWORD
);

  const [passwordInput, setPasswordInput] = useState("");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [showChangePassword, setShowChangePassword] = useState(false);

  /* =====================
     EFECTO SESIÓN
  ===================== */
  useEffect(() => {
    const unlocked = sessionStorage.getItem("unlocked");
    if (unlocked === "true") {
      setIsUnlocked(true);
    }
  }, []);

  /* =====================
     FUNCIONES
  ===================== */
  const handleLogin = () => {
    if (passwordInput === storedPassword) {
      sessionStorage.setItem("unlocked", "true");
      setIsUnlocked(true);
      setPasswordInput("");
    } else {
      alert("Contraseña incorrecta");
    }
  };

  const handleChangePassword = () => {
    if (currentPassword !== storedPassword) {
      alert("La contraseña actual es incorrecta");
      return;
    }

    if (newPassword.trim() === "") {
      alert("La nueva contraseña no puede estar vacía");
      return;
    }

    localStorage.setItem("password", newPassword);
    setStoredPassword(newPassword);

    setCurrentPassword("");
    setNewPassword("");
    setShowChangePassword(false);

    alert("Contraseña cambiada correctamente");
  };

  /* =====================
     JSX
  ===================== */
  return (
    <div className="page">

      {/* CONTENIDO */}
      <div className={`presentacion ${!isUnlocked ? "locked" : ""}`}>
        <TituloAnimado />

        <h3>Fait avec tout l'amour du monde.</h3>

        <p>
          El proposito de todo esto es porque te queria dedicar unas palabras,
          un poco de como me senti y me siento desde que estoy con vos. Intente
          escribirla a mano, pero no quedo para nada estetico (hay pruebas 🙄). Asi que, pense
          que era una buena idea hacer una pagina a la que tengas acceso cuando
          se te antoje. Es demasiado, a diferencia de haberlo escrito... estoy mas contento con este resultado.
        </p>

        <p>
          Realmente espero que te guste, en lo que escribi fue hecho a corazon
          abierto y a la pagina le puse mucho tiempo y empeño frustrandome un
          poco demasiado jaja.
        </p>

        <h4>
          Chanchi, tranquila que sos la unica que puede ver esta pagina <br />
          (a menos claro que compartas el codigo QR)
        </h4>
        <br />

        <p>Para acceder a la carta que te escribi, tenes presionar el boton</p>
        <br />

        <Boton texto="💌" destino="/Carta" />
      </div>

      {/* OVERLAY */}
      {!isUnlocked && (
        <div className="overlay">
          <div className="overlay-card">

            {!showChangePassword ? (
              <>
                <h2>Acceso privado</h2>

                <input
                  type="password"
                  placeholder="Contraseña"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                />

                <button onClick={handleLogin}>Entrar</button>

                <p
                  className="change-password"
                  onClick={() => setShowChangePassword(true)}
                >
                  Cambiar contraseña
                </p>
              </>
            ) : (
              <>
                <h2>Cambiar contraseña</h2>

                <input
                  type="password"
                  placeholder="Contraseña actual"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />

                <input
                  type="password"
                  placeholder="Nueva contraseña"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />

                <button onClick={handleChangePassword}>
                  Guardar
                </button>
              </>
            )}

          </div>
        </div>
      )}

    </div>
  );
}

export default Home;