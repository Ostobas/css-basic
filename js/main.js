var ui = ui()

// Creating an alert
// ui.alert('With just plain text')
// ui.alert({
//     content: 'I am a UI alert!',
//     type: 'success',    // optional
//     removeTime: 4500    // optional
// })

// Setup the form validation
// 1. form ID
// 2. validator array
// 3. callback function - optional
ui.form('#loginForm', [
    {
        name: 'email',
        rules: [
        {
            type: 'required',
            message: 'Please enter an email adress!'
        },
        {
            type: 'validEmail',
            message: 'Please enter a valid email address!'
        }]
    },
    {
        name: 'password',
        rules: [{
            type: 'required',
            message: 'Please enter a password!'
        }]
    },
    {
        name: 'privacy',
        rules: [{
            type: 'required',
            message: 'You have to accept the Terms and Conditions!'
        }]
    }
], callback)

function callback(result) {
    if (result.valid) {
        ui.alert({
            type: 'success',
            content: 'Login successful!!'
        })
    } else {
        ui.alert({
            type: 'danger',
            content: 'Something went wrong!'
        })
    }
}

// Open / Close modal with funcion
// ui.openModal('#myModal')
// ui.closeModal('#myModal')

// Open / Close collapse menu
// ui.openCollapse()
// ui.closeCollapse()

// Set up the cookie-banner
ui.cookieBanner({
    name: 'cookieAgree',    // Optional
    value: true,            // Optional
    expire: 14,             // Optional, in days
    text: 'We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.'
})

// Create a cookie
// ui.cookie({
//     name: 'newCookie',
//     value: {
//         content: 'sdljfnskjdbdvsvsdfvsdfvkajbdc',
//         other: 'sdljnjoienwienc'
//     },
//     expire: 1              // Optional, in days
// })