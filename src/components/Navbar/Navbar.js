import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { MdMenu, MdClose } from "react-icons/md"

const NavContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 40px;
  border-bottom: 0.1px solid goldenrod;
  z-index: 4;
  .logo {
    h1 {
      font-size: 1.5rem;
      cursor: pointer;
    }
    span {
      font-size: 1.5rem;
      color: goldenrod;
      font-family: "Kaushan Script", cursive;
    }
    a {
      text-decoration: none;
    }
  }
  .nav-menu {
    .menu-bar {
      margin-top: 4px;
      display: none;
      svg {
        width: 30px;
        height: 30px;
        cursor: pointer;
      }
    }
    /* -------------Navigation links----------------- */
    ul {
      display: flex;
      align-self: start;
      gap: 100px;
      .menu-close {
        svg {
          display: none;
          width: 30px;
          height: 30px;
          cursor: pointer;
        }
      }
      li {
        list-style: none;
      }
      a {
        text-decoration: none;
      }
      .active {
        color: white;
      }
    }
  }
  /* -------------------Media Query--------------------- */
  @media only screen and (max-width: 768px) {
    .nav-menu {
      z-index: 4;
      .menu-bar {
        display: block;
        svg {
          display: block;
        }
      }
      .close-nav {
        display: none;
        position: absolute;
        top: 5%;
        right: 0%;
        width: 250px;
        border-radius: 10px;
        height: 100vh;
        margin: auto;
        transition: 5s ease all;
      }
      .site-nav {
        position: absolute;
        top: 5%;
        right: 0%;
        width: 250px;
        border-radius: 10px;
        height: 100vh;
        margin: auto;
        ul {
          flex-direction: column;
          padding-left: 30px;
          gap: 70px;
        }
        .menu-close {
          svg {
            display: block;
          }
        }
      }
    }
  }
`

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <NavContainer>
      <div className="logo">
        <NavLink to="/">
          <h1>
            Muh'd <span>Musa</span>
          </h1>
        </NavLink>
      </div>
      <div className="nav-menu">
        <div
          onClick={() => {
            setOpenMenu(true)
          }}
          className="menu-bar"
        >
          <MdMenu />
        </div>
        <div className={openMenu ? "site-nav" : "close-nav"}>
          <ul>
            <div
              onClick={() => {
                setOpenMenu(false)
              }}
              className="menu-close"
            >
              <MdClose />
            </div>
            <li>
              <NavLink
                onClick={() => {
                  setOpenMenu(false)
                }}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  setOpenMenu(false)
                }}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  setOpenMenu(false)
                }}
                to="/project"
              >
                Project
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  setOpenMenu(false)
                }}
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </NavContainer>
  )
}

export default Navbar
