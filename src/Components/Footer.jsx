import React from 'react';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-[#3D3B40] text-white p-10">
            <aside className='pt-8'>
                <div className='bg-linear-to-r from-cyan-300 via-blue-600 to-sky-300 bg-clip-text text-transparent'>
                    <a className="text-2xl lg:text-3xl font-bold">WinterPetCare</a>
                </div>
                <p>
                    Providing reliable Sensitive Protection for pet
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;