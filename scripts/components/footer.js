class Footer {
    init = () => {
        this.initDOMElements();
        this.addListToFooter(this.listOfSites, this.footerMenuListItems);
        this.addListToFooter(this.listOfOfert, this.footerOfertListItems);
    }

    initDOMElements = () => {
        this.footerMenuListItems = document.querySelectorAll('#footer-menu-list a');
        this.footerOfertListItems = document.querySelectorAll('#footer-ofert-list a');
        this.listOfSites = [
            'Über uns', 
            'Verhinderungspflege', 
            'Andere leistungen', 
            'Fragebogen / Antrag',
            'Bewertungen',
            'Kontakt', 
        ];
        this.listOfOfert = [
            'Kurzzeitpflege',
            'Palliativ',
            'Nachtwache',
            'Persönliches/Assistenten Budget',
            'Häusliche Pflege mit Unterkunft',
            'Häusliche Pflege ohne Unterkunft, stundennachweise '
        ];
    }

    addListToFooter = (listOfElements, listOfLinks) => {
        let i = 0;
        listOfLinks.forEach(element => {
            element.innerText = listOfElements[i];
            i++;
        });
    }


    
    
    
}

let objFooter = new Footer();
objFooter.init();
