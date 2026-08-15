const menu=document.getElementById("menu"),links=document.getElementById("navLinks");
menu?.addEventListener("click",()=>links.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const progress=document.getElementById("progress");
window.addEventListener("scroll",()=>{
  const max=document.documentElement.scrollHeight-innerHeight;
  progress.style.width=`${max>0?(scrollY/max)*100:0}%`;
},{passive:true});

document.getElementById("year").textContent=new Date().getFullYear();

document.querySelectorAll(".magnetic").forEach(btn=>{
  btn.addEventListener("pointermove",e=>{
    if(innerWidth<700)return;
    const r=btn.getBoundingClientRect(),x=(e.clientX-r.left-r.width/2)*.08,y=(e.clientY-r.top-r.height/2)*.08;
    btn.style.transform=`translate(${x}px,${y}px)`;
  });
  btn.addEventListener("pointerleave",()=>btn.style.transform="");
});

document.querySelectorAll(".stack-card").forEach(card=>{
  card.addEventListener("pointermove",e=>{
    if(innerWidth<850)return;
    const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
    card.style.transform=`perspective(800px) rotateX(${(-y*3).toFixed(2)}deg) rotateY(${(x*3).toFixed(2)}deg) translateY(-5px)`;
  });
  card.addEventListener("pointerleave",()=>card.style.transform="");
});
