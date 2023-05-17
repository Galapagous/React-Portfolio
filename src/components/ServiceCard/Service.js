import React from "react"
import styled from "styled-components"

const ServiceContainer = styled.div`
  width: 400px;
  text-align: center;
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
  h1 {
    font-size: 2rem;
    margin: 10px 0px;
  }
`
function Service(props) {
  return (
    <ServiceContainer>
      <props.image />
      <h1>{props.title}</h1>
      <p>{props.paragraph}</p>
    </ServiceContainer>
  )
}

export default Service
