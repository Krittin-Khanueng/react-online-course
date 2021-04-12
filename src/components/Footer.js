import React from "react";

const Footer = ({ title, website, postcode, isOpen }) => {
  return (
    <>
      <footer className="container">
        <p>© Company 2017-{new Date().getFullYear()}</p>
      </footer>
    </>
  );
};

export default Footer;
