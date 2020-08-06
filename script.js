// function to display our current date and time
function displayTime() {
    var time = moment().format('MMMM Do YYYY, h:mm:ss A');
    $('#clock').html(time);
    setTimeout(displayTime, 1000);
}

$(document).ready(function() {
    displayTime();
});

const cells = document.getElementsByClassName("cell");
let currentHour = parseInt(moment().format('h'));

Array.from(cells).forEach(cell => {
    let
        cellIdString = cell.id,
        cellHour;
    if (cellIdString) {
        cellHour = parseInt(cellIdString);
    }    
    if (cellHour) {
        // this will compare the id of "cell" to current hour and will set color accordingly {
        if (currentHour === cellHour) {
            setColor(cell, "orange");
            // the next hour into the future
        } else if ((currentHour < cellHour) && (currentHour > cellHour - 2)) {
            setColor(cell, "green");
            // the previous hour
        } else if ((currentHour > cellHour) && (currentHour < cellHour + 2)) {
                setColor(cell, "red");
            // hours not listed above
        } else {
            setColor(cell, "white");
        }
    } 
});

function setColor(element, color) {
    element.style.backgroundColor = color;
};

// the following represents each text area we can type in
document.getElementById("txt_1").value = getSavedValue("txt_1");   
document.getElementById("txt_2").value = getSavedValue("txt_2");
document.getElementById("txt_3").value = getSavedValue("txt_3");
document.getElementById("txt_4").value = getSavedValue("txt_4");
document.getElementById("txt_5").value = getSavedValue("txt_5");
document.getElementById("txt_6").value = getSavedValue("txt_6");
document.getElementById("txt_7").value = getSavedValue("txt_7");
document.getElementById("txt_8").value = getSavedValue("txt_8");
document.getElementById("txt_9").value = getSavedValue("txt_9");
document.getElementById("txt_10").value = getSavedValue("txt_10");   


// this function will save the inputs from above to our localStorage
function saveValue(e){
    // this will save to the text area's id
    var id = e.id; 
    // retrieves the previous value 
    var val = e.value; 
    // local storage will overide what is being written unless it is saved
    localStorage.setItem(id, val);
}

// this function will display the value save in our localStorage
function getSavedValue  (v){
    if (!localStorage.getItem(v)) {
        return "";
    }
    return localStorage.getItem(v);
}