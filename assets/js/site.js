// Sélecteur de langue FR / EN : se ferme au clic extérieur ou avec Échap
(function(){
  var s=document.querySelector('details.lang-switch');
  if(!s)return;
  document.addEventListener('click',function(e){if(s.open&&!s.contains(e.target))s.open=false;});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&s.open){s.open=false;s.querySelector('summary').focus();}});
})();
