import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { MdPlace } from 'react-icons/md';


const ItemStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 10px;
  min-width: 40vw;
  .icon{
    svg{
      width: 35px;
      height: 35px;
      border-radius: 50%;
      padding: 1rem;
      background-color: grey;
    }
  }
  @media only screen and (max-width: 768px) {
    
    justify-content: flex-start;
    min-width: 400px;
    gap: 1rem;
    .icon{
      svg{
        width: 25px;
        height: 25px;
        padding: 0.2rem;
      }
    }
  }
`
const ContactInfo = ({
  icon=<MdPlace/>,
  text="This is a test"
}) => {
  return (<ItemStyled>
    <div className='icon'>
      {icon}
    </div>
    <div className='text'>
      {text}
    </div>
  </ItemStyled>);
}

export default ContactInfo;