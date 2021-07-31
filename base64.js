// Selectors
let input = document.getElementById('input');
let output = document.getElementById('output');
let copyButton = document.getElementById('copy');
let checkbox = document.getElementById('checkbox');
let mode = document.getElementById('mode');

// Methods
function convertToBase64(e) {
    output.value = btoa(e.target.value);
}

function convertToString(e) {
    output.value = atob(e.target.value);
}

function copyOutput() {
    output.select();
    document.execCommand('copy');
}

function toggle(e) {
    let checked = e.target.checked;
    input.value = '';
    output.value = '';
    if (checked) {
        mode.textContent = 'Encode';
        input.setAttribute('placeholder', 'Input STRING');
        output.setAttribute('placeholder', 'Output BASE64');
        input.oninput = convertToBase64;
    } else {
        mode.textContent = 'Decode';
        input.setAttribute('placeholder', 'Input BASE64');
        output.setAttribute('placeholder', 'Output STRING');
        input.oninput = convertToString;
    }
}

// Events
checkbox.addEventListener('change', toggle.bind(checkbox));
checkbox.checked = true;
checkbox.dispatchEvent(new Event('change'));
input.oninput = convertToBase64;
copyButton.addEventListener('click', copyOutput);