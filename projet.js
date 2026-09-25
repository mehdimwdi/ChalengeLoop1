const prompt = require("prompt-sync")();


let candidats = [
  {
    id: 1,
    cin: "AB123456",
    nom: "Boushaba",
    prenom: "Soufiane",
    parti: "Indépendant",
    age: 40,
    votes: 3
  },
  {
    id: 2,
    cin: "CD987654",
    nom: "El Amrani",
    prenom: "Yassine",
    parti: "Parti A",
    age: 35,
    votes: 2
  },
  {
    id: 3,
    cin: "EF555666",
    nom: "Benali",
    prenom: "Khadija",
    parti: "Parti A",
    age: 29,
    votes: 4
  }
];

function ajouterCandidat() {
  let cin = prompt("Tapez votre CIN : ");
  let nom = prompt("Nom du candidat : ");
  let prenom = prompt("Prénom du candidat : ");
  let age = Number(prompt("Votre âge : "));

  if (isNaN(age) || age < 18) {
    console.log("Erreur : L'âge doit être un nombre supérieur ou égal à 18 ans.");
    return;
  }

  let parti = prompt("Parti politique : ");

  let candidat = {
    id: candidats.length + 1,
    cin: cin,
    nom: nom,
    prenom: prenom,
    age: age,
    parti: parti,
    votes: 0
  };

  candidats.push(candidat);
  console.log("Candidat ajouté avec succès !");
}

function afficherCandidats() {
  if (candidats.length === 0) {
    console.log("Aucun candidat.");
    return;
  }
  
  console.log(" LISTE DES CANDIDATS ");
  candidats.forEach(candidat => {
    console.log(`ID: ${candidat.id} | Nom: ${candidat.nom} ${candidat.prenom} | Parti: ${candidat.parti} | Votes: ${candidat.votes}`);
  });
}

function voter() {
  afficherCandidats();
  if (candidats.length === 0) return;

  let id = Number(prompt("Entrez l'ID du candidat : "));
  let candidat = candidats.find(c => c.id === id);

  if (candidat) {
    candidat.votes++;
    console.log("Vote enregistré avec succès !");
  } else {
    console.log("Candidat introuvable !");
  }
}

function statistiques() {
  if (candidats.length === 0) {
    console.log("Aucun candidat.");
    return;
  }

  let totalVotes = candidats.reduce((acc, c) => acc + c.votes, 0);

  console.log("STATISTIQUES ");
  console.log("Nombre de candidats :", candidats.length);
  console.log("Nombre total de votes :", totalVotes);
}

function menu() {
  let choix;
  do {
    console.log(`

    GESTION DES ÉLECTIONS

1. Ajouter un candidat
2. Afficher les candidats
3. Enregistrer un vote
4. Afficher les statistiques
0. Quitter`);

    choix = Number(prompt("Votre choix : "));

    switch (choix) {
      case 1:
        ajouterCandidat();
        break;
      case 2:
        afficherCandidats();
        break;
      case 3:
        voter();
        break;
      case 4:
        statistiques();
        break;
      case 0:
        console.log("Au revoir !");
        break;
      default:
        console.log("Choix invalide !");
    }
  } while (choix !== 0);
}

menu();
