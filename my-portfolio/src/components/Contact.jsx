import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="min-h-[10vh] flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-700 text-black dark:text-white px-6 py-12">
      <h2 className="text-4xl font-bold mb-10 text-blue-600 dark:text-white">Get in Touch</h2>

      <div className="flex flex-wrap gap-10 justify-center">
        {/* GitHub */}
        <a
          href="https://github.com/chandana-musunuru"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
        >
          <div className="bg-white dark:bg-gray-800 p-4 rounded-full shadow-md">
            <FaGithub className="text-4xl text-black dark:text-white" />
          </div>
          <span className="mt-2 text-sm font-medium">GitHub</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/chandana-musunuru-1888a620b/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
        >
          <div className="bg-white dark:bg-gray-800 p-4 rounded-full shadow-md">
            <FaLinkedin className="text-4xl text-blue-600" />
          </div>
          <span className="mt-2 text-sm font-medium">LinkedIn</span>
        </a>

        {/* Gmail */}
        <a
          href="mailto:chandanamusunuru.csusb@gmail.com"
          className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
        >
          <div className="bg-white dark:bg-gray-800 p-4 rounded-full shadow-md">
            <FaEnvelope className="text-4xl text-red-500" />
          </div>
          <span className="mt-2 text-sm font-medium">Email</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
