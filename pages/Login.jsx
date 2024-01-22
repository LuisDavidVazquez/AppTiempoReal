import React from 'react';

export default function Login() {

    

  return (
    <div>
      <div className="encabezado">
        <div className="contenido-encabezado">
          <br />
          <br />
          <h2 className="h2-2">Inicio de sesión</h2> <br />
          <span>BIENVENIDO, Ingresa tus credenciales</span>
        </div>
      </div>
      <br />
      <br />
      <form className="formulario" action="">
        <div className="campos">
          <label htmlFor="usuario">
            <div className="contenedor-input">
              <input id="usuario" name="email" type="text" placeholder="Correo" />
            </div>
          </label>
          <br />
          <br />
          <label htmlFor="contraseña">
            <div className="contenedor-input">
              <input
                id="contraseña"
                name="contraseña"
                type="password"
                placeholder="Contraseña"
              />
            </div>
          </label>
          <br /> <br />
          <label className="recordar" htmlFor="recordar">
            <button
              type="button"
              className="a-a"
            >
              Olvidé mi contraseña
            </button>
          </label>
          <br />
          <br />
          <button type="submit" className="button1">
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
}
