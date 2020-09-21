// make connection 
var socket = io.connect("http://localhost:4000"); 

// Query DOM 
var submit = document.getElementById('submit'); 
var happy = document.getElementById('happy'); 
var sad = document.getElementById('sad'); 
var crying = document.getElementById('crying'); 

// Handle button events 
submit.addEventListener('click', function() {
    var name = document.getElementById('studentName'); 
    socket.emit('studentName', {
        name: name.value,
        id: socket.id
    })
});

happy.addEventListener('click', function() {
    var name = document.getElementById('studentName'); 
    socket.emit('studentFeeling', {
        feeling: happy.value,
        id: socket.id,
        name: name.value
    })
});
