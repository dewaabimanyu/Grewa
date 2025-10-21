const display = document.getElementById('display'); //mengambil elemen input display
const buttons = document.querySelectorAll('.buttons button');
const clearBtn = document.getElementById('clear');
const equalsBtn = document.getElementById('equals');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.textContent;

    if (value === '=' || value === 'AC') return;

    if (['sin','cos','tan','√'].includes(value)) {
      display.value += value + '(';
    } else {
      display.value += value;
    }
  });
});

clearBtn.addEventListener('click', () => display.value = '');

equalsBtn.addEventListener('click', () => {
  try {
    let expr = display.value
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/√/g, 'Math.sqrt')
      .replace(/sin/g, 'Math.sin')
      .replace(/cos/g, 'Math.cos')
      .replace(/tan/g, 'Math.tan');

    display.value = eval(expr);
  } catch {
    display.value = "Error";
  }
});
