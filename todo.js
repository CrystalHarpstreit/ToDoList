var inpt = document.getElementById('inpt');

inpt.addEventListener('keydown', function(event){
  var list = document.getElementById('list');
  var inptVal = document.getElementById('inpt').value;
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.setAttribute('id', 'check');
  var label = document.createElement('label');
  var listItem = document.createElement('li');
  
  /*when the enter button is pushed, add item.*/
  if (event.keyCode == 13) {
    /*append checkbox to li*/
    listItem.appendChild(checkbox);
    /*append label to li*/
    listItem.appendChild(label).innerHTML = inptVal;
    inpt.value = ' ';
    /*append list item to ul*/
    list.appendChild(listItem);
  }
  
  checkbox.onclick = function(){
    label.innerHTML = ' ';
    listItem.removeChild(label);
    listItem.removeChild(checkbox);
  }
});