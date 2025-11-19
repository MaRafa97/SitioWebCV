document.addEventListener('DOMContentLoaded',()=>{
  const btn = document.getElementById('themeToggle');
  btn?.addEventListener('click',()=>{
    document.body.classList.toggle('light');
    btn.textContent = document.body.classList.contains('light') ? '🌙' : '☀️';
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',(e)=>{
      const href = a.getAttribute('href');
      if(href && href.startsWith('#')){
        e.preventDefault();
        const el = document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });
});
