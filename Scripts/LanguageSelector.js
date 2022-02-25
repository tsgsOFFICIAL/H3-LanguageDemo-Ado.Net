let selector = document.getElementById("language-picker-select");

selector.onchange = () => {
    SetLanguage(selector.querySelectorAll("option")[selector.selectedIndex].value);
}

/*
 0 = English
 1 = Dansk
 2 = Finnish
 3 = Magyar
*/
switch (window.navigator.language) {
    case 'da':
    case 'da-DK':
        selector.selectedIndex = 1;
        break;
    case 'en':
    case 'en-US':
    case 'en-GB':
        selector.selectedIndex = 0;
        break;
    case 'fi':
        selector.selectedIndex = 2;
        break;
    case 'hu':
        selector.selectedIndex = 3;
    default:
        selector.selectedIndex = 0;
        break;
}