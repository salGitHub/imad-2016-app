console.log('Loaded!');
// Change the text of the main-text div
var element=document.getElementById('main-text');
element.innerHTML='New Value';

// Move the image
var img=document.getElementById('madi');
img.click=function() {
    img.style.marginleft='100px';
    
}