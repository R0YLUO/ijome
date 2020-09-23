// emojis 
var emoji = {
    '🧐': "focused (neutral)",
    '😁': "happy (content is easy)",
    '😴': "sleepy (lecture is boring)", 
    '🙁': "struggling (slow down please)", 
    '🤯': "completely lost (please explain again)"
}
// make connection 
var socket = io.connect("http://localhost:4000"); 

// Query DOM 
var output = document.getElementById('tableBody'); 

// Listen to events 
socket.on('studentName', function(data) {
    output.innerHTML += "<tr id=" + data.id + ">" + "<td>" + data.name + "</td><td>" + "🧐" + "</td></tr>";
});

socket.on('studentFeeling', function(data) {
    var student = document.getElementById(data.id); 
    student.innerHTML = ""; 
    student.innerHTML = "<td>" + data.name + "</td><td>" + data.feeling + "</td>";
});