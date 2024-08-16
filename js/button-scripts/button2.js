document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.neon-pulse');
  
  button.addEventListener('mousemove', (e) => {
    const rect = button.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    button.style.setProperty('--x', x);
    button.style.setProperty('--y', y);
  });
});
