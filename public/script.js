const selectTag = document.querySelectorAll("select");
const translateBtn= document.querySelector("#transfer");
const fromText = document.querySelector("#fromText");
const toText = document.querySelector("#toText");
const icons=document.querySelectorAll("img");
const toast = document.querySelector("#toast");

selectTag.forEach((tag,id) => {

    for (const countriesCode in countries) {
        let selected;
        if(id==0 && countriesCode == "en-IN"){
            selected=" selected";
        }

        if(id==1 && countriesCode == "hi-IN"){
            selected=" selected";
        }
        let option = `<option value="${countriesCode}" ${selected}>${countries[countriesCode]}</option>`;
        tag.insertAdjacentHTML("beforeend", option);
    }

});

translateBtn.addEventListener("click", async () => {

    let text = fromText.value.trim();

    if(text === ""){
        return;
    }

    let translateFrom = selectTag[0].value;
    let translateTo = selectTag[1].value;

    try {

        const response = await fetch("http://localhost:3000/translate", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                text: text,
                source: translateFrom,
                target: translateTo
            })

        });

        const data = await response.json();
        console.log(data);
        toText.value = data.translated_text;
    }

    catch(error){
        console.log(error);
        toText.value = "Translation Error";
    }

});


//icons logic
icons.forEach(icon => {

    icon.addEventListener("click", async ({target}) => {

        // COPY
        if(target.classList.contains("copy")){

            if(target.id === "from"){
                navigator.clipboard.writeText(fromText.value);
            }

            else if(target.id === "to"){
                navigator.clipboard.writeText(toText.value);
            }

            toast.innerText = "Copied Successfully";
            toast.classList.add("show");

            setTimeout(() => {
                toast.classList.remove("show");
            }, 2000);

        }

        // SPEAKER
        else if(target.classList.contains("speaker")){

            let text;
            let language;

            if(target.id === "from"){
                text = fromText.value;
                language = selectTag[0].value;
            }

            else if(target.id === "to"){
                text = toText.value;
                language = selectTag[1].value;
            }

            try {

                const response = await fetch("http://localhost:3000/tts", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        text: text,
                        language: language
                    })

                });

                const data = await response.json();

                const audioSrc =
                `data:audio/wav;base64,${data.audios[0]}`;

                const audio = new Audio(audioSrc);

                audio.play();
            }

            catch(error){
                console.log(error);
            }
        }
    });
});