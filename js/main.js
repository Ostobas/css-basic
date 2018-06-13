var ui = ui()

// Creating an alert
ui.alert({
    content: 'I am a UI alert!',
    type: 'success',    // optional
    removeTime: 4500    // optional
})

// Setup the form validation
// 1. form ID
// 2. validator array
// 3. callback function - optional
ui.form('#loginForm', [
    {
        name: 'email',
        rules: [{
            type: 'required',
            message: 'Please enter an email adress!'
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