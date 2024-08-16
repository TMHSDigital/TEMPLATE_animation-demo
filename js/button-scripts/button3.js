document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.quantum-ripple');
  const ripple = button.querySelector('.ripple-effect');
  
  button.addEventListener('mousemove', (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
  });
  
  button.addEventListener('mouseleave', () => {
    ripple.style.left = '50%';
    ripple.style.top = '50%';
  });
});
