document.addEventListener('DOMContentLoaded', function () {
    // Sélectionner les champs
    const prixAppartementInput = document.getElementById('prix-appartement');
    const prixParkingInput = document.getElementById('prix-parking');
    const fondPropreInput = document.getElementById('fond-propre');
    const totalBienInput = document.getElementById('total-bien');
    const montantPretInput = document.getElementById('montant-pret');
    const pourcentageFondPropreInput = document.getElementById('pourcentage-fond-propre');
    const pourcentagePretInput = document.getElementById('pourcentage-pret');

    // Nouveaux champs pour bien visé
    const prixAppartementViseInput = document.getElementById('prix-appartement-vise');
    const prixParkingViseInput = document.getElementById('prix-parking-vise');
    const fraisNotaireInput = document.getElementById('frais-notaire');
    const totalFinalInput = document.getElementById('total-final');

    // Fonction pour recalculer le total, le montant du prêt et les pourcentages
    function recalculer() {
        const prixAppartement = parseFloat(prixAppartementInput.value) || 0;
        const prixParking = parseFloat(prixParkingInput.value) || 0;
        const fondPropre = parseFloat(fondPropreInput.value) || 0;

        const prixAppartementVise = parseFloat(prixAppartementViseInput.value) || 0;
        const prixParkingVise = parseFloat(prixParkingViseInput.value) || 0;

        // Calculer le total bien (Appartement + Parking)
        const totalBien = prixAppartement + prixParking;
        totalBienInput.value = totalBien;

        // Calculer le montant du prêt bancaire
        const montantPret = totalBien - fondPropre;
        montantPretInput.value = montantPret;

        // Calculer les pourcentages
        const pourcentageFondPropre = totalBien ? (fondPropre / totalBien) * 100 : 0;
        const pourcentagePret = totalBien ? (montantPret / totalBien) * 100 : 0;

        // Mettre à jour les champs pour les pourcentages
        pourcentageFondPropreInput.value = pourcentageFondPropre.toFixed(2); // Arrondir à 2 décimales
        pourcentagePretInput.value = pourcentagePret.toFixed(2);

        // Calculer les frais de notaire (3.5% du total visé)
        const totalVise = prixAppartementVise + prixParkingVise;
        const fraisNotaire = totalVise * 0.035; // 3.5% des biens visés
        fraisNotaireInput.value = fraisNotaire.toFixed(2);

        // Calculer le total final (Appartement visé + Parking visé + Frais de notaire)
        const totalFinal = totalVise + fraisNotaire;
        totalFinalInput.value = totalFinal.toFixed(2);
    }

    // Écouteurs d'événements sur les champs
    prixAppartementInput.addEventListener('input', recalculer);
    prixParkingInput.addEventListener('input', recalculer);
    fondPropreInput.addEventListener('input', recalculer);
    prixAppartementViseInput.addEventListener('input', recalculer);
    prixParkingViseInput.addEventListener('input', recalculer);
});
