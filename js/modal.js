(function() {
    
    function addModalOpenListeners() {
        // Search all the element with the data-target, that's how the user can identify, witch button opens witch modal.
        // For e.: data-target="#myModal"
        document.querySelectorAll('[data-target]')
        .forEach(function(toggler) {
            toggler.addEventListener('click', function() {
                // target: id of the modal
                openModal(toggler.dataset.target)
            })
        })
    }

    function addModalCloseListener() {
        document.querySelectorAll('.modal')
        .forEach(function(modal) {
            // First add the close function to the whole modal, including the dimmer. So the user will close the modal, if clicks outside of it.
            modal.addEventListener('click', function() {
                closeModal(modal)
            })
            // Don't close the modal, when clicking anywhere on the window
            modal.querySelector('.window')
            .addEventListener('click', function(e) {
                e.stopPropagation()
            })
            // Close the modal when clicking one of the close buttons.
            modal.querySelectorAll('.close-icon, .close-btn')
            .forEach(function(selector) {
                selector.addEventListener('click', function() {
                    closeModal(modal)
                })
            })
        })
    }

    function openModal(id) {
        // Close the active modal, if there is any
        try {
            closeModal(document.querySelector('.modal.active'))
        // When there is no such modal, an error would occur, this line prevents that.
        } catch (e) {}
        // In every case open the modal with the given ID.
        finally {
            setTimeout(function() {
                document.querySelector(id).classList.add('active')
            },0)
        }
    }

    function closeModal(modal) {
        // Start the modal closing animation by adding the close class.
        modal.classList.add('close')
        // Because of the animations, the classes must be removed in a given time.
        setTimeout(function() {
            modal.classList.remove('active')
        }, 125)
        setTimeout(function() {
            modal.classList.remove('close')
        }, 125)
    }

    (function() {
        // Immidiately invoke the event listener functions
        addModalOpenListeners()
        addModalCloseListener()
    })()
})()