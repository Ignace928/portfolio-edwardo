const section = [
    {id:"contact", title:"Contact"},
    {id:"experience", title:"Experience"},
    {id:"parcours", title:"Parcours"},
]

const skill = [
    
    {
        tech: "JavaScript / TypeScript",
        image:"/js_ts.jpg",
        niveau:"Intermédaire",
        description: "Langages principaux du web moderne.JavaScript permet de créer des interfaces dynamiques et son superset TypeScript ajoute un typage fort pour la robustesse du code."
    },

    {
        tech: "Node.js",
        image:"/node.png",
        niveau:"Intermédaire",
        description: "Runtime JavaScript côté serveur utilisé pour développer des API, des services backend et des applications orientées performance et scalabilité."
    },
    
    {
        tech: "React",
        image:"/React.png",
        niveau:"Intermédaire",
        description: "Bibliothèque JavaScript pour la création d’interfaces utilisateur interactives et réactives, basée sur des composants réutilisables et une gestion d’état efficace."
    },
    {
        tech: "Next.js",
        image:"/next.png",
        niveau:"Intermédaire",
        description:"Framework React permettant le rendu côté serveur et statique, optimisant les performances, le SEO et la structuration des applications web."
    },  
    {
        tech: "Tailwind CSS",
        image:"/tailwind.png",
        niveau:"Intermédaire",
        description: "Framework CSS utilitaire facilitant la création d’interfaces modernes, responsives et cohérentes avec un contrôle précis du style."
    },
    {
        tech: "Bootstrap",
        image:"/bootstrap.png",
        niveau:"Intermédaire",
        description: "Framework CSS populaire fournissant des composants prêts à l’emploi et un système de grille responsive pour développer rapidement des interfaces web."
    },
    {
        tech: "Docker",
        image:"/Docker.png",
        niveau:"Intermédaire",
        description: "Outil de conteneurisation permettant de packager des applications et leurs dépendances afin de garantir un environnement cohérent, reproductible et facilement déployable."
    },
    {
        tech: "Cube.js",
        image:"/Cube.png",
        niveau:"Intermédaire",
        description: "Framework analytique headless permettant de construire une couche BI performante, avec gestion des agrégations, du cache et intégration aux frontends modernes."
    },
    {
        tech: "Python",
        image:"/python.jpg",
        niveau:"Intermédaire",
        description: "Langage polyvalent (interpreté) utilisé pour le backend, l’automatisation et le traitement de données, apprécié pour sa lisibilité et son écosystème riche."
    },
    {
        tech: "C++",
        image:"/cplus.png",
        niveau:"Junior",
        description: "Langage compilé orienté performance, utilisé pour développer des applications systèmes, des logiciels et d’algorithmes nécessitant une haute performance."
    },
    {
        tech: "Java",
        image:"/java.png",
        niveau:"Junior",
        description: "Langage de programmation orienté objet utilisé pour le développement d’applications web, backend, mobiles et systèmes. Des pages web dynamiques avec JSP."
    },

]
const formation = [
    {
        date:"2024-2025",
        details:"Obtention du diplôme de MASTER PROFESSIONNELLE, domaine Science de l’ingénieur, mention informatique, parcours Génie logiciel et Base de Données à l’ENI de FIANARANTSOA"
    },
    {
        date:"2023-2024",
        details:"Première année de formation en MASTER PROFESSIONNELLE, domaine Science de l’ingénieur, mention informatique, parcours Génie logiciel et Base de Données à l’ENI de FIANARANTSOA"
    },
    {
        date:"2022-2023",
        details:"Obtention du diplôme de LICENCE PROFESSIONNELLE, domaine Science de l’ingénieur, mention informatique, parcours Génie logiciel et Base de Données à l’ENI de FIANARANTSOA"
    },
    {
        date:"2021-2022",
        details:"Deuxième année de formation en LICENCE PROFESSIONNELLE en Génie logiciel et Base de données à l’ENI, de FIANARANTSOA"
    },
    {
        date:"2019-2020",
        details:"Première année de formation en LICENCE PROFESSIONNELLE en informatique à l’ENI de FIANARANTSOA"
    },
    {
        date:"2018-2019",
        details:"Obtention du Baccalauréat générale SERIE C "
    },
]

const projets = [
    {
        title:"Gestion des inscriptions",
        detail:" Conception (Merise) et réalisation d’une application web pour informatiser le processus d’inscription",
        images:[
            "/Classe.png",
            "/Eleve.png",
            "/Frais.png",
        ]
    },
    {
        title:"Plateforme BI",
        detail:"Conception et réalisation d'une architecture microservice de plateforme de données et un outil BI",
        images:[
            "/Menu.png",
            "/Exploration.png",
            "/Framework.PNG",
        ]
    },
]

export {
    section,
    skill,
    formation,
    projets
}