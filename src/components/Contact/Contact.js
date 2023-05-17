import React from "react"
import styled from "styled-components"
import ContactInfo from "../ContactInfo/ContactInfo"
import { MdEmail, MdLocalPhone } from "react-icons/md"
import ContactForm from "../ContactForm/ContactForm"

const ContactCOntainer = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p{
    font-size: 1.5rem;
  }
  h3{
    font-size: 3rem;
  }
  .contact__wrapper{
    margin-top: 3rem;
    align-items: flex-start;
    gap: 2rem;
    justify-content: space-between;
    display: flex;
    .left_wrapper{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 2rem;
    .contact__wrapper{
      width: 100%;
      flex-direction: column;
    }
  }
`
function Contact() {
  return (
    <ContactCOntainer>
      <p>Get in touch</p>
      <h3>Conatct</h3>
      <div className="contact__wrapper">
        <div className="left_wrapper">
          <ContactInfo icon={<MdLocalPhone/>} text="+2348123280394"/>
          <ContactInfo icon={<MdEmail/>} text="galapagous09@gmail.com"/>
          <ContactInfo text="Ota, Ogun Nigeria"/>
        </div>
        <div className="right_wrapper">
          <ContactForm/>
        </div>
      </div>
    </ContactCOntainer>
  )
}

export default Contact
