
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
