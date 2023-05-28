import React from "react"
import styled from "styled-components"
import Musa from "../Assets/Musa5.png"
import { Link } from "react-router-dom"

const AboutContainer = styled.div`
padding: 5rem 10rem;
  .top{
    display: flex;
    align-self: center;
    justify-content: center;
    gap: 5px;
    padding: 10rem 0rem;
    .left{
      flex: 1;
      max-height: 550px;
      overflow: scroll;
      &::-webkit-scrollbar{
        width: 1px;
      }
      h3{
        font-size: 2rem;
      }
      p{
        padding: 20px 0px;
        line-height: 1.8rem;
      }
      a{
        text-decoration: none;
        border: none;
        &:hover{
          color: goldenrod;
        }
      }
      button{
        padding: 10px;
        color: black;
        border: 1px solid goldenrod;
        border-radius: 5px;
        margin-top: 20px;
        font-weight: 600;
        cursor: pointer;
        &:hover{
          border: 1px solid gray;
        }
      }
    }
    .right{
      flex: 1;
      img{
        width: 100%;
      }
    }
  }
  .middle{
    display: flex;
    flex-direction: column;
    gap: 50px;
    .education, .skills, .experience{
      display: flex;
      flex-direction: column;
      gap: 20px;
      h3{
        font-size: 2rem;
      }
      .items{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        .item{
          display: flex;
          align-items: center;
          gap: 20px;
          p{
            font-size: 1rem;
          }
          h4{
            font-size: 1.5rem;
            width: 15rem;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 768px){ 
    padding: 2rem 4rem;
    .top{
      flex-direction: column;
      gap: 10px;
      .left{
        width: 300px;
        p{
          font-size: 1rem;
        }
        h3,p{
          font-size: 0.7rem;
        }
        a{
          font-size: 0.7rem;
        }
      }
      .right{
        img{
          width: 300px;
          height: 200px;
          object-fit: cover;
        }
      }
    }
    .middle{
      h3,h4{
        font-size: 1rem;
      }
      .education, .skills, .experience{
        .items{
          flex-direction: column;
          .item{
            flex-direction: column;
            align-items: flex-start;
            h4{
              font-size: 0.7rem;
              font-weight: 600;
            }
            p{
              font-size: 0.7rem;
            }
          }
        }
      }
    }
  }
`

function About() {
  return (
    <AboutContainer className="container">
      <div className="top">
      <div className="left">
      <p>Hi I'am Musa</p>
        <h3>A web Developer</h3>
        <p>Originally trained as a Mechanical Engineer, my insatiable appetite for math and logic constantly drives me to explore new horizons. I discovered coding, an area where I found solace and a profound sense of satisfaction. My passion for coding led me to seek out tasks that required its application, relishing the opportunity to tackle intricate problems with inventive solutions. Today, coding has become more than just a hobby; it has transformed into a full-time practice that I wholeheartedly embrace. My ultimate goal is to utilize my coding expertise to provide exceptional service, always striving to deliver the best solutions possible.</p>
        <button type="file"><Link to="https://docs.google.com/document/d/1PYC8oFJRyvnSxoYUCTByG1ixQO8xuTRwfgPisqPRatk/edit?usp=sharing">Resume</Link></button>
      </div>
      <div className="right">
        <img src={Musa} alt="musa"/>
      </div>
      </div>
      <div className="middle">
        <div className="education">
          <h3>Education</h3>
          <div className="items">
          <div className="item">
            <h4>Software Engineering</h4>
            <span>Qwasar Silicon Valley</span>
          </div>
          <div className="item">
            <h4>University</h4>
            <span>Federal University Of Technology Minna</span>
          </div>
          </div>
        </div>
        <div className="skills">
        <h3>My Skills</h3>
          <div className="items">
            <div className="item">
              <h4>Language</h4>
              <p>JAVASCRIPT</p>
              <p>RUBY</p>
              <p>C</p>
            </div>
            <div className="item">
              <h4>BackEnd</h4>
              <p>NODEJS</p>
              <p>RAILS</p>
              <p>SINATRA</p>
              <p>serverless(AWS)</p>
            </div>
            <div className="item">
              <h4>Database</h4>
              <p>SQLite</p>
              <p>NoSQL(MongoDB)</p>
            </div>
            <div className="item">
              <h4>Libraries</h4>
              <p>React</p>
              <p>Express</p>
              <p>Saas</p>
              <p>Tailwind</p>
              <p>styled-components</p>
              <p>Mongoose</p>
            </div>
            <div className="item">
              <h4>Testing</h4>
              <p>Postman</p>
            </div>
            <div className="item">
              <h4>Graphic</h4>
              <p>ILLUSTRATOR</p>
              <p>PHOTOSHOP</p>
            </div>
            <div className="item">
              <h4>CAD/CAM</h4>
              <p>AutoCad</p>
              <p>SolidWork</p>
            </div>
          </div>
        </div>
        <div className="experience">
        <h3>Experince</h3>
          <div className="items">
            <div className="item">
              <h4>2022 - 2023</h4>
              <p>Software Engineering trainee at Qwasar Silicon Valley</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom"></div>
    </AboutContainer>
  )
}

export default About
