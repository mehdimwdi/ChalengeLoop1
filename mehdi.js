const prompt = require('prompt-sync')();

let candidats = [];
let choix;

do {
    
    console.log(`

               MENU 
1. Ajouter un nouveau candidat
2. Ajouter plusieurs candidats à la fois
3. Afficher la liste des candidats
4. Voter pour un candidat
5. Modifier les informations d'un candidat
6. Supprimer un candidat
7. Rechercher un candidat par nom
8. Afficher les statistiques de l'élection
9. Quitter
`);

    choix = prompt('Votre choix : ');

    switch (choix) {
        case '1':
            ajouterCandidat();
            break;
        case '2':
            ajouterPlusieursCandidats();
            break;
        case '3':
            afficherListeCandidats();
            break;
        case '4':
            voterPourCandidat();
            break;
        case '5':
            modifierCandidat();
            break;
        case '6':
            supprimerCandidat();
            break;
        case '7':
            rechercherCandidat();
            break;
        case '8':
            afficherStatistiques();
            break;
        case '9':
            console.log('Au revoir !');
            break;
        default:
            console.log('Choix invalide, réessayez.');
    }

}   while (choix !== '9');
function ajouterCandidat() {
    console.log(" Ajouter un nouveau candidat ");
    let cin = prompt("CIN du candidat : ");

    
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin === cin) {
            console.log("Erreur : Un candidat avec ce CIN existe déjà !");
            return;
        }
    }

    let nom = prompt("Nom : ");
    let prenom = prompt("Prénom : ");
    let partiPolitique = prompt("Parti politique (ou Indépendant) : ");
    let age = parseInt(prompt("Âge : "));

    
    let candidat = {
        cin: cin,
        nom: nom,
        prenom: prenom,
        partiPolitique: partiPolitique,
        age: age,
        electeurs: [] 
    };

    candidats.push(candidat);
    console.log("Candidat ajouté avec succès !");
}


function ajouterPlusieursCandidats() {
    let nombre = parseInt(prompt("Combien de candidats voulez-vous ajouter ? "));
    for (let i = 0; i < nombre; i++) {
        console.log(`\nSaisie du candidat N°${i + 1} :`);
        ajouterCandidat();
    }

    }
function afficherListeCandidats() {
    if (candidats.length === 0) {
        console.log("Aucun candidat enregistré pour le moment.");
        return;
    }

    console.log(" Options d'affichage ");
    console.log("1. Trier par nombre de votes (Ordre décroissant)");
    console.log("2. Filtrer par parti politique");
    let option = prompt("Choix : ");

    if (option === '1') {
        
        let candidatsTries = [...candidats].sort((a, b) => b.electeurs.length - a.electeurs.length);
        console.log(" Liste des candidats (triés par votes) ");
        for (let i = 0; i < candidatsTries.length; i++) {
            let c = candidatsTries[i];
            console.log(`CIN: ${c.cin} | Nom: ${c.nom} ${c.prenom} | Parti: ${c.partiPolitique} | Âge: ${c.age} | Votes: ${c.electeurs.length}`);
        }
    } else if (option === '2') {
        let parti = prompt("Entrez le nom du parti politique : ");
        console.log(` Candidats du parti : ${parti} `);
        let trouve = false;
        for (let i = 0; i < candidats.length; i++) {
            if (candidats[i].partiPolitique.toLowerCase() === parti.toLowerCase()) {
                let c = candidats[i];
                console.log(`CIN: ${c.cin} | Nom: ${c.nom} ${c.prenom} | Âge: ${c.age} | Votes: ${c.electeurs.length}`);
                trouve = true;
            }
        }
        if (!trouve) {
            console.log("Aucun candidat trouvé pour ce parti.");
        }
    } else {
        console.log("Option invalide.");
    }
}


function voterPourCandidat() {
    let cinElecteur = prompt("Entrez votre CIN (Électeur) : ");

    
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].electeurs.includes(cinElecteur)) {
            console.log("Vous avez déjà voté et vous n'avez pas le droit de modifier votre vote ni de voter à nouveau.");
            return;
        }
    }

    let cinCandidat = prompt("Entrez le CIN du candidat pour lequel vous voulez voter : ");// Rechercher le candidat et ajouter le vote
    let candidatTrouve = false;
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin === cinCandidat) {
            candidats[i].electeurs.push(cinElecteur);
            console.log("Votre vote a été enregistré avec succès !");
            candidatTrouve = true;
            break;
        }
    }

    if (!candidatTrouve) {
        console.log("Aucun candidat trouvé avec ce CIN.");
    }
}


function modifierCandidat() {
    let cin = prompt("Entrez le CIN du candidat à modifier : ");

    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin === cin) {
            console.log(`Modification des infos pour ${candidats[i].nom} ${candidats[i].prenom}`);
            candidats[i].partiPolitique = prompt("Nouveau parti politique : ");
            candidats[i].age = parseInt(prompt("Nouveau âge : "));
            console.log("Modifications enregistrées avec succès !");
            return;
        }
    }

    console.log("Candidat non trouvé.");
}


function supprimerCandidat() {
    let cin = prompt("Entrez le CIN du candidat à supprimer : ");

    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin === cin) {
            candidats.splice(i, 1); 
            console.log("Candidat supprimé avec succès !");
            return;
        }
    }

    console.log("Candidat non trouvé.");
}


function rechercherCandidat() {
    let nomRecherche = prompt("Entrez le nom à rechercher : ");
    let trouve = false;

    console.log(" Résultats de la recherche ");
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].nom.toLowerCase().includes(nomRecherche.toLowerCase())) {
            let c = candidats[i];
            console.log(`CIN: ${c.cin} | Nom: ${c.nom} ${c.prenom} | Parti: ${c.partiPolitique} | Votes: ${c.electeurs.length}`);
            trouve = true;
        }
    }

    if (!trouve) {
        console.log("Aucun candidat trouvé avec ce nom.");
    }
}


function afficherStatistiques() {
    console.log(" STATISTIQUES ");

    
    console.log(`Nombre total de candidats : ${candidats.length}`);

    
    let totalVotes = 0;
    for (let i = 0; i < candidats.length; i++) {
        totalVotes += candidats[i].electeurs.length;
    }
    console.log(`Nombre total de votes exprimés : ${totalVotes}`);

    
    let candidatsTries = [...candidats].sort((a, b) => b.electeurs.length - a.electeurs.length);
    console.log("\n--- Top 3 des candidats ---");
    for (let i = 0; i < Math.min(3, candidatsTries.length); i++) {
        let c = candidatsTries[i];
        console.log(`${i + 1}. ${c.nom} ${c.prenom} - ${c.electeurs.length} votes`);
    }

    
    console.log(" Nombre de candidats par parti");
    let partis = {};
    for (let i = 0; i < candidats.length; i++) {
        let parti = candidats[i].partiPolitique;
        if (partis[parti]) {
            partis[parti]++;
        } else {
            partis[parti] = 1;
        }
    }

    for (let p in partis) {
        console.log(`- ${p} : ${partis[p]} candidat(s)`);
    }
}