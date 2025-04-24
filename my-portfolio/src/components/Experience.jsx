// Experience.jsx
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';

const responsibilities = [
  'Designed and built scalable RESTful APIs using Java and Spring Boot to support high-volume backend systems',
  'Collaborated daily with cross-functional Agile teams including QA, designers, and PMs to deliver business requirements',
  'Managed microservices deployments, handled production issues, and ensured system stability across releases',
  'Wrote complex SQL queries and optimized database interactions for performance and reliability',
  'Implemented unit and integration tests with JUnit and Mockito, ensuring code quality and regression safety',
  'Used Git for version control, Jira for task tracking, and worked in CI/CD pipelines to streamline delivery',
];

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

const Experience = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('show');
    }
  }, [isInView, controls]);

  return (
    <section id="experience" className="min-h-screen bg-gray-120 dark:bg-gray-900 text-gray-800  px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-blue-600 dark:text-white">Software Journey</h2>
        <h4 className="text-lg font-m mb-10 text-black-600 dark:text-yellow-300 italic">
          "Building scalable enterprise solutions with Java, Spring Boot, and modern web technologies."
        </h4>
        <div className="pl-[8%] space-y-1">
          <div className="rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 overflow-hidden border border-gray-300 dark:border-gray-700 bg-blue-400 dark:bg-white-700 p-8">
            <div className="flex items-center gap-4">
              <img
                src="https://logo.clearbit.com/cognizant.com"
                alt="Cognizant Logo"
                className="w-14 h-14 object-contain rounded"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">Full Stack Java Developer</h3>
                <p className="text-m text-white">Cognizant · Oct 2021 - Aug 2023</p>
              </div>
            </div>
          </div>

          <div ref={ref} className="bg-white bg-opacity-95 dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-2 border-gray-300 dark:border-gray-700 space-y-3">
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
};

export default Experience;