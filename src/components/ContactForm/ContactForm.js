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
        width: 350px;
      }
    }
  }
`

const ContactForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  return <ContactArea>
    <form>
      <div className='form_group'>
        <label htmlFor='name'>
        Your Name
        </label>
          <input
            name='name'
            id='name'
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
          />
      </div>
      <div className='form_group'>
        <label htmlFor='email'>
        Your Email
        </label>
          <input
            name='email'
            id='email'
            value={email}
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
            onChange={(e)=>{setMessage(e.target.value)}}
          />
      </div>
      <button>Submit</button>
    </form>
  </ContactArea>;
}


export default ContactForm;