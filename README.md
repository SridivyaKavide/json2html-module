# json2html Module

This JavaScript module converts a JSON array of student data into an HTML table. The module is designed to take an array of objects and convert it into a table format that is ready to be displayed in a web page.

## Usage

You can use this module by importing it into your JavaScript code like this:

```javascript
import json2html from 'https://sridivyakavide.github.io/json2html-module/json2html.js';

const data = [
    { Name: "Alice", Age: 25 },
    { Name: "Bob", Age: 30 },
    { Name: "Charlie", Age: 35, Gender: "M" }
];

const outputDiv = document.getElementById('output');
outputDiv.innerHTML = json2html(data);
