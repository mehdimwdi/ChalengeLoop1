const prompt = require("prompt-sync")();    

let candidats = [
  {
    id: 1,
    cin: "AB123456",
    nom: "Boushaba",
    prenom: "Soufiane",
    parti: "Indépendant",
    age: 40,
    electeurs:[]
    
  },
  {
    id: 2,
    cin: "CD987654",
    nom: "El Amrani",
    prenom: "Yassine",
    parti: "Parti A",
    age: 35,
    electeurs:[]
  },
  {
    id: 3,
    cin: "EF555666",
    nom: "Benali",
    prenom: "Khadija",
    parti: "Parti A",
    age: 29,
    electeurs:[]
  }
];

function ajouterCandidat() {
  let cin = prompt("Tapez votre CIN : ");
  let nom = prompt("Nom du candidat : ");
  let prenom = prompt("Prénom du candidat : ");
  let age = Number(prompt("Votre âge : "));

  if (isNaN(age) || age < 18){
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

function afficherCandidats() {}
  if (candidats.length === 0) {
    console.log("Aucun candidat.");
    return;
  }

  console.log(" LISTE DES CANDIDATS ");

    {
  
  for (let i = 0; i < candidats.length; i++) 
    console.log(`ID: ${candidats[i].id}`);
    console.log(`Nom: ${candidats[i].nom}`);
    console.log(`Prenom: ${candidats[i].prenom}`);
    console.log(`Parti: ${candidats[i].parti}`);
    console.log(`Votes: ${candidats[i].votes}`);
    console.log("----------------------");
}

  if (candidat) {
    candidat.votes++;
    console.log("Vote enregistré avec succès !");
  } else {
    console.log("Candidat introuvable !");
  }let candidat = null;

for (let i = 0; i < candidats.length; i++) 
    if (candidats[i].id === id) {
        candidat = candidats[i];
        break;
}

function statistiques() {
  if (candidats.length === 0) {
    console.log("Aucun candidat.");
    return;
  }

let totalVotes = 0;

for (let i = 0; i < candidats.length; i++) {
    totalVotes = totalVotes + candidats[i].votes;
}

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
5
6
7
8
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
