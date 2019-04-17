var inpt = document.getElementById('inpt');

inpt.addEventListener('keydown', function(event){
  var list = document.getElementById('list');
  var inptVal = document.getElementById('inpt').value;
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.setAttribute('id', 'check');
  var label = document.createElement('label');
  
  /*when the enter button is pushed, add item.*/
  if (event.keyCode == 13) {
    /*append a new li to the ul with the text from the box*/
    list.appendChild(checkbox);
    list.appendChild(label).innerHTML = inptVal;
    inpt.value = ' ';
  }
  
  checkbox.onclick = function(){
    label.innerHTML = ' ';
    list.removeChild(label);
    list.removeChild(checkbox);
  }
});

