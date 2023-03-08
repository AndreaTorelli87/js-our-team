const ourTeam = [
   {
      Nome : 'Wayne Barnett',
      Ruolo : "Founder & CEO",
      Immagine : "wayne-barnett-founder-ceo.jpg",
   },
   {
      Nome : 'Angela Caroll',
      Ruolo : "Chief Editor",
      Immagine : "angela-caroll-chief-editor.jpg",
   },
   {
      Nome : 'Walter Gordon',
      Ruolo : "Office Manager",
      Immagine : "walter-gordon-office-manager.jpg",
   },
   {
      Nome : 'Angela Lopez',
      Ruolo : "Social Media Manager",
      Immagine : "angela-lopez-social-media-manager.jpg",
   },
   {
      Nome : 'Scott Estrada',
      Ruolo : "Developer",
      Immagine : "scott-estrada-developer.jpg",
   },
   {
      Nome : 'Barbara Ramos',
      Ruolo : "Graphic Designer",
      Immagine : "barbara-ramos-graphic-designer.jpg",
   },
];

for (var i = 0; i < ourTeam.length; i++) {
   const membroTeam = ourTeam[i];
   
   for (var chiave in membroTeam) {
      console.log(chiave + ': ' + membroTeam[chiave]);
   }
}