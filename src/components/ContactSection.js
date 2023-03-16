import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Footer from "./footer";


const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y4ql819",
        "template_5hlnk4j",
        form.current,
        'ctpRbVbW0IoudE7XF'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      
        <StyledContactForm>
              <form ref={form} onSubmit={sendEmail}>
                <p>Please feel free to write message here.</p>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
              </form>
      
        </StyledContactForm>
    
    <footer>
      <Footer/>
    </footer>
    
    </div>
    
    
    
    
  );
};

export default ContactSection;

// Styles
const StyledContactForm = styled.div`
  width: 400px;
  form {
    position: absolute;
     top: 43%;
     left: 50%;
     transform: translate(-50%,-50%);

     display: flex;
     flex-wrap: wrap;
     flex-direction: column; 
     align-items: center;
     width: 50%;
     font-size: 16px;
     input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    p{
      font-weight: bolder;
      text-shadow: 5px 5px 10px blue;
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
  @media only screen and (max-width: 600px) {
    form {
      margin-top: 19%;
    }
  }
  @media only screen and (max-width: 599px) {
    form {
      margin-top: -1.5%;
    }
  }
`;