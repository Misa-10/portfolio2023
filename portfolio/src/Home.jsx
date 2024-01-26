import React, { useState } from 'react';
import LogoAlteriade from './Assets/img/Alteriade.jpeg';
import LogoEpitech from './Assets/img/Epitech.jpeg';
import CVFR from './Assets/CVFR.pdf';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function Home() {
  const [showAbout, setShowAbout] = useState(true);
  const [showExperience, setShowExperience] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  const toggleAbout = () => {
    setCurrentGradient(gradientColors.about);
    setShowAbout(true);
    setShowExperience(false);
    setShowProjects(false);
  };

  const toggleExperience = () => {
    setCurrentGradient(gradientColors.experience);
    setShowAbout(false);
    setShowExperience(true);
    setShowProjects(false);
  };

  const toggleProjects = () => {
    setCurrentGradient(gradientColors.projects);
    setShowAbout(false);
    setShowExperience(false);
    setShowProjects(true);
  };

  const { t } = useTranslation();

  const experiences = [
    {
      logo: LogoAlteriade,
      title: t('experiences.0.title'),
      date: t('experiences.0.date'),
      description: t('experiences.0.description'),
    },
    {
      logo: LogoEpitech,
      title: t('experiences.1.title'),
      date: t('experiences.1.date'),
      description: t('experiences.1.description'),
    },
  ];

  const projects = t('projects', { returnObjects: true });

  const gradientColors = {
    about: 'from-accent to-primary',
    experience: 'from-yellow to-lightyellow',
    projects: 'from-blue to-lightblue',
  };

  const [currentGradient, setCurrentGradient] = useState(gradientColors.about);

  return (
    <div className="bg-background min-h-screen flex flex-col lg:flex-row items-center justify-center overflow-y-auto overflow-x-hidden">
      <div className="flex flex-col items-center p-4">
        <div className="flex-grow flex flex-col items-center p-8 animate-fade animate-once animate-delay-[300ms]">
          <h1 id="name" className="text-custom sm:text-6xl text-4xl font-bold">
            {t('name')}
          </h1>
          <p id="work" className="text-custom sm:text-2xl text-xl mt-12">
            {t('work')}
          </p>
          <p id="language" className="text-text2 sm:text-lg text-base mt-4">
            {t('language')}
          </p>
          <div className="flex items-center space-x-4 mt-4 ">
            {/* GitHub Icon */}
            <a
              href="https://github.com/misa-10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={32} color="#fff" />
            </a>
            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/quentin-brenas-b31392230/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4"
            >
              <FaLinkedin size={32} color="#0077b5" />
            </a>
          </div>
          <p
            id="about"
            className={`text-custom mt-8 ${
              showAbout && 'sm:text-3xl text-2xl'
            } ${!showAbout && 'sm:text-2xl text-xl'}`}
            onMouseEnter={toggleAbout}
            style={{ cursor: 'pointer' }}
          >
            {t('aboutToggle')}
          </p>
          <div
            className={` w-1/4 h-2  mt-2 rounded-full bg-gradient-to-r ${currentGradient} `}
          ></div>
          <p
            id="experience"
            className={`text-custom mt-8 ${
              showExperience && 'sm:text-3xl text-2xl'
            } ${!showExperience && 'sm:text-2xl text-xl'}`}
            onMouseEnter={toggleExperience}
            style={{ cursor: 'pointer' }}
          >
            {t('experienceToggle')}
          </p>
          <div
            className={`w-1/4 h-2  mt-2 rounded-full bg-gradient-to-r ${currentGradient} `}
          ></div>
          <p
            id="projects"
            className={`text-custom mt-8 ${
              showProjects && 'sm:text-3xl text-2xl'
            } ${!showProjects && 'sm:text-2xl text-xl'}`}
            onMouseEnter={toggleProjects}
            style={{ cursor: 'pointer' }}
          >
            {t('projectsToggle')}
          </p>
          <div
            className={`w-1/4 h-2  mt-2 rounded-full bg-gradient-to-r ${currentGradient} `}
          ></div>
        </div>
      </div>
      {showAbout && (
        <div className="lg:w-1/2 w-10/12 p-8 animate-fade-left animate-once animate-delay-250">
          <div className="flex flex-col items-center mb-4">
            <h2 className="text-custom sm:text-2xl text-xl font-bold">
              {t('aboutMe')}
            </h2>
            <div className="w-16 h-2 bg-gradient-to-r from-accent to-primary mt-2 rounded-full"></div>
          </div>
          <p
            id="description"
            className="text-custom sm:text-lg text-base sm:text-center text-left"
          >
            {t('textAboutMe1')} <br />
            <br /> {t('textAboutMe2')}
            <br />
            <br />
            {t('textAboutMe3')}
          </p>
          <p
            id="learn-more"
            className="text-custom mt-4 sm:text-lg text-base underline cursor-pointer hover:text-accent transition-colors duration-300"
            onMouseEnter={toggleAbout}
            style={{ cursor: 'pointer' }}
          >
            <a href={CVFR} target="_blank" rel="noopener noreferrer">
              {t('learnMoreButton')}
            </a>
          </p>
        </div>
      )}
      {showExperience && (
        <div className="w-3/4 lg:w-1/2 sm:p-8 animate-fade-left animate-once animate-delay-250 relative ">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`mb-8 relative overflow-hidden  rounded-lg bg-bglow`}
            >
              <div className="experience-gradient top-right"></div>
              <div className="experience-gradient bottom-left"></div>
              <div className="p-4 rounded-lg flex relative z-10 lg:flex-row flex-col lg:items-start items-center">
                <div className="mr-4 flex-shrink-0 lg:mb-O mb-3">
                  <img
                    src={experience.logo}
                    alt={`Experience Logo ${index + 1}`}
                    className="w-14 h-14 rounded-full"
                  />
                </div>
                <div>
                  <div className="sm:text-xl text-lg text-white sm:text-center text-left">
                    {experience.title}
                  </div>
                  <div className="text-text2 sm:text-lg text-base mt-2 text-white sm:text-center text-left">
                    {experience.date}
                  </div>
                  <div className="sm:text-lg text-base mt-4 text-white sm:text-center text-left">
                    {experience.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {showProjects && (
        <div className="lg:w-1/2 w-10/12 p-8 animate-fade-left animate-once animate-delay-250 lg:max-h-screen lg:overflow-y-auto">
          {projects.map((project, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-custom sm:text-2xl text-xl font-bold sm:text-center text-left">
                {project.name}
              </h2>
              <p className="text-text2 sm:text-lg text-base sm:text-center text-left mt-2 sm:mb-0 mb-2">
                {project.description}
              </p>

              {project.buttons.map(
                (button, buttonIndex) =>
                  button.show && (
                    <a
                      key={buttonIndex}
                      href={button.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-3 text-white px-3 py-2 rounded-md sm:text-sm text-xs mr-3 bg-gradient-to-r ${currentGradient} `}
                    >
                      {button.text}
                    </a>
                  ),
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
