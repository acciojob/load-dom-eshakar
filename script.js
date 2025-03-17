//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
  // Create a new text node with the message
  const textNode = document.createTextNode('DOM load success');
  
  // Append the text node directly to the body
  document.body.appendChild(textNode);
});