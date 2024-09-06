let button = document.getElementById('projects')
let display = false; 

function displayInfo(element){
  if(!display){
  element.nextElementSibling.style.cssText = 'display:block; background-color:#dadfd0;'
  element.innerText = 'Hide';
    element.style.cssText = 'background-color:lightgreen;color:black;'
    display = true;
  }
  else{
     element.nextElementSibling.style.cssText = 'visibility:hidden; background-color:#dadfd0;'
      element.innerText = 'Know more..';
      element.style.cssText = 'background-color:lightblue;color:black;'
     display = false;
  }
}

button.addEventListener('click',(event) => {
  displayInfo(event.target)
})



  





