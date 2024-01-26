import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

var userLanguage = navigator.language || navigator.userLanguage;

console.log(userLanguage);

userLanguage == 'fr-FR' ? (userLanguage = 'fr') : (userLanguage = 'en');

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        aboutToggle: 'About Me',
        experienceToggle: 'Experience',
        projectsToggle: 'Projects',
        name: 'Quentin Brenas',
        work: 'Full Stack Web & Mobile Developer',
        language:
          'PHP - React - Javascript - HTML/CSS - Laravel - Tailwind CSS - Flutter - Git',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        aboutMe: 'Who Am I?',
        learnMore: 'Learn more about me',
        textAboutMe1: `My journey began with my quest to optimize tasks in a game, when I started learning programming on my own by creating a pixel bot with Autoit. This adventure marked my first steps into the coding world.`,
        textAboutMe2: `Later, I joined EPITECH school for a duration of two years, during which I participated in numerous diverse projects, using various programming languages. In my second year at EPITECH, I had the opportunity to complete an internship at Alteriade, an agency specialized in communication consulting and fundraising.`,
        textAboutMe3: `The experience gained at Alteriade, along with the skills developed at EPITECH, prepared me to embark on my freelance journey today!`,
        learnMoreButton: 'Learn more about me',
        experiences: [
          {
            title: 'Alteriade · Back-End Developer',
            date: 'Sept 2022 - Nov 2023',
            description:
              'Alteriade is a consulting agency specializing in fundraising and communication, serving associations and foundations.',
          },
          {
            title: 'EPITECH Webacademy · Web & Mobile Developer',
            date: 'Nov 2021 - Nov 2023',
            description:
              'At Web@cademy, we learn by following a project-based method. It is a dynamic model based on exchange, collaborative work, and proximity to the business world. We test, experiment, move forward, make mistakes... and start again.',
          },
        ],

        projects: [
          {
            name: 'MyDeals',
            description:
              'I developed a collaborative platform for sharing promotions. Projects made in Node.js, React, PostgreSQL',
            buttons: [
              {
                text: 'View site',
                link: 'https://mydeal-front.vercel.app/',
                show: true,
              },
              {
                text: 'Github',
                link: 'https://github.com/Misa-10/mydeal',
                show: true,
              },
            ],
          },
          {
            name: 'Discord Bot',
            description:
              'I developed a Discord bot using Node.js and SQLite, providing an interactive experience to players by offering detailed information about any in-game item. This project aims to facilitate quick and efficient information retrieval within the Discord environment.',
            buttons: [
              {
                text: 'View site',
                link: 'https://discordbot.com',
                show: false,
              },
              {
                text: 'Github',
                link: 'https://github.com/Misa-10/Otomai',
                show: true,
              },
            ],
          },
          {
            name: 'Information Scraper for Wakfu.com',
            description:
              'I developed a Python-based scraper to extract information and updates from the wakfu.com site. This project aims to facilitate access to Wakfu game data by automating the process of retrieving crucial information for players.',
            buttons: [
              {
                text: 'View site',
                link: 'https://wakfu-scraper.com',
                show: false,
              },
              {
                text: 'Github',
                link: 'https://github.com/Misa-10/parse-wakfu-site',
                show: true,
              },
              {
                text: 'Custom Button',
                link: 'https://customlink.com',
                show: false,
              },
            ],
          },
          {
            name: 'Weather - Pollen - Pollution Mobile App',
            description:
              'This all-in-one app offers accurate weather forecasts, pollen and pollution index tracking, all in a smooth interface. Developed in Flutter. In addition, receive personalized alerts: be notified when there is a high level of pollen or pollution, and even if you engage in too much sports in unfavorable conditions. It allows you to automatically send alerts to a loved one.',
            buttons: [
              {
                text: 'View site',
                link: 'https://wakfu-scraper.com',
                show: false,
              },
              {
                text: 'Github',
                link: 'https://github.com/Misa-10/WeatherApp',
                show: true,
              },
              {
                text: 'Custom Button',
                link: 'https://customlink.com',
                show: false,
              },
            ],
          },
        ],
      },
    },
    fr: {
      translation: {
        aboutToggle: 'À propos de moi',
        experienceToggle: 'Expérience',
        projectsToggle: 'Projets',
        name: 'Quentin Brenas',
        work: 'Développeur Full Stack Web & Mobile',
        language:
          'PHP - React - Javascript - HTML/CSS - Laravel - Tailwind CSS - Flutter - Git',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        aboutMe: 'Qui suis-je ?',
        learnMore: 'En savoir plus sur moi',
        textAboutMe1: `Mon parcours a débuté avec ma quête d'optimisation des tâches
        dans un jeu, lorsque j'ai commencé à apprendre la programmation
        de manière autodidacte en créant un bot pixel avec Autoit. Cette
        aventure a constitué mes premiers pas dans le monde du code. `,
        textAboutMe2: `Plus tard, j'ai rejoint l'école EPITECH pour une
        durée de deux ans, au cours de laquelle j'ai participé à de
        nombreux projets variés, utilisant divers langages de programmation.
        Durant ma deuxième année à EPITECH, j'ai eu l'opportunité
        de réaliser une année d'alternance chez Alteriade, une agence
        spécialisée dans le conseil en communication et le fundraising.`,
        textAboutMe3: `L'expérience acquise chez Alteriade, ainsi que les
        compétences développées à EPITECH, m'ont préparé à me lancer en
        tant que freelance aujourd'hui !`,
        learnMoreButton: 'En savoir plus sur moi',
        experiences: [
          {
            title: 'Altériade · Développeur Back-End',
            date: 'Sept 2022 - Nov 2023',
            description:
              'Alteriade est une agence conseil spécialisée en collecte de fonds et communication, au service des associations et fondations.',
          },
          {
            title: 'Formation EPITECH Webacadémie · Développeur Web & Mobile',
            date: 'Nov 2021 - Nov 2023',
            description:
              'À la Web@cadémie, on apprend en suivant une méthode par projets. C’est un modèle dynamique, basé sur l’échange, le travail collaboratif et la proximité avec le monde de l’entreprise. On teste, on expérimente, on avance, on se trompe… et on recommence.',
          },
        ],

        projects: [
          {
            name: 'MyDeals',
            description: `J'ai développé une Plateforme collaborative de partage de promotions. Projets qui a été fait en Node.js, React, PostgreSQL`,
            buttons: [
              {
                text: 'Voir site',
                link: 'https://mydeal-front.vercel.app/',
                show: true,
              },
              {
                text: 'Github',
                link: 'https://github.com/Misa-10/mydeal',
                show: true,
              },
            ],
          },
          {
            name: 'Bot Discord',
            description: `J'ai développé un bot Discord en utilisant Node.js et SQLite, offrant une expérience interactive aux joueurs en fournissant des informations détaillées sur n'importe quel objet du jeu. Ce projet vise à faciliter la recherche d'informations sur les objets de manière rapide et efficace, directement au sein de l'environnement Discord.`,
            buttons: [
              {
                text: 'Voir site',
                link: 'https://discordbot.com',
                show: false,
              },
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
              {
                text: 'Voir site',
                link: 'https://wakfu-scraper.com',
                show: false,
              },
              {
                text: 'Github',
                link: 'https://github.com/Misa-10/parse-wakfu-site',
                show: true,
              },
              {
                text: 'Custom Button',
                link: 'https://customlink.com',
                show: false,
              },
            ],
          },
          {
            name: `Météo - Pollen - Pollution Application Mobile`,
            description: `Cette application tout-en-un vous offre des prévisions météorologiques précises, le suivi du pollen et des indices de pollution, le tout dans une interface fluide. Développée en Flutter. 

              De plus, recevez des alertes personnalisées : soyez averti lorsqu'il y a un niveau élevé de pollen ou de pollution, et même si vous pratiquez trop de sport dans des conditions défavorables. Vous en permet d'envoyer automatiquement des alertes à un proche.`,
            buttons: [
              {
                text: 'Voir site',
                link: 'https://wakfu-scraper.com',
                show: false,
              },
              {
                text: 'Github',
                link: 'https://github.com/Misa-10/WeatherApp',
                show: true,
              },
              {
                text: 'Custom Button',
                link: 'https://customlink.com',
                show: false,
              },
            ],
          },
        ],
      },
    },
  },
  lng: userLanguage,
  fallbackLng: 'fr',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
