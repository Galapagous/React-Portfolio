import React, { useState } from 'react';
import styled from 'styled-components';

const ContactArea = styled.div`
  .form_group{
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    label{
      font-size: 1.3rem;
    }
    input, textarea{
      font-size: 1.5rem;
      border-radius: 0.3rem;
      background-color: white;
      color: black;
      padding: 0.2rem;
      outline: none;
    }
    textarea{
      font-size: 1rem;
      min-height: 200px;
    }
  }
  button{
    padding: .5rem;
    background-color: white;
    color: black;
    border-radius: .3rem;
    &:hover{
      color: red;
      cursor: pointer;
    }
  }
  @media only screen and (max-width: 768px) {
    .form_group{
      input, textarea{
        width: 200px;
        font-size: 0.7rem;
      }
      label{
        font-size: 1rem;
      }
    }
    button{
      font-size: 1rem;
    }
  }
`

const ContactForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log({name: name, email: email, message: message})
    setEmail("")
    setName("")
    setMessage("")
  }

  return <ContactArea>
    <form onSubmit={handleSubmit}>
      <div className='form_group'>
        <label htmlFor='name'>
        Your Name
        </label>
          <input
            name='name'
            type='text'
            id='name'
            value={name}
            required
            onChange={(e)=>{setName(e.target.value)}}
          />
      </div>
      <div className='form_group'>
        <label htmlFor='email'>
        Your Email
        </label>
          <input
            name='email'
            type='email'
            id='email'
            value={email}
            required
            onChange={(e)=>{setEmail(e.target.value)}}
          />
      </div>
      <div className='form_group'>
        <label htmlFor='message'>
        Your Message
        </label>
          <textarea
            name='message'
            id='message'
            value={message}
            required
            onChange={(e)=>{setMessage(e.target.value)}}
          />
      </div>
      <button>Submit</button>
    </form>
  </ContactArea>;
}


export default ContactForm;