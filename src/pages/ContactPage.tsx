import React, { useRef, useState } from 'react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import '../styles/contact.css';

const ContactPage = () => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (name.length < 3 || description.length < 3) {
      Swal.fire({
        title: 'Error!',
        text: 'Name and Description must be at least 3 characters long.',
        icon: 'error',
        background: '#121112',
        color: 'white',
        confirmButtonText: 'OK',
        confirmButtonColor: '#161516',
      });
      return;
    }
    if (form.current !== null) {
      emailjs.sendForm(
        'service_0ftez0j',
        'template_8bczgmk',
        form.current,
        'QI4Eg8BgnVtwv5SgR'
      ).then(
        (result) => {
          Swal.fire({
            title: 'Success!',
            text: 'Your message has been sent.',
            icon: 'success',
            background: '#121112',
            color: 'white',
            confirmButtonText: 'OK',
            confirmButtonColor: '#161516',
          });
        },
        (error) => {
          Swal.fire({
            title: 'Error!',
            text: 'There was an error sending your message.',
            icon: 'error',
            background: '#121112',
            color: 'white',
            confirmButtonText: 'OK',
            confirmButtonColor: '#161516',
          });
        }
      );
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <form className="contact-form" ref={form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="user_name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          name="message"
          className='textAreaHeight'
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      <div className="contact-info">
        <p>Samim Aslan</p>
        <p>mentasta9898@gmail.com</p>
        <p>+41 78 254 26 46</p>
      </div>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/samim-aslan-870806248/" target="_blank" rel="noopener noreferrer">
          <button>Linkedin</button>
        </a>
        <a href="https://www.instagram.com/saxapace/" target="_blank" rel="noopener noreferrer">
          <button>Instagram</button>
        </a>
        <a href="i dont have any x" target="_blank" rel="noopener noreferrer">
          <button>X</button>
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
