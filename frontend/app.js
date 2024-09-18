const socket = io('ws://localhost:3500');
let roomId = "";  // This will store the selected roomId (e.g., "joan", "anna", "jane")

// Function to select a person to message
function selectPerson(person) {
    roomId = `chat-${person}`;  // Set the roomId to a unique value based on the selected person (e.g., "chat-joan")
    
    // Join the room
    socket.emit('join-room', { roomId });
    
    // Show the chat interface and hide the user selection page
    document.getElementById('user-selection').style.display = 'none';
    document.getElementById('chat-interface').style.display = 'block';
    
    // Display the selected person in the chat interface
    document.getElementById('chat-person').textContent = person.charAt(0).toUpperCase() + person.slice(1);
}

// Send message to the selected room
function sendMessage(e) {
    e.preventDefault();
    const input = document.querySelector('input');
    if (input.value) {
        // Emit the message along with the roomId
        socket.emit('message', { roomId, message: input.value });
        input.value = "";
    }
    input.focus();
}

document.querySelector('form')
    .addEventListener('submit', sendMessage);

// Listen for messages in the room
socket.on("message", (data) => {
    const li = document.createElement('li');
    li.textContent = data;
    document.querySelector('ul').appendChild(li);
});
