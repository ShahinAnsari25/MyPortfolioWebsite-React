import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./sideBar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const SideBar = () => {
  const [currentActive, setCurrentActive] = useState("home");
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary sidebarContainer"
      style={{ width: "230px", height: "100vh" }}
    >
      <span className="portfolioContainer">
        <span>P</span> <span style={{ color: "white" }}>ortfolio</span>
      </span>
      <hr style={{ color: "white" }} />
      <ul class="nav nav-pills flex-column mb-auto customCustomer">
        <li class="nav-item hover-border" style={{ fontSize: "20px" }}>
          <Link
            to="/"
            class={`nav-link linkText ${
              currentActive === "home" ? "active" : ""
            }`}
            aria-current="page"
            onClick={() => {
              setCurrentActive("home");
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              paddingBottom: "5px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill={currentActive === "home" ? "#edf402" : "#878484"}
            >
              <path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 10 21 L 10 14 L 14 14 L 14 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z"></path>
            </svg>
            Home
          </Link>
        </li>
        <li className="hover-border" style={{ fontSize: "20px" }}>
          <Link
            to="experience"
            class={`nav-link linkText ${
              currentActive === "experience" ? "active" : ""
            }`}
            onClick={() => {
              setCurrentActive("experience");
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              paddingBottom: "5px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              style={{ height: "25px", width: "25px" }}
              fill={currentActive === "experience" ? "#edf402" : "#878484"}
            >
              <path d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z" />
            </svg>
            Experience
          </Link>
        </li>
        <li className="hover-border" style={{ fontSize: "20px" }}>
          <Link
            to="skills"
            class={`nav-link linkText ${
              currentActive === "skills" ? "active" : ""
            }`}
            aria-current="page"
            onClick={() => {
              setCurrentActive("skills");
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              paddingBottom: "5px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              style={{ height: "25px", width: "25px" }}
              fill={currentActive === "skills" ? "#edf402" : "#878484"}
            >
              <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
            </svg>
            Skills
          </Link>
        </li>
        <li className="hover-border" style={{ fontSize: "20px" }}>
          <Link
            to="services"
            class={`nav-link linkText ${
              currentActive === "services" ? "active" : ""
            }`}
            aria-current="page"
            onClick={() => {
              setCurrentActive("services");
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              paddingBottom: "5px",
            }}
          >
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 122.88 108.82"
              style={{ height: "25px", width: "25px" }}
              fill={currentActive === "services" ? "#edf402" : "#878484"}
            >
              <path
                class="cls-1"
                d="M3.1,56.47H21.3a3.11,3.11,0,0,1,3.1,3.1v37.2a3.11,3.11,0,0,1-3.1,3.1H3.1A3.11,3.11,0,0,1,0,96.77V59.57a3.11,3.11,0,0,1,3.1-3.1ZM28.42,96.23V60H47.77c6.92,1.24,13.84,5,20.75,9.35H81.2c5.73.34,8.74,6.16,3.17,10-4.45,3.26-10.31,3.07-16.32,2.54-4.15-.21-4.33,5.36,0,5.38,1.5.12,3.13-.23,4.56-.24,7.5,0,13.68-1.44,17.46-7.36L92,75.16l18.85-9.35c9.44-3.1,16.14,6.77,9.19,13.63a247,247,0,0,1-42,24.71c-10.4,6.33-20.81,6.11-31.21,0l-18.4-7.92ZM62,7.65a1.15,1.15,0,0,0-.39-.21.72.72,0,0,0-.32,0,1.11,1.11,0,0,0-.73.38l-2.53,3a1.53,1.53,0,0,1-1.9.37c-.34-.18-.7-.35-1.06-.5s-.79-.31-1.17-.44-.77-.24-1.22-.37-.83-.23-1.22-.32A1.54,1.54,0,0,1,50.3,8.12L49.92,4a1.29,1.29,0,0,0-.12-.42,1.22,1.22,0,0,0-.23-.29.72.72,0,0,0-.32-.17.92.92,0,0,0-.41,0l-5.31.52a1.42,1.42,0,0,0-.41.12,1.17,1.17,0,0,0-.34.28,1.08,1.08,0,0,0-.18.33v0a.89.89,0,0,0,0,.33l.37,3.89a1.54,1.54,0,0,1-1.12,1.63c-.32.11-.68.24-1.09.41s-.76.34-1.08.51l-.06,0c-.34.18-.7.37-1,.57l-.1,0c-.34.2-.67.41-1,.62a1.55,1.55,0,0,1-1.82-.08L32.24,9.57a1.28,1.28,0,0,0-.35-.2.69.69,0,0,0-.3,0,1.31,1.31,0,0,0-.41.13l-.06,0a1.34,1.34,0,0,0-.25.23L27.52,13.8a1.3,1.3,0,0,0-.23.41.87.87,0,0,0,0,.32v.07a.9.9,0,0,0,.1.34l0,.05a1.16,1.16,0,0,0,.24.26l3,2.53A1.52,1.52,0,0,1,31,19.69a11.4,11.4,0,0,0-.49,1,12.37,12.37,0,0,0-.44,1.17c-.12.37-.25.77-.38,1.22s-.23.84-.32,1.22A1.53,1.53,0,0,1,28,25.54l-4.13.38a1.23,1.23,0,0,0-.41.12,1.13,1.13,0,0,0-.3.24.9.9,0,0,0-.17.32,1,1,0,0,0,0,.4l.52,5.31a1.22,1.22,0,0,0,.12.42,1.11,1.11,0,0,0,.27.34,1.35,1.35,0,0,0,.33.18,1.09,1.09,0,0,0,.37,0l3.89-.37A1.53,1.53,0,0,1,30.06,34c.11.32.25.69.42,1.09s.33.75.51,1.09l.07.14c.16.31.34.65.54,1l.67,1.1a1.55,1.55,0,0,1-.1,1.8L29.4,43.63a1.5,1.5,0,0,0-.18.32.9.9,0,0,0,0,.29,1.16,1.16,0,0,0,.12.42,1,1,0,0,0,.26.31c1.38,1.15,2.8,2.28,4.17,3.44a1.05,1.05,0,0,0,.3.15.94.94,0,0,0,.38,0h0a1.42,1.42,0,0,0,.44-.12l.05,0a2.47,2.47,0,0,0,.27-.21l2.5-3a1.53,1.53,0,0,1,1.91-.38,11.47,11.47,0,0,0,1.06.5c.39.17.78.31,1.17.44s.76.25,1.22.38.83.23,1.22.32a1.53,1.53,0,0,1,1.19,1.44L45.86,52a1.1,1.1,0,0,0,.13.41.93.93,0,0,0,.23.3,1.11,1.11,0,0,0,.32.17,1.09,1.09,0,0,0,.41,0l5.3-.52a1.28,1.28,0,0,0,.43-.12l0,0A1.24,1.24,0,0,0,53,52a1.28,1.28,0,0,0,.21-.37.72.72,0,0,0,0-.36l-.36-3.9a1.53,1.53,0,0,1,1-1.6c.39-.13.78-.28,1.16-.44l.12,0c.32-.14.64-.3,1-.48l.06,0c.38-.19.75-.39,1.08-.59l1.11-.67a1.52,1.52,0,0,1,1.79.11l3.38,2.76a1.35,1.35,0,0,0,.33.18h0a.69.69,0,0,0,.32,0,1,1,0,0,0,.41-.11,1.22,1.22,0,0,0,.3-.27c1.15-1.38,2.28-2.8,3.44-4.17a.89.89,0,0,0,.15-.29,1.15,1.15,0,0,0,0-.38v0a1.5,1.5,0,0,0-.12-.44,1.21,1.21,0,0,0-.25-.32l-3-2.44a1.52,1.52,0,0,1-.39-1.92,11.47,11.47,0,0,0,.5-1.06c.17-.41.32-.8.44-1.16s.24-.78.37-1.23.23-.82.32-1.22a1.53,1.53,0,0,1,1.47-1.19L72,30a1.29,1.29,0,0,0,.42-.12,1.54,1.54,0,0,0,.29-.23,1.11,1.11,0,0,0,.17-.32v0a1.13,1.13,0,0,0,0-.38l-.52-5.3a1.31,1.31,0,0,0-.12-.41l0-.06a1.26,1.26,0,0,0-.25-.28,1.08,1.08,0,0,0-.33-.18h0a.89.89,0,0,0-.33,0L67.4,23a1.55,1.55,0,0,1-1.6-1c-.13-.37-.27-.76-.45-1.16s-.35-.82-.52-1.15l0-.07a11.26,11.26,0,0,0-.56-1c-.2-.34-.43-.68-.66-1a1.54,1.54,0,0,1,.09-1.85l2.74-3.39a1.15,1.15,0,0,0,.2-.35.67.67,0,0,0,0-.29,1.38,1.38,0,0,0-.13-.42l0-.07a1.17,1.17,0,0,0-.21-.24L62.55,7.93A1.46,1.46,0,0,1,62,7.65Zm41.38,24.6a1.54,1.54,0,0,0-1.15-.36,1.62,1.62,0,0,0-1.06.57l-1.53,1.85a10.69,10.69,0,0,0-1.51-.64c-.54-.17-1-.32-1.58-.45l-.24-2.58a1.57,1.57,0,0,0-.55-1.06,1.45,1.45,0,0,0-1.14-.33l-3.26.32a1.61,1.61,0,0,0-1,.54A1.51,1.51,0,0,0,90,31.26l.22,2.37a9.37,9.37,0,0,0-1.53.65,11.4,11.4,0,0,0-1.4.82l-2.06-1.66a1.42,1.42,0,0,0-1.12-.37,1.6,1.6,0,0,0-1.06.58l-2,2.49a1.55,1.55,0,0,0,.21,2.21L83,39.88a9.6,9.6,0,0,0-.63,1.51c-.18.54-.33,1-.46,1.58l-2.58.24a1.6,1.6,0,0,0-1.06.55A1.46,1.46,0,0,0,78,44.91l.32,3.25a1.58,1.58,0,0,0,.55,1.05,1.47,1.47,0,0,0,1.14.36l2.37-.22A9.79,9.79,0,0,0,83,50.87a15.71,15.71,0,0,0,.82,1.44l-1.66,2a1.41,1.41,0,0,0-.36,1.12,1.58,1.58,0,0,0,.57,1L84.9,58.6a1.5,1.5,0,0,0,1.15.33,1.68,1.68,0,0,0,1.08-.54l1.54-1.88a9.25,9.25,0,0,0,1.51.64,14.89,14.89,0,0,0,1.58.45L92,60.19a1.61,1.61,0,0,0,.55,1.05,1.49,1.49,0,0,0,1.15.34l3.25-.32A1.62,1.62,0,0,0,98,60.71a1.51,1.51,0,0,0,.36-1.15l-.23-2.37a8.69,8.69,0,0,0,1.53-.65,14.52,14.52,0,0,0,1.43-.81l2,1.66a1.51,1.51,0,0,0,1.15.36,1.54,1.54,0,0,0,1.06-.57l2.08-2.52a1.53,1.53,0,0,0,.34-1.15,1.64,1.64,0,0,0-.55-1.08l-1.88-1.52A8.9,8.9,0,0,0,106,49.4a15.43,15.43,0,0,0,.45-1.57l2.59-.24a1.57,1.57,0,0,0,1-.55,1.48,1.48,0,0,0,.34-1.15l-.32-3.25a1.62,1.62,0,0,0-.55-1,1.51,1.51,0,0,0-1.15-.37l-2.37.23a11.13,11.13,0,0,0-.65-1.53,8.72,8.72,0,0,0-.82-1.4l1.67-2.06a1.46,1.46,0,0,0,.36-1.12,1.62,1.62,0,0,0-.57-1.06l-2.5-2.05-.08,0ZM93.5,39.08a6.73,6.73,0,0,1,2.52.25,6.58,6.58,0,0,1,2.15,1.16,6.36,6.36,0,0,1,1.55,1.89,6,6,0,0,1,.72,2.41,6.71,6.71,0,0,1-.25,2.52,6.21,6.21,0,0,1-3,3.71,6.17,6.17,0,0,1-2.41.71,6.51,6.51,0,0,1-2.52-.25,6.61,6.61,0,0,1-2.16-1.15,6.53,6.53,0,0,1-1.54-1.9A5.92,5.92,0,0,1,87.79,46a6.28,6.28,0,0,1,3.3-6.22,5.92,5.92,0,0,1,2.41-.72ZM62.56,4.5a4.64,4.64,0,0,1,1,.45,1.48,1.48,0,0,1,.6.3L68.19,8.6a4.19,4.19,0,0,1,.94,1.09l.08.13a4.23,4.23,0,0,1,.48,1.52A3.72,3.72,0,0,1,69.52,13a4.19,4.19,0,0,1-.71,1.29l-2.06,2.56.13.21a13.49,13.49,0,0,1,.71,1.36q.36.7.6,1.29l.08.2,2.7-.26a3.85,3.85,0,0,1,1.56.14l.08,0a4.19,4.19,0,0,1,1.28.69l.14.12a4.18,4.18,0,0,1,.89,1.1l.08.13a4.2,4.2,0,0,1,.43,1.45c0,1.34.34,3.94.52,5.34a4,4,0,0,1-.11,1.51l0,.09a4,4,0,0,1-.75,1.41l0,0a4.06,4.06,0,0,1-1.19,1,4.42,4.42,0,0,1-1.52.46l-3.18.28-.08.29c-.11.4-.25.85-.43,1.36s-.33,1-.5,1.37l-.08.17,2.19,1.77a4.14,4.14,0,0,1,1,1.29A4.28,4.28,0,0,1,71.62,41v.05a3.93,3.93,0,0,1-.13,1.6A4.14,4.14,0,0,1,70.82,44l-3.49,4.22a4,4,0,0,1-1.21,1,3.92,3.92,0,0,1-1.53.48A4.07,4.07,0,0,1,63,49.57l-.08,0a4.29,4.29,0,0,1-1.26-.68l-2.59-2.11-.26.15c-.44.26-.87.49-1.28.69s-.76.38-1.17.56L56,48.3,56.28,51a3.91,3.91,0,0,1-.17,1.65A4.26,4.26,0,0,1,55.35,54l-.06.06a4.39,4.39,0,0,1-1.13.91l-.1,0a4.28,4.28,0,0,1-1.44.43c-1.34,0-3.94.35-5.34.53a4.23,4.23,0,0,1-1.6-.13,4,4,0,0,1-1.41-.76l-.05,0a4.38,4.38,0,0,1-.95-1.2,4.15,4.15,0,0,1-.46-1.52l-.29-3.17-.28-.08-1.36-.43c-.48-.16-1-.33-1.37-.51l-.19-.08-1.8,2.19a4,4,0,0,1-1.17.91l-.11.07a4.6,4.6,0,0,1-1.39.4H34.8a4,4,0,0,1-1.61-.13,4.2,4.2,0,0,1-1.33-.68l-4.23-3.49a4.12,4.12,0,0,1-1-1.21,4.17,4.17,0,0,1-.48-1.51A3.6,3.6,0,0,1,26.32,43,4,4,0,0,1,27,41.73l2.11-2.59L29,38.89c-.22-.37-.43-.77-.64-1.19l0,0c-.25-.46-.46-.9-.65-1.35l-.09-.23-2.68.25a3.87,3.87,0,0,1-1.64-.16,4,4,0,0,1-1.28-.7l-.15-.11a4.36,4.36,0,0,1-1-1.25,4.21,4.21,0,0,1-.43-1.44c0-1.35-.35-3.91-.53-5.33A4.1,4.1,0,0,1,20,25.73a4,4,0,0,1,.76-1.41l0,0a4.42,4.42,0,0,1,1.2-1,4.15,4.15,0,0,1,1.52-.45l3.17-.29.08-.29c.12-.39.26-.85.43-1.35s.34-1,.51-1.38l.08-.19L25.7,17.63a4.22,4.22,0,0,1-1-1.11l-.06-.1A3.92,3.92,0,0,1,24.22,15l0-.08a4,4,0,0,1,.16-1.61,4.18,4.18,0,0,1,.78-1.41l3.35-4.09a3.92,3.92,0,0,1,1.1-.93l.12-.08a4,4,0,0,1,1.52-.48,3.59,3.59,0,0,1,1.63.17,4.28,4.28,0,0,1,1.29.71l2.57,2.07L37,9.07c.41-.24.83-.46,1.25-.67s.88-.44,1.29-.62l.24-.09L39.51,5a3.85,3.85,0,0,1,.14-1.56l0-.08a4.19,4.19,0,0,1,.69-1.28L40.49,2a4.28,4.28,0,0,1,1.23-1A4.13,4.13,0,0,1,43.17.55c1.34,0,3.94-.34,5.34-.52a4,4,0,0,1,1.6.13,4,4,0,0,1,1.41.75l0,0a4.34,4.34,0,0,1,1,1.19A4.42,4.42,0,0,1,53,3.66l.28,3.18.29.08c.39.11.85.25,1.36.42l1.37.51.2.09,1.73-2.09a4.08,4.08,0,0,1,1.22-1A4.15,4.15,0,0,1,61,4.35a3.77,3.77,0,0,1,1.61.15ZM46.71,16.11a13.72,13.72,0,0,1,2.31,0,12.18,12.18,0,0,1,2.36.47h0a12.34,12.34,0,0,1,2.12.89l.09.05a12.59,12.59,0,0,1,1.8,1.21l0,0a12.48,12.48,0,0,1,2.89,3.55,10.57,10.57,0,0,1,.92,2.19,10.93,10.93,0,0,1,.44,2.36v0a12.65,12.65,0,0,1,0,2.3,11.2,11.2,0,0,1-.46,2.36l0,.1a12.25,12.25,0,0,1-.86,2,13.25,13.25,0,0,1-1.25,1.9l-.1.11a12.2,12.2,0,0,1-3.47,2.81,11.49,11.49,0,0,1-2.2.92,12.34,12.34,0,0,1-2.35.44,14.2,14.2,0,0,1-2.35,0,12,12,0,0,1-2.36-.47h0a12.58,12.58,0,0,1-2.11-.89,13.6,13.6,0,0,1-1.9-1.26l0,0a12.25,12.25,0,0,1-1.6-1.62,13.21,13.21,0,0,1-1.3-1.92,11.35,11.35,0,0,1-.91-2.2,10.93,10.93,0,0,1-.44-2.36v0a12.65,12.65,0,0,1,0-2.3,11.2,11.2,0,0,1,.46-2.36h0a12,12,0,0,1,.89-2.12l.05-.09a11.65,11.65,0,0,1,1.21-1.81l.08-.1a11.28,11.28,0,0,1,1.56-1.53,13.15,13.15,0,0,1,1.92-1.29,11.3,11.3,0,0,1,2.19-.92,12.59,12.59,0,0,1,2.36-.44Zm2,3.07a9.62,9.62,0,0,0-1.78,0h0a8.82,8.82,0,0,0-1.73.32,8.2,8.2,0,0,0-1.59.66,10.44,10.44,0,0,0-1.47,1A9.3,9.3,0,0,0,41,22.26l0,0a9.32,9.32,0,0,0-.9,1.35l0,.08a9.46,9.46,0,0,0-.66,1.59A8.85,8.85,0,0,0,39,27.06a10.57,10.57,0,0,0,0,1.78v0a8.36,8.36,0,0,0,.33,1.74A7.85,7.85,0,0,0,40,32.2a9.54,9.54,0,0,0,1,1.46,8.38,8.38,0,0,0,1.18,1.2,9.55,9.55,0,0,0,1.41.93,10.11,10.11,0,0,0,1.6.67,8,8,0,0,0,1.73.34,9.94,9.94,0,0,0,1.81,0,9.06,9.06,0,0,0,1.74-.32A8,8,0,0,0,52,35.82a9.64,9.64,0,0,0,1.47-1,9.3,9.3,0,0,0,1.14-1.12l0,0a9.49,9.49,0,0,0,1-1.44,10.86,10.86,0,0,0,.65-1.52v-.06a9,9,0,0,0,.35-1.74,10.57,10.57,0,0,0,0-1.78v0a8.36,8.36,0,0,0-.33-1.74,8.1,8.1,0,0,0-.66-1.59,9.08,9.08,0,0,0-1-1.46,8.38,8.38,0,0,0-1.18-1.2,9.64,9.64,0,0,0-1.33-.89l-.08,0a10,10,0,0,0-1.6-.67,8.06,8.06,0,0,0-1.72-.34ZM16.25,85.85a3.56,3.56,0,1,1-3.55,3.56,3.56,3.56,0,0,1,3.55-3.56Z"
              />
            </svg>
            Services
          </Link>
        </li>
        <li className="hover-border" style={{ fontSize: "20px" }}>
          <Link
            to="projects"
            class={`nav-link linkText ${
              currentActive === "projects" ? "active" : ""
            }`}
            aria-current="page"
            onClick={() => {
              setCurrentActive("projects");
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              paddingBottom: "5px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              style={{ height: "25px", width: "25px" }}
              fill={currentActive === "projects" ? "#edf402" : "#878484"}
            >
              <path d="M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
            </svg>
            Projects
          </Link>
        </li>
        <li className="hover-border" style={{ fontSize: "20px" }}>
          <Link
            to="contact"
            class={`nav-link linkText ${
              currentActive === "contact" ? "active" : ""
            }`}
            aria-current="page"
            onClick={() => {
              setCurrentActive("contact");
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              paddingBottom: "5px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              style={{ height: "25px", width: "25px" }}
              fill={currentActive === "contact" ? "#edf402" : "#878484"}
            >
              <path d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2s0 0 0 0s0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.2-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9c0 0 0 0 0 0s0 0 0 0l-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z" />
            </svg>
            Contact
          </Link>
        </li>
      </ul>
      <span style={{ display: "flex", gap: "5px" }}>
        {" "}
        <svg viewBox="0 0 512 512" className="emailSvg">
          <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
        </svg>
        <p style={{ color: "white", fontSize: "12px", margin: "0px" }}>
          shahinansari107@gmail.com
        </p>
      </span>
    </div>
  );
};

export default SideBar;
