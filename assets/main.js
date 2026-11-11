const menu=document.querySelector('#menu-toggle');const nav=document.querySelector('#main-nav');menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false')}));document.querySelector('#year').textContent=String(new Date().getFullYear());
/* Accessible product carousel; images are stored in /assets/showcase/. */
(() => {
 const root=document.querySelector('#showcase');if(!root)return;
 const slides=[...root.querySelectorAll('.showcase-slide')];
 const dots=[...root.querySelectorAll('[data-slide-dot]')];
 const count=root.querySelector('#showcase-current');
 let current=0,interval=null;
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 function show(i,focus=false){
   current=(i+slides.length)%slides.length;
   slides.forEach((slide,j)=>{slide.hidden=j!==current;slide.classList.toggle('is-active',j===current)});
   dots.forEach((dot,j)=>{dot.setAttribute('aria-selected',String(j===current));dot.tabIndex=j===current?0:-1});
   count.textContent=String(current+1).padStart(2,'0');
   if(focus)dots[current].focus();
 }
 function stop(){if(interval)clearInterval(interval);interval=null}
 function start(){stop();if(!reduced)interval=setInterval(()=>show(current+1),8500)}
 root.querySelector('[data-slide-prev]').addEventListener('click',()=>{show(current-1);start()});
 root.querySelector('[data-slide-next]').addEventListener('click',()=>{show(current+1);start()});
 dots.forEach((dot,i)=>{
   dot.addEventListener('click',()=>{show(i);start()});
   dot.addEventListener('keydown',ev=>{
     if(ev.key==='ArrowRight'||ev.key==='ArrowLeft'){ev.preventDefault();show(current+(ev.key==='ArrowRight'?1:-1),true);start()}
   });
 });
 root.addEventListener('mouseenter',stop);root.addEventListener('mouseleave',start);
 root.addEventListener('focusin',stop);root.addEventListener('focusout',e=>{if(!root.contains(e.relatedTarget))start()});
 root.querySelectorAll('.showcase-media>img').forEach(img=>{
   img.addEventListener('error',()=>{img.hidden=true;img.nextElementSibling.hidden=false});
 });
 start();
})();
