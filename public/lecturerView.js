// make connection 
var socket = io.connect("http://localhost:4000"); 

// Query DOM 
var output = document.getElementById('studentFeelings'); 

// Listen to events 
socket.on('studentName', function(data) {
    output.innerHTML += "<div id=" + data.id + ">" + data.name + "🤩" + "</div>"; 
});

socket.on('studentFeeling', function(data) {
    var student = document.getElementById(data.id); 
    student.innerHTML = ""; 
    student.innerHTML = data.name + data.feeling;
});