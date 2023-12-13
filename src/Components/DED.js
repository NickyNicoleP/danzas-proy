import React from 'react';

export const DED = () => {
  return (
    <div>
      <h1>Dedicación Especial</h1>

      <section>
        <div>
          <p>Esto esta dedicado a todos los amantes del folcklore</p>
        </div>
      </section>

      <section>
        <h2>Video de Bailes de Bolivia</h2>
        <div>
          <iframe
            title="Bailes de Bolivia"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/t-iVe7Xi2Yw"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </section>

      <section>
        <h2>Deja tu Mensaje</h2>
        <form>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Enviar Mensaje</button>
        </form>
      </section>
    </div>
  );
};

export default DED;
