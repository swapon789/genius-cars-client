import React from 'react';
import logo from '../../../assets/logo.svg'
import { FaFacebook, FaGoogle, FaLinkedin, FaTwitter, IconName } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer p-32 bg-black text-white">
            <div>
                <img src={logo} alt="" />
                <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
                <div className='flex'>
                    <FaFacebook className='mx-1 w-6 h-5 rounded-full'></FaFacebook>
                    <FaTwitter className='mx-1 w-6 h-5 rounded-full'></FaTwitter>
                    <FaGoogle className='mx-1 w-6 h-5 rounded-full'></FaGoogle>
                    <FaLinkedin className='mx-1 w-6 h-5 rounded-full'></FaLinkedin>
                </div>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a href="/" className="link link-hover">Branding</a>
                <a href="/" className="link link-hover">Design</a>
                <a href="/" className="link link-hover">Marketing</a>
                <a href="/" className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a href="/" className="link link-hover">About us</a>
                <a href="/" className="link link-hover">Contact</a>
                <a href="/" className="link link-hover">Jobs</a>
                <a href="/" className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a href="/" className="link link-hover">Terms of use</a>
                <a href="/" className="link link-hover">Privacy policy</a>
                <a href="/" className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;