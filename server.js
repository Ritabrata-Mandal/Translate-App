const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.post("/translate", async (req, res) => {

    try {

        const { text, source, target } = req.body;

        console.log("Incoming Request:");
        console.log(req.body);

        const response = await axios.post(
            "https://api.sarvam.ai/translate",
            {
                input: text,
                source_language_code: source,
                target_language_code: target
            },
            {
                headers: {
                    "api-subscription-key": process.env.SARVAM_API_KEY,
                    "Content-Type": "application/json"
                }
            }
        );

        console.log("Sarvam Response:");
        console.log(response.data);

        res.json(response.data);

    }

    catch(error) {

        console.log("SERVER ERROR:");

        if(error.response){
            console.log(error.response.data);
        }
        else{
            console.log(error.message);
        }

        res.status(500).json({
            error: "Translation Failed"
        });

    }

});


app.post("/tts", async (req, res) => {

    try {

        const { text, language } = req.body;

        const response = await axios.post(
            "https://api.sarvam.ai/text-to-speech",
            {
                model: "bulbul:v3",
                text: text,
                target_language_code: language,
                speaker: "shubh"
            },
            {
                headers: {
                    "api-subscription-key": process.env.SARVAM_API_KEY,
                    "Content-Type": "application/json"
                }
            }
        );

        console.log("TTS generated successfully");

        res.json(response.data);

    }

    catch(error){

        console.log("TTS ERROR:");

        if(error.response){
            console.log(error.response.data);
        }
        else{
            console.log(error.message);
        }

        res.status(500).json({
            error: "TTS Failed"
        });

    }

});

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});