/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
const hamburger =
        document.querySelector('.hamburger');
const navMenu =
        document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('mobile-active');
});

const viewMoreBtn = document.getElementById("viewMoreBtn");

const hiddenCards = document.querySelectorAll(
        ".services-grid .service-card:nth-child(n+5)"
        );

viewMoreBtn.addEventListener("click", function () {

    const isHidden = hiddenCards[0].style.display === "none" ||
            getComputedStyle(hiddenCards[0]).display === "none";

    if (isHidden) {

        // Show remaining cards
        hiddenCards.forEach(function (card) {
            card.style.display = "flex";
        });

        viewMoreBtn.textContent = "View Less";

    } else {

        // Hide remaining cards
        hiddenCards.forEach(function (card) {
            card.style.display = "none";
        });

        viewMoreBtn.textContent = "View More";

        // Optional: scroll back toward the services section
        document.querySelector(".services-grid").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

});
