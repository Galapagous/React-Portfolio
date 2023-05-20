import React, { useEffect, useState } from "react"
import ProjectItem from "../ProjectItem/ProjectItem"
// import Project1 from "../Assets/calc.JPG"
// import Project2 from "../Assets/id.png"
import styled from "styled-components"
import { MdSearch } from "react-icons/md"
import data from "../Assets/data"

const ProjectWrapper = styled.div`
.project-container{
  padding: 0px 10rem;
  .title_section{
    display: flex;
    align-content: center;
    flex-direction: column;
    justify-content: center;
    padding: 5rem 0rem;
    text-align: center;
    p{
      font-size: 1.5rem;
    }
    h3{
      font-size: 3rem;
    }
  }
  .search{
    position: relative;
    width: fit-content;
    input{
      padding: 0.2rem;
      width: 300px;
      height: 60px;
      border: none;
      background-color: white;
      color: black;
      border-radius: 6px;
      margin-bottom: 5rem;
      outline: none;
    }
    svg{
      width: 50px;
      height: 50px;
      position: absolute;
      right: 0;
      background: transparent;
      color: red;
      top: 4%;
    }
  }
  .main_area{
    display: flex;
    align-item: center;
    justify-content: center;
    gap: 60px;
    flex-wrap: wrap;
  }
}
@media only screen and (max-width: 768px) {
  .project-container{
    .title_section{
      p{
        /* width: 300px; */
        font-size: 0.7rem;
      }
      h3{
        font-size: 1rem;
      }
    }
    .search{
      input{
        width: 250px;
        height: 40px;
        font-size: 1rem;
        padding: 0.2rem;
      }
      svg{
        width: 30px;
        height: 30px;
      }
    }
    .main-area{

    }
  }
}
`

function Project() {
  const [projectData, setProjectData] = useState(data)
  const [searcText, setSearchText] = useState("")
  const handleCHange = (e)=>{
    e.preventDefault()
    setSearchText(e.target.value)
    if(!e.target.value.lenght > 0){ 
      setProjectData(data)
    }
  }
  useEffect(()=>{
    const getProject = ()=>{
      if (searcText === "") return
      setProjectData(data.filter(each_item=>{
        return(
          each_item.title.toLocaleLowerCase().match(searcText.toLocaleLowerCase())
        )
      }))
    }
    getProject()
  },[searcText])
  return (
    <ProjectWrapper>
      <div className="project-container">
        <div className="title_section">
          <p>my recent Works</p>
          <h3>Projects</h3>
        </div>
        <div className="search">
          <input
            type="text" 
            placeholder="Project"
            value={searcText}
            onChange={handleCHange}
           />
          <MdSearch/>
        </div>
        <div className="main_area">
        {console.log(projectData)}
        {projectData.map(each_data=>{
          return(
          <ProjectItem key={each_data.id} title={each_data.title} desc={each_data.desc} img={each_data.img} link={each_data.link}/>
          )
        })}
        </div>
      </div>
    </ProjectWrapper>
  )
}

export default Project
