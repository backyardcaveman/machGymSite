const nav = document.querySelector(".white-nav");
const logo = document.querySelector(".gym-logo");
const links = document.querySelector(".header-links");
const quote = document.getElementById("title");
const person = document.getElementById("author");
const rightButton = document.getElementById("right");
const leftButton = document.getElementById("left");


//STICKY NAV-BAR

window.addEventListener('scroll', () => {
    if(window.scrollY > nav.offsetHeight - 32) {
        nav.classList.add('active')
        logo.classList.add('active')
        links.classList.add('active')
    } else {
        nav.classList.remove('active')
        logo.classList.remove('active')
        links.classList.remove('active')
    }
})

//TESTIMONIAL CAROUSEL

const testimonialArr = [
    {
        text: "A friendly atmosphere with extensive equipment, pool, tv, wifi, sauna, steamroom, classes and day care. Spacious change rooms and showers...very clean! A very comfortable atmosphere to improve health, challenge yourself, or even have a trainer to help you with your fitness goals. Very reasonable membership fee!",
        author: "Ann Smith"
    },
    {
        text: "I came to Alex for help with an achy back and extra skinny legs. Now I’m dead lifting and squatting 2X my body weight and three months ago medaled in my first power lifting competition. At 37 I’m in better shape and stronger than ever. Alex is an awesome trainer and an awesome guy.",
        author: "Todd Peterson"
    },
    {
        text: "As a woman, I was somewhat intimidated by the rack exercises, but found them to quickly deliver results. Alex’s focus on form and mapping out an individualized plan, taking into consideration any injuries or medical conditions, was key. Not only am I stronger, but I am no longer intimidated by the exercises. I love the squats!",
        author: "Hans Solo Burger"
    }
]

let i = 0

quote.innerHTML = testimonialArr[i].text;
person.innerHTML = testimonialArr[i].author;
    
    //right button functionality

rightButton.addEventListener('click', () => {
    i++;
    if(i < testimonialArr.length) {
        quote.innerHTML = testimonialArr[i].text;
        person.innerHTML = testimonialArr[i].author;
    } else {
        i = 0;
        quote.innerHTML = testimonialArr[i].text;
        person.innerHTML = testimonialArr[i].author;
    }
})

    //left button functionality

leftButton.addEventListener('click', () => {
    i--;
    if(i >= 0) {
        quote.innerHTML = testimonialArr[i].text;
        person.innerHTML = testimonialArr[i].author;
    } else {
        i = testimonialArr.length - 1;
        quote.innerHTML = testimonialArr[i].text;
        person.innerHTML = testimonialArr[i].author;
    }
})