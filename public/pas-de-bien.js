document.getElementById("calculer").addEventListener("click", function() {
    // Récupérer les valeurs des champs du formulaire
    const prixBien = parseFloat(document.getElementById("prix-bien").value);
    const fondsPropres = parseFloat(document.getElementById("fonds-propres").value);
    const canton = document.getElementById("canton").value;

    if (isNaN(prixBien) || isNaN(fondsPropres)) {
        alert("Veuillez entrer des valeurs valides.");
        return;
    }

    // Définitions des pourcentages de frais de notaire par canton
    const fraisNotairePourcent = {
        vaud: 4.2, // 3.3% droits de mutation + 0.8-1.2% frais notariaux
        geneve: 3.4, // 3% droits de mutation + 0.3-0.5% frais notariaux
        fribourg: 2.8, // 2.2% droits de mutation + 0.3-1% frais notariaux
        valais: 4.0, // 3% droits de mutation + 1% frais notariaux
        neuchatel: 3.7, // 3% droits de mutation + 0.5-1% frais notariaux
        jura: 3.5 // 2.2% droits de mutation + 1% frais notariaux
    };

    // Calcul des frais de notaire en fonction du canton sélectionné
    const fraisNotaire = (fraisNotairePourcent[canton] / 100) * prixBien;

    // Montant total à payer (prix du bien + frais de notaire)
    const totalAchat = prixBien + fraisNotaire;

    // Montant à emprunter (montant total - fonds propres)
    const montantEmprunt = totalAchat - fondsPropres;

    // Afficher le résultat
    document.getElementById("resultat").innerHTML = `
        <p><strong>Montant total d'achat (frais de notaire inclus) :</strong> ${totalAchat.toFixed(2)} €</p>
        <p><strong>Montant des frais de notaire :</strong> ${fraisNotaire.toFixed(2)} €</p>
        <p><strong>Montant à emprunter :</strong> ${montantEmprunt.toFixed(2)} €</p>
    `;
});
