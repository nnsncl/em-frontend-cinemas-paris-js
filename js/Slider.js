class Slider {
    constructor(ctnrSelector, items, perPage) {
        this.$ctnr = document.querySelector(ctnrSelector);
        this.slides = items;
        this.perPage = perPage;
        this.currentSlide = 0;
        this.$slidesCtnr;
        this.canSlide = true;
        this.init();
    }

    init() {
        this.$slidesCtnr = document.createElement('div');
        this.$slidesCtnr.className = 'my-slider-ctnr';
        this.$slidesCtnr.style.display = 'flex';
        this.$slidesCtnr.style.height = '100%';
        this.$slidesCtnr.style.width = `${this.slides.length}00%`;
        
        const $slideBtnsCtnr = document.createElement('div');
        $slideBtnsCtnr.className = 'slider-nav-btns-ctnr';
        const $slideBtnLeft = document.createElement('i');
        $slideBtnLeft.innerText = 'Précédent';
        $slideBtnLeft.addEventListener('click', () => {this.slideLeft();});
        $slideBtnsCtnr.appendChild($slideBtnLeft);
        const $slideBtnRight = document.createElement('i');
        $slideBtnRight.innerText = 'Suivant';
        $slideBtnRight.addEventListener('click', () => {this.slideRight();});
        $slideBtnsCtnr.appendChild($slideBtnRight);

        this.$ctnr.appendChild($slideBtnsCtnr);
        this.$ctnr.appendChild(this.$slidesCtnr);

        this.slides.map((slide, i) => {
            const $slideElt = document.createElement('div');
            $slideElt.className = 'slide-img';
            $slideElt.style.backgroundImage = 'url("' + urlImgPrefix + slide.src + '")';
            const $slideTxtElt = document.createElement('div');
            $slideTxtElt.className = 'slide-img-txt';
            $slideTxtElt.innerText = slide.txt;
            $slideElt.appendChild($slideTxtElt);
            this.$slidesCtnr.appendChild($slideElt);

            if(i === 0) {
                $slideTxtElt.style.animation = 'card-appearence 0.4s linear forwards 2s';
            }
        });
    }

    slideLeft() {
        if(this.currentSlide === 0 || !this.canSlide) return;
        this.canSlide = false;

        let left = this.currentSlide * -100;
        const limit = left + 100;
        const interval = window.setInterval(() => {
            left += 4;
            this.$slidesCtnr.style.marginLeft = `${left}%`;
            if(left >= limit) {
                this.currentSlide--;
                this.canSlide = true;
                window.clearInterval(interval);
            }
        }, 30);
    }
    
    slideRight() {    
        if(this.currentSlide === this.slides.length - 1 || !this.canSlide) return;
        this.canSlide = false;

        let left = this.currentSlide * -100;
        const limit = left - 100;
        const interval = window.setInterval(() => {
            left -= 4;
            this.$slidesCtnr.style.marginLeft = `${left}%`;
            if(left <= limit) {
                this.currentSlide++;
                this.canSlide = true;
                window.clearInterval(interval);
            }
        }, 30);
    }
}

class Pagination {
    constructor(perPage, numberOfElements, callback) {

    }
}