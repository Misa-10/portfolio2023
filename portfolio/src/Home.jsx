import React, { useState } from 'react';
import LogoAlteriade from './Assets/img/Alteriade.jpeg';
import LogoEpitech from './Assets/img/Epitech.jpeg';

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
    // Add more projects as needed
  ];

  return (
    <div className="bg-background w-screen h-screen flex flex-row items-center">
      <div className="flex-grow flex flex-col items-center p-8">
        <h1 id="name" className="text-custom text-6xl font-bold">
          Quentin Brenas
        </h1>
        <p id="work" className="text-custom text-2xl mt-12">
          Développeur Full Stack Web & Mobile
        </p>
        <p id="language" className="text-text2 text-lg mt-4">
          PHP - React - Javascript - CSS - Laravel - Tailwind CSS - Git
        </p>
        <p
          id="about"
          className={`text-custom text-2xl mt-8 ${showAbout && 'text-3xl'}`}
          onMouseEnter={toggleAbout}
          style={{ cursor: 'pointer' }}
        >
          A propos de moi
        </p>
        <div className="w-1/4 h-2 bg-gradient-to-r from-accent to-primary mt-2 rounded-full"></div>
        <p
          id="experience"
          className={`text-custom text-2xl mt-8 ${
            showExperience && 'text-3xl'
          }`}
          onMouseEnter={toggleExperience}
          style={{ cursor: 'pointer' }}
        >
          Expérience
        </p>
        <div className="w-1/4 h-2 bg-gradient-to-r from-accent to-primary mt-2 rounded-full"></div>
        <p
          id="projects"
          className={`text-custom text-2xl mt-8 ${showProjects && 'text-3xl'}`}
          onMouseEnter={toggleProjects}
          style={{ cursor: 'pointer' }}
        >
          Projets
        </p>
        <div className="w-1/4 h-2 bg-gradient-to-r from-accent to-primary mt-2 rounded-full"></div>
      </div>
      {showAbout && (
        <div className="w-1/2 p-8 flex animate-fade-left animate-once animate-delay-250">
          <p id="description" className="text-custom text-lg">
            Mon parcours a débuté avec ma quête d&#39;optimisation des tâches
            dans un jeu, lorsque j&#39;ai commencé à apprendre la programmation
            de manière autodidacte en créant un bot pixel avec Autoit. Cette
            aventure a constitué mes premiers pas dans le monde du code. <br />
            <br /> Plus tard, j&#39;ai rejoint l&#39;école EPITECH pour une
            durée de deux ans, au cours de laquelle j&#39;ai participé à de
            nombreux projets variés, utilisant divers langages de programmation.
            Durant ma deuxième année à EPITECH, j&#39;ai eu l&#39;opportunité de
            réaliser une année d&#39;alternance chez Alteriade, une agence
            spécialisée dans le conseil en communication et le fundraising.{' '}
            <br />
            <br /> L&#39;expérience acquise chez Alteriade, ainsi que les
            compétences développées à EPITECH, m&#39;ont préparé à me lancer en
            tant que freelance aujourd&#39;hui !
          </p>
        </div>
      )}
      {showExperience && (
        <div className="w-1/2 p-8 animate-fade-left animate-once animate-delay-250 relative ">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`mb-8 relative overflow-hidden  rounded-lg bg-bglow`}
            >
              <div className="experience-gradient top-right"></div>
              <div className="experience-gradient bottom-left"></div>
              <div className="p-4 rounded-lg flex relative z-10">
                <div className="mr-4 flex-shrink-0">
                  <img
                    src={experience.logo}
                    alt={`Experience Logo ${index + 1}`}
                    className="w-14 h-14 rounded-full"
                  />
                </div>
                <div>
                  <div className="text-xl text-white">{experience.title}</div>
                  <div className="text-text2 text-lg mt-2 text-white">
                    {experience.date}
                  </div>
                  <div className="text-lg text-left mt-4 text-white">
                    {experience.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {showProjects && (
        <div className="w-1/2 p-8 animate-fade-left animate-once animate-delay-250 ">
          {projects.map((project, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-custom text-2xl font-bold">{project.name}</h2>
              <p className="text-text2 text-lg mt-2">{project.description}</p>

              {project.buttons.map(
                (button, buttonIndex) =>
                  button.show && (
                    <a
                      key={buttonIndex}
                      href={button.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 bg-gradient-to-r from-accent to-primary text-white px-3 py-2 rounded-md text-sm mr-3"
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
