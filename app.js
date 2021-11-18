'use strict'

let text = "Man patinka JavaScript" ;
document.querySelector('.button').addEventListener('click', ()=>{
    let rowNr = document.querySelector('.row').value;
    let columnNr = document.querySelector('.column').value;
    const table = document.createElement('table');
    document.querySelector('body').appendChild(table);

    for(let i=0; i<rowNr; i++){
        const row = document.createElement('tr')
        for(let i=0; i<columnNr; i++){
            const cell = document.createElement('td');
            cell.textContent = text;
            row.appendChild(cell)
        }
        table.appendChild(row);
    }

});