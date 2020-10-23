class Slider {
    constructor(slides, ctnrSelector, perPage) {
        this.$ctnr = document.querySelector(ctnrSelector);
        this.perPage = perPage;
        this.currentSlide = 0;
        this.$slidesCtnr = document.createElement('div');
        this.slides = slides;
        this.init();
        this.displaySlides();
    }

    init() {
        this.$slidesCtnr.className = 'my-slider-ctnr';
        this.$slidesCtnr.style.display = 'flex';
        this.$slidesCtnr.style.height = '100%';
        this.$slidesCtnr.style.width = `${this.slides.length}00%`;

        const $slideBtnsCtnr = document.createElement('div');
        $slideBtnsCtnr.className = 'slider-nav-btns-ctnr';
        const $slideBtnLeft = document.createElement('i');
        $slideBtnLeft.innerText = 'Précédent';
        $slideBtnLeft.addEventListener('click', () => { this.slideLeft(); });
        $slideBtnsCtnr.appendChild($slideBtnLeft);
        const $slideBtnRight = document.createElement('i');
        $slideBtnRight.innerText = 'Suivant';
        $slideBtnRight.addEventListener('click', () => { this.slideRight(); });
        $slideBtnsCtnr.appendChild($slideBtnRight);
       
        this.$ctnr.appendChild($slideBtnsCtnr);
        this.$ctnr.appendChild(this.$slidesCtnr);
    }

    displaySlides() {
        this.$slidesCtnr.innerHTML = '';
        this.slides.forEach((slide, i) => {
            const $slideElt = document.createElement('div');
            $slideElt.className = 'slide-img';
            $slideElt.style.backgroundImage = 'url("' + slide.src + '")';
            const $slideTxtElt = document.createElement('div');
            $slideTxtElt.className = 'slide-img-txt';
            $slideTxtElt.innerHTML = slide.txt;
            $slideElt.appendChild($slideTxtElt);
            this.$slidesCtnr.appendChild($slideElt);

            if (i === 0) {
                $slideTxtElt.style.animation = 'card-appearence 0.4s linear forwards 2s';
            }
        });
    }

    slideLeft() {
        
    }

    slideRight() {
        
    }
}

class Pagination {
    constructor(perPage, numberOfElements, callback, $ctnr) {}
}