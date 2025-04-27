# Mini Message Board

A simple Express.js & EJS app for posting and viewing messages.  
**Live Demo:** https://mini-message-board-production-6aa7.up.railway.app/

## Technologies
- **Node.js** v18+  
- **Express.js** v5.x  
- **EJS** v3.x template engine  
- **serve-favicon** middleware  
- **Railway** for deployment 

## Features
- List existing messages with author & timestamp  
- “New Message” form to submit messages  
- Individual message detail pages  
- Custom 404 error page  
- Favicon support  

## Installation
```bash
git clone https://github.com/username/mini-message-board.git
cd mini-message-board
npm install

## Project Structure
.
├── app.js                  # Main Express application
├── package.json            # Metadata & start script
├── routes/
│   └── index.js            # GET/POST routes for messages
├── views/
│   ├── index.ejs           # Message list template
│   ├── new-message.ejs     # New message form
│   ├── details.ejs         # Message detail view
│   └── 404.ejs             # 404 error page
└── public/
    ├── favicon.ico         # Site favicon

## Routes
GET / — View all messages
GET /new-message — Show new message form
POST /new-message — Submit a new message
GET /messages/:index — View message details