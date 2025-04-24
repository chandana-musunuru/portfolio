// Projects.jsx
import React from 'react';
import rabbit from '../assets/rabb.gif';
import mental from '../assets/mental.jpg';
import segmentation from '../assets/customer.jpg';
import lib from '../assets/lib.png';

const Projects = () => (
  <section id="projects" className="min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white px-6 py-16">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-blue-600 dark:text-white">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Repeat for each project */}
        {/* Rabbit Game */}
        <ProjectCard
          title="Rapid Multiplication"
          description="A fun Android game built using Unity and C# to teach kids multiplication."
          img={rabbit}
          techs={["Voice via Microsoft TTS", "Animated rabbit mascot", "SQL DB", "WebGL", "Custom avatar"]}
          link="https://www.amazon.com/gp/product/B0CZGFDSH5"
        />
        <ProjectCard
          title="Mental Health Analysis"
          description="A deep learning NLP pipeline analyzing social media for mental health clues."
          img={mental}
          techs={["Sentiment classification", "BERT & LSTM models", "Text preprocessing", "Seaborn visuals"]}
          link="https://github.com/chandana-musunuru/MachineLearning.git"
        />
        <ProjectCard
          title="Customer Segmentation"
          description="A clustering ML model segmenting mall customers by behavior."
          img={segmentation}
          techs={["KMeans", "Hierarchical", "Silhouette Score", "Target marketing"]}
          link="https://github.com/chandana-musunuru/MachineLearning.git"
        />
        <ProjectCard
          title="Library Database System"
          description="Python+JS GUI library DB system with MySQL integration."
          img={lib}
          techs={["CRUD + SQL", "Tkinter GUI", "MySQL", "Relational schema"]}
          link="https://github.com/chandana-musunuru/Project_database.git"
        />
      </div>
    </div>
  </section>
);

const ProjectCard = ({ title, description, img, techs, link }) => (
  <div className="rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 overflow-hidden border border-gray-300 dark:border-gray-700">
    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-center py-4 flex items-center justify-center">
      <img src={img} alt={title} className="w-20 h-20 object-contain mr-4" />
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <div className="bg-white dark:bg-gray-800 p-4 space-y-2 h-[85%]">
      <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>
      <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
        {techs.map((tech, index) => <li key={index}>{tech}</li>)}
      </ul>
      <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">View</a>
    </div>
  </div>
);

export default Projects;
