import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
// import Sample from "../Assets/vita.png"

const ProjectContainer = styled.div`
  margin-bottom: 60px;
  .image-container {
    position: relative;
    img {
      width: 400px;
      height: 350px;
      object-fit: contain;
      border-radius: 10px;
    }
    &::after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: black;
      opacity: 0.3;
    }
  }
  .info {
    width: 400px;
    text-align: left;
    a {
      text-decoration: none;
    }
    h1 {
      font-size: 1.6rem;
    }
    p {
      font-size: 1rem;
    }
  }
  @media only screen and (max-width: 768px) {
    .image-container{
      display: flex;
      align-items: center;
      flex-direction: column;
      img{
        width: 350px;
        height: 300px;
        object-fit: cover;
      }
    }
    .info{
      width: 350px;
      h1{
        font-size: 1rem;
      }
      p{
        font-size: 0.8rem;
      }
    }
  }
`

function ProjectItem(props) {
  return (
    <ProjectContainer>
      <div className="image-container">
        <img src={props.img} alt="project" />
      </div>
      <div className="info">
        <Link to={props.link}>
          <h1>{props.title}</h1>
        </Link>
        <p>{props.desc}</p>
      </div>
    </ProjectContainer>
  )
}

export default ProjectItem
