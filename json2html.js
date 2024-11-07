export default function json2html(data) {
    // Get unique headers from the data
    const headers = Array.from(new Set(data.flatMap(obj => Object.keys(obj))));
  
    // Create the table
    let table = '<table data-user="sridivyakavideit@gmail.com">';
    
    // Create table head
    table += '<thead><tr>';
    headers.forEach(header => {
      table += `<th>${header}</th>`;
    });
    table += '</tr></thead>';
    
    // Create table body
    table += '<tbody>';
    data.forEach(row => {
      table += '<tr>';
      headers.forEach(header => {
        table += `<td>${row[header] !== undefined ? row[header] : ''}</td>`;
      });
      table += '</tr>';
    });
    table += '</tbody></table>';
    
    return table;
  }
  