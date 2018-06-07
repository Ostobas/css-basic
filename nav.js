(function () {


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
        document.querySelector('.nav .toggle')
            .addEventListener('click', function() {
                toggleCollapse()
            })
    }

    function toggleCollapse() {
        document.querySelector('.nav .collapse')
        .classList.toggle('active')
    }

    function closeCollapse() {
        document.querySelector('.nav .collapse')
        .classList.remove('active')
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
        addNavItemListeners()
        addToggleBtnListener()
    })()

})()