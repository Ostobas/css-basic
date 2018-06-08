(function () {

    var collapse = document.querySelector('.nav .collapse')

    function addNavItemListeners() {
        document.querySelectorAll('.nav .item')
        .forEach(function(link) {
            link.addEventListener('click', function() {
                setActive(this)
            })
        })
    }
    
    function setActive(div) {
        div.classList.add('active')
        siblings(div).map(function (div) {
            div.classList.remove('active')
        })
        closeCollapse()
    }
    
    function addToggleBtnListener() {
        document.querySelectorAll('.nav .toggle')
        .forEach(function(toggle) {
            toggle.addEventListener('click', function() {
                toggleCollapse(300)
            })
        })
    }

    function toggleCollapse(time) {
        if (collapse.classList.contains('active')) {
            closeCollapse(time)
        } else {
            openCollapse(time)
        }
    }

    function closeCollapse(time) {
        removeHeight()
        collapse.classList.add('collapsing')
        setTimeout(function() {
            collapse.classList.remove('active')
        }, 0)
        setTimeout(function() {
            collapse.classList.remove('collapsing')
        }, time)
    }

    function openCollapse(time) {
        collapse.classList.add('collapsing')
        setTimeout(function() {
            setActiveHeight()
            collapse.classList.add('active')
        }, 0)
        setTimeout(function() {
            collapse.classList.remove('collapsing')
        }, time)
        
    }

    function setActiveHeight() {
        var h = collapse.querySelector('ul').offsetHeight
        collapse.setAttribute('style', 'height:'+ h +'px')
    }

    function removeHeight() {
        collapse.setAttribute('style', '')
    }

    function siblings(div) {
        var parent = div.parentNode
        var children = parent.children
        var numbOfChildren = children.length
        var siblingList = []

        for (i = 0; i < numbOfChildren; i++) {
            if (children[i] !== div) {
                siblingList.push(children[i])
            }
        }
        return siblingList
    }
    
    (function () {
        try {
            addNavItemListeners()
        } catch(error) {
            console.log('[Error] There are no navigation links in the page.')
        }
        try {
            addToggleBtnListener()
        } catch(error) {
            console.log('[Error] There is no toggle button in the page.')
        }
    })()

})()