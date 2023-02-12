class Ofert {
    init = () => {
        this.initDOMElements();
        this.checkHeightOfParagraph();
        this.onResizeScreen();
    }

    initDOMElements = () => {
        this.textParagraph = document.querySelectorAll('.ofert .card-content .card-text');
    }
    
    checkHeightOfParagraph = () => {
        let maxHeight = 0;
        this.textParagraph.forEach(element => {
            element.style.height = '100%';
        });
        this.textParagraph.forEach(element => {
            if(element.offsetHeight > maxHeight) {
                maxHeight = element.offsetHeight;
            }
        });
        this.setCorrectHight(maxHeight);
    }

    setCorrectHight = height => {
        this.textParagraph.forEach(element => {
            element.style.height = height + 'px';
        });
    }

    onResizeScreen = () => {
        window.addEventListener('resize', () => {
            if(window.innerWidth > 1024) {
                this.checkHeightOfParagraph();
            }
        });
    }
    
    
    
}

let objOfert = new Ofert();
objOfert.init();
