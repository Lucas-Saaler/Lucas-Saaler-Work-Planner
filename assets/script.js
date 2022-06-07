// Static selectors
var hours = [9,10,11,12,13,14,15,16,17]
var currentDay = $('#currentDay')
var textAreaEl = $('textarea')
var saveBtn = $('.saveBtn')
var deleteBtn = $('.delete')
// System clock
var currentHour = moment().hour()
// Boolean on confirm status, defined in function lower
var confirmOrDeny
// Array of locally stored inputs
var local = [localStorage.getItem("local9"), localStorage.getItem("local10"), localStorage.getItem("local11"), localStorage.getItem("local12"), localStorage.getItem("local13"), localStorage.getItem("local14"), localStorage.getItem("local15"), localStorage.getItem("local16"), localStorage.getItem("local17")]

// Runs when page is loaded
function initialize(){
    // Displays the current date and day of week
    currentDay.text(moment().format('dddd, MMMM Do'))
    for (let index = 0; index < hours.length; index++) {
        // Colors past/present/future based on system clock
        if (currentHour > hours[index]){
            $('#' + hours[index]).addClass('past')
        }else if (currentHour == hours[index]){
            $('#' + hours[index]).addClass('present')
        }else if (currentHour < hours[index]){
            $('#' + hours[index]).addClass('future')
        }
        // Populates textboxes with any locally stored inputs
        $('#' + hours[index]).text(local[index])
    }
}

// Saves all inputs
function saveInput(){
    localStorage.setItem("local9", $('#9').val())
    localStorage.setItem("local10", $('#10').val())
    localStorage.setItem("local11", $('#11').val())
    localStorage.setItem("local12", $('#12').val())
    localStorage.setItem("local13", $('#13').val())
    localStorage.setItem("local14", $('#14').val())
    localStorage.setItem("local15", $('#15').val())
    localStorage.setItem("local16", $('#16').val())
    localStorage.setItem("local17", $('#17').val())
}

// Clears text from textboxes and sets local storage values to empty
function decimation(){
    confirmOrDeny = confirm("Are you sure you want to clear your schedule?")
    if (confirmOrDeny){
        for (let index = 0; index < hours.length; index++) {
            $('#' + hours[index]).text("")
            saveInput()
        }
    }    
}

// Calls initialize() when the page is loaded
initialize()

// Event listeners for buttons to call functions
saveBtn.on("click", saveInput)
deleteBtn.on("click", decimation)