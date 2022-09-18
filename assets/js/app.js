// Add a sticky to title

// Setting up a new class
let SectionTitle = class SectionTitle {
    // declaring a property
    subTitle;

    // when the class is instantiated we listen the scroll event
    constructor() {
            this.subTitle = document.querySelectorAll('.backCustom');
            window.addEventListener('scroll', () => {
                this.stickyTitle();
        })
    }

    stickyTitle() {
        let firstTitle = document.querySelector('.backCustom');
        if (window.innerWidth <= 576) {
            for (const iterator of this.subTitle) {
                if (iterator.getBoundingClientRect().top < 0) {
                    for (const title of this.subTitle) {
                        title.classList.remove('sticky');
                    }
                    iterator.classList.add('sticky');
                }
            }
            if(window.scrollY < 229){
                firstTitle.classList.remove('sticky');
            }
        }
    }
}

// Instantiating the class after the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
new SectionTitle();})