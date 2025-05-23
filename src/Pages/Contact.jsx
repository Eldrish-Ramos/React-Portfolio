import { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function handleBlur(e) {
    const { name, value } = e.target;
    if (!value) setErrors((err) => ({ ...err, [name]: 'Required' }));
    else if (name === 'email' && !validateEmail(value))
      setErrors((err) => ({ ...err, email: 'Invalid email' }));
    else setErrors((err) => ({ ...err, [name]: null }));
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // No backend, so just clear form
    setForm({ name: '', email: '', message: '' });
    alert('Message not sent');
  }

  return (
    <section className='app-container'>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} onBlur={handleBlur} />
        {errors.name && <span>{errors.name}</span>}
        <br />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} onBlur={handleBlur} />
        {errors.email && <span>{errors.email}</span>}
        <br />
        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} onBlur={handleBlur} />
        {errors.message && <span>{errors.message}</span>}
        <br />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;