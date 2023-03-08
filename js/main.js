const ourTeam = [
   {Nome : 'Wayne Barnett', Ruolo : "Founder & CEO",Immagine : "img/wayne-barnett-founder-ceo.jpg"},
   {Nome : 'Angela Caroll', Ruolo : "Chief Editor", Immagine : "img/angela-caroll-chief-editor.jpg"},
   {Nome : 'Walter Gordon', Ruolo : "Office Manager",Immagine : "img/walter-gordon-office-manager.jpg"},
   {Nome : 'Angela Lopez', Ruolo : "Social Media Manager", Immagine : "img/angela-lopez-social-media-manager.jpg"},
   {Nome : 'Scott Estrada', Ruolo : "Developer", Immagine : "img/scott-estrada-developer.jpg"},
   {Nome : 'Barbara Ramos', Ruolo : "Graphic Designer",Immagine : "img/barbara-ramos-graphic-designer.jpg"}
];

let contenitoreDom = document.getElementById("contenitore");

for (var i = 0; i < ourTeam.length; i++) {
   const membroTeam = ourTeam[i];
   
   let Nome = `<div>${membroTeam["Nome"]}</div>`;
   let Ruolo = `<div>${membroTeam["Ruolo"]}</div>`;
   let Immagine = `<div>
                     <img src="${membroTeam["Immagine"]}" alt="">
                  </div>`;

   let membro = Nome + Ruolo + Immagine;
   contenitoreDom.innerHTML += membro;
}