var hours = [9,10,11,12,13,14,15,16,17]
var currentDay = $('#currentDay')
var textAreaEl = $('textarea')
var currentHour = moment().hour()

function initialize(){
    currentDay.text(moment().format('dddd, MMMM do'))
    for (let index = 0; index < hours.length; index++) {
        if (currentHour > hours[index]){
            $('#' + hours[index]).addClass('past')
        }else if (currentHour == hours[index]){
            $('#' + hours[index]).addClass('present')
        }else{
            $('#' + hours[index]).addClass('future')
        }
    }
}

initialize()
