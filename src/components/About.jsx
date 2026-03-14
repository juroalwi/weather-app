import { about } from "./About.module.css";

export const About = () => {
  return (
    <div className={about}>
      <p>
        Hola. Mi nombre es Julián Alvarez Windey, y esta es mi Weather App. Se
        trata de una aplicación que, como bien su nombre lo indica, te permite
        acceder a información meteorológica de distintos lugares del mundo.{" "}
        <br />
        Para conocer cómo está el tiempo en alguna ciudad, simplemente busca su
        nombre en el navegador que tenés arriba a la derecha. No hace falta que
        la primer letra que escribas sea mayúscula. ¡Pero ojo!, asegurate de que
        el nombre esté bien escrito.
        <br />
        En caso de que quieras acceder a la información completa la ciudad que
        buscaste, hace click en el nombre de la misma que figura sobre la
        tarjeta. <br />
        Eso sería todo. ¡Espero que te resulte útil la aplicación! <br />
      </p>
    </div>
  );
};
