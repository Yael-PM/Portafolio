import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensaje enviado (simulado)');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Contacto</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Tu correo"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Tu mensaje"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default ContactForm;
