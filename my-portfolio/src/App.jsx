import React, { useState, useEffect } from 'react';
import './index.css';
import wavingHand from './assets/wave.gif';
import csusbLogo from './assets/csusb.png';
import jntukLogo from './assets/Jntuk.png';
import subjectImage from './assets/logo.gif';
import rabbit from './assets/rabb.gif';
import { TypeAnimation } from 'react-type-animation';
import { motion, useAnimation } from 'framer-motion';
import { useRef} from 'react';
import { useInView } from 'framer-motion';

const responsibilities = [
  'Designed and built scalable RESTful APIs using Java and Spring Boot to support high-volume backend systems',
  'Collaborated daily with cross-functional Agile teams including QA, designers, and PMs to deliver business requirements',
  'Managed microservices deployments, handled production issues, and ensured system stability across releases',
  'Wrote complex SQL queries and optimized database interactions for performance and reliability',
  'Implemented unit and integration tests with JUnit and Mockito, ensuring code quality and regression safety',
  'Used Git for version control, Jira for task tracking, and worked in CI/CD pipelines to streamline delivery',
];

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 24,
    },
  },
};


function App() {
  const sections = ['About', 'Experience', 'Education', 'Projects', 'Skills', 'Contact'];
  const [isDark, setIsDark] = useState(false);
  const [showSubjects, setShowSubjects] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    isDark ? root.classList.add('dark') : root.classList.remove('dark');
  }, [isDark]);

  return (
    <div className="flex flex-col min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      {/* Header */}
      {/* Header */}
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
            href="/resume.pdf"
            download
            className="bg-white text-blue-600 px-5 sm:px-6 py-2 rounded-full font-bold hover:bg-green-500 hover:text-white transition text-sm sm:text-base"
          >
            Download Resume
          </a>
        </div>
      </div>




      {/* Sections */}
      <div>
        {sections.map((section) => {
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
                  A passionate{' '}
                  <span className="text-blue-600 dark:text-yellow-300 font-semibold">
                    Full Stack Software Engineer & Developer
                  </span>{' '}
                  with hands-on experience in building web and mobile applications using technologies
                  like <span className="font-medium"> Java, C#, React, HTML</span>, and other cool
                  libraries & frameworks.
                </p>
                <p className="text-lg max-w-3xl mt-6 text-gray-700 dark:text-gray-300 italic">
                  “I love creating beautiful, user-friendly experiences and bringing ideas to life
                  through clean, efficient code. I'm always excited to learn, grow, and collaborate
                  on awesome projects.”
                </p>
              </section>
            );
          }

          if (section === 'Experience') {
            const controls = useAnimation();
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true });

            useEffect(() => {
              if (isInView) {
                controls.start('show');
              }
            }, [isInView, controls]);

            return (
              <section
                id="experience"
                className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-16"
              >
                <div className="max-w-7xl mx-auto">
                  {/* Top Heading */}
                  <h2 className="text-4xl font-bold mb-10 text-blue-600 dark:text-yellow-300">
                    Software Journey
                  </h2>
                  <h4 className="text-lg font-m mb-10 text-black-600 dark:text-yellow-300">
                    <i>
                      "Building scalable enterprise solutions with Java, Spring Boot, and modern web technologies—
                      building everything from backend APIs to dynamic User Interfaces"
                    </i>
                  </h4>

                  {/* Content Row */}
                  <div className="pl-[8%] space-y-1">
                    {/* Experience Card */}
                    <div className="rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 overflow-hidden border border-gray-300 dark:border-gray-700 bg-blue-400 dark:bg-white-700 p-8">
                      <div className="flex items-center gap-4">
                        <img
                          src="https://logo.clearbit.com/cognizant.com"
                          alt="Cognizant Logo"
                          className="w-14 h-14 object-contain rounded"
                        />
                        <div>
                          <h3 className="text-2xl font-bold text-white">
                            Full Stack Java Developer
                          </h3>
                          <p className="text-m text-white">Cognizant · Oct 2021 - Aug 2023</p>
                        </div>
                      </div>
                    </div>

                    {/* Animated Responsibilities */}
                    <div
                      ref={ref}
                      className="bg-white bg-opacity-95 dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-2 border-gray-300 dark:border-gray-700 space-y-3"

                    >
                      <motion.ul
                        className="list-disc pl-6 space-y-3 text-lg text-gray-800 dark:text-gray-100"
                        variants={container}
                        initial="hidden"
                        animate={controls}
                      >
                        {responsibilities.map((line, index) => (
                          <motion.li key={index} variants={item}>
                            {line}
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>
                  </div>
                </div>
              </section>
            );
          }


          if (section === 'Education') {
            return (
              <section
                key={section}
                id="education"
                className="min-h-[80vh] bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white px-0 py-16 flex items-start justify-center"
              >
                <div className="w-full max-w-7xl flex">
                  <div className="w-[30%] flex items-start justify-start pl-6">
                    <h2 className="text-4xl font-bold text-blue-600 dark:text-yellow-300">
                      Journey Through Academia
                    </h2>
                  </div>
                  <div className="w-[70%] pr-4 space-y-10">
                    <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-500">
                      <div className="flex items-center gap-4 mb-4">
                        <img src={csusbLogo} alt="CSUSB Logo" className="w-24 h-24 object-contain" />
                        <div>
                          <h3 className="text-xl font-bold">Master’s in Computer Science</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            California State University,<br></br> San Bernardino · Aug 2023 - May 2025
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <button
                          onClick={() => setShowSubjects(!showSubjects)}
                          className="mt-2 mb-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition"
                        >
                          {showSubjects ? 'Hide Subjects' : 'What I Learned'}
                        </button>
                      </div>
                      {showSubjects && (
                        <div className="flex flex-col md:flex-row gap-6 mt-4 items-start">
                          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                            <img
                              src={subjectImage}
                              alt="What I learned illustration"
                              className="w-25 h-auto object-contain rounded-lg shadow-md"
                            />
                          </div>
                          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 space-y-2 w-full md:w-2/3">
                            {[
                              'Theory of Algorithms and Analysis',
                              'Computation and Complexity Theory',
                              'Operating System',
                              'Modern Computer Architecture',
                              'Software Engineering',
                              'Artificial Intelligence',
                              'Machine Learning',
                              'Numerical Computation',
                              'Database Systems',
                              'Graduate Independent Study',
                            ].map((subject, idx) => (
                              <li key={idx}>{subject}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-500">
                      <div className="flex items-center gap-4">
                        <img src={jntukLogo} alt="JNTUK Logo" className="w-24 h-24 object-contain" />
                        <div>
                          <h3 className="text-xl font-bold">Bachelor’s in Computer Science</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            Jawaharlal Nehru Technological University,<br /> Kakinada · 2017 - 2021
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          }

          if (section === 'Projects') {
            return (
              <section
                key={section}
                id="projects"
                className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-16"
              >
                <div className="max-w-7xl mx-auto">
                  {/* Top Heading */}
                  <h2 className="text-4xl font-bold mb-10 text-blue-600 dark:text-yellow-300">My Projects</h2>

                  {/* Project Cards Row */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Project 1 */}
                    <div className="rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 overflow-hidden border border-gray-300 dark:border-gray-700">
                      {/* Top 15% – Title */}
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-center py-4 flex items-center justify-center">

                        <img src={rabbit} alt="rabbit Logo" className="w-20 h-20 object-contain mr-4" />
                        {/* Title */}
                        <h3 className="text-lg font-semibold">Rapid Multiplication</h3>
                      </div>
                      {/* Bottom 85% – Details */}
                      <div className="bg-white dark:bg-gray-800 p-4 space-y-2 h-[85%]">
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          A fun Android game built using <strong>Unity</strong> and <strong>C#</strong> to teach kids multiplication.
                        </p>
                        <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                          <li>🔊 Voice via Microsoft TTS</li>
                          <li>🐰 Animated rabbit mascot</li>
                          <li>💾 SQL DB for progress tracking</li>
                          <li>🌐 WebGL + Azure Functions</li>
                          <li>⚙️ Custom avatar & settings</li>
                        </ul>
                        <a
                          href="https://www.amazon.com/gp/product/B0CZGFDSH5"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700"
                        >
                          View on Amazon
                        </a>
                      </div>
                    </div>

                    {/* Project 2 */}
                    <div className="rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 overflow-hidden border border-gray-300 dark:border-gray-700">
                      {/* Top 15% – Title */}
                      <div className="bg-gray-800 text-white text-center py-4">
                        <h3 className="text-lg font-semibold">🧠 Mental Health Analysis</h3>
                      </div>
                      {/* Bottom 85% – Details */}
                      <div className="bg-white dark:bg-gray-800 p-4 space-y-2 h-[85%]">
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          A deep learning model analyzes social media text to detect mental health issues using <strong>NLP</strong>.
                        </p>
                        <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                          <li>💬 Sentiment classification</li>
                          <li>🧪 Preprocessing with NLTK, spaCy</li>
                          <li>🤖 LSTM-based model in TensorFlow</li>
                          <li>📊 Dataset from Kaggle</li>
                        </ul>
                      </div>
                    </div>

                    {/* Project 3 */}
                    <div className="rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 overflow-hidden border border-gray-300 dark:border-gray-700">
                      {/* Top 15% – Title */}
                      <div className="bg-gray-800 text-white text-center py-4">
                        <h3 className="text-lg font-semibold">🚧 More Coming Soon</h3>
                      </div>
                      {/* Bottom 85% – Details */}
                      <div className="bg-white dark:bg-gray-800 p-4 space-y-2 h-[85%]">
                        <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                          Stay tuned for more exciting projects and innovations!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          }


          return (
            <section
              key={section}
              id={section.toLowerCase()}
              className="min-h-[80vh] flex items-center justify-center bg-gray-300 dark:bg-gray-700 text-black dark:text-white"
            >
              <h2 className="text-3xl">{section} Section</h2>
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default App;
