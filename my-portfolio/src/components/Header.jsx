// Header.jsx
import React from 'react';

const Header = ({ isDark, setIsDark }) => {
  const sections = ['About', 'Experience', 'Education', 'Projects', 'Skills', 'Contact'];
  return (
    <div className="h-[20vh] bg-blue-600 text-white flex flex-col justify-between shadow-md dark:bg-gray-800">
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 pt-4 gap-4">
        <h6 className="text-3xl sm:text-4xl text-white font-bold italic font-serif text-center sm:text-left">
          Chandana Musunuru
        </h6>
        <div className="flex flex-wrap justify-center gap-2 items-center">
          {sections.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="bg-blue-600 px-3 sm:px-4 py-1.5 rounded-md text-sm sm:text-base font-semibold hover:bg-green-500 hover:text-white transition"
            >
              {item}
            </a>
          ))}
          <button
            onClick={() => setIsDark(!isDark)}
            className="px-3 sm:px-4 py-1.5 bg-white text-blue-600 dark:bg-gray-700 dark:text-yellow-300 rounded-md font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition text-sm sm:text-base"
          >
            {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </div>
      <div className="flex justify-center pb-4">
        <a
          href={`${import.meta.env.BASE_URL}Resume.pdf`}
          download
          type="application/pdf"
          className="bg-white text-blue-600 px-5 sm:px-6 py-2 rounded-full font-bold hover:bg-green-500 hover:text-white transition text-sm sm:text-base"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Header;
