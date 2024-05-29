import { Project } from "../types/project";

export const Projects: Project[] = [
    {
        skills: ["React", "TailwindCss", "Express", "Cypress", "TypeScript", "PostgreSQL", "Prisma"],
        dateForm: "2023",
        dateTo: "2024",
        title: "Application Web Moove",
        location: "Moove",
        type: "work",
        description: "Application web de gestion et de réservation de vols d’affaires. Développement complet de nouvelles features, débogage suivant les tests utilisateurs. Personnalisation selon les demandes client. Synchronisation des données des opérateurs avec leurs Operating Softwares. Responsive design (utilisation de Tailwind CSS, version mobile build avec Capacitor). Validation des schémas de données front avec Yup et Formik. Validation backend avec Zod. Installation et implémentation de tests end-to-end avec Cypress. Utilisation de l’ORM Prisma. Mailing automatiques et dynamiques via SendGrid, écriture de templates HTML en Nunjucks.",
        imagesPath: ["assets/moove.png"],
        links: [{ link: "https://app.flymoove.com/", type: "app" }]

    },
    {
        skills: ["React", "ASP.NET Core", "TypeScript", "TailwindCss"],
        dateForm: "2023",
        dateTo: "2023",
        title: "Application Web Matcha",
        location: "École 42 Paris",
        type: "school",
        description: "Second projet web: application de rencontre. Backend en C# avec ASP.Net Core. Frontend en TypeScript avec React et TailwindCss. Chat en temps reel avec Signal.",
        imagesPath: ["assets/matcha1.png", "assets/matcha2.png", "assets/matcha3.png"]
    },
    {
        skills: ["React", "Material UI", "NestJs", "TypeScript", "Prisma"],
        dateForm: "2023",
        dateTo: "2023",
        title: "Application Web Transcendence",
        location: "École 42 Paris",
        type: "school",
        description: "Premier projet web: jeu ping pong multijoueur, chat en temps reel avec socket.io. Systeme de droits et moderation pour le chat. Authentification par OAuth d’une API tierce.",
        imagesPath: ["assets/trans1.png"],
        links: [{ link: "https://gitlab.com/ranuytte/42_transcendence", type: "repo" }]
    },
    {
        skills: ["C", "Ray Casting"],
        dateForm: "2022",
        dateTo: "2022",
        title: "Mini jeu Cub3D",
        location: "École 42 Paris",
        type: "school",
        description: "Premier projet graphique en C. Inspiré du jeu Wolfeinstein3D, ce projet permet d’explorer la technique du ray-casting et le développement de petits algorithmes basiques, ainsi que la notion de gestion d'évènements (souris et clavier). L'objectif était de faire une vue à la première personne au sein d’un labyrinthe.",
        imagesPath: ["assets/cub1.png", "assets/cub2.png", "assets/cub3.png"],
        videoPath: "assets/cub-vid.mov",
        links: [{ link: "https://github.com/cdefonte42/Cube3D", type: "repo" }]
    },

]