document.querySelectorAll('.filters .chip').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.filters .chip').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('#projects .card').forEach(card=>{
      if(f==='all'){ card.style.display='block'; return; }
      const tags = card.dataset.tags.split(' ');
      card.style.display = tags.includes(f) ? 'block' : 'none';
    });
  });
});
document.getElementById('y').textContent = new Date().getFullYear();
