import { useState } from "react";
import * as React from "react";
import "./services.css";
import { AnimatePresence, motion, easeInOut } from "framer-motion";
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const Services = () => {
  const services = [
    {
      img: "/webdev.png",
      heading: "Web App Development",
      caption:
        "Delivering comprehensive web development solutions with expertise in both front end and back end technologies. Proficient in HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and MySQL. Creating visually appealing, highly functional websites with modern design aesthetics and efficient data management.",
    },
    {
      img: "/frontenddevelopment.jpg",
      heading: "Front End Development",
      caption:
        "Specializing in front end development using HTML, CSS, JavaScript, and React, along with Bootstrap and MUI for modern design. Crafting responsive, intuitive interfaces that enhance user engagement and deliver a consistent experience across all platforms. Focusing on usability, accessibility, and cross-browser compatibility.",
    },
    {
      img: "backendDevelopment.png",
      heading: "Back End Development",
      caption:
        "Providing robust back end development services with Node.js, Express, and MongoDB. Building scalable APIs and efficient database management systems, integrating seamlessly with front end applications for optimal performance and data security. Ensuring reliability, scalability, and maintainability of server-side logic.",
    },
  ];
  return (
    <>
      <div className="servicesOuterContainer">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          style={{
            color: "#edf402",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Services
        </motion.h1>
        <motion.ul
          className="container12 ulConatiner"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {services.map((currentItem, index) => (
            <motion.li
              key={index}
              className="item"
              variants={item}
              style={{ color: "white" }}
            >
              <motion.div
                class="card cardCustom"
                style={{ width: "19rem", cursor: "pointer" }}
                whileHover={{ scale: 0.9 }}
                transition={{
                  duration: 0.4,
                  ease: easeInOut,
                }}
              >
                <img
                  src={currentItem.img}
                  class="card-img-top"
                  alt="..."
                  style={{
                    height: "150px",
                    width: "auto",
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                  }}
                />
                <div class="card-body">
                  <h5 class="card-title">{currentItem.heading}</h5>
                  <p class="card-text cardText">{currentItem.caption}</p>
                </div>
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </>
  );
};
export default Services;
