
var lang = {
    
    en: {
        jumbTitle: "I'm a jumbotron",
        jumbDesc: "And here are some useful info for that"
    },
    
    hu: {
        jumbTitle: "Jumbotron vagyok",
        jumbDesc: "És még itt egy pár hasznos info"
    },
    
    language: 'en',
    
    init: function() {
        var
            textID, text,
            self = this,
            lang = self.language
        
            document.querySelectorAll('[data-text]')
        .forEach(function(selector) {
            textID = selector.dataset.text
            text = self[lang][textID]
            selector.textContent = text
        })

    },

    changeLanguage: function(language) {
        this.language = language
        this.init()
    },

    toggleLanguage: function() {
        if (this.language === 'hu') {
            this.language = 'en'
        } else {
            this.language = 'hu'
        }
        this.init()
    }
}

lang.init()

document.querySelector('#langChangeBtn')
.addEventListener('click', function() {
    lang.toggleLanguage()
})