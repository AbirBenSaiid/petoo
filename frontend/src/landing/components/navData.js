import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaHome,
} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

export const appLinks = [
  {
    id: 1,
    url: "#about",
    text: "About",
    icon: <FaHome size={20} />,
  },
  {
    id: 2,
    url: "#services",
    text: "Services",
    icon: <CgProfile size={20} />,
  },
  {
    id: 2,
    url: "#testimonials",
    text: "Testimonials",
    icon: <CgProfile size={20} />,
  },
  {
    id: 3,
    url: "/registerVET",
    text: "Sign Up as a Vet",
    icon: <CgProfile size={20} />,
  },
];
let sizeIcon = "20px";
//Data about external socialLinks
export const socialLinks = [
  {
    id: 1,
    url: "https://www.facebook.com",
    icon: <FaFacebook size={sizeIcon} />,
  },
  {
    id: 2,
    url: "https://www.instagram.com",
    icon: <FaInstagram size={sizeIcon} />,
  },
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <FaTwitter size={sizeIcon} />,
  },
  {
    id: 4,
    url: "https://www.linkedin.com",
    icon: <FaLinkedin size={sizeIcon} />,
  },
];