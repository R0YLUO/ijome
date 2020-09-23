// emojis 
var emoji_count = {
    '🧐': 0,
    '😁': 0,
    '😴': 0, 
    '🙁': 0, 
    '🤯': 0
}
// pie chart 
var pieChart = new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["🧐", "😁", "😴", "🙁", "🤯"],
      datasets: [{
        backgroundColor: ["#11B8F7", "#1BF711","#7A11F7","#F78111", "#F73911"],
        data: [0,0,0,0,0]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Feelings of the class'
      }
    }
});
// make connection 
var socket = io.connect("http://localhost:4000"); 

// Query DOM 
var output = document.getElementById('tableBody'); 

// Listen to events 
socket.on('studentName', function(data) {
    output.innerHTML += "<tr id=" + data.id + ">" + "<td>" + data.name + "</td><td>" + "🧐" + "</td></tr>";
    emoji_count['🧐'] += 1; 
    pieChart.data.datasets[0].data[0] += 1; 
    pieChart.update();
});

socket.on('studentFeeling', function(data) {
    var student = document.getElementById(data.id); 
    student.innerHTML = ""; 
    student.innerHTML = "<td>" + data.name + "</td><td>" + data.feeling + "</td>";
    emoji_count[data.prev_feeling] -= 1; 
    emoji_count[data.feeling] += 1; 
    prev_index = pieChart.data.labels.indexOf(data.prev_feeling); 
    curr_index = pieChart.data.labels.indexOf(data.feeling); 
    pieChart.data.datasets[0].data[prev_index] -= 1; 
    pieChart.data.datasets[0].data[curr_index] += 1;
    pieChart.update();
});