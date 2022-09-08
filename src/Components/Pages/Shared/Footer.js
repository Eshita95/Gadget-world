import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-orange-500">
          <div className="footer p-10  text-white ">
            <div className=" text-left">
              <div>
                <h1 className=" text-2xl font-[800] title-style ">Gadget World</h1>
              </div>
              <div>
                <h2 className=" text-[15px] font-semibold">
                  Created by <span>Eshita Islam</span>
                </h2>
                <h3 className=" text-[14px] font-medium">
                  FrontEnd WebDeveloper
                </h3>
              </div>
              <div>
                <h4>
                  <span>Phone: </span>
                  <span>+88-01774xxxxxx</span>
                </h4>
                <h4>
                  <span>Email: </span>
                  <span>eshita.islam95@gmail.com</span>
                </h4>
              </div>
            </div>
            <div>
              <span className=" text-white">Services</span>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </div>
            <div>
              <span className=" text-white">Company</span>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Offers</a>
            </div>
            <div>
              <span className="text-white">Follow Us</span>
              <a className="link link-hover flex items-center">
                <span className=" text-xl mr-3">
                  <i className="fa-brands fa-facebook"></i>
                </span>
                <span></span> Facebook
              </a>
              <a className="link link-hover flex items-center">
                <span className=" text-xl mr-3">
                  <i className="fa-brands fa-instagram"></i>
                </span>
                <span>Instagram</span>
              </a>
              <a className="link link-hover flex items-center">
                <span className=" text-xl mr-3">
                  <i className="fa-brands fa-twitter"></i>
                </span>
                <span>Twitter</span>
              </a>
              <a className="link link-hover flex items-center">
                <span className=" text-xl mr-3">
                  <i className="fa-brands fa-youtube"></i>
                </span>
                <span>Youtube</span>
              </a>
            </div>
          </div>
          <footer className="footer footer-center font-semibold text-lg text-white pb-5">
            <div>
              <p>
                Copyright © 2022 - All right reserved by{" "}
                <span className=" cursor-pointer font-semibold text-lg ">
                  Gadget World
                </span>
              </p>
            </div>
          </footer>
        </footer>
      );
    };

export default Footer;