const ourTeam = [
   { Nome: 'Wayne Barnett', Ruolo: "Founder & CEO", Immagine: "img/wayne-barnett-founder-ceo.jpg" },
   { Nome: 'Angela Caroll', Ruolo: "Chief Editor", Immagine: "img/angela-caroll-chief-editor.jpg" },
   { Nome: 'Walter Gordon', Ruolo: "Office Manager", Immagine: "img/walter-gordon-office-manager.jpg" },
   { Nome: 'Angela Lopez', Ruolo: "Social Media Manager", Immagine: "img/angela-lopez-social-media-manager.jpg" },
   { Nome: 'Scott Estrada', Ruolo: "Developer", Immagine: "img/scott-estrada-developer.jpg" },
   { Nome: 'Barbara Ramos', Ruolo: "Graphic Designer", Immagine: "img/barbara-ramos-graphic-designer.jpg" }
];

let contenitoreDom = document.getElementById("contenitore");

for (var i = 0; i < ourTeam.length; i++) {
   const membroTeam = ourTeam[i];

   let test = `<div class="card m-4" style="width: 18rem;">
                  <img src="${membroTeam["Immagine"]}" class="card-img-top object-fit-contain" alt="image of ${membroTeam["Nome"]}">
                  <div class="card-body">
                     <h4 class="card-title">${membroTeam["Nome"]}</h4>
                     <p class="card-text">${membroTeam["Ruolo"]}</p>
                  </div>
               </div>`;

   contenitoreDom.innerHTML += test;
}