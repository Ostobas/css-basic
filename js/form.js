(function() {

    function addSubmitEventListeners() { 
        document.querySelectorAll('.form')
        .forEach(function(form){
            form.addEventListener('submit', function(e) {
                e.preventDefault()
                validateForm(form)
            })
        })
    }

    function validateForm(form) {
        var formElems = form.elements
        var numbOfElems = formElems.length
        for (var i=0; i < numbOfElems; i++) {
            // console.log(formElems[i].name)
        }
    }

    (function() {
        addSubmitEventListeners()
    })()

})()