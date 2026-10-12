const events = [
    {
        title: "BOSTEC STEM Career Expo",
        date: "2026-09-20",
        displayDate: "20 September 2026",
        description: "Join BOSTEC for an exciting STEM Career Expo connecting learners with professionals and career opportunities in science, technology, engineering and mathematics.",
        image: "makgoshing.jpg",
        link: "contact.html"
    },

    {
        title: "National Science Week",
        date: "2026-10-10",
        displayDate: "10 October 2026",
        description: "Experience interactive science exhibitions, demonstrations and educational activities designed to inspire curiosity and interest in science and technology.",
        image: "makgoshing.JPG",
        link: "contact.html"
    }
];


document.addEventListener("DOMContentLoaded", function () {

    const popup = document.getElementById("event-popup");
    const popupContent = document.getElementById("event-popup-content");
    const closePopup = document.getElementById("close-event-popup");

    if (!popup || !popupContent) {
        return;
    }

    // Get today's date
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Find events that are:
    // 1. Within 2 days before the event
    // 2. On the event day
    // 3. Not already expired
const activeEvents = events
    .filter(function (event) {

        const eventDate = new Date(event.date);
        eventDate.setHours(0, 0, 0, 0);

        // Keep events that have not happened yet
        return eventDate >= today;
    })
    .sort(function (a, b) {

        return new Date(a.date) - new Date(b.date);

    });


    // If there are no active events, don't show popup
    if (activeEvents.length === 0) {
        return;
    }


    // Show the nearest active event
    const event = activeEvents[0];


    popupContent.innerHTML = `
        <img src="${event.image}" alt="${event.title}">

        <div class="popup-event-content">

            <h2>🎉 ${event.title}</h2>

            <p class="event-date">
                📅 ${event.displayDate}
            </p>

            <p>
                ${event.description}
            </p>

            <a href="${event.link}" class="event-button">
                Learn More
            </a>

        </div>
    `;


    // Show popup after 1 second
    setTimeout(function () {
        popup.classList.add("show");
    }, 1000);


    // Close button
    if (closePopup) {

        closePopup.addEventListener("click", function () {
            popup.classList.remove("show");
        });

    }


    // Close when clicking outside the card
    popup.addEventListener("click", function (e) {

        if (e.target === popup) {
            popup.classList.remove("show");
        }

    });

});
