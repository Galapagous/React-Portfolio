import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Musa from "../Assets/Musa7.png"
import Musa2 from "../Assets/Musa6.png"
import Service from "../ServiceCard/Service"
import { BiCodeAlt } from "react-icons/bi"
import { DiIllustrator } from "react-icons/di"
import { SiAutodesk } from "react-icons/si"
import Project from "../Assets/data"
import { Swiper } from "swiper/react"
import ProjectItem from "../ProjectItem/ProjectItem"
import { Link } from "react-router-dom"

const HomeContainer = styled.div`
  #hero {
    width: 100%;
    margin-bottom: 40px;
    .hero {
      padding: 50px;
      display: flex;
      align-items: center;
      gap: 20px;
      width: 90%;
      margin: 0 auto;
      .left-container {
        flex: 1;
        text-align: end;
        h1 {
          font-size: 3rem;
          margin-bottom: 25px;
        }
      }
      .right-container {
        flex: 1;
        .image-barner {
          position: relative;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          &:after {
            content: "";
            width: 100%;
            height: 100%;
            border-radius: 10% 10% 0% 0%;
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: black;
            opacity: 0.5;
          }
        }
      }
    }
  }
  /* ----------------About Section---------------- */
  #about {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .about {
      width: 70%;
      margin: 30px;
      display: flex;
      align-items: flex-start;
      gap: 20px;
      .left-about {
        flex: 1;
        h1 {
          font-size: 3rem;
          margin: 20px 0px;
        }
        span {
          width: 100%;
          font-size: 1rem;
        }
        p {
          width: 100%;
          font-size: 1rem;
        }
        .cta {
          margin-top: 40px;
          button,a {
            border: 1px solid grey;
            padding: 15px;
            margin-right: 10px;
            border-radius: 10px;
            font-weight: 600;
            cursor: pointer;
            text-decoration: none;
            &:nth-child(1) {
              background-color: grey;
              color: black;
            }
          }
        }
      }
      .right-about {
        flex: 1;
        img {
          width: 100%;
        }
      }
    }
  }
  /* ----------------Service Section---------------- */
  #service {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    .service {
      width: 70%;
      margin: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 50px;
      .service-title {
        text-align: center;
        margin-bottom: 10px;
        h1 {
          font-size: 3rem;
        }
        span {
          font-size: 1rem;
        }
      }
      .service-element {
        display: flex;
        align-items: flex-start;
        gap: 30px;
        svg {
          width: 50px;
          height: 50px;
          &:nth-child(2) {
            color: goldenrod;
            background-color: goldenrod;
          }
        }
      }
    }
  }
  #projects {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    .project {
      width: 70%;
      margin: auto;
      text-align: center;
      .title {
        margin-bottom: 40px;
        span {
          font-size: 1rem;
        }
        h1 {
          font-size: 3rem;
        }
      }
      .project-item {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-evenly;
      }
    }
  }
  #contact{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10rem 0rem;

    .contact{
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 10px;
      p{
        font-size: 1.5rem;

      }
      h3{
        font-size: 3rem;
      }
      a{
        background-color: grey;
        color: black;
        padding: 20px 10px;
        border-radius: 5px;
        border: none;
        font-size: 1.2rem;
        cursor: pointer;
        transition: 0.5s ease color;
        text-decoration: none;
        &:hover{
          color: crimson;
          font-weight: 600;
        }
      }
    }
  }
  footer{
    width: 100%;
    .footer{
      width: 80%;
      margin: auto;
      display: flex;
      align-content: center;
      justify-content: center;
      gap: 20px;

      .info{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      .page_links{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 20px;
        a{
          text-decoration: none;
        }
      }
      .contacts{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      .social_links{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
    }
    .trademark{
      text-align: center;
      border: 1px solid grey;
      padding: 10px;
    }
  }
  @media only screen and (max-width: 768px) {
    #hero {
      .hero {
        padding: 10px;
        flex-direction: column;
        position: relative;
        .left-container {
          position: absolute;
          width: fit-content;
          text-align: left;
          bottom: 0%;
          left: 10%;
          z-index: 3;
          background-color: transparent;
          h1 {
            font-size: 1.5rem;
            margin-bottom: 5px;
            background-color: transparent;
          }
        }
      }
    }
    #about {
      margin: 100px 0px;
      .about {
        width: 80%;
        flex-direction: column;
        margin: 10px;
        gap: 10px;
        .left-about {
          font-size: 0.8rem;
          h1 {
            font-size: 2rem;
            margin: 10px 0px;
          }
          .cta {
            margin-top: 20px;
            display: flex;
            button {
              padding: 5px;
              border-radius: 5px;
              font-weight: 400;
              display: block;
              margin-bottom: 10px;
              &:nth-child(2){
                padding: 0px;
              }
            }
          }
        }
        .right-about {
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    #service {
      margin: 20px 0px;
      margin-bottom: 20px;
      --width: 30px;
      --heading: 1.5rem;
      --paragraph: 1rem;
      .service {
        width: 80%;
        gap: 20px;
        .service-title {
          h1 {
            font-size: 2rem;
          }
        }
        .service-element {
          flex-direction: column;
          gap: 30px;
          svg {
            width: var(--width);
            height: var(--width);
          }
          h1 {
            font-size: var(--heading);
          }
          p {
            font-size: var(--paragraph);
          }
        }
      }
    }
    #contact{
      .contact{
        padding: 1rem 0rem;
        p{
        font-size: 1rem;

      }
      h3{
        font-size: 1.7rem;
      }
      a{
        font-size: 1rem;
      }
      }
    }
    footer{
      .footer{
        flex-direction: column;
        .info, .page_links, .contacts, 
        .social_links{
          gap: 5px;
        }
      }
    }
  }
`
function Home() {
  const [theProject, setTheProject] = useState([])
  useEffect(()=>{
    const anArray = []
    const getLatest = ()=>{
      for(let i = 0; i < Project.length; i++){
        anArray.length < 3 && anArray.push(Project[i])
      }
    }
    getLatest()
    setTheProject(anArray)
  },[])
  return (
    <HomeContainer>
      <section id="hero">
        <div className="hero">
          <div className="left-container">
            <h1>Hi, i'm Musa</h1>
            <h1>A web developer</h1>
            
          </div>
          <div className="right-container">
            <div className="barner"></div>
            <div className="image-barner">
              <img src={Musa} alt="profile pix" />
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="about">
          <div className="left-about">
            <span>About Me</span>
            <h1>About Musa</h1>
            <p>I am a mechanical engineer, a web developer, a graphic designer and CAD designer on the side. I practice engineering on the field, while web, graphic and CAD design are done off field on my pc, i love to communicate engineering via design.</p>
            <div className="cta">
              <Link to="/project">Work</Link>
              <Link to="/about">Read More</Link>
            </div>
          </div>
          <div className="right-about">
            <img src={Musa2} alt="musa" />
          </div>
        </div>
      </section>
      <section id="service">
        <div className="service">
          <div className="service-title">
            <span>Things i can do for you</span>
            <h1>Services</h1>
          </div>
          <div className="service-element">
            <Service title="Web design" image={BiCodeAlt} paragraph="I am full stack web developer who work on both frontend and backend." />
            <Service title="Graphic design" image={DiIllustrator} paragraph="I also make graphic design for products and services." />
            <Service title="CAD design" image={SiAutodesk} paragraph="As a mechanical engineer, i use Autocad and solidworks to make 2D and 3D design." />
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="project">
          <div className="title">
            <span>Here are some of my work</span>
            <h1>Projects</h1>
          </div>
          <div className="project-item">
            {theProject.map((item) => {
              return <ProjectItem key={item.id} title={item.title} desc={item.desc} img={item.img} link={item.link} />
            })}
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="contact">
          <p>Have a project in mind?</p>
          <h3>Let me help you</h3>
          <Link to="/contact">Contact Now</Link>
        </div>
      </section>
      <footer>
            <div className="footer">
              <div className="info">
                <h1>Muhammed Musa</h1>
                <p>I am a full stack web developer from nigeria, I focus on making unique design with optimal performance rate</p>
              </div>
              <div className="page_links">
                <h1>Important Links</h1>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                {/* <Link to="/service">Service</Link> */}
                <Link to="/project">Project</Link>
                <Link to="/contact">Contact</Link>
              </div>
              <div className="contacts">
                <h1>Contact Info</h1>
                <p>+234 8123280394</p>
                <p>mmusamuhammed450@gmail.com</p>
                <p>galapagous09@gmail.com</p>
                <p>Plot 12b industrial estate ota, ogun state Nigeria</p>
              </div>
              <div className="social_links">
                <h1>Social Links</h1>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>Twitter</p>
              </div>
            </div>
            <div className="trademark">
              <p>&copy; 2023 - Muhammed Musa | Galapagous Design</p>
            </div>
      </footer>
    </HomeContainer>
  )
}

export default Home
