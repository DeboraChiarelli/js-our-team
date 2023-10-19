/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni:
nome
ruolo
foto
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite. (come abbiamo fatto insieme in classe con l’array di studenti)
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe. */

//- Creo array di oggetti 
//- determino: nome, ruolo, foto
const membriTeam = [
    {
        nome: 'Angela Carroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg',
    },

    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg',
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg',
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg',
    },
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg',
    }
];

console.log(membriTeam.nome);

//- Importo dal DOM il contenitore delle classi, container-cards dal css
const containerDOMElement = document.querySelector("#container-cards");
console.log(containerDOMElement);

//- Apro ciclo for così da poter stamapre per ogni membro le sue informazioni
for (let i = 0; i < membriTeam.length; i++) {
    let membroTeam = membriTeam[i];

    const nomeMembro = membroTeam.nome;
    const ruoloMembro = membroTeam.ruolo;
    const imgMembro = membroTeam.foto;

    const cardElements = `<div class="cards"> <div class="cards-description">${nomeMembro}</div> 
                        <div class="cards-description">${ruoloMembro}</div> <img src=img/${imgMembro} alt=""> </div>`;
  
    containerDOMElement.innerHTML += cardElements;

}




