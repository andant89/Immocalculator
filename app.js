const express = require('express');
const app = express();
const path = require('path');

// Configurer le répertoire des fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Route pour la page d'accueil (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route pour les utilisateurs sans bien immobilier
app.get('/pas-de-bien', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pas-de-bien.html'));
});

// Route pour les utilisateurs souhaitant vendre leur bien
app.get('/vente', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'vente.html'));
});

// Lancer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Le serveur est en cours d'exécution sur le port ${PORT}`);
});
