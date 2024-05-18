import { Experience } from "../types/experience";

export const Experiences: Experience[] = [
    { dateForm: "2013", dateTo: "2015", title: "DUT GMP", location: "Institut Universitaire de Technologie de Figeac.", type: "school", description: "Diplôme Universitaire de Technologie, Génie Mécanique et Productique." },
    { dateForm: "2015", dateTo: "2018", title: "Master GMAP", location: "Université Toulouse III Paul Sabatier.", type: "school", description: "Master, Génie Mécanique en Aéronautique, spécialité Production." },
    { dateForm: "2019", dateTo: "2020", title: "Approvisionneuse", location: "ATG Group SOTIP, Labège", type: "job" },
    { dateForm: "2021", dateTo: "2023", title: "Expert en Architecture Informatique", location: "École 42 Paris.", type: "school" },
    { dateForm: "Octobre 2023", dateTo: "Avril 2024", title: "Stage Développement Web Full Stack", location: " Start-up Moove", type: "job", description: "Application web de gestion et de réservation de vols d’affaires. Développement complet de nouvelles features, débogage suivant les tests utilisateurs. Personnalisation selon les demandes client. Synchronisation des données des opérateurs avec leurs Operating Softwares. Responsive design (utilisation de Tailwind CSS, version mobile build avec Capacitor). Validation des schémas de données front avec Yup et Formik. Validation backend avec Zod. Installation et implémentation de tests end-to-end avec Cypress. Utilisation de l’ORM Prisma. Mailing automatiques et dynamiques via SendGrid, écriture de templates HTML en Nunjucks." }
]