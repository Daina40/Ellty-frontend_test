const doneBtn = document.getElementById('doneBtn');
const originalColor = '#FFD84D';
const clickedColor = '#FFCE22';

doneBtn.addEventListener('click', () => {
    const currentColor = window.getComputedStyle(doneBtn).backgroundColor;

    const rgbToHex = (rgb) => {
        const result = rgb.match(/\d+/g);
        return "#" + result.map(x => (+x).toString(16).padStart(2, "0")).join("");
    };

    if (rgbToHex(currentColor) === clickedColor.toLowerCase()) {
        doneBtn.style.background = originalColor;
    } else {
        doneBtn.style.background = clickedColor;
    }
});