(function () {

    // *NOTE* This is working for only the first collapse and nav. With multiple nav components, it has to be rewritten.

    // Select the collapse part of the nav, cause using it a fex times.
    var collapse = document.querySelector('.nav .collapse')

    function addNavItemListeners() {
        // Nav link is the anchor tag of the nav item.
        document.querySelectorAll('.nav .link')
        .forEach(function(link) {
            // Set up the venet listeners.
            link.addEventListener('click', function() {
                setActive(this)
            })
        })
    }
    
    // Onclick set active the clicked div, and remove active from others.
    function setActive(div) {
        div.classList.add('active')
        // Siblings are items in the same level of the div.
        siblings(div).map(function (div) {
            // Remove the active class from the other links, so only one can be active at a time.
            div.classList.remove('active')
        })
        // When on a mobile device, it closes the menu when clicking on a link.
        closeCollapse()
    }
    
    // Opens and closes the collapse part of the nav (on mobile).
    function addToggleBtnListener() {
        document.querySelectorAll('.nav .toggle')
        .forEach(function(toggle) {
            // Set up the event listeners.
            toggle.addEventListener('click', function() {
                // Give it a time paramater, which has to be in sync with the css transition effects.
                toggleCollapse()
            })
        })
    }

    function toggleCollapse(time = 300) {
        // Decide if we have to close or open the collapse.
        if (collapse.classList.contains('active')) {
            closeCollapse(time)
        } else {
            openCollapse(time)
        }
    }

    function closeCollapse(time = 300) {
        // The height is dynamic, so first of all it has to be removed, for a nice transition effect.
        removeHeight()
        collapse.classList.add('collapsing')
        // Async remove the active and collapsing class, so the transition effects can be seen.
        setTimeout(function() {
            collapse.classList.remove('active')
        }, 0)
        setTimeout(function() {
            collapse.classList.remove('collapsing')
        }, time)
    }

    function openCollapse(time = 300) {
        // We have to use two classes basically. One for during the transition (collapsing), and the other for the final position (active).
        collapse.classList.add('collapsing')
        // Async add the classes, cause of animation purposes.
        // When you change the display property of an element, it cancels the animation on it.
        setTimeout(function() {
            // Dynamically set the height of the collapse.
            setActiveHeight()
            collapse.classList.add('active')
        }, 0)
        setTimeout(function() {
            // When the transition finished, we can remove the collapsing class.
            collapse.classList.remove('collapsing')
        }, time)
        
    }

    // Dynamically set the height of the collapse, based on the height of ots elements.
    function setActiveHeight() {
        var h = collapse.querySelector('ul').offsetHeight
        collapse.setAttribute('style', 'height:'+ h +'px')
    }

    // Reset the style attribute (which includes the height) on the collapse element.
    function removeHeight() {
        collapse.setAttribute('style', '')
    }

    // This is a utility function, input is a div element and the output is the list of its 'brothers' or 'siblings'. Basically the divs that are on the same level as the original input div.
    function siblings(div) {
        var parent = div.parentNode
        var children = parent.children
        var numbOfChildren = children.length
        var siblingList = []

        // Add every div to the list, but not the input div
        for (i = 0; i < numbOfChildren; i++) {
            if (children[i] !== div) {
                siblingList.push(children[i])
            }
        }
        return siblingList
    }
    
    (function () {
        try {
            // Try to add the event listeners to the nav items. The try block needed, cause if there are no nav items, throws an error.
            addNavItemListeners()
        } catch(error) {
            console.log('[Error] There are no navigation links in the page.')
        }
        try {
            // Same for the toggle button listener.
            addToggleBtnListener()
        } catch(error) {
            console.log('[Error] There is no toggle button in the page.')
        }
    })()

})()