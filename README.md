# 🌐 AI Translator App

A modern multilingual AI-powered Translator Web App built using Node.js, Express, HTML, CSS, and JavaScript.

The application supports multiple Indian languages using Sarvam AI Translation and Text-to-Speech APIs.

---

# 🌍 Live Demo

🔗 https://translate-app-5rxu.onrender.com

---

# ✨ Features

✅ AI Text Translation  
✅ AI Voice Output (Text-to-Speech)  
✅ Multiple Indian Languages  
✅ Copy to Clipboard  
✅ Responsive Mobile-Friendly UI  
✅ Secure Backend API Handling  
✅ Modern Gradient Design  
✅ Render Deployment Ready  

---

# 🛠️ Tech Stack

## Frontend
- HTML5
- CSS3
- Vanilla JavaScript

## Backend
- Node.js
- Express.js
- Axios
- dotenv
- cors

## APIs
- Sarvam AI Translation API
- Sarvam AI Text-to-Speech API

---

# 📂 Project Structure

```bash
TranslateApp/
│
├── public/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   ├── countries.js
│   ├── speaker.svg
│   ├── copy.svg
│   └── Translate.png
│
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
├── .env
└── README.md
```

---

# ⚙️ Installation

## 1. Clone Repository

```bash
git clone https://github.com/Ritabrata-Mandal/Translate-App.git
```

---

## 2. Open Project Folder

```bash
cd Translate-App
```

---

## 3. Install Dependencies

```bash
npm install
```

---

## 4. Create `.env` File

Create a `.env` file in the root folder.

```env
SARVAM_API_KEY=your_api_key_here
```

---

# ▶️ Run Project

```bash
node server.js
```

Server starts at:

```bash
http://localhost:3000
```

---

# 🌍 Deployment (Render)

## Build Command

```bash
npm install
```

## Start Command

```bash
node server.js
```

## Environment Variable

```env
SARVAM_API_KEY=your_api_key_here
```

---

# 📱 Mobile Responsive

The UI is optimized for:
- Desktop
- Tablet
- Mobile devices

Responsive layout is implemented using CSS media queries.

---

# 🔒 Security

API keys are securely stored using `.env`.

The frontend never directly exposes the API key.

---

# 🎤 Text-to-Speech

Uses:

```text
bulbul:v3
```

from Sarvam AI for multilingual AI speech synthesis.

---

# 🧠 Future Improvements

- Speech-to-Text
- Automatic Language Detection
- Translation History
- User Authentication
- Dark/Light Theme Toggle
- Download Audio Feature
- Voice Input

---

# 👨‍💻 Author

## Ritabrata Mandal

B.Tech in Computer Science and Engineering  
National Institute of Technology Durgapur

GitHub:  
https://github.com/Ritabrata-Mandal

---

# 📜 License

This project is open-source and available under the MIT License.