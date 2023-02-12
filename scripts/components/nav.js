class Nav {
    init = () => {
        this.initDOMElements();
        this.addListToNav(this.listOfSites, this.footerMenuListItems);
        this.handleNavButton();
    }

    initDOMElements = () => {
        this.footerMenuListItems = document.querySelectorAll('.navigation__content--link-list ul li a');
        this.navButton = document.querySelector('.navigation__content--nav-btn');
        this.navLinkList = document.querySelector('.navigation__content--link-list');
        this.listOfSites = [
            'Über uns', 
            'Verhinderungspflege', 
            'Andere leistungen', 
            'Fragebogen / Antrag',
            'Bewertungen',
            'Kontakt', 
        ];
    }

    addListToNav = (listOfElements, listOfLinks) => {
        let i = 0;
        listOfLinks.forEach(element => {
            element.innerText = listOfElements[i];
            i++;
        });
    }

    handleNavButton = () => {
        this.navButton.addEventListener('click', () => {
            this.navButton.classList.toggle('nav-btn--active');
            this.navLinkList.classList.toggle('nav-list--active');
        });
    }
    
}

let objNav = new Nav();
objNav.init();
