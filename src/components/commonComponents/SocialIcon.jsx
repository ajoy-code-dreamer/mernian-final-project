import React from "react";
import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialIcon = () => {
  return (
    <ul className="flex items-center gap-3">
      <li className="w-10 h-10 rounded-lg bg-[#3763d2] text-white text-base flex items-center justify-center">
        <Link to="">
          <FaFacebookSquare />
        </Link>
      </li>
      <li className="w-10 h-10 rounded-lg bg-[#F8468D] text-white text-base flex items-center justify-center">
        <Link to="">
          <FaInstagram />
        </Link>
      </li>
      <li className="w-10 h-10 rounded-lg bg-[#1ABCFF] text-white text-base flex items-center justify-center">
        <Link to="">
          <FaTwitter />
        </Link>
      </li>
      <li className="w-10 h-10 rounded-lg bg-[#FD434F] text-white text-base flex items-center justify-center">
        <Link to="">
          <FaYoutube />
        </Link>
      </li>
    </ul>
  );
};

export default SocialIcon;
