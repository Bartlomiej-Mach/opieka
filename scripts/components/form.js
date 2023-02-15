class Form {
    init = () => {
        this.initDOMElements();
        this.changeTheSlide();
        this.addActiveClassToSlide();
        this.hideButtons();
        this.initChangeAction();
        this.checkInputsEmpty();
    }

    initDOMElements = () => {
        this.inputContainers = document.querySelectorAll('form .input-container');
        this.buttonBack = document.querySelector('form #back-btn');
        this.buttonNext = document.querySelector('form #next-btn');
        this.buttonSubmit = document.querySelector('form #submit-btn');
        this.currentSlide = 0;
        this.isEmpty = true;
        this.allInputs = document.querySelectorAll('.input-inside');
    }

    changeTheSlide = () => {
        this.buttonNext.addEventListener('click', () => {
            this.currentSlide++;
            this.addActiveClassToSlide();
            this.hideButtons();
            this.checkInputsEmpty();
        });
        this.buttonBack.addEventListener('click', () => {
            this.currentSlide--;
            this.addActiveClassToSlide();
            this.hideButtons();
            this.checkInputsEmpty();
        });
        
    }

    addActiveClassToSlide = () => {
        for (let index = 0; index < this.inputContainers.length; index++) {
            
            if(this.currentSlide === index) {
                this.inputContainers[index].classList.add('active--slide');
            } else {
                this.inputContainers[index].classList.remove('active--slide');
            }
            
        }
    }
    
    hideButtons = () => {
        if(this.currentSlide === 0) {
            this.buttonBack.classList.add('hidden');
        } else {
            this.buttonBack.classList.remove('hidden');
        } 

        if(this.currentSlide === this.inputContainers.length-1) {
            this.buttonNext.classList.add('hidden');
            this.buttonSubmit.classList.remove('hidden');
        } else {
            this.buttonNext.classList.remove('hidden');
            this.buttonSubmit.classList.add('hidden');
        }
    }
    
    initChangeAction = () => {
        this.allInputs.forEach(element => {
            element.addEventListener('change', () => {
                this.checkInputsEmpty();
            });
            element.addEventListener('keyup', () => {
                this.checkInputsEmpty();
            });
        });
    }

    checkInputsEmpty = () => {
        const activeSlidesInputs = document.querySelectorAll('.input-container.active--slide .input-inside');
        if(activeSlidesInputs.length > 1) {
            if(activeSlidesInputs[0].value !== '' && activeSlidesInputs[1].value !== '') {
                this.buttonNext.classList.remove('btn-disabled');
            } else {
                this.buttonNext.classList.add('btn-disabled');
            }
        } else if(activeSlidesInputs.length === 1) {
            if(activeSlidesInputs[0].value !== '') {
                this.buttonSubmit.classList.remove('btn-disabled');
            } else {
                this.buttonSubmit.classList.add('btn-disabled');
            } 
        }
    }
    
}

let objForm = new Form();
objForm.init();
