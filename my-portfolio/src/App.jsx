import React, { useState, useEffect } from 'react';
import './index.css';
import wavingHand from './assets/wave.gif';

function App() {
  const sections = ['About', 'Experience', 'Education', 'Projects', 'Skills', 'Contact'];
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    isDark ? root.classList.add('dark') : root.classList.remove('dark');
  }, [isDark]);

  return (
    <div className="flex flex-col min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      {/* Header */}
      <div className="h-[20vh] bg-blue-600 text-white flex flex-col justify-between shadow-md dark:bg-gray-800">
        <div className="flex justify-between items-center px-8 pt-4">
          <h3 className="text-4xl font-bold italic">Chandana Musunuru</h3>

          <div className="flex gap-4 items-center">
            {sections.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="bg-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-green-500 hover:text-white transition"
              >
                {item}
              </a>
            ))}
            {/* Toggle Theme */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="ml-4 px-4 py-2 bg-white text-blue-600 dark:bg-gray-700 dark:text-yellow-300 rounded-md font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition"
            >
              {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>
        </div>

        <div className="flex justify-center pb-4">
          <a
            href="/resume.pdf"
            download
            className="bg-white text-blue-600 px-6 py-2 rounded-full font-bold hover:bg-green-500 hover:text-white transition"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Sections */}
      <div>
        {sections.map((section, index) => {
          if (section === 'About') {
            return (
              <section
                key={section}
                id="about"
                className="min-h-[80vh] flex flex-col justify-center items-center px-8 py-12 text-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white"
              >
                <div className="flex items-center gap-2 mb-4 animate-fade">
                  <h2 className="text-3xl sm:text-4xl font-bold">Hi all, I'm Chandana </h2>
                  <img src={wavingHand} alt="Waving hand" className="w-10 h-10" />
                </div>

                <p className="text-xl max-w-3xl leading-relaxed mt-4">
                  A passionate <span className="text-blue-600 dark:text-yellow-300 font-semibold">Full Stack Software Engineer & Developer</span> with hands-on experience in building web and mobile applications using technologies like
                  <span className="font-medium"> Java, C#, React, HTML</span>, and other cool libraries & frameworks.
                </p>

                <p className="text-lg max-w-3xl mt-6 text-gray-700 dark:text-gray-300 italic">
                  “I love creating beautiful, user-friendly experiences and bringing ideas to life through clean, efficient code.
                  I'm always excited to learn, grow, and collaborate on awesome projects.”
                </p>
              </section>
            );
          }

          if (section === 'Experience') {
            return (
              <section
                key={section}
                id="experience"
                className="min-h-[80vh] bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white flex flex-col items-center justify-center px-6 py-12"
              >
                <div className="max-w-4xl w-full bg-blue-400 dark:bg-gray-700 p-8 rounded-lg shadow-lg transition">
                  <div className="flex items-center gap-4 mb-0">
                    <img
                      src="https://logo.clearbit.com/cognizant.com"
                      alt="Cognizant Logo"
                      className="w-16 h-16 object-contain rounded"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-white">Full Stack Java Developer</h3>
                      <p className="text-sm text-gray-200">Cognizant · Oct 2021 - Aug 2023</p>
                    </div>
                  </div>
                </div>

                <div className="max-w-4xl w-full bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg transition">
                  <ul className="list-disc pl-6 space-y-3 text-lg text-gray-800 dark:text-gray-100">
                    {[ 
                      "Designed and built scalable RESTful APIs using Java and Spring Boot to support high-volume backend systems",
                      "Collaborated daily with cross-functional Agile teams including QA, designers, and PMs to deliver business requirements",
                      "Managed microservices deployments, handled production issues, and ensured system stability across releases",
                      "Wrote complex SQL queries and optimized database interactions for performance and reliability",
                      "Implemented unit and integration tests with JUnit and Mockito, ensuring code quality and regression safety",
                      "Used Git for version control, Jira for task tracking, and worked in CI/CD pipelines to streamline delivery"
                    ].map((point, idx) => (
                      <li
                        key={idx}
                        className="transition duration-300 ease-in-out hover:bg-blue-100 dark:hover:bg-gray-600 px-3 py-2 rounded-md cursor-pointer"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            );
          }

          return (
            <section
              key={section}
              id={section.toLowerCase()}
              className={`min-h-[80vh] flex items-center justify-center text-4xl font-bold ${
                index % 2 === 0
                  ? 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white'
                  : 'bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white'
              }`}
            >
              {section}
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default App;
