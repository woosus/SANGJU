
document.addEventListener('DOMContentLoaded', () => {
  const profile = document.querySelector('.profile');
  const cluster = document.querySelector('.cluster');
  const spaceWrap = document.querySelector('.space-wrap');
  if(profile){
    profile.addEventListener('click', () => {
      // toggle open
      profile.classList.toggle('open');
      cluster.classList.toggle('open');
      // play animations again by cloning
      const space1 = spaceWrap.querySelector('.space1 .metal');
      const space2 = spaceWrap.querySelector('.space2 .bar');
      if(space1){ space1.style.animation = 'none'; space1.offsetHeight; space1.style.animation = ''; }
      if(space2){ space2.style.animation = 'none'; space2.offsetHeight; space2.style.animation = ''; }
      // stop after 2.5s (no looping)
      setTimeout(()=>{
        if(profile.classList.contains('open')){
          // keep spaces visible but animations stop naturally
        }
      }, 2600);
    });
  }
});


// === Premium Slow Effects JS ===
(function(){
  const rnd = (min, max) => Math.random() * (max - min) + min;

  // Upgrade all nav buttons as flash-capable
  document.querySelectorAll('nav.primary summary, .btn, button').forEach(el => {
    el.classList.add('btn-flash');
    el.addEventListener('click', e => {
      // randomize brightness per click for "mystic" feeling
      const bright = rnd(1.6, 2.2).toFixed(2);
      el.style.setProperty('--flash-bright', bright);
      el.classList.remove('flash'); // restart
      void el.offsetWidth;
      el.classList.add('flash');
      // remove class after animation ends
      setTimeout(() => el.classList.remove('flash'), 820);
    }, {passive:true});
  });

  // Neon cards: click flash + gentle jitter-free highlighting
  document.querySelectorAll('.neon-card').forEach(card => {
    card.addEventListener('click', () => {
      const bright = rnd(1.7, 2.4).toFixed(2);
      card.style.setProperty('--flash-bright', bright);
      card.classList.remove('flash'); void card.offsetWidth; card.classList.add('flash');
      setTimeout(() => card.classList.remove('flash'), 1020);
    }, {passive:true});
  });

  // Ensure 60fps where possible
  document.querySelectorAll('.neon-card, .btn-flash').forEach(el => {
    el.style.willChange = 'transform, filter';
  });
})();

