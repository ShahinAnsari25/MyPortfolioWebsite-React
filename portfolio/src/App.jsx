import { useState, useRef } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./assets/sideBar/sideBar";
import Home from "./assets/homepage/homepage";
import Skills from "./assets/skills/skillspage";
import Experience from "./assets/experience/experience";
import Services from "./assets/services/services";
import Projects from "./assets/projects/projects";
import Contact from "./assets/contact/contact";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

function App() {
  const sideBarRef = useRef();
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const handleSideBar = () => {
    sideBarRef.current.classList.remove("sideBarHideAnimation");
    sideBarRef.current.classList.add("display");
  };
  const handleClose = () => {
    sideBarRef.current.classList.add("sideBarHideAnimation");

    setTimeout(() => {
      sideBarRef.current.classList.remove("display");
    }, 400);
    setIsSideBarOpen(false);
  };
  return (
    <BrowserRouter>
      <div className="outerContainer">
        <div className="menuBtnContainer">
          <button onClick={handleSideBar}>
            <svg
              style={{ height: "30px", width: "30px", fill: "white" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
        </div>
        <ToastContainer></ToastContainer>
        <motion.div
          className="sidebar"
          ref={sideBarRef}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: "1",
            ease: "easeInOut",
          }}
        >
          <div className="closeBtn">
            <button onClick={handleClose}>
              <svg
                style={{ height: "30px", width: "30px", fill: "white" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </button>
          </div>
          <SideBar></SideBar>
        </motion.div>
        <div className="container1">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="skills" element={<Skills />}></Route>
            <Route path="experience" element={<Experience />}></Route>
            <Route path="services" element={<Services />}></Route>
            <Route path="projects" element={<Projects />}></Route>
            <Route path="contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
