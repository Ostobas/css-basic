function createAlert(obj) {

    // obj parameters:
    // content: html text - required
    // type: 'success' || 'danger' - optional
    // removeTime: after that the alert will be removed (ms) - optional

    // Set the default params
    var removeTime = obj.removeTime || 3000
    var alertDeck
    
    // Create main alert
    var alert = document.createElement('div')
    alert.className = 'alert ' + obj.type
    
    // Create content
    var content = document.createElement('div')
    content.className = 'content'
    content.innerHTML = obj.content
    alert.appendChild(content)

    // Find the alert deck
    alertDeck = document.querySelector('.alert-deck')

    // If there is not any, create one!
    if (!alertDeck) {
        alertDeck = document.createElement('div')
        alertDeck.className = 'alert-deck'
        document.querySelector('body').appendChild(alertDeck)
    }
    
    // Append the alert to the deck
    alertDeck.appendChild(alert)

    // Add remove event listener to thr alert
    alert.addEventListener('click', function() {
        removeAlert(alert)
    })

    // Remove after a given time
    setTimeout(function() {
        removeAlert(alert)
    }, removeTime)
}

function removeAlert(alert) {
    // Remove the alert in time, beacuse of animations
    alert.classList.add('remove')
    setTimeout(function() {
        alert.remove()
    }, 250)
}