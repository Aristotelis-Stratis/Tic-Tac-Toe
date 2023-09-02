let fields = [
    null,
    'circle',
    'circle',
    null,
    null,
    null,
    'cross',
    'cross',
    null,
];

// Rufe die render-Funktion auf, um das Spielfeld zu initialisieren

function init() {
    render();
}

// Funktion zum Rendern des Spielfelds
function render() {
    const contentDiv = document.getElementById('content');
    const table = document.createElement('table');

    for (let i = 0; i < 3; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement('td');
            const index = i * 3 + j;

            // Wenn das Feld nicht null ist, füge das entsprechende Symbol hinzu
            if (fields[index] === 'circle') {
                cell.textContent = 'O';
                cell.classList.add('cell', 'circle');
            } else if (fields[index] === 'cross') {
                cell.textContent = 'X';
                cell.classList.add('cell', 'cross');
            }

            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    // Füge die Tabelle dem Container hinzu
    contentDiv.innerHTML = '';
    contentDiv.appendChild(table);
}
