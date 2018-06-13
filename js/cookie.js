// Remove cookie bannner
function removeBanner(obj){
    setCookie('cookieAgree', true, 14);
    var cookieBanner = obj.closest('.cookie-banner')
    cookieBanner.classList.add('removing')
    // Timeout because of the animation
    setTimeout(function() {
        cookieBanner.remove()
    }, 200)
}

// Check is the user has already agreed on cookie policy.
function checkCookieAgree() {
    // Cookie exist ?
    if (document.cookie.split(';').filter(function(item) {
        return item.indexOf('cookieAgree=') >= 0
    }).length) {
        // The cookie already exist, we can return the function
        return true
    } else {
        createCookieBanner()
    }
}

// Create the cookie banner
function createCookieBanner() {

    // Create the banner div
    var cookieBanner = document.createElement('div')
    cookieBanner.classList.add('cookie-banner')

    // Create the container
    var container = document.createElement('div')
    container.classList.add('container')

    // Create the content
    var content = document.createElement('div')
    content.classList.add('content')
    content.textContent = 'We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.'
    container.appendChild(content)

    // Create the button
    var btn = document.createElement('button')
    btn.className = 'btn banana'
    btn.textContent = 'Accept'
    container.appendChild(btn)

    // Append the banner to body
    cookieBanner.appendChild(container)
    document.querySelector('body').appendChild(cookieBanner)

    addRemoveBannerListener()

}

// Create cookie
function setCookie(name, value, expireDays) {
    // Set the expire date
    var date = new Date()
    date.setTime(date.getTime() + (expireDays * 1000 * 3600 * 24));
    var expires = "expires=" + date.toUTCString()
    document.cookie = name + "=" + value + ";" + expires
}

// Add remove banner listener
function addRemoveBannerListener() {
    document.querySelector('.cookie-banner button')
    .addEventListener('click', function() {
        removeBanner(this)
    })
}