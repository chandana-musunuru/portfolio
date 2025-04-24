// About.jsx
import React from 'react';
import wavingHand from '../assets/wave.gif';

const About = () => (
  <section id="about" className="min-h-[80vh] flex flex-col justify-center items-center px-8 py-12 text-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
    <div className="flex items-center gap-2 mb-4 animate-fade">
      <h2 className="text-3xl sm:text-4xl font-bold">Hi all, I'm Chandana</h2>
      <img src={wavingHand} alt="Waving hand" className="w-20 h-20" />
    </div>
    <p className="text-xl max-w-3xl leading-relaxed mt-4">
      A passionate <span className="text-blue-600 dark:text-yellow-300 font-semibold">Full Stack Software Engineer & Developer</span> with hands-on experience in Java, C#, React, HTML and more.
    </p>
    <p className="text-lg max-w-3xl mt-6 text-gray-700 dark:text-gray-300 italic">
      “I love creating beautiful, user-friendly experiences and bringing ideas to life through clean, efficient code.”
    </p>
  </section>
);

export default About;
