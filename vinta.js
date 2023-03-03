//NAVIGATION BAR TOGGLE
const bar = document.querySelector('.bar');
const navLinks = document.querySelector('.nav-links');

bar.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

navLinks.querySelectorAll('li a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('show');
        }
    });
});





// FLIPPIING IMAGES
// set the slideshow interval in milliseconds
var interval = 3000;

// get all the images in the slideshow
var slides = document.querySelectorAll('#image img');

// set the index of the current slide
var index = 0;

// function to show the next slide
function nextSlide() {
    // hide the current slide
    slides[index].classList.remove('active');
    // increment the index
    index = (index + 1) % slides.length;
    // show the next slide
    slides[index].classList.add('active');
}

// set an interval to call the nextSlide function
setInterval(nextSlide, interval);









// SEE MORE EFFECT
// Get all "See More" buttons and "more-info" spans
const seeMoreBtns = document.querySelectorAll(".see-more");
const moreInfos = document.querySelectorAll(".more-info");

// Add event listeners to all "See More" buttons
seeMoreBtns.forEach(function(seeMoreBtn, index) {
    seeMoreBtn.addEventListener("click", function() {
        if (moreInfos[index].style.display === "none") {
            moreInfos[index].style.display = "block";
            seeMoreBtn.textContent = "See Less";
        } else {
            moreInfos[index].style.display = "none";
            seeMoreBtn.textContent = "See More";
        }
    });
});


//REVIEWS JAVASCRIPT EFFECTS
const reviews = [
    {
        id: 1,
        name: "Sarah Lee",
        img: "./Photos/profilepicture4.jpg",
        text:
            "I recently stayed at this resort and it was fantastic! The staff was friendly and attentive, the rooms were spacious and clean, and the amenities were top-notch. I particularly enjoyed the pool and the spa. I would definitely recommend this resort to anyone looking for a relaxing and luxurious vacation.",
    },
    {
        id: 2,
        name: "John Smith",
        img: "./Photos/profilepicture3.jpg",
        text:
            "I had a wonderful time at this resort! The location was beautiful and serene, and the rooms were well-appointed and comfortable. The restaurant on site was also excellent - I had some of the best meals of my life there. Overall, I would highly recommend this resort to anyone looking for a luxurious and relaxing getaway.",
    },
    {
        id: 3,
        name: "Mike Johnson",
        img: "./Photos/profilepicture6.jpg",
        text:
            "I stayed at this resort with my family and we all had a great time. The staff was friendly and helpful, and the activities available on site kept us all entertained. We particularly enjoyed the beach and the water sports. The rooms were also spacious and comfortable. I would definitely recommend this resort to families looking for a fun and relaxing vacation.",
    },
    {
        id: 4,
        name: "Emily Kim",
        img: "./Photos/profilepicture5.jpg",
        text:
            "I stayed at this resort while on assignment for a travel magazine and I was blown away by the level of service and attention to detail. The staff went out of their way to make my stay comfortable and memorable. The resort itself is beautiful and well-maintained, with plenty of activities and amenities to keep guests entertained. I would definitely recommend this resort to anyone looking for a luxurious and unforgettable vacation.",
    },
];

const img = document.getElementById('person1-img');
const author = document.getElementById('author');
const info = document.getElementById("info");


const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");


let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem);
});

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    info.textContent = item.text;
}


//SHOW NEXT PERSON
nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

// Show prev person
prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});