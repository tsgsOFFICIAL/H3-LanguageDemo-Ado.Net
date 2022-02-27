let translations = JSON.parse(document.currentScript.getAttribute('translation_text'));
let textToTranslate = document.querySelectorAll("[data-translation]");

function UpdateLanguage(language) {
    //console.log(`Updating to ${language}`);
    textToTranslate.forEach(el => {
        //console.log(el.getAttribute("data-translation"));
        //console.log(el);
        //el.innerText = "test";
        switch (language) {
            case 'da':
            case 'da-DK':
                try {
                    el.innerText = `${translations[el.getAttribute("data-translation") - 1].Danish}`;
                } catch (e) {
                    el.innerText = `Dansk`;
                }
                break;
            case 'en':
            case 'en-US':
            case 'en-GB':
                try {
                    el.innerText = `${translations[el.getAttribute("data-translation") - 1].English}`;
                } catch (e) {
                    el.innerText = `English`;
                }
                break;
            case 'fi':
                try {
                    el.innerText = `${translations[el.getAttribute("data-translation") - 1].Suomi}`;
                } catch (e) {
                    el.innerText = `Suomi`;
                }
                break;
            case 'hu':
                try {
                    el.innerText = `${translations[el.getAttribute("data-translation") - 1].Hungary}`;
                } catch (e) {
                    el.innerText = `Magyar`;
                }
                break;
            default:
                try {
                    el.innerText = `${translations[el.getAttribute("data-translation") - 1].English}`;
                } catch (e) {
                    el.innerText = `English`;
                }
                break;
        }
    });
}

function SetLanguage(el) {
    UpdateLanguage(el.getAttribute("data-flag"));

    document.querySelectorAll("[data-flag]").forEach(flag => {
        flag.classList.remove("selected");
    });

    el.classList.add("selected");
}

UpdateLanguage(window.navigator.language);

let lookingFor = "en";

switch (window.navigator.language) {
    case 'da':
    case 'da-DK':
        lookingFor = "da";
        break;
    case 'en':
    case 'en-US':
    case 'en-GB':
        lookingFor = "en";
        break;
    case 'fi':
        lookingFor = "fi";
        break;
    case 'hu':
        lookingFor = "hu";
    default:
        lookingFor = "en";
        break;
}

document.querySelectorAll("[data-flag]").forEach(flag => {
    let lang = flag.getAttribute("data-flag");

    if (lang == lookingFor) {
        flag.classList.add("selected");
    }
});

//console.log(language)


//console.log(translations)