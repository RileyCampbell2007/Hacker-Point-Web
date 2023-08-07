// Copyright © Asher Carrier
if (typeof window.set == 'undefined') {
    let styles = document.createElement('style');
    styles.innerHTML += `
.darkmode-dark {
    color: #EDEDED !important;
    background-color: #1E1E1E !important;
    border-color: #EDEDED !important;
}

.darkmode-light {
    color: #2F2F2F !important;
    background-color: #F5F5F5 !important;
    border-color: #2F2F2F !important;
}

.darkmode-blue {
    color: #EEEEFF !important;
    background-color: #222244 !important;
    border-color: #EEEEFF !important;
}`;
    document.head.appendChild(styles);
    let randStyles = document.createElement('style');
    randStyles.id = 'darkmode-random-color-styles';
    randStyles.innerHTML = `
.darkmode-random {
    color: #000000 !important;
    background-color: #000000 !important;
    border-color: #000000 !important;
}`;
    document.head.appendChild(randStyles);
    window.set = "set";
};

const removeClasses = function() {
    document.querySelectorAll("*").forEach(el => {
        el.classList.remove('darkmode-random')
        el.classList.remove('darkmode-dark')
        el.classList.remove('darkmode-light')
        el.classList.remove('darkmode-blue')
    });
};

const addClasses = function(className) {
    document.querySelectorAll('*').forEach(el => {
        if (el.tagName != 'style') {
            el.classList.add(className);
        };
    });
};

let mode = prompt("Enter mode (dark, light, blue, custom, random, original):");
if (mode == 'random') {
    let hexColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    const r = parseInt(hexColor.substr(1, 2), 16);
    const g = parseInt(hexColor.substr(3, 2), 16);
    const b = parseInt(hexColor.substr(5, 2), 16);
    const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    let textColor = luminance > 0.5 ? "#000000" : "#FFFFFF";
    document.head.removeChild(document.getElementById('darkmode-random-color-styles'));
    let randStyles = document.createElement('style');
    randStyles.id = 'darkmode-random-color-styles';
    randStyles.innerHTML = `
.darkmode-random {
    color: ` + textColor + ` !important;
    background-color: ` + hexColor + ` !important;
    border-color: ` + textColor + ` !important;
}`;
    document.head.appendChild(randStyles);
    removeClasses();
    addClasses('darkmode-random')
} else if (mode == 'dark') {
    removeClasses();
    addClasses('darkmode-dark');
} else if (mode == 'light') {
    removeClasses();
    addClasses('darkmode-light');
} else if (mode == 'blue') {
    removeClasses();
    addClasses('darkmode-blue');
} else if (mode == 'original') {
    removeClasses();
} else if (mode == "custom") {
    let hexColor = prompt("Input a Hex Color value, eg:#FFFFFF");
    var hexCodePattern = /^#?([0-9A-F]{3}){1,2}$/i;
    if (hexCodePattern.test(hexColor)) {
        const r = parseInt(hexColor.substr(1, 2), 16);
        const g = parseInt(hexColor.substr(3, 2), 16);
        const b = parseInt(hexColor.substr(5, 2), 16);
        const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
        let textColor = luminance > 0.5 ? "#000000" : "#FFFFFF";
        document.head.removeChild(document.getElementById('darkmode-random-color-styles'));
        let randStyles = document.createElement('style');
        randStyles.id = 'darkmode-random-color-styles';
        randStyles.innerHTML = `
.darkmode-random {
    color: ` + textColor + ` !important;
    background-color: ` + hexColor + ` !important;
    border-color: ` + textColor + ` !important;
}`;
        document.head.appendChild(randStyles);
        removeClasses();
        addClasses('darkmode-random');
    } else {
        alert('Invalid Hex Color!')
    };

} else {
    alert('Invalid mode!');
}