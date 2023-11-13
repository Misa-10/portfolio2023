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
        <div className="w-1/4 h-2 bg-gradient-to-r from-accent to-primary mt-2"></div>
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
        <div className="w-1/4 h-2 bg-gradient-to-r from-accent to-primary mt-2"></div>
        <p
          id="projects"
          className={`text-custom text-2xl mt-8 ${showProjects && 'text-3xl'}`}
          onMouseEnter={toggleProjects}
          style={{ cursor: 'pointer' }}
        >
          Projets
        </p>
        <div className="w-1/4 h-2 bg-gradient-to-r from-accent to-primary mt-2"></div>
      </div>
      {showAbout && (
        <div className="w-1/2 p-8 flex animate-fade-left animate-once animate-delay-250">
          <p id="description" className="text-text2 text-lg">
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
        <div className="w-1/2 p-8 animate-fade-left animate-once animate-delay-250">
          <div id="exp1" className="p-4 rounded-lg mb-4 flex">
            <div className="mr-4 flex-shrink-0">
              <img
                src={LogoAlteriade}
                alt="Image 1"
                className="w-14 h-14 rounded-full"
              />
            </div>
            <div>
              <div className="text-xl">Altériade · Développeur Back-End</div>
              <div className="text-text2 text-lg mt-2">
                Sept 2022 - Nov 2023
              </div>
              <div className="text-lg text-left mt-4">
                Alteriade est une agence conseil spécialisée en collecte de
                fonds et communication, au service des associations et
                fondations.
              </div>
            </div>
          </div>
          <div id="exp2" className="p-4 rounded-lg flex mb-4">
            <div className="mr-4 flex-shrink-0">
              <img
                src={LogoEpitech}
                alt="Image 2"
                className="w-14 h-14 rounded-full"
              />
            </div>
            <div>
              <div className="text-xl">
                Formation EPITECH Webacadémie · Développeur Web & Mobile
              </div>
              <div className="text-text2 text-lg mt-2">Nov 2021 - Nov 2023</div>
              <div className="text-lg text-left mt-4">
                À la Web@cadémie, on apprend en suivant une méthode par projets.
                C’est un modèle dynamique, basé sur l’échange, le travail
                collaboratif et la proximité avec le monde de l’entreprise. On
                teste, on expérimente, on avance, on se trompe… et on
                recommence.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
