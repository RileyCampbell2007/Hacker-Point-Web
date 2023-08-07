function getAllVariables() {
    const variables = [];
    for (const key in window) {
        if (window.hasOwnProperty(key)) {
            const value = window[key];
            if (key != 'variableTable' && typeof value !== 'function' && typeof value !== 'object') {
                const variable = {
                    name: key,
                    value: value
                };
                variables.push(variable);
            }
        }
    }

    return variables;
}

function updateTable() {
    variableTable = '<tr style="border-style: solid; padding: 0px; margin: 0px;"><td style="border-style: solid; padding: 0px; margin: 0px;">NAME</td><td style="border-style: solid; padding: 0px; margin: 0px;">VALUE</td></tr>'
    variables = getAllVariables()
    variables.forEach(variable => {
        variableTable += '<tr style="border-style: solid; padding: 0px; margin: 0px;"><td style="border-style: solid; padding: 0px; margin: 0px;">' + variable.name + '</td><td style="border-style: solid; padding: 0px; margin: 0px;">' + variable.value + '</td></tr>'
    });
    popup.document.getElementById('table').innerHTML = variableTable
}

const popup = window.open('', '', 'width=800,height=600');
popup.document.write(`
<head>
    <title>Variables</title>
</head>
<body>
    <table id="table"></table>
</body>    
`)

setInterval(() => {
    updateTable()
}, 100)