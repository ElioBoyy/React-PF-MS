import USMB from "../../public/USMB.svg";
import Allegro from "../../public/Allegro_MicroSystems_logo.svg";
import C_Gastro from "../../public/logo-c-gastronomie.svg";
import { technosTableau } from "./techno";

export const data = {
  fr: {
    presentation:
      "<span class='text-bolder'>Développeur étudiant</span> en 3e année de BUT informatique, passionné par la création de <span class='text-bolder'>sites web</span> et d'<span class='text-bolder'>applications</span>, prêt à créer le",
    presentationHL: "<p id='presentation-futur-numerique'>Futur Numérique</p>",
    "text-parallelepiped": ["Mes experiences professionnelles", "Mon parcours scolaire"],
    "job-articles": [
      [
        "Allegro Microsystems",
        Allegro,
        "https://www.allegromicro.com/en/",
        "Stagiaire développeur d'applications",
        "Lors de mon stage de développement logiciel chez Allegro Microsystems, les quatre principales missions étaient : <ul><li><span class='text-bolder'>Développement de classes de contrôle machine :</span> Développement de classes pour contrôler des machines de laboratoire de physique. Cela permet aux ingénieurs de modifier tous les paramètres machine directement depuis le parc informatique du laboratoire au lieu de le faire depuis la machine.</li><li><span class='text-bolder'>Développement de librairies :</span> Création de collections de ressources pour faciliter le développement de logiciels en fournissant des solutions prédéfinies à des problèmes courants.</li><li><span class='text-bolder'>Conception de logiciel :</span> Création de plans détaillés pour le développement de logiciels, y compris la définition des exigences, la conception de l'architecture et la planification des tests.</li><li><span class='text-bolder'>Réalisation / développement :</span> Programmation effective du logiciel en suivant les plans établis lors de la phase de conception.</li></ul>",
        [
          "MatLab",
          "Audit",
          "Virtual Instrument Software Architecture (VISA)",
          "Développement de logiciels",
          "Protocole TCP",
          "Modbus",
          technosTableau.git,
          technosTableau.gitlab,
        ],
        ["Méthodes Agile", "Collaboration entre équipes", "Communication"],
        [
          "https://drive.google.com/file/d/1EC0vQLtOkZmVddcJlwNFO3-0S6kRHSVr/view?usp=sharing",
        ],
      ],
      [
        "USMB - Projet d'étude",
        USMB,
        "https://www.univ-smb.fr/",
        "Développeur de site e-commerce VueJS",
        "Lors de mon projet d'étude de développement de site e-commerce en VueJS en équipe à l'USMB, quatre points sont à souligner : <ul><li><span class='text-bolder'>Utilisation du framework VueJS : </span> Développement d'un site en utilisant le framework JavaScript VueJS.</li><li><span class='text-bolder'>Mise en place d'une API Rest : </span>Conception et développement d'une API Rest C# pour contrôler la communication entre le site et la base de données.</li><li><span class='text-bolder'>Intégration de tests unitaires et de Moq : </span>Développement de tests unitaires pour le site internet et pour l'API Rest puis amélioration des tests sur l'API en utilisant le paquet Nuget C# Moq qui simule des tests unitaires sans injecter de données dans la base.</li><li><span class='text-bolder'>Création d'une base de données : </span>Conception de modèles conceptuels de données afin d'anticiper d'éventuels problèmes et garantir la création d'une base de données bien structurée sous PostgreSQL.</li></ul>",
        [
          technosTableau.vuejs,
          technosTableau.javascript,
          technosTableau.html,
          technosTableau.css,
          technosTableau.postgresql,
          technosTableau.git,
          technosTableau.github,
          technosTableau.csharp,
          technosTableau.net,
          "C# Rest API",
          "Tests unitaires et Moq",
        ],
        ["Méthodes Agile", "Travail d’équipe", "Gestion de Projet", "Rigueur"],
        [
          "https://github.com/matteosev/SAE4_ClientVueJS",
          "API indisponible à la revue",
        ],
      ],
      [
        "USMB - Projet d'étude",
        USMB,
        "https://www.univ-smb.fr/",
        "Développeur de site e-commerce PHP",
        "Lors de mon projet d'étude de développement de site e-commerce en PHP Laravel en équipe à l'USMB, quatre points sont à souligner : <ul><li><span class='text-bolder'>Utilisation du framework Laravel : </span> Développement d'un site en utilisant le framework PHP Laravel.</li><li><span class='text-bolder'>Mise en place d'une API Rest : </span>Conception et développement d'une API Rest C# pour contrôler la communication entre le site et la base de données.</li><li><span class='text-bolder'>Intégration de tests unitaires et de Moq : </span>Développement de tests unitaires pour le site internet et pour l'API Rest puis amélioration des tests sur l'API en utilisant le paquet Nuget C# Moq qui simule des tests unitaires sans injecter de données dans la base.</li><li><span class='text-bolder'>Création d'une base de données : </span>Conception de modèles conceptuels de données afin d'anticiper d'éventuels problèmes et garantir la création d'une base de données bien structurée sous PostgreSQL.</li></ul>",
        [
          technosTableau.laravel,
          technosTableau.php,
          technosTableau.html,
          technosTableau.css,
          technosTableau.postgresql,
          technosTableau.git,
          technosTableau.github,
          technosTableau.net,
          technosTableau.csharp,
          "C# Rest API",
          "Tests Unitaires et Moq",
        ],
        ["Méthodes Agile", "Travail d’équipe", "Gestion de Projet", "Rigueur"],
        ["https://github.com/lorrisc/Miliboo"],
      ],
      [
        "C-Gastronomie",
        C_Gastro,
        "https://www.c-gastronomie.fr/",
        "Serveur Runner en CDD",
        "Serveur au restaurant \"le Libellule\"à Annecy, exploité par C-Gastronomie, une maison partenaire de Paul Bocuse.<span class='text-bolder'><br/><br/>Présentation : </span>Le Libellule, bateau-restaurant d'Annecy, offre une expérience gastronomique exceptionnelle. Naviguant sur le lac, il marie cuisine raffinée et panorama enchanteur. Nos chefs créent des délices locaux, nos serveurs sont agréables et courtoix, transformant chaque repas en une aventure mémorable. Embarquez sur le Libellule pour une fusion parfaite de plaisirs culinaires et visuels, unique à Annecy.",
        [],
        [
          "Savoir Vivre",
          "Savoir Présenter",
          "Courtoisie",
          "Expression Orale",
          "Optimisation",
        ],
      ],
    ],
    "header": ["A propos", "Fil d'actualité", "Contact"],
    "formation": [
      [
        "Université Savoie Mont-Blanc, Annecy",
        "Bachelor Universitaire Technologique d'informatique",
        [
          "<span class='text-bolder'>Niveau</span> : Titulaire du diplôme de deuxième année (BUT) en informatique, actuellement en troisième année pour obtenir le Bachelor (BUT).",
          "<span class='text-bolder'>Activités et Associations</span> : Vice-secrétaire du syndicat étudiant 2022-2023.",
          "Délégué 2022-2023.",
        ],
        [
          2024,
          2021,
        ],
        [
          "Localiser",
          "https://www.google.com/maps/place/Universit%C3%A9+Savoie+Mont-Blanc+-+Campus+d'Annecy/@45.9209062,6.1537701,15z/data=!4m2!3m1!1s0x0:0x24dc9c9435c40688?sa=X&ved=2ahUKEwjPg-7qmoqDAxWJVqQEHfLJCeoQ_BJ6BAhIEAA",
        ],
      ],
      [
        "EPITA, Lyon",
        "Cycle préparatoire dans la même école d'ingénieur",
        [
          "<span class='text-bolder'>Niveau</span> : Réorienté après la première année.",
        ],
        [
          2021,
          2020,
        ],
        [
          "Localiser",
          "https://www.google.com/maps/place/Ecole+d'ing%C3%A9nieurs+informatique+Lyon+-+EPITA/@45.7548868,4.854048,17z/data=!3m2!4b1!5s0x47f4ea653de874b9:0xf7cbb4c9c04d6fa9!4m6!3m5!1s0x47f4ebb2a51fa845:0x1f16a04587235750!8m2!3d45.7548832!4d4.8589189!16s%2Fg%2F11c6cy422l?entry=ttu",
        ],
      ],
      [
        "Lycée Claude Louis Berthollet, Annecy",
        "Baccalauréat général, Sciences physiques",
        [
          "<span class='text-bolder'>Niveau</span> : Diplômé avec un baccalauréat général - Option scientifique - Spécialisation en physique.",
          "<span class='text-bolder'>Activités et Associations</span> : Vice-président de la Maison des lycéens.",
          "Délégué 2017-2020.",
        ],
        [
          2020,
          2016,
        ],
        [
          "Localiser",
          "https://www.google.com/maps/place/Lyc%C3%A9e+Berthollet/@45.9062315,6.128072,15z/data=!4m6!3m5!1s0x478b8ff1642ad2b5:0xe65eed4248f6dfda!8m2!3d45.9062315!4d6.128072!16s%2Fg%2F120z_cdt?entry=ttu",
        ],
      ],
    ],
  },
  en: {
    presentation:
      "Third-year <span class='text-bolder'>computer science student</span>, passionate about creating <span class='text-bolder'>websites</span> and <span class='text-bolder'>applications</span>, ready to shape the",
    presentationHL: "<p id='presentation-futur-numerique'>Digital Future</p>",
    "text-parallelepiped": ["My professional experience", "My school career"],
    "job-articles": [
      [
        "Allegro Microsystems",
        Allegro,
        "https://www.allegromicro.com/en/",
        "Application developer intern",
        "During my software development internship at Allegro Microsystems, the four main tasks were : <ul><li><span class='text-bolder'>Development of machine control classes :</span> Developing classes to control physics laboratory machines, allowing engineers to modify all machine parameters directly from the laboratory's computer park instead of doing it from the machine itself.</li><li><span class='text-bolder'>Library development :</span> Creating collections of resources to facilitate software development by providing predefined solutions to common problems.</li><li><span class='text-bolder'>Software design :</span> Creating detailed plans for software development, including defining requirements, designing the architecture, and planning tests.</li><li><span class='text-bolder'>Implementation / development :</span> Effectively programming the software following the plans established during the design phase.</li></ul>",
        [
          "MatLab",
          "Audit",
          "Virtual Instrument Software Architecture (VISA)",
          "Software Development",
          "TCP Protocol",
          "Modbus",
          technosTableau.git,
          technosTableau.gitlab,
        ],
        ["Agile Methods", "Team Collaboration", "Communication"],
        [
          "https://drive.google.com/file/d/1EC0vQLtOkZmVddcJlwNFO3-0S6kRHSVr/view?usp=sharing",
        ],
      ],
      [
        "USMB - Study project",
        USMB,
        "https://www.univ-smb.fr/",
        "VueJS e-commerce developer",
        "During my team-based VueJS e-commerce website development project at USMB, four key points are worth highlighting :<ul><li><span class='text-bolder'>VueJS Framework :</span> Development of a website using the VueJS JavaScript framework.</li><li><span class='text-bolder'>Rest API Implementation :</span> Design and development of a C# Rest API to control communication between the website and the database.</li><li><span class='text-bolder'>Unit Tests and Moq Integration :</span> Development of unit tests for the website and the Rest API, followed by enhancements to API tests using the C# Moq Nuget package, which simulates unit tests without injecting data into the database.</li><li><span class='text-bolder'>Database Creation :</span> Design of conceptual data models to anticipate potential issues and ensure the creation of a well-structured database using PostgreSQL.</li></ul>",
        [
          technosTableau.vuejs,
          technosTableau.javascript,
          technosTableau.html,
          technosTableau.css,
          technosTableau.postgresql,
          technosTableau.git,
          technosTableau.github,
          technosTableau.net,
          technosTableau.csharp,
          "C# Rest API",
          "Unit Testing and Moq",
        ],
        ["Agile Methods", "Teamwork", "Project Management", "Rigor"],
        [
          "https://github.com/matteosev/SAE4_ClientVueJS",
          "API unavailable for review",
        ],
      ],
      [
        "USMB - Study project",
        USMB,
        "https://www.univ-smb.fr/",
        "PHP e-commerce developer",
        "During my team-based PHP Laravel e-commerce website development project at USMB, four key points are worth highlighting :<ul><li><span class='text-bolder'>Laravel Framework :</span> Development of a website using the Laravel PHP framework.</li><li><span class='text-bolder'>Rest API Implementation :</span> Design and development of a C# Rest API to control communication between the website and the database.</li><li><span class='text-bolder'>Unit Tests and Moq Integration :</span> Development of unit tests for the website and the Rest API, followed by enhancements to API tests using the C# Moq Nuget package, which simulates unit tests without injecting data into the database.</li><li><span class='text-bolder'>Database Creation :</span> Design of conceptual data models to anticipate potential issues and ensure the creation of a well-structured database using PostgreSQL.</li></ul>",
        [
          technosTableau.laravel,
          technosTableau.php,
          technosTableau.html,
          technosTableau.css,
          technosTableau.postgresql,
          technosTableau.git,
          technosTableau.github,
          technosTableau.net,
          technosTableau.csharp,
          "C# Rest API",
          "Unit Testing and Moq",
        ],
        ["Agile Methods", "Teamwork", "Project Management", "Rigor"],
        ["https://github.com/lorrisc/Miliboo"],
      ],
      [
        "C-Gastronomie",
        C_Gastro,
        "https://www.c-gastronomie.fr/",
        "Waiter Fixed-Term Contract",
        "Waiter at \"Le Libellule\" restaurant, Annecy, operated by C-Gastronomie, a partner establishment of Paul Bocuse.<span class='text-bolder'><br/><br/>Introduction:</span> The Libellule, a boat-restaurant in Annecy, offers an exceptional gastronomic experience. Sailing on the lake, it blends refined cuisine with enchanting scenery. Our chefs create local delights, and our waiters are pleasant and courteous, turning each meal into a memorable adventure. Embark on the Libellule for a perfect fusion of culinary and visual pleasures, unique to Annecy.",
        [],
        [
          "Good Manners",
          "Presentation",
          "Courtesy",
          "Oral Expression",
          "Optimization",
        ],
      ],
    ],
    "header": ["About", "Feed", "Contact"],
    "formation": [
      [
        "Université Savoie Mont-Blanc, Annecy",
        "Bachelor in Computer Science",
        [
          "<span class='text-bolder'>Level</span> : Holder of the 2nd year's degree in Computer Science, currently in the 3rd year to obtain the Bachelor's degree.",
          "<span class='text-bolder'>Activities and Associations</span> : Vice-Secretary of the Student Union 2022-2023.",
          "Delegate 2022-2023."
        ],
        [
          2024,
          2021,
        ],
        [
          "Locate",
          "https://www.google.com/maps/place/Universit%C3%A9+Savoie+Mont-Blanc+-+Campus+d'Annecy/@45.9209062,6.1537701,15z/data=!4m2!3m1!1s0x0:0x24dc9c9435c40688?sa=X&ved=2ahUKEwjPg-7qmoqDAxWJVqQEHfLJCeoQ_BJ6BAhIEAA",
        ],
      ],
      [
        "EPITA, Lyon",
        "Preparatory cycle at the same engineering school",
        [
          "<span class='text-bolder'>Level</span> : Reoriented after the first year."
        ],
        [
          2021,
          2020,
        ],
        [
          "Locate",
          "https://www.google.com/maps/place/Ecole+d'ing%C3%A9nieurs+informatique+Lyon+-+EPITA/@45.7548868,4.854048,17z/data=!3m2!4b1!5s0x47f4ea653de874b9:0xf7cbb4c9c04d6fa9!4m6!3m5!1s0x47f4ebb2a51fa845:0x1f16a04587235750!8m2!3d45.7548832!4d4.8589189!16s%2Fg%2F11c6cy422l?entry=ttu",
        ],
      ],
      [
        "High school Claude Louis Berthollet, Annecy",
        "General Baccalaureate, Physical Sciences",
        [
          "<span class='text-bolder'>Level</span> : Graduated with a General Baccalaureate - Scientific Option - Specialization in Physics.",
          "<span class='text-bolder'>Activities and Associations</span> : Vice-President of the Student House.",
          "Delegate 2017-2020."
        ],
        [
          2020,
          2016,
        ],
        [
          "Locate",
          "https://www.google.com/maps/place/Lyc%C3%A9e+Berthollet/@45.9062315,6.128072,15z/data=!4m6!3m5!1s0x478b8ff1642ad2b5:0xe65eed4248f6dfda!8m2!3d45.9062315!4d6.128072!16s%2Fg%2F120z_cdt?entry=ttu",
        ],
      ],
    ],
  },
};
