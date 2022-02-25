let translations = JSON.parse(document.currentScript.getAttribute('translation_text'));
let textToTranslate = document.querySelectorAll("[data-translation]");

function UpdateLanguage(language) {
    //console.log(`Updating to ${language}`);
    textToTranslate.forEach(el => {
        //console.log(el.getAttribute("data-translation"));
        //console.log(el);
        //el.innerHTML = "test";
        switch (language) {
            case 'da':
            case 'da-DK':
                try {
                    el.innerHTML = `${translations[el.getAttribute("data-translation") - 1].Danish}`;
                } catch (e) {
                    el.innerHTML = `Dansk`;
                }
                break;
            case 'en':
            case 'en-US':
            case 'en-GB':
                try {
                    el.innerHTML = `${translations[el.getAttribute("data-translation") - 1].English}`;
                } catch (e) {
                    el.innerHTML = `English`;
                }
                break;
            case 'fi':
                try {
                    el.innerHTML = `${translations[el.getAttribute("data-translation") - 1].Suomi}`;
                } catch (e) {
                    el.innerHTML = `Suomi`;
                }
                break;
            case 'hu':
                try {
                    el.innerHTML = `${translations[el.getAttribute("data-translation") - 1].Hungary}`;
                } catch (e) {
                    el.innerHTML = `Magyar`;
                }
                break;
            default:
                try {
                    el.innerHTML = `${translations[el.getAttribute("data-translation") - 1].English}`;
                } catch (e) {
                    el.innerHTML = `English`;
                }
                break;
        }
    });
}

function SetLanguage(l) {
    UpdateLanguage(l);
}

UpdateLanguage(window.navigator.language);

//console.log(language)


//console.log(translations)