let button = document.getElementById('projects')
let display = false; 
function displayInfo(element){
   var para = element.previousElementSibling;
  if(!display){
    console.log(para)
  para.style.cssText = 'display:block;'
  element.innerText = 'Hide';
    display = true;
  }
  else{
    para.style.cssText='display:none;'
      element.innerText = 'Know more..';
      element.style.cssText = 'background-color:lightblue;color:black;'
     display = false;
  }
}

button.addEventListener('click',(event) => {
  if(event.target.tagName == 'BUTTON'){
  displayInfo(event.target)
  }
})



  





