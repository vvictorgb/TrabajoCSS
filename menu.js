
 const menuItems = document.querySelectorAll('.menu');


 function showSection(sectionId) {

   const sections = document.querySelectorAll('.content-section');
   sections.forEach(section => {
     section.style.display = 'none';
   });


   const targetSection = document.getElementById(sectionId);
   targetSection.style.display = 'block';
 }

 menuItems.forEach(item => {
   item.addEventListener('click', () => {
     const sectionId = item.getAttribute('data-target');
     showSection(sectionId);
   });
 });


 showSection('Entrantes');



 let home = document.getElementById('homeBerlin');
 home.addEventListener('click', function () {
     window.location.href = 'indexRestauranteBerlin.html';
 });
 

