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
                const circleSVG = generateCircleSVG(); // Erzeuge das SVG-HTML als String
                cell.innerHTML = circleSVG; // Füge das SVG-HTML zur Zelle hinzu
                cell.classList.add('cell', 'circle');
            } else if (fields[index] === 'cross') {
                const crossSVG = generateCrossSVG(); // Erzeuge das SVG-HTML als String
                cell.innerHTML = crossSVG;
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




function generateCircleSVG() {
    const color = '#04ACE8';
    const width = 70;
    const height = 70;

    return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
              <circle cx="35" cy="35" r="30" stroke="${color}" stroke-width="5" fill="transparent">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 35 35"
                  to="360 35 35"
                  dur="125ms"
                  repeatCount="indefinite"
                />
                <animate attributeName="r" from="0" to="30" dur="250ms" fill="freeze" />
              </circle>
            </svg>`;
}


function generateCrossSVG() {
    const color = '#FEC009';
    const width = 70;
    const height = 70;

    return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="0" x2="70" y2="70" stroke="${color}" stroke-width="5" stroke-dasharray="0 88.5">
                <animate attributeName="stroke-dasharray" from="0 88.5" to="88.5 0" dur="250ms" fill="freeze" />
              </line>
              <line x1="70" y1="0" x2="0" y2="70" stroke="${color}" stroke-width="5" stroke-dasharray="0 88.5">
                <animate attributeName="stroke-dasharray" from="0 88.5" to="88.5 0" dur="250ms" fill="freeze" />
              </line>
            </svg>`;
}

