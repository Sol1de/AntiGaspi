//initialise la map a vide
var map = L.map('map').setView([48.842798, 2.350512], 11);

//ajoute un marker a la position donnée
var marker1 = L.marker([48.853017, 2.349804]).addTo(map);
var marker2 = L.marker([48.886437, 2.345630]).addTo(map);
var marker3 = L.marker([48.837296, 2.301420]).addTo(map);
var marker4 = L.marker([48.866667, 2.333333]).addTo(map);
var marker5 = L.marker([48.858041, 2.294696]).addTo(map);
var marker6 = L.marker([48.833308, 2.363549]).addTo(map);
var marker7 = L.marker([48.852288, 2.395993]).addTo(map);
var marker8 = L.marker([48.890564, 2.385521]).addTo(map);
var marker9 = L.marker([48.876386, 2.226792]).addTo(map);
var marker10 = L.marker([48.838889, 2.178041]).addTo(map);
var marker11 = L.marker([48.824461, 2.221485]).addTo(map);
var marker12 = L.marker([48.777424, 2.306629]).addTo(map);
var marker13 = L.marker([48.783759, 2.225605]).addTo(map);
var marker14 = L.marker([48.809089, 2.387653]).addTo(map);
var marker15 = L.marker([48.810445, 2.271610]).addTo(map);
var marker16 = L.marker([48.796425, 2.347141]).addTo(map);
var marker17 = L.marker([48.846796, 2.494415]).addTo(map);
var marker18 = L.marker([48.801589, 2.464202]).addTo(map);
var marker19 = L.marker([48.776739, 2.404872]).addTo(map);
var marker20 = L.marker([48.874043, 2.432227]).addTo(map);
var marker21 = L.marker([48.917794, 2.456316]).addTo(map);
var marker22 = L.marker([48.937376, 2.382825]).addTo(map);
var marker23 = L.marker([48.908001, 2.283000]).addTo(map);
var marker24 = L.marker([48.909476, 2.332198]).addTo(map);
var marker25 = L.marker([48.911757, 2.237273]).addTo(map);
var marker26 = L.marker([48.944631, 2.315543]).addTo(map);

//ajoute un popup a chaque marker
marker2.bindPopup("<b>Point de vente</b><br>Paris (Sacré-Cœur)").openPopup();
marker3.bindPopup("<b>Point de vente</b><br>Saint-Denis (Stade de France)").openPopup();
marker5.bindPopup("<b>Point de vente</b><br>Paris (Canal Saint-Martin)").openPopup();
marker6.bindPopup("<b>Point de vente</b><br>Paris (Montparnasse)").openPopup();
marker7.bindPopup("<b>Point de vente</b><br>Paris (Bois de Boulogne)").openPopup();
marker8.bindPopup("<b>Point de vente</b><br>Paris (Parc des Buttes-Chaumont)").openPopup();
marker9.bindPopup("<b>Point de vente</b><br>Versailles (Château de Versailles)").openPopup();
marker10.bindPopup("<b>Point de vente</b><br>Marly-le-Roi (Parc du Château de Marly)").openPopup();
marker11.bindPopup("<b>Point de vente</b><br>Sèvres (Manufacture nationale de Sèvres)").openPopup();
marker12.bindPopup("<b>Point de vente</b><br>Orly (Aéroport d'Orly)").openPopup();
marker13.bindPopup("<b>Point de vente</b><br>Rueil-Malmaison (Château de Malmaison)").openPopup();
marker14.bindPopup("<b>Point de vente</b><br>Saint-Cloud (Parc de Saint-Cloud)").openPopup();
marker15.bindPopup("<b>Point de vente</b><br>Boulogne-Billancourt (Parc Edmond de Rothschild)").openPopup();
marker16.bindPopup("<b>Point de vente</b><br>Vincennes (Château de Vincennes)").openPopup();
marker17.bindPopup("<b>Point de vente</b><br>Roissy-en-France (Aéroport Charles de Gaulle)").openPopup();
marker18.bindPopup("<b>Point de vente</b><br>Le Bourget (Musée de l'Air et de l'Espace)").openPopup();
marker19.bindPopup("<b>Point de vente</b><br>Villepinte (Parc des Expositions de Villepinte)").openPopup();
marker20.bindPopup("<b>Point de vente</b><br>Saint-Ouen (Puces de Saint-Ouen)").openPopup();
marker21.bindPopup("<b>Point de vente</b><br>Argenteuil (Centre-ville d'Argenteuil)").openPopup();
marker22.bindPopup("<b>Point de vente</b><br>Nanterre (Université Paris Nanterre)").openPopup();
marker23.bindPopup("<b>Point de vente</b><br>Rambouillet (Château de Rambouillet)").openPopup();
marker25.bindPopup("<b>Point de vente</b><br>Saint-Germain-en-Laye (Château de Saint-Germain-en-Laye)").openPopup();
marker26.bindPopup("<b>Point de vente</b><br>Cergy (Préfecture du Val-d'Oise)").openPopup();
marker1.bindPopup("<b>Point de vente</b><br>Paris (Place de la Concorde)").openPopup();
marker4.bindPopup("<b>Point de vente</b><br>Paris (Place de la République)").openPopup();
marker24.bindPopup("<b>Point de vente</b><br>Meudon (Observatoire de Paris-Meudon)").openPopup();

//affiche la map de paris
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);