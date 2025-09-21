# Real-Time Chat Application

A simple real-time chat application built with Node.js, Socket.IO, and vanilla JavaScript. This application allows users to select a person to chat with and exchange messages in real-time using WebSocket connections.

## 🚀 Features

- **Real-time messaging** using WebSocket connections via Socket.IO
- **Room-based chat system** - select from pre-defined contacts (Joan, Anna, Jane)
- **Clean and simple UI** with dark theme
- **Instant message delivery** with user identification
- **Responsive design** for various screen sizes

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Socket.IO** - Real-time bidirectional event-based communication
- **ES Modules** - Modern JavaScript module system

### Frontend
- **Vanilla JavaScript** - No frameworks, pure JS
- **Socket.IO Client** - Real-time communication
- **HTML5 & CSS3** - Modern web standards

## 📁 Project Structure

```
chat-app/
├── backend/
│   ├── index.js          # Socket.IO server implementation
│   ├── package.json      # Backend dependencies
│   └── package-lock.json # Dependency lock file
├── frontend/
│   ├── index.html        # Main HTML structure
│   ├── app.js           # Frontend JavaScript logic
│   └── style.css        # Styling and layout
├── .gitignore           # Git ignore rules
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd chat-app
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Start the backend server**
   ```bash
   npm start
   # or for development with auto-restart:
   npm run dev
   ```

4. **Serve the frontend**
   - Open the `frontend/index.html` file in a web browser
   - Or use a local server (recommended):
     ```bash
     # Using Python (if installed)
     cd frontend
     python -m http.server 5500
     
     # Using Node.js serve package
     npx serve -s . -p 5500
     ```

### Usage

1. Open your browser and navigate to `http://localhost:5500` (or your frontend server)
2. Select a person to message (Joan, Anna, or Jane)
3. Start typing and sending messages in real-time
4. Open multiple browser tabs/windows to simulate different users

## 🔧 Configuration

### Backend Configuration

The backend server runs on port `3500` by default. You can modify this in `backend/index.js`:

```javascript
httpServer.listen(3500, () => console.log('listening on port 3500'))
```

### CORS Settings

The server is configured to allow connections from:
- `http://localhost:5500`
- `http://127.0.0.1:5500`

For production, set `NODE_ENV=production` to disable CORS.

## 🌐 API Reference

### Socket.IO Events

#### Client to Server

- **`join-room`** - Join a specific chat room
  ```javascript
  socket.emit('join-room', { roomId: 'chat-joan' });
  ```

- **`message`** - Send a message to the current room
  ```javascript
  socket.emit('message', { roomId: 'chat-joan', message: 'Hello!' });
  ```

#### Server to Client

- **`message`** - Receive a message in the current room
  ```javascript
  socket.on('message', (data) => {
    console.log('Received:', data); // Format: "socketId: message"
  });
  ```

## 🎨 Customization

### Adding New Contacts

To add new people to chat with:

1. Update `frontend/index.html`:
   ```html
   <button onclick="selectPerson('newperson')">Message NewPerson</button>
   ```

2. The room ID will automatically be `chat-newperson`

### Styling

Modify `frontend/style.css` to customize the appearance:
- Colors and themes
- Layout and spacing
- Typography
- Responsive breakpoints

## 🔒 Security Considerations

This is a development/hobby project. For production use, consider:

- User authentication and authorization
- Message encryption
- Input validation and sanitization
- Rate limiting
- HTTPS/WSS connections

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🐛 Troubleshooting

### Common Issues

**Connection refused errors:**
- Ensure the backend server is running on port 3500
- Check that the frontend is served from an allowed origin

**Messages not appearing:**
- Verify you've joined a room before sending messages
- Check browser console for JavaScript errors
- Ensure Socket.IO client library is loaded

**Styling issues:**
- Clear browser cache
- Check CSS file is properly linked

## 📞 Support

If you encounter any issues or have questions, please open an issue on GitHub or reach out to the maintainers.

---

**Happy Chatting! 💬**
