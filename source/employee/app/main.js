import {
    Employee
} from "./Employee.js";
import {
    EmpTable
} from "./EmpTable.js";
import {
    StyledEmpTable
} from "./StyledEmpTable.js";


fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())
    .then(({
        results
    }) => {
        results = results.map(el => {
            return new Employee(el);
        });
        showTable(results);
    });

function showTable(results) {
    let table = new EmpTable(results);
    let styledTable = new StyledEmpTable(results);
    styledTable.setStyle('color', 'yellow')
        .setStyle('border', '1px solid yellow')
        .setStyle('border-collapse', 'collapse')
        .setStyle('background-color', 'rgba(0, 0, 0, 0.425)')
        .setStyle('font-family', 'Arial, Helvetica, sans-serif')
        .setStyle('text-shadow', '0 0 2px white');
    document.querySelector('.container').innerHTML = `<h2>TABLE</h2>${table.getHtml()}`;
    document.querySelector('.container-styled').innerHTML = `<h2>STYLED TABLE</h2>${styledTable.getHtml(styledTable.getStyles())}`;
}