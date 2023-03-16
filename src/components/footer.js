import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/footer.css";
import { Contact } from "../helper/Projectlist";

function Footer() {
  if (!Contact.email) return null
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href={`mailto:${Contact.email}`}><EmailIcon/></a>
        <a href="https://github.com/AjinThapa2000"><GitHubIcon /></a>
        <a href="https://www.linkedin.com/in/dinesh-thapa-391999253/"><LinkedInIcon /></a>
      </div>
      <p> &copy; 2023 Ajin Thapa</p>
    </div>
  );
}

export default Footer;