import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import "./contacts.css";
import { images } from "../../constants";

const Contacts = () => {
  const form = useRef();
  let stepOne, stepTwo, stepThree;

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_y73hnnn",
        "template_qi06j1t",
        form.current,
        "2TtGBqA-PgDlPoqXW"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setTimeout(restartMessageBox, 100);
  };
  function restartMessageBox() {
    const nameInput = document.querySelector('input[name="user_name"]');
    nameInput.value = "";
    const emailInput = document.querySelector('input[name="user_email"]');
    emailInput.value = "";
    const textarea = document.querySelector('textarea[name="message"]');
    textarea.value = "";
    stepOne = false;
    stepTwo = false;
    stepThree = false;
  }

  function validateName(event) {
    const nameInput = event.target;
    const value = nameInput.value.trim();
    if (value.length < 2) {
      // Name is too short
      nameInput.setCustomValidity("Please enter a valid name.");
      stepOne = false;
    } else {
      // Valid input, clear any error message
      nameInput.setCustomValidity("");
      stepOne = true;
    }
  }

  function validateEmail(event) {
    const emailInput = event.target;
    const email = emailInput.value.trim();
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      emailInput.setCustomValidity("Please enter an email address.");
      stepTwo = false;
    } else if (!emailRegex.test(email)) {
      emailInput.setCustomValidity("Please enter a valid email address.");
      stepTwo = false;
    } else {
      emailInput.setCustomValidity("");
      stepTwo = true;
    }
  }

  function validateTextArea(event) {
    const textarea = event.target;
    const value = textarea.value.trim();
    if (value === "") {
      textarea.setCustomValidity("Please enter a message.");
    } else if (/^\s+$/.test(value)) {
      // Contains only spaces, display an error or perform other actions
      textarea.setCustomValidity(
        "Message cannot be empty or contain only spaces."
      );
      stepThree = false;
    } else if (value.length < 20) {
      textarea.setCustomValidity("Message cannot be too short.");
      stepThree = false;
    } else {
      // Valid input, clear any error message
      textarea.setCustomValidity("");
      stepThree = true;
    }
  }

  const notify = () => {
    if (stepOne === true && stepTwo === true && stepThree === true) {
      toast.success("Message sent", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.warn("Fill out all field", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <motion.div
      className="section-container"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div className="aboutMe-ellipse">
        <img src={images.ellipseTwo} alt="ellipse" />
      </div>
      <div className="contacts-container-content">
        <h1>Contact</h1>
        <div className="contact-information">
          <h3>Get in touch!</h3>
          <div className="contact-icons-container">
            <div className="contact-icons">
              <a
                href="https://www.linkedin.com/in/saba-antadze-296966264/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://github.com/chroll0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.facebook.com/sabchke"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillFacebook />
              </a>
            </div>
            <p>For more information contact me now</p>
          </div>
        </div>
        <form className="contacts-inputs" ref={form} onSubmit={sendEmail}>
          <label>Your Name</label>
          <input
            type="text"
            name="user_name"
            required
            onInput={validateName}
            style={{ textTransform: "capitalize" }}
          />
          <label>Your Email</label>
          <input
            type="email"
            name="user_email"
            required
            onInput={validateEmail}
          />
          <label>Message</label>
          <textarea name="message" required onInput={validateTextArea} />
          <input type="submit" value="SEND" onClick={notify} />
        </form>
      </div>
      <ToastContainer />
    </motion.div>
  );
};

export default Contacts;
