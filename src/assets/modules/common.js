const card = document.querySelectorAll('.card__item');
const careersMobile = document.querySelector('.careers__mobile');
const careersContainer = document.querySelector('.careers__wrapper');
const careersTopArrow = document.querySelector('.careers__top--arrow');


card.forEach((e) => {
    e.addEventListener('click', () => {
        e.classList.toggle('flip');
    })
})

careersMobile.addEventListener('click', () => {
    careersContainer.classList.toggle('careers__wrapper--visible');
    careersTopArrow.classList.toggle('rotate');
})

const careersAccordionContent = document.querySelectorAll('.careers__accordion--content li')

careersAccordionContent.forEach((e) => {
    e.addEventListener('click', () => {
        careersAccordionContent.forEach((event) => {
            event.classList.remove('active')
        })
        e.classList.add('active');
    })
})
