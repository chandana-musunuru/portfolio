import React, { useState, useEffect, useRef } from 'react';
import csusbLogo from '../assets/csusb.png';
import jntukLogo from '../assets/Jntuk.png';
import subjectImage from '../assets/logo.gif';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';

const subjectList = [
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
];

const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
};

const Education = () => {
  const [showSubjects, setShowSubjects] = useState(false);
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
      id="education"
      className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-16"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-blue-600 dark:text-white">
          Journey Through Academia
        </h2>

        <motion.div
          ref={ref}
          className="space-y-8 pl-[8%]"
          initial="hidden"
          animate={controls}
          variants={{ show: { transition: { staggerChildren: 0.3 } } }}
        >
          {/* Master's Card */}
          <motion.div
            variants={fadeInVariant}
            className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-500"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={csusbLogo}
                alt="CSUSB Logo"
                className="w-24 h-24 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">Master’s in Computer Science</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  California State University, San Bernardino · Aug 2023 - May 2025
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
              <div className="flex flex-col md:flex-row gap-0 mt-2 items-start pl-10">
                <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                  <img
                    src={subjectImage}
                    alt="Subjects"
                    className="w-25 h-auto object-contain rounded-lg shadow-md"
                  />
                </div>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 space-y-2 w-full md:w-2/3">
                  {subjectList.map((subject, idx) => (
                    <li key={idx}>{subject}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>

          {/* Bachelor's Card */}
          <motion.div
            variants={fadeInVariant}
            className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-500"
          >
            <div className="flex items-center gap-4">
              <img
                src={jntukLogo}
                alt="JNTUK Logo"
                className="w-26 h-24 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">Bachelor’s in Computer Science</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Jawaharlal Nehru Technological University, Kakinada · 2017 - 2021
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
