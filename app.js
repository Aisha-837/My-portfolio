// ===== EDIT YOUR PROJECTS HERE (copy from LinkedIn > Featured/Projects) =====
const projects = [
  {title:"Project One", desc:"Short description of your project and the tech used.", tech:"React · Node · MongoDB", link:"https://www.linkedin.com/in/aisha-waleed-071353396"},
  {title:"Project Two", desc:"Short description of your project and the tech used.", tech:"HTML · CSS · JavaScript", link:"https://www.linkedin.com/in/aisha-waleed-071353396"},
  {title:"Social Media Campaign", icon:"📱", desc:"Brand growth and content strategy as a Social Media Manager. Tap to choose Instagram or Facebook.", tech:"Instagram · Facebook · Branding",
    links:[{name:"Instagram",icon:"📸",url:"https://www.instagram.com/cookwithaishabatla?dlrf=MWoyNXAxcXYwMjZkMA%3D%3D&utm_source=qr"},{name:"Facebook",icon:"👍",url:"https://www.facebook.com/share/1dWWsxgT3t/?mibextid=wwXIfr"}]},
  {title:"AI Content Series", icon:"✨", desc:"AI-generated visuals and storytelling content. Tap to watch on YouTube.", tech:"AI Tools · Design · Video", link:"https://youtube.com/@cookwithaishabatla?si=KLOpYDYD7lTsOUBy"}
];
const box=document.getElementById('proj');
box.innerHTML = projects.map((p,i) =>
 `<a class="card" href="${p.link||'#'}" ${p.link?'target="_blank" rel="noopener"':''} data-i="${i}"><span>${p.icon||'🌿'}</span><h4>${p.title}</h4><p>${p.desc}</p><p style="margin-top:10px;color:#a3b165">${p.tech}</p></a>`).join('');
const modal=document.getElementById('modal');
box.addEventListener('click',e=>{
  const a=e.target.closest('.card'); if(!a) return;
  const p=projects[a.dataset.i]; if(!p.links) return;
  e.preventDefault();
  document.getElementById('mtitle').textContent=p.title;
  document.getElementById('mlinks').innerHTML=p.links.map(l=>`<a class="btn" href="${l.url}" target="_blank" rel="noopener">${l.icon} ${l.name}</a>`).join('');
  modal.classList.add('open');
});
modal.addEventListener('click',e=>{ if(e.target===modal||e.target.id==='mclose') modal.classList.remove('open'); });

const intro=document.getElementById('intro'), site=document.getElementById('site'),
      hi=document.getElementById('hi'), wave=document.getElementById('wave');

function speak(){
  if(!('speechSynthesis' in window)) return;
  const u=new SpeechSynthesisUtterance("Hi, I am Aisha Waleed, Full Stack Developer");
  u.lang='en-US'; u.rate=.95; u.pitch=1.15;
  const v=speechSynthesis.getVoices().find(x=>/female|zira|samantha|google uk english female|google us english/i.test(x.name));
  if(v) u.voice=v;
  u.onstart=()=>wave.classList.add('on'); u.onend=()=>wave.classList.remove('on');
  speechSynthesis.cancel(); speechSynthesis.speak(u);
}
document.getElementById('enter').onclick=()=>{
  document.getElementById('enter').style.display='none';
  hi.classList.add('show'); speak();
  setTimeout(()=>{intro.classList.add('out'); site.classList.remove('hidden'); typeLoop(); observe();},4800);
  setTimeout(()=>intro.remove(),5800);
};

const roles=["Full Stack Developer","Social Media Manager","AI Content Creator"];
let r=0,c=0,del=false; const t=document.getElementById('typed');
function typeLoop(){
  const w=roles[r]; t.textContent=w.slice(0,c);
  if(!del&&c===w.length){del=true;return setTimeout(typeLoop,1400)}
  if(del&&c===0){del=false;r=(r+1)%roles.length}
  c+=del?-1:1; setTimeout(typeLoop,del?40:90);
}
function observe(){
  const io=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add('in')),{threshold:.15});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
}

// ===== TECH / LANGUAGES (change the numbers to match your level) =====
const tech=[{n:"HTML",b:"</>",v:90},{n:"CSS",b:"{ }",v:85},{n:"JavaScript",b:"JS",v:80},{n:"React",b:"⚛",v:75}];
document.getElementById('techbox').innerHTML=tech.map((t,i)=>`<div class="card tech" style="--i:${i};--w:${t.v}%"><div class="badge">${t.b}</div><h4>${t.n}</h4><div class="bar"><i></i></div><p>${t.v}%</p></div>`).join('');

// ===== CERTIFICATES =====
const certs=[
 {img:"certs/c1.jpg",t:"Social Media Marketing",o:"E-Rising Trainers, Karachi",d:"08 Oct 2026"},
 {img:"certs/c2.jpg",t:"Full-Stack Development 101",o:"Simplilearn SkillUP",d:"15 Jun 2026"},
 {img:"certs/c7.jpg",t:"HTML Quiz (90/100)",o:"ProProfs",d:"02 Nov 2025"},
 {img:"certs/c6.jpg",t:"Introduction to Modern AI",o:"Cisco Networking Academy",d:"08 Mar 2026"},
 {img:"certs/c5.jpg",t:"Basic Level AI Course",o:"Digital Learning Site",d:"Appreciation"},
 {img:"certs/c3.jpg",t:"FemHack-2026 Hackathon",o:"Saylani IT Training Programme",d:"8-hour hackathon"},
 {img:"certs/c4.jpg",t:"Saylani IT Entrance Exam-2026",o:"Saylani Mass Training Programme",d:"26 Jul 2026"}
];
const cb=document.getElementById('certbox'), lb=document.getElementById('lightbox'), limg=document.getElementById('limg');
cb.innerHTML=certs.map((c,i)=>`<div class="cert" style="--i:${i}" data-i="${i}"><div class="shine"></div><img src="${c.img}" alt="${c.t}"><h4>${c.t}</h4><p>${c.o}</p><small>${c.d}</small></div>`).join('');
cb.addEventListener('click',e=>{const c=e.target.closest('.cert');if(!c)return;limg.src=certs[c.dataset.i].img;lb.classList.add('open');});
lb.addEventListener('click',()=>lb.classList.remove('open'));
cb.addEventListener('mousemove',e=>{const c=e.target.closest('.cert');if(!c)return;const r=c.getBoundingClientRect();
 const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
 c.style.transform=`perspective(700px) rotateY(${x*14}deg) rotateX(${-y*14}deg) translateY(-8px)`;});
cb.addEventListener('mouseout',e=>{const c=e.target.closest('.cert');if(c)c.style.transform='';});
