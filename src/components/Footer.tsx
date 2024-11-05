import React from "react";

const Footer = () => {
  return (
    <div className="footer border-t border-gray-600 flex flex-col p-5 w-full bg-[#010101] text-white text-light justify-evenly min-h-[18rem]">
      <div className="footer-content text-light flex flex-col md:flex-row gap-5 text-light">
        <div className="footer-content-left w-full md:w-1/2">
          <h2 className="font-bold text-3xl text-[#007BFF]">Shop Soothness</h2>
          <p>
           This is a music Instruments shopping website.
          </p>
        </div>
        <div className="footer-content-center w-full md:w-1/4">
          <h3 className="text-lg font-semibold">Company</h3>
          <ul className="font-light list-none space-y-2">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right w-full md:w-1/4">
          <h3 className="text-lg font-semibold">GET IN TOUCH</h3>
          <ul className="font-light list-none space-y-2">
            <li>+91-8112450779</li>
            <li>singhelboyankit@gmail.com</li>
          </ul>
        </div>
      </div>

      <hr className=" mt-5 bg-gray-800" />
      <div className="copyright text-center text-light opacity-70">
        <p>Copyright 2024 © YummyBento.com - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
