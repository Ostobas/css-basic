;
(function (global) {

    'use strict'

    var ui = function () {
        return new ui.init()
    }

    ui.prototype = {

        validationResult: {},

        /*-----------------------
                Alert functions
        -------------------------*/

        alert: function (obj) {
            // obj parameters:
            // content: html text - required
            // type: 'success' || 'danger' - optional
            // removeTime: after that the alert will be removed (ms) - optional

            // Set the default params
            var removeTime = obj.removeTime || 3000
            var alertDeck
            var self = this

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
            alert.addEventListener('click', function () {
                self.removeAlert(alert)
            })

            // Remove after a given time
            setTimeout(function () {
                self.removeAlert(alert)
            }, removeTime)

            return alert
        },

        removeAlert: function (alert) {
            // Remove the alert in time, beacuse of animations
            alert.classList.add('remove')
            setTimeout(function () {
                alert.remove()
            }, 250)
        },

        /*-----------------------
                Form validation
        -------------------------*/

        form: function (form, validator, callback = function(){}) {
            // Set an event listener on submit and when the user submits the form,
            // calls the callback function, which gets the parameters of the results
            var self = this
            document.querySelector(form)
                .addEventListener('submit', function (e) {
                    e.preventDefault()
                    callback(self.validateForm(this, validator))
                })
        },

        validateForm: function (form, validator) {

            var
                fieldValue, fieldName,
                ruleType, ruleMsg, numbOfRules,
                errorList = [],
                invalidFieldList = [],
                validFields = [],
                i, j

                // Destroy the current message, if there is any
                this.destroyFormMessage(form)

            // Remove all the invalid tags from the fields
            for (var i = 0; i < form.children.length; i++) {
                form.children[i].classList.remove('invalid')
            }

            // Go throw the array of validation
            for (i = 0; i < validator.length; i++) {
                // Get the field name and value from the object
                fieldName = validator[i].name

                // If the field is a checkbox, the value can be obtained via the checked attribute
                if (form.elements[fieldName].type === 'checkbox') {
                    fieldValue = form.elements[fieldName].checked
                } else {
                    fieldValue = form.elements[fieldName].value

                }

                // Go throw the array of rules, in case of the current field
                numbOfRules = validator[i].rules.length
                for (j = 0; j < numbOfRules; j++) {
                    // Get the type of rule and error massage
                    ruleType = validator[i].rules[j].type
                    ruleMsg = validator[i].rules[j].message

                    // Validate the value of the input field, based on the rule
                    switch (ruleType) {
                        case 'required' :
                            // Check if the value is empty or false
                            if (fieldValue === '' || fieldValue === false) {
                                // If the field is empty push the error message
                                errorList.push(ruleMsg)
                                // And push the name of the invalid field
                                invalidFieldList.push(fieldName)
                            } else {
                                // The field is valid, push it tot the valid field list
                                validFields.push({
                                    name: fieldName,
                                    value: fieldValue
                                })
                            }
                            break

                        default :
                            console.log('[Error] There is no such rule.')
                            break
                    }
                }
            } // Went throw the array of rules

            // If there are error messages, the form is invalid. We return false and the error messages.
            if (invalidFieldList.length === 0) {
                return {
                    valid: true,
                    fields: validFields
                }
            } else {

                // The form is invalid
                // Create the message
                this.buildFormMessage(form, errorList, 'error')

                // Mark the invalid fields
                for (var i = 0; i < invalidFieldList.length; i++) {
                    // No support for closest in IE !
                    form.elements[invalidFieldList[i]].closest('.field').classList.add('invalid')
                }

                // Return the validation values and error msges
                return {
                    valid: false,
                    msg: errorList,
                    fields: invalidFieldList
                }
            }
        },

        buildFormMessage: function (form, msgArr, type) {
            // Create the response text, when a form was submitted
            // Form: Where to attach the Message
            // msgList: The array of the messages
            // type: error | success

            // Create the basic div element and add the classes
            var msgDiv = document.createElement('div')
            msgDiv.className = 'message ' + type

            // Create the title
            var msgTitle = document.createElement('div')
            msgTitle.className = 'title'
            msgTitle.innerText = type === 'error' ? 'Oops! Something went wrong!' : null
            msgDiv.appendChild(msgTitle)

            // Create the ul element for the list
            var msgList = document.createElement('ul')

            // Create the li elements for the list
            var msgItem
            for (var i = 0; i < msgArr.length; i++) {
                msgItem = document.createElement('li')
                msgItem.innerText = msgArr[i]
                msgList.appendChild(msgItem)
            }

            // Append the list to the div
            msgDiv.appendChild(msgList)
            // Append the div to the form
            form.appendChild(msgDiv)
        },

        // Destroy the current message, if there is any
        destroyFormMessage: function (form) {
            try {
                var msg = form.querySelector('.message')
                form.removeChild(msg)
            } catch (e) {}
        }
    }

    ui.init = function () {

    }

    ui.init.prototype = ui.prototype
    global.ui = ui

}(window))