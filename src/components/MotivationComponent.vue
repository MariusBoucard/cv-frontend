<template>
    <div class="flex justify-center items-start min-h-screen bg-background">
        <div class="bg-backgroundComp shadow-md rounded-lg p-6 transition-all duration-300 listItems w-4/5">
            <!-- Title -->
            <h1 class="text-3xl font-bold mb-4 text-center text-textPrimary">Lettre de motivations</h1>

            <!-- Short Description -->
            <p class="text-lg text-gray-700 mb-6 text-left text-textSecondary">
                Chers membres de Code Lutin,
            </p>

            <!-- Video Section -->
            <div class="flex justify-center mb-6">
                <video class="rounded-lg shadow-md" controls width="640" height="360">
                    <source :src="videoLink" type="video/mp4" />
                </video>
            </div>

            <!-- Long Motivational Text -->
            <div class=" text-textSecondary">
                <p class="mb-4">
                    Cela fait un moment que je m’intéresse à votre entreprise, et l’ouverture de votre recrutement me donne enfin l’occasion de vous écrire. 
Ce que vous défendez en tant qu’entreprise – l’égalité, le partage, la démocratie dans le travail – ce sont aussi mes repères. En découvrant 
le collectif Libre Entreprise, j’ai eu le sentiment de tomber sur quelque chose de rare et cohérent. Je veux faire partie d’un environnement comme celui-là.
                </p>

                <p class="mb-4">

Mon parcours s’est construit dans une grande part grâce aux logiciels libres. Cet univers m’a permis de progresser rapidement, en autonomie, tout en accédant à des connaissances techniques précieuses, souvent inaccessibles dans des cadres plus fermés. Dans le même esprit de partage, je rends publics l’ensemble de mes projets personnels, afin que d’autres puissent s’en inspirer ou les faire évoluer.
                </p>

                <p class="mb-4">

Mon projet actuel le plus stimulant est la création d’une architecture de plugins audio en C++, visant à faciliter le travail des développeurs en les libérant des contraintes périphériques au traitement du signal. Je m’appuie sur JUCE pour la partie graphique et je développe progressivement une base fiable, pensée pour être évolutive et facilement réutilisable.
                </p>

                <p class="mb-4">
                    Au-delà de la technique, ce que je recherche dans mon travail, c’est un cadre bienveillant et respectueux, où l’on peut grandir, s’exprimer, apprendre au contact des autres, et surtout, construire ensemble. J’aime l’intelligence collective, l’échange d’idées, et je crois profondément que la diversité des points de vue est indispensable à l’émergence des meilleures solutions. Je suis convaincu que les valeurs démocratiques que vous défendez garantissent un cadre serein, propice à l’épanouissement de chacun et à l’efficacité du groupe.
                </p>

                <p class="mb-4">
                    Sur le plan personnel, je suis rigoureux, curieux, autonome dans mes apprentissages, et toujours volontaire pour avancer et aider. Mon esprit critique, mon goût pour la création (nourri notamment par la musique), et mon énergie font de moi un moteur dans les projets d’équipe.
                </p>

                <p class="mb-4">
                    Actuellement en poste à Grenoble, je souhaiterais revenir à Nantes afin de retrouver un cadre professionnel plus aligné avec mes aspirations. Je suis flexible sur la date d’embauche (idéalement entre septembre et octobre) et disponible pour un entretien à distance, voire une journée d’essai en présentiel.
                </p>

                <p class="mb-4">
                    Je serais heureux de pouvoir échanger avec vous et, je l’espère, de contribuer à l’aventure Code Lutin. Merci pour l’attention portée à ma démarche.
                </p>

                <p class="mb-4">
                    Bien à vous,
                </p>
                <p class="mb-4">
                    <strong>Marius Boucard Bocciarelli</strong>
                </p>
                
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "MotivationComponent",
    data() {
        return {
            videoLink:  import.meta.env.VITE_APP_BACKEND_URL +"/api/video" 
//(import.meta.env.process.BACKEND_URL+"/api/video/" || ""),
        };
    },
    mounted() {

    axios.get(import.meta.env.VITE_APP_BACKEND_URL +'/health')
        .then(response => {
console.log(response.data);
        })
        .catch(error => {
        });
},
};
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>