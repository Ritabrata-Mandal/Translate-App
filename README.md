# 🌐 AI Translator App

A modern multilingual Translator Web App built using:

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js + Express
- Translation API: Sarvam AI
- Text-to-Speech (TTS): Sarvam AI Bulbul v3

Supports:
- Multiple Indian languages
- AI Translation
- AI Voice Output
- Copy to Clipboard
- Responsive UI
- Animated Gradient Design

---

# ✨ Features

✅ Text Translation  
✅ Text-to-Speech (AI Voice)  
✅ Copy Translated Text  
✅ Multiple Indian Languages  
✅ Secure Backend API Handling  
✅ Clean Modern UI  
✅ Deployable on Render

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
- Sarvam AI TTS API

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
├── .env
└── README.md
```

---

# ⚙️ Installation

## 1. Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/translate-app.git
```

---

## 2. Open Project Folder

```bash
cd translate-app
```

---

## 3. Install Dependencies

```bash
npm install
```

---

## 4. Create `.env`

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
npm start
```

## Environment Variables

Add:

```env
SARVAM_API_KEY=your_api_key_here
```

---

# 🔒 Security

API keys are securely stored in the backend using `.env`.

The frontend never directly exposes the API key.

---

# 🎤 Text To Speech

Uses:

```text
bulbul:v3
```

from Sarvam AI for multilingual speech synthesis.

---

# 🧠 Future Improvements

- Speech-to-Text
- Language Detection
- Translation History
- User Authentication
- Theme Toggle
- Mobile Optimization
- Download Audio

---

# 👨‍💻 Author

Ritabrata Mandal

B.Tech CSE  
National Institute of Technology Durgapur

---

# 📜 License

This project is open-source and available under the MIT License.