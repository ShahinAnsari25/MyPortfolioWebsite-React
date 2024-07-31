import "./contact.css";
import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TextField from "@mui/material/TextField";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm("service_ece7ez9", "template_mom1o0g", form.current, {
        publicKey: "SCu2Fkmd2mbxItexx",
      })
      .then(
        () => {
          toast.success("Message send successfully");
          form.current.reset();
          setIsSubmitting(false);
        },
        (error) => {
          toast.error("FAILED...", error.text);
          setIsSubmitting(false);
        }
      );
  };
  return (
    <>
      <div className="contactContainer">
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
          Contacts
        </motion.h1>
        <motion.div
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: "1",
            ease: "easeInOut",
          }}
          className="contactOuterContainer"
        >
          <form ref={form}>
            <div className="sectionOne">
              <div className="section11">
                <input type="text" placeholder="Name" name="from_name" />
                <input type="text" placeholder="Contact no." name="contact" />
              </div>
              <div className="section12">
                <input type="text" placeholder="Email" name="email" />
                <input
                  type="text"
                  placeholder="Email Subject"
                  name="emailSubject"
                />
              </div>
            </div>
            <div className="sectionTwo">
              <textarea name="message" id="" placeholder="Message"></textarea>
            </div>
          </form>
          <div className="contactBtnContainer">
            <button
              type="button"
              class="btn btn-primary"
              style={{
                paddingLeft: "20px",
                paddingRight: "20px",
                backgroundColor: "#edf402",
                borderColor: "#edf402",
                color: "black",
              }}
              onClick={sendEmail}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};
export default Contact;
