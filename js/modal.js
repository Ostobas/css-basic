(function() {
    function addModalOpenListeners() {
        document.querySelectorAll('[data-target]')
        .forEach(function(toggler) {
            toggler.addEventListener('click', function() {
                openModal(toggler.dataset.target)
            })
        })
    }

    function addModalCloseListener() {
        document.querySelectorAll('.modal')
        .forEach(function(modal) {
            modal.addEventListener('click', function() {
                closeModal(modal)
            })
        })
    }

    function openModal(id) {
        setTimeout(function() {
            document.querySelector(id).classList.add('active')
        },0)
    }

    function closeModal(modal) {
        modal.classList.add('close')
        setTimeout(function() {
            modal.classList.remove('active')
        }, 125)
        setTimeout(function() {
            modal.classList.remove('close')
        }, 125)
    }

    (function() {
        addModalOpenListeners()
        addModalCloseListener()
    })()
})()