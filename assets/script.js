var hours = [9,10,11,12,13,14,15,16,17]
var currentDay = $('#currentDay')
var textAreaEl = $('textarea')
var currentHour = moment().hour()
var saveBtn = $('.saveBtn')
var deleteBtn = $('.delete')
var confirmOrDeny
var local = [localStorage.getItem("local9"), localStorage.getItem("local10"), localStorage.getItem("local11"), localStorage.getItem("local12"), localStorage.getItem("local13"), localStorage.getItem("local14"), localStorage.getItem("local15"), localStorage.getItem("local16"), localStorage.getItem("local17")]

function initialize(){
    currentDay.text(moment().format('dddd, MMMM do'))
    for (let index = 0; index < hours.length; index++) {
        if (currentHour > hours[index]){
            $('#' + hours[index]).addClass('past')
        }else if (currentHour == hours[index]){
            $('#' + hours[index]).addClass('present')
        }else if (currentHour < hours[index]){
            $('#' + hours[index]).addClass('future')
        }
        $('#' + hours[index]).text(local[index])
    }
}

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

function decimation(){
    confirmOrDeny = confirm("Are you sure you want to clear your schedule?")
    if (confirmOrDeny){
        for (let index = 0; index < hours.length; index++) {
            $('#' + hours[index]).text("")
            saveInput()
        }
    }    
}

initialize()

saveBtn.on("click", saveInput)
deleteBtn.on("click", decimation)