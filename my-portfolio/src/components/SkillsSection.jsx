import React from 'react';

const skillsData = {
  "Programming Languages": [
    { name: "Python", icon: "https://cdn.jsdelivr.net/npm/devicon@latest/icons/python/python-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/npm/devicon@latest/icons/java/java-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/npm/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
  ],
  "Frameworks & Technologies": [
    { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/npm/devicon@latest/icons/spring/spring-original.svg" },
    { name: "Microservices", icon: "https://cdn.jsdelivr.net/npm/devicon@latest/icons/docker/docker-original.svg" },
    { name: "RESTful APIs", icon: "https://cdn.jsdelivr.net/npm/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Hibernate", icon: "https://cdn.jsdelivr.net/npm/devicon@latest/icons/hibernate/hibernate-original.svg" },
    { name: "JPA", icon: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Java_Logo.svg" },
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/npm/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
    { name: "Keras", icon: "https://cdn.jsdelivr.net/npm/devicon@latest/icons/keras/keras-original.svg" },
    { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/npm/devicon@latest/icons/scikit/scikit-original.svg" },
  ],
  "Web Technologies": [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/npm/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/npm/devicon@latest/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/npm/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "Angular", icon: "https://cdn.jsdelivr.net/npm/devicon@latest/icons/angularjs/angularjs-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/npm/devicon@latest/icons/react/react-original.svg" },
  ],
  "Cloud Technologies & Databases": [
    { name: "AWS (EC2, S3, RDS)", icon: "https://cdn.jsdelivr.net/npm/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg" },
    { name: "Azure", icon: "https://cdn.jsdelivr.net/npm/devicon@latest/icons/azure/azure-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/npm/devicon@latest/icons/mysql/mysql-original.svg" },
    { name: "Oracle", icon: "https://cdn.jsdelivr.net/npm/devicon@latest/icons/oracle/oracle-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/npm/devicon@latest/icons/postgresql/postgresql-original.svg" },
  ],
  "Tools & IDEs": [
    { name: "Git", icon: "https://cdn.jsdelivr.net/npm/devicon@latest/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/npm/devicon@latest/icons/github/github-original.svg" },
    { name: "IntelliJ IDEA", icon: "https://cdn.jsdelivr.net/npm/devicon@latest/icons/intellij/intellij-original.svg" },
    { name: "Eclipse", icon: "https://cdn.jsdelivr.net/npm/devicon@latest/icons/eclipse/eclipse-original.svg" },
    { name: "STS", icon: "https://spring.io/images/icon-spring-tool-suite-3f6215ec9e8d0b6f59429ff07ecff5aa.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/npm/devicon@latest/icons/vscode/vscode-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/npm/devicon@latest/icons/docker/docker-original.svg" },
    { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/npm/devicon@latest/icons/kubernetes/kubernetes-plain.svg" },
    { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/npm/devicon@latest/icons/figma/figma-original.svg" },
  ],
  "Testing & DevOps": [
    { name: "JUnit", icon: "https://junit.org/junit5/assets/img/junit5-logo.png" },
    { name: "Mockito", icon: "https://avatars.githubusercontent.com/u/19814958?s=200&v=4" },
    { name: "SonarQube", icon: "https://www.vectorlogo.zone/logos/sonarqube/sonarqube-icon.svg" },
    { name: "Jenkins", icon: "https://cdn.jsdelivr.net/npm/devicon@latest/icons/jenkins/jenkins-original.svg" },
    { name: "Azure DevOps", icon: "https://cdn.worldvectorlogo.com/logos/azure-devops.svg" },
    { name: "JIRA", icon: "https://cdn.worldvectorlogo.com/logos/jira-1.svg" },
    { name: "Confluence", icon: "https://cdn.worldvectorlogo.com/logos/confluence-1.svg" },
  ],
};

const SkillsSection = () => {
    return (
      <div id="skills" className="h-[80vh] flex flex-col px-20 py-10 bg-gray-200 dark:bg-gray-600">
        {/* Top 10% for heading */}
        <div className="h-[10vh] flex items-start justify-start pl-[4%] ">
          <h2 className="text-4xl font-bold text-blue-600 dark:text-white">Skills</h2>
        </div>
  
        {/* Bottom 90% for skill icons */}
        <div className="h-[90vh] flex justify-start items-start pl-[8%] overflow-auto">
          <div className="grid grid-cols-8 sm:grid-cols-10 md:grid-cols-12 lg:grid-cols-14 gap-2">
            {Object.keys(skillsData).flatMap((category) =>
              skillsData[category].map((skill) => (
                <div
                  key={skill.name}
                  className="bg-blue-200 rounded-md p-2 w-20 h-20 flex items-center justify-center hover:scale-105 transition-transform duration-200 shadow-sm text-[10px] text-center"
                  title={skill.name}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-40 h-40 object-contain"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      const textNode = document.createElement('div');
                      textNode.innerText = skill.name;
                      textNode.className = 'text-xs';
                      e.target.parentNode.appendChild(textNode);
                    }}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default SkillsSection;
  