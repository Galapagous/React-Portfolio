import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Navbar from "./components/Navbar/Navbar"
import Contact from "./components/Contact/Contact"
import Project from "./components/Projects/Project"
import { useEffect } from "react"

function App() {
  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/project",
          element: <Project />,
        },
        // {
        //   path: "/service",
        //   element: <Service />,
        // },
      ],
    },
  ])
  return <RouterProvider router={router}></RouterProvider>
}

export default App
