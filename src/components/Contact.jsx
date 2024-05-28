import emailjs from "@emailjs/browser";
import React, { useState, useRef } from "react";
import Github from "../assets/github-light.svg";
import insta from "../assets/instagram.svg";
import ln from "../assets/linkedin.svg";
import { MdEmail, MdLocalPhone, MdWhatsapp, MdPlace } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ContactSection() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_slbbz6u", "template_en8r82e", form.current, {
        publicKey: "8AAt82Y-yDlRg0CWJ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          console.log(name);
          console.log(message);
          console.log(email);
          
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const notify = () => toast("Sucessfully Submitted!");

  return (
    <div className="py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">
          <div className="bg-gray-900 text-white p-8 rounded-lg">
            <h2 className="text-3xl font-semibold mb-4">Contact Information</h2>
            <div className="mb-4 flex items-center gap-4">
              <MdLocalPhone className="text-3xl" />
              <MdWhatsapp className="text-3xl" />
              <span>+91 9641573710</span>
            </div>

            <div className="mb-4 flex items-center gap-4">
              <MdEmail className="text-3xl" />
              <span>abhijitchakraborty1222@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <MdPlace className="text-3xl" />
              <span>West Bengal, India</span>
            </div>

            <div className="contact-icons flex mt-4">
              <a href="https://www.linkedin.com/in/abhijit02" className=" p-1 mr-2 ">
                <img src={ln} alt="" />
              </a>
              <a href="https://github.com/Abhijit-2002" className="ml-2 p-1 ">
                <img src={Github} className="w-7" />
              </a>
              <a href="#" className="ml-4 p-1 ">
                <img src={insta} alt="" />
              </a>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-gray-900 text-white p-8 rounded-lg">
            <h2 className="text-3xl font-semibold mb-4">Contact Form</h2>
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-xl mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-100 focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-xl mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-100 focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-xl mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-100 focus:outline-none focus:ring focus:border-blue-300"
                ></textarea>
              </div>
              <button
                onClick={notify}
                type="submit"
                value="Send"
                className="py-2 px-6 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300 hover:cursor-pointer"
              >
                Send
                <ToastContainer />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
