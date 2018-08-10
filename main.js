// Create a <li> node
let node = document.createElement("h2");   

// Create a text node
let textnode = document.createTextNode("Pretending to care about you while I line my own pockets");

// Append the text to <li>
node.appendChild(textnode);    

// Append <li> to <ul> with id="myList"
document.getElementById("motto").appendChild(node);  