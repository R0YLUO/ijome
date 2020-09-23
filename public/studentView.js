// emojis 
var emoji = {
    '🧐': "focused (neutral)",
    '😁': "happy (content is easy)",
    '😴': "sleepy (lecture is boring)", 
    '🙁': "struggling (slow down please)", 
    '🤯': "completely lost (please explain again)"
}
// user information 
var name;
var feeling = "🧐";
// make connection 
var socket = io.connect("http://localhost:4000"); 
// Query DOM 
var submit = document.getElementById('submit'); 
var expressFeeling = document.getElementById('expressFeeling');
// Handle button events 
submit.addEventListener('click', function() {
    name = document.getElementById('studentName').value; 
    socket.emit('studentName', {
        name: name,
        id: socket.id
    })
    document.getElementById('join').remove();
    document.getElementById('nameTitle').innerHTML = "You are: " + name;
});

expressFeeling.addEventListener('click', function() {
    var radios = document.getElementsByName('radio'); 
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            feeling = radios[i].value; 
        }
    }
    socket.emit('studentFeeling', {
        feeling: feeling,
        id: socket.id,
        name: name
    })
});
