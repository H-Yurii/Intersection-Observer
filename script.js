let callback = (events) => {
    events.forEach(element => {
        if (element.isIntersecting) {
            element.target.classList.add('active')
        } else {
            element.target.classList.remove('active')
        }
    });
}

let optins = {
    root: null,
    threshold: 0.5
}

let observer = new IntersectionObserver(callback, optins)

let element = document.querySelector('.div-element')
observer.observe(element)


/* ----- 1. Aufgabe ----- */

/* Створіть HTML-сторінку, що містить список з 10 елементів li. 
Кожен елемент li містить картинку та назву фрукту.  */

let callbackFruits = (fruits) => {
    fruits.forEach(fruit => {
        if (fruit.isIntersecting) {
            fruit.target.classList.add('active')
        } else {
            fruit.target.classList.remove('active')
        }
    });
}

let optinsFruits = {
    root: null,
    threshold: 0.5
}

let observerFruits = new IntersectionObserver(callbackFruits, optinsFruits)

let fruits = document.querySelectorAll('.item__list')
fruits.forEach(fruit => {
    observerFruits.observe(fruit)
});


/* ----- 2. Aufgabe ----- */

/* Використайте JavaScript та IntersectionObserver, щоб 
додати анімацію для кожного елемента li, коли він входить 
в зону видимості користувача. Конкретно, коли елемент входить 
в зону видимості, його картинка змінюється на іншу (можливо, 
зображення з вищою якістю), а назва фрукту змінює свій колір. 
Коли елемент виходить з зони видимості, картинка та назва 
фрукту знову змінюються на початкові значення. */

let toggleFruitAppearance = (fruits) => {
    fruits.forEach(fruit => {
        let images = fruit.target.querySelectorAll('.img')
        let fruitName = fruit.target.querySelector('.list__text')
        if (fruit.isIntersecting) {
            images.forEach(img => {
                img.src = img.dataset.high
            });
            let color = getNewColor()
            fruitName.style.color = color
        } else {
            let array = ['./Images/Apple.jpg', './Images/Banana.jpg', './Images/Orange.jpg', './Images/Mango.jpg', './Images/Strawberry.jpg', './Images/Pineapple.jpg', './Images/Watermelon.jpg', './Images/Grapes.jpg', './Images/Blueberry.jpg', './Images/Kiwi.jpg']
            array.forEach(track => {
                images.forEach(img => {
                    img.src = track
                });
            });
        }
    });
}

function getNewColor()  {
    let variable = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += variable[Math.floor(Math.random() * 16)]
    }
    return color
}

let optionsLook = {
    root: null,
    threshold: 0.5
}

let observerLook = new IntersectionObserver(toggleFruitAppearance, optionsLook)
fruits.forEach(fruit => {
    observerLook.observe(fruit)
});

/* ----- 2. Aufgabe ----- */

let image = document.querySelectorAll('.image')

let seeThePicture = (image) => {
    image.forEach(element => {
        let img = element.target
        if (element.isIntersecting) {
            img.src = img.dataset.src
        } else {
            img.src = ''
        }
    })
}

let optionsSee = {
    root: null,
    threshold: 0.5
}

let observerSee = new IntersectionObserver(seeThePicture, optionsSee)
image.forEach(img => {
    observerSee.observe(img)
});