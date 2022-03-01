// Import all translations from C#
let translations = JSON.parse(document.currentScript.getAttribute('translation_text'));

// Get a list of all HTML elements with the attribute data-translation, meaning they need to be translated
let textToTranslate = document.querySelectorAll("[data-translation]");

// A simple function to iterate over each element, and change it to the language specified in the parameter
function UpdateLanguage(language) {
    textToTranslate.forEach(el => {
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

// A helper function to set the language, this can also be called from other js files.
// This will also change the selected flag, to make it pop out more, and add a shadow to it
function SetLanguage(el) {
    UpdateLanguage(el.getAttribute("data-flag"));

    document.querySelectorAll("[data-flag]").forEach(flag => {
        flag.classList.remove("selected");
    });

    el.classList.add("selected");
}

// On startup, run updateLanguage with the default language
UpdateLanguage(window.navigator.language);

// Give the current language flag the styling from the beginning
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
        break;
    default:
        lookingFor = "en";
        break;
}

// Iterate over each flag
document.querySelectorAll("[data-flag]").forEach(flag => {
    let lang = flag.getAttribute("data-flag");

    if (lang == lookingFor) {
        flag.classList.add("selected");
    }
});