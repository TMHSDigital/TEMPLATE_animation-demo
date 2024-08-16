document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.dimension-shifter');
  const buttonText = button.querySelector('.button-text');
  const buttonBg = button.querySelector('.button-background');
  
  button.addEventListener('mousemove', (e) => {
    const rect = button.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    button.style.transform = ;
    
    buttonBg.style.filter = ;
  });
  
  button.addEventListener('mouseleave', () => {
    button.style.transform = '';
    buttonBg.style.filter = '';
  });
  
  button.addEventListener('click', () => {
    button.style.animation = 'shiftDimensions 0.5s ease-in-out, pulseGlow 0.5s ease-in-out';
    buttonText.textContent = 'Reality Shifted!';
    
    setTimeout(() => {
      button.style.animation = '';
      buttonText.textContent = 'Shift Reality';
    }, 1000);
  });
});
