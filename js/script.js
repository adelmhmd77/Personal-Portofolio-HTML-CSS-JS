// =================================== Typing animation ===================================

var typed = new Typed('.typing', {
    strings:[
        "",
        "Web Designer",
        "Web Developer",
        "UI/UX Designer",
        "Front-end Developer",
        "Back-end Developer"
    ],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
// =================================== Navbar active toggole ===================================
  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav a");

    navLinks.forEach(link => {
      link.addEventListener("click", function () {
        document.querySelector(".nav a.active")?.classList.remove("active");
        this.classList.add("active");
      });
    });
  });
// =================================== which to apear ===================================
// function showSection(sectionId, clickedLink) {
//     // Hide all sections
//     document.querySelectorAll('.section').forEach(section => {
//       section.classList.add('hidden');
//     });
  
//     // Show selected section
//     document.getElementById(sectionId).classList.remove('hidden');
  
//     // Remove "active" class from all links
//     document.querySelectorAll('.nav a').forEach(link => {
//       link.classList.remove('active');
//     });
  
//     // Add "active" class to clicked link
//     clickedLink.classList.add('active');
//   }
// =================================== nav  apear ===================================
