import React, { useState } from 'react';
import LogoAlteriade from './Assets/img/Alteriade.jpeg';
import LogoEpitech from './Assets/img/Epitech.jpeg';
import CVFR from './Assets/CVFR.pdf';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons from react-icons

function Home() {
  const [showAbout, setShowAbout] = useState(true);
  const [showExperience, setShowExperience] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  const toggleProjects = () => {
    setShowAbout(false);
    setShowExperience(false);
    setShowProjects(true);
  };

  const toggleAbout = () => {
    setShowAbout(true);
    setShowExperience(false);
    setShowProjects(false);
  };

  const toggleExperience = () => {
    setShowAbout(false);
    setShowExperience(true);
    setShowProjects(false);
  };

  const experiences = [
    {
      logo: LogoAlteriade,
      title: 'Altériade · Développeur Back-End',
      date: 'Sept 2022 - Nov 2023',
      description:
        'Alteriade est une agence conseil spécialisée en collecte de fonds et communication, au service des associations et fondations.',
    },
    {
      logo: LogoEpitech,
      title: 'Formation EPITECH Webacadémie · Développeur Web & Mobile',
      date: 'Nov 2021 - Nov 2023',
      description:
        'À la Web@cadémie, on apprend en suivant une méthode par projets. C’est un modèle dynamique, basé sur l’échange, le travail collaboratif et la proximité avec le monde de l’entreprise. On teste, on expérimente, on avance, on se trompe… et on recommence.',
    },
    // Add more experiences as needed
  ];

  const projects = [
    {
      name: `Bot Discord`,
      description: `J'ai développé un bot Discord en utilisant Node.js et SQLite, offrant une expérience interactive aux joueurs en fournissant des informations détaillées sur n'importe quel objet du jeu. Ce projet vise à faciliter la recherche d'informations sur les objets de manière rapide et efficace, directement au sein de l'environnement Discord.`,
      buttons: [
        { text: 'Voir site', link: 'https://discordbot.com', show: false },
        {
          text: 'Github',
          link: 'https://github.com/Misa-10/Otomai',
          show: true,
        },
      ],
    },
    {
      name: `Scraper d'Informations pour Wakfu.com`,
      description: `J'ai développé un scraper basé sur Python pour extraire des informations et actualisées du site wakfu.com. Ce projet vise à faciliter l'accès aux données du jeu Wakfu en automatisant le processus de récupération d'informations cruciales pour les joueurs.`,
      buttons: [
        { text: 'Voir site', link: 'https://wakfu-scraper.com', show: false },
        {
          text: 'Github',
          link: 'https://github.com/Misa-10/parse-wakfu-site',
          show: true,
        },
        { text: 'Custom Button', link: 'https://customlink.com', show: false },
      ],
    },
    {
      name: `Météo - Pollen - Pollution Application Mobile`,
      description: `Cette application tout-en-un vous offre des prévisions météorologiques précises, le suivi du pollen et des indices de pollution, le tout dans une interface fluide. Développée en Flutter. 

      De plus, recevez des alertes personnalisées : soyez averti lorsqu'il y a un niveau élevé de pollen ou de pollution, et même si vous pratiquez trop de sport dans des conditions défavorables. Vous en permet d'envoyer automatiquement des alertes à un proche.`,

      buttons: [
        { text: 'Voir site', link: 'https://wakfu-scraper.com', show: false },
        {
          text: 'Github',
          link: 'https://github.com/Misa-10/WeatherApp',
          show: true,
        },
        { text: 'Custom Button', link: 'https://customlink.com', show: false },
      ],
    },
  ];

  return (
    <div className="bg-background w-screen min-h-screen flex flex-col lg:flex-row items-center justify-center overflow-y-auto overflow-x-hidden">
      <div className="flex flex-col items-center p-4">
        <div className="flex-grow flex flex-col items-center p-8 animate-fade animate-once animate-delay-[300ms]">
          <h1 id="name" className="text-custom sm:text-6xl text-4xl font-bold">
            Quentin Brenas
          </h1>
          <p id="work" className="text-custom sm:text-2xl text-xl mt-12">
            Développeur Full Stack Web & Mobile
          </p>
          <p id="language" className="text-text2 sm:text-lg text-base mt-4">
            PHP - React - Javascript - HTML/CSS - Laravel - Tailwind CSS -
            Flutter - Git
          </p>
          <div className="flex items-center space-x-4 mt-4">
            {/* GitHub Icon */}
            <a
              href="https://github.com/misa-10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={32} color="#333" />
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
            A propos de moi
          </p>
          <div className="w-1/4 h-2 bg-gradient-to-r from-accent to-primary mt-2 rounded-full"></div>
          <p
            id="experience"
            className={`text-custom mt-8 ${
              showExperience && 'sm:text-3xl text-2xl'
            } ${!showExperience && 'sm:text-2xl text-xl'}`}
            onMouseEnter={toggleExperience}
            style={{ cursor: 'pointer' }}
          >
            Expérience
          </p>
          <div className="w-1/4 h-2 bg-gradient-to-r from-accent to-primary mt-2 rounded-full"></div>
          <p
            id="projects"
            className={`text-custom mt-8 ${
              showProjects && 'sm:text-3xl text-2xl'
            } ${!showProjects && 'sm:text-2xl text-xl'}`}
            onMouseEnter={toggleProjects}
            style={{ cursor: 'pointer' }}
          >
            Projets
          </p>
          <div className="w-1/4 h-2 bg-gradient-to-r from-accent to-primary mt-2 rounded-full"></div>
        </div>
      </div>
      {showAbout && (
        <div className="lg:w-1/2 w-10/12 p-8 animate-fade-left animate-once animate-delay-250">
          <div className="flex flex-col items-center mb-4">
            <h2 className="text-custom sm:text-2xl text-xl font-bold">
              Qui suis-je ?
            </h2>
            <div className="w-16 h-2 bg-gradient-to-r from-accent to-primary mt-2 rounded-full"></div>
          </div>
          <p id="description" className="text-custom sm:text-lg text-base">
            Mon parcours a débuté avec ma quête d&apos;optimisation des tâches
            dans un jeu, lorsque j&apos;ai commencé à apprendre la programmation
            de manière autodidacte en créant un bot pixel avec Autoit. Cette
            aventure a constitué mes premiers pas dans le monde du code. <br />
            <br /> Plus tard, j&apos;ai rejoint l&apos;école EPITECH pour une
            durée de deux ans, au cours de laquelle j&apos;ai participé à de
            nombreux projets variés, utilisant divers langages de programmation.
            Durant ma deuxième année à EPITECH, j&apos;ai eu l&apos;opportunité
            de réaliser une année d&apos;alternance chez Alteriade, une agence
            spécialisée dans le conseil en communication et le fundraising.{' '}
            <br />
            <br /> L&apos;expérience acquise chez Alteriade, ainsi que les
            compétences développées à EPITECH, m&apos;ont préparé à me lancer en
            tant que freelance aujourd&apos;hui !
          </p>
          <p
            id="learn-more"
            className="text-custom mt-4 sm:text-lg text-base underline cursor-pointer hover:text-accent transition-colors duration-300"
            onMouseEnter={toggleAbout}
            style={{ cursor: 'pointer' }}
          >
            <a href={CVFR} target="_blank" rel="noopener noreferrer">
              En savoir plus sur moi
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
                  <div className="sm:text-xl text-lg text-white">
                    {experience.title}
                  </div>
                  <div className="text-text2 sm:text-lg text-base mt-2 text-white">
                    {experience.date}
                  </div>
                  <div className="sm:text-lg text-base lg:text-left text-center mt-4 text-white">
                    {experience.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {showProjects && (
        <div className="lg:w-1/2 w-10/12 p-8 animate-fade-left animate-once animate-delay-250 ">
          {projects.map((project, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-custom sm:text-2xl text-xl font-bold">
                {project.name}
              </h2>
              <p className="text-text2 sm:text-lg text-base mt-2 sm:mb-0 mb-2">
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
                      className="mt-3 bg-gradient-to-r from-accent to-primary text-white px-3 py-2 rounded-md sm:text-sm text-xs mr-3 "
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
