document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.hearts-bg');
  if (!container) return;

  const hearts = ['♥', '♡', '💕', '💗', '✿'];

  for (let i = 0; i < 18; i++) {
    const heart = document.createElement('span');
    heart.className = 'heart';
    heart.textContent = hearts[i % hearts.length];
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${8 + Math.random() * 12}s`;
    heart.style.animationDelay = `${Math.random() * 10}s`;
    heart.style.fontSize = `${0.8 + Math.random() * 1.2}rem`;
    container.appendChild(heart);
  }
});
