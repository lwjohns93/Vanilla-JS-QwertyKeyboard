//Selectors
const screen = document.getElementById('screen');
const letterBtn = document.getElementById('keyboard-btn');
const returnBtn = document.getElementById('return-btn');
const shiftBtn = document.getElementById('shift-btn');
const deleteBtn = document.getElementById('delete-btn');
const spaceBtn = document.getElementById('space-btn');
const output = document.getElementById('keyboard-output');
const clearBtn = document.getElementById('clear-btn');
const shift = document.getElementById('shift');
let capsOn = false;


//Event Listeners
letterBtn.addEventListener('click', e => {
  const button = e.target;
  const buttonContent = button.textContent;
  const screenContent = screen.textContent;
  const actionType = button.dataset.action;

  if(actionType == undefined) {
    if (screenContent == '') {
      screen.textContent = buttonContent;
      } else {
      screen.textContent = screenContent + buttonContent;
      }
  }    

  //On click I want to iterate over buttons with the class "input-btn" or id "letter-input" and capitlaise the text content

  if (actionType == 'shift') {
    //ATTEMPT 2
    capsOn = !capsOn;
    shiftBtn.textContent = capsOn ? shiftBtn.textContent.toUpperCase() : shiftBtn.textContent.toLowerCase();
    const allButtons = document.getElementsByName('letter');
    for (i = 0; i < allButtons.length; i++) {
      allButtons[i].textContent = capsOn ? allButtons[i].textContent.toUpperCase() : allButtons[i].textContent.toLowerCase();
    }
  }

  if (actionType == 'del') {
    if (screenContent == '') {
      screen.textContent = null;
      } else {
      let screenInputs = screenContent;
      let contentArray = Array.from(screenInputs);
      contentArray.pop();
      let newScreen = contentArray.join('');
      screen.textContent = newScreen;
      }
  }

  if (actionType == 'space') {
    if (screenContent == '') {
      screen.textContent = null;
      } else {
      screen.textContent = screenContent + " ";
      }
  }

  if (actionType == 'return') {
    if (screenContent == '') {
      screen.textContent = null;
      } else {
      const newPara = document.createElement('p');
      newPara.innerHTML = screenContent;
      output.appendChild(newPara);
      screen.textContent = '';
      output.style.display = 'block';
      clearBtn.style.display = 'block';
      }
  }
});

clearBtn.addEventListener('click', function(){
  output.innerText = '';
  output.style.display = 'none';
  clearBtn.style.display = 'none';
})

