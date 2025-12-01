🎥 ADIR — Portfolio Vidéaste & Photographe

Un site web moderne, animé et responsive présentant les projets, services et univers de ADIR, vidéaste & photographe professionnel.
Le site met en avant des projets sous forme de galerie photo/vidéo, une section hero immersive, un préloader animé et une navigation fluide.

🚀 Fonctionnalités
⭐ Interface moderne & immersive

Hero section avec image de fond sombre (ou vidéo si souhaité)

Typographies premium (Inter & Batuphat Script)

Préloader animé avec logo ADIR

🎞️ Galerie dynamique

Affichage d’images HD

Support des vidéos locales (ex : /videos/video_test.mp4)

Navigation fluide entre les médias

📱 Responsive Design

Compatible mobile, tablette et desktop

Layout optimisé pour différentes tailles d’écran

⚡ Performance & UX

Lazy loading pour les assets

Optimisation des images

Utilisation du cache via <link rel="preconnect">

🛠️ Technologies utilisées

HTML5

CSS3 (animations, responsive, hero background…)

JavaScript (gestion de la galerie, interactions, préloader)

Google Fonts

Unsplash API (images demo)

Local video support (.mp4)

▶️ Installation & utilisation
1. Clone le projet
git clone https://github.com/ton-user/ton-repo.git
cd ton-repo

2. Ouvre le projet

👉 Méthode recommandée (pour afficher les vidéos locales)
Avec VS Code :

Installe l’extension Live Server

Clic droit → Open with Live Server

Le site sera disponible sur :

http://localhost:5500/

🖼️ Ajouter des images ou vidéos
Vidéos locales

Ajoute tes fichiers dans le dossier :

/videos


Puis utilise-les dans le script :

{ type: 'video', src: './videos/video_test.mp4', alt: 'Luxuria commercial' }

📸 Présentation des projets

Chaque projet du portfolio est structuré ainsi :

{
    id: 1,
    name: { fr: 'Projet', en: 'Project' },
    description: { fr: 'Description FR', en: 'EN description' },
    thumbnail: 'miniature.jpg',
    gallery: [
        { type: 'image', src: 'image1.jpg' },
        { type: 'video', src: './videos/video_test.mp4' }
    ]
}
