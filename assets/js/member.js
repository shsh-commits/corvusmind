// Pages membres : carousel des badges et fenêtre des certifications
var reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('.carousel').forEach(function(c){
  var t=c.querySelector('.track'), anim=null;
  function step(){
    var card=t.querySelector('.badge');
    var gap=parseInt(getComputedStyle(t).columnGap||getComputedStyle(t).gap)||14;
    return card?card.getBoundingClientRect().width+gap:240;
  }
  // Glissement animé maison : plus rapide et plus régulier que behavior:'smooth'
  function slideTo(x,dur){
    var max=t.scrollWidth-t.clientWidth;
    x=Math.max(0,Math.min(max,x));
    if(anim)cancelAnimationFrame(anim);
    if(reduceMotion){t.scrollLeft=x;return;}
    var from=t.scrollLeft, d=x-from, t0=null;
    dur=dur||420;
    t.classList.add('sliding');
    function frame(ts){
      if(t0===null)t0=ts;
      var p=Math.min(1,(ts-t0)/dur), e=1-Math.pow(1-p,3); // ease-out cubique
      t.scrollLeft=from+d*e;
      if(p<1)anim=requestAnimationFrame(frame);
      else{anim=null;t.classList.remove('sliding');}
    }
    anim=requestAnimationFrame(frame);
  }
  // Position cible arrondie au badge le plus proche pour éviter les décalages
  function target(dir){var s=step();return (Math.round(t.scrollLeft/s)+dir)*s;}
  function next(){
    if(t.scrollLeft+t.clientWidth>=t.scrollWidth-4)slideTo(0,600);
    else slideTo(target(1));
  }
  c.querySelector('.prev').addEventListener('click',function(){slideTo(target(-1));});
  c.querySelector('.next').addEventListener('click',next);
});

// Panneau latéral des certifications
(function(){
  var panel=document.getElementById('cert-panel'), ov=document.querySelector('.cert-overlay'), openBtn=document.querySelector('.cert-open');
  if(!panel||!openBtn)return;
  function open(){
    ov.hidden=false;
    requestAnimationFrame(function(){panel.classList.add('open');ov.classList.add('open');});
    panel.setAttribute('aria-hidden','false');openBtn.setAttribute('aria-expanded','true');
    document.body.style.overflow='hidden';panel.focus();
  }
  function close(){
    panel.classList.remove('open');ov.classList.remove('open');
    panel.setAttribute('aria-hidden','true');openBtn.setAttribute('aria-expanded','false');
    document.body.style.overflow='';openBtn.focus();
    setTimeout(function(){ov.hidden=true;},300);
  }
  openBtn.addEventListener('click',open);
  panel.querySelector('.cert-close').addEventListener('click',close);
  ov.addEventListener('click',close);
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&panel.classList.contains('open'))close();});
})();
