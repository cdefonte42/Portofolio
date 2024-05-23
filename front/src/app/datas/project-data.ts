import { Project } from "../types/project";

export const Projects: Project[] = [
    {
        skills: ["React", "TailwindCss", "Express", "Cypress", "TypeScript", "PostgreSQL"],
        dateForm: "2023",
        dateTo: "2024",
        title: "Application Web Moove",
        location: "Moove",
        type: "work",
        description: "Application web de gestion et de réservation de vols d’affaires. Développement complet de nouvelles features, débogage suivant les tests utilisateurs. Personnalisation selon les demandes client. Synchronisation des données des opérateurs avec leurs Operating Softwares. Responsive design (utilisation de Tailwind CSS, version mobile build avec Capacitor). Validation des schémas de données front avec Yup et Formik. Validation backend avec Zod. Installation et implémentation de tests end-to-end avec Cypress. Utilisation de l’ORM Prisma. Mailing automatiques et dynamiques via SendGrid, écriture de templates HTML en Nunjucks.",
        imagePath: "assets/project-img.png"
    },
    {
        skills: ["React", "Material UI", "NestJs", "TypeScript", "TailwindCss"],
        dateForm: "2023",
        dateTo: "2023",
        title: "Application Web Matcha",
        location: "École 42 Paris",
        type: "school",
        description: "Second projet web: application de rencontre. Backend en C# avec ASP.Net Core. Frontend en TypeScript avec React et TailwindCss. Chat en temps reel avec Signal.",
        imagePath: "assets/project-img-2.png"
    },
    {
        skills: ["React", "Material UI", "NestJs", "TypeScript"],
        dateForm: "2023",
        dateTo: "2023",
        title: "Application Web Transcendence",
        location: "École 42 Paris",
        type: "school",
        description: "Premier projet web: jeu ping pong multijoueur, chat en temps reel avec socket.io. Systeme de droits et moderation pour le chat. Authentification par OAuth d’une API tierce.",
        imagePath: "assets/small-high-img.png"
    },

]