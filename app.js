const business = {
  name: "HAIR FACTORY",
  category: "PELUQUERÍA",
  phone: "674 96 09 50",
  whatsapp: "34674960950",
  maps: "https://www.google.com/maps/search/?api=1&query=Calle%20Brasil%202%2C%20El%20Tablero%2C%20San%20Bartolom%C3%A9%20de%20Tirajana%2C%20Las%20Palmas",
  googleReview: "https://www.google.com/maps/search/?api=1&query=Hair%20Factory%2C%20Calle%20Brasil%202%2C%20El%20Tablero%2C%20San%20Bartolom%C3%A9%20de%20Tirajana",
  booking: "",
  instagram: "",
  address: "Calle Brasil, 2 · El Tablero · San Bartolomé de Tirajana",
  hours: "Consulta el horario y disponibilidad por WhatsApp.",
  services: [
    {name:"Corte", description:"Corte adaptado a tu estilo, tipo de cabello y acabado que buscas."},
    {name:"Barba", description:"Perfilado y acabado cuidado para mantener la forma y definición."},
    {name:"Corte + barba", description:"Corte y barba en un mismo servicio para un acabado completo."},
    {name:"Servicio personalizado", description:"Cuéntanos qué buscas y te orientamos antes de reservar."}
  ]
};

const styles = [
  {id:"taper-fade",category:"tendencia",title:"Taper Fade",description:"Transición suave en patillas y nuca, con un acabado limpio y natural.",tags:["Moderno","Versátil","Mantenimiento medio"],image:"./assets/styles/png/taper-fade.png"},
  {id:"textured-crop",category:"tendencia",title:"Textured Crop",description:"Parte superior texturizada y laterales limpios para un acabado actual.",tags:["Textura","Natural","Actual"],image:"./assets/styles/png/textured-crop.png"},
  {id:"buzz-cut",category:"tendencia",title:"Buzz Cut",description:"Corto, definido y práctico para quien busca sencillez.",tags:["Corto","Práctico","Bajo mantenimiento"],image:"./assets/styles/png/buzz-cut.png"},
  {id:"low-fade",category:"tendencia",title:"Low Fade",description:"Degradado bajo y discreto que conserva más peso en la parte superior.",tags:["Elegante","Discreto","Versátil"],image:"./assets/styles/png/low-fade.png"},
  {id:"clasico",category:"clasico",title:"Corte clásico",description:"Líneas limpias y proporción para un estilo atemporal.",tags:["Clásico","Elegante","Atemporal"],image:"./assets/styles/png/clasico.png"},
  {id:"side-part",category:"clasico",title:"Side Part",description:"Raya lateral definida, volumen controlado y acabado profesional.",tags:["Distinción","Profesional","Clásico"],image:"./assets/styles/png/side-part.png"},
  {id:"crew-cut",category:"clasico",title:"Crew Cut",description:"Corto, funcional y equilibrado, fácil de adaptar.",tags:["Limpio","Práctico","Versátil"],image:"./assets/styles/png/crew-cut.png"},
  {id:"tijera",category:"clasico",title:"Corte a tijera",description:"Trabajo de tijera para conservar movimiento, volumen y caída natural.",tags:["Natural","Movimiento","Tradicional"],image:"./assets/styles/png/tijera.png"},
  {id:"barba-3",category:"barba",title:"Barba de 3 días",description:"Barba corta y natural con líneas limpias y mantenimiento sencillo.",tags:["Natural","Fácil mantenimiento"],image:"./assets/styles/png/barba-3.png"},
  {id:"barba-corta",category:"barba",title:"Barba corta perfilada",description:"Contornos definidos y longitud corta para una imagen cuidada.",tags:["Limpia","Moderna","Definida"],image:"./assets/styles/png/barba-corta.png"},
  {id:"barba-media",category:"barba",title:"Barba media",description:"Longitud intermedia para trabajar forma, densidad y conexión con el corte.",tags:["Equilibrada","Versátil"],image:"./assets/styles/png/barba-media.png"},
  {id:"barba-larga",category:"barba",title:"Barba larga",description:"Mayor longitud y presencia, manteniendo forma y contornos.",tags:["Carácter","Presencia","Estilo propio"],image:"./assets/styles/png/barba-larga.png"}
];
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const cleanPhone=v=>(v||"").replace(/\D/g,"");
const wa=()=>business.whatsapp?`https://wa.me/${cleanPhone(business.whatsapp)}?text=${encodeURIComponent(`Hola, quiero información y reservar cita en ${business.name}.`)}`:"";
function setLink(selector,value){const el=$(selector);if(!el)return;el.href=value||"#";el.classList.toggle("is-disabled",!value);if(!value)el.addEventListener("click",e=>{e.preventDefault();showToast("Este canal aún no está configurado.")},{once:true});}
function renderBusiness(){
 document.title=`${business.name} · ${business.category}`;
 $("#addressText").textContent=business.address; $("#hoursText").textContent=business.hours;
 setLink("#mapsLink",business.maps);setLink("#openMaps",business.maps);setLink("#reviewLink",business.googleReview);setLink("#drawerReview",business.googleReview);
 setLink("#phoneLink",business.phone?`tel:+34${cleanPhone(business.phone)}`:"");setLink("#whatsappLink",wa());setLink("#topWhatsApp",wa());setLink("#instagramLink",business.instagram);
 setLink("#bookingLink",wa());setLink("#heroBooking",wa());
 $("#serviceList").innerHTML=business.services.map((s,i)=>`<article class="service"><span class="service-number">${String(i+1).padStart(2,"0")}</span><div><strong>${escapeHtml(s.name)}</strong><p>${escapeHtml(s.description)}</p></div></article>`).join("");
}
function escapeHtml(s){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
function renderStyles(filter="tendencia"){
 const list=filter==="all"?styles:styles.filter(s=>s.category===filter);
 $("#styleGrid").innerHTML=list.map(s=>`<article class="style-card" data-id="${s.id}"><img class="style-image" loading="lazy" src="${s.image}" alt="Referencia del estilo ${escapeHtml(s.title)}" onerror="this.onerror=null;this.src='./assets/logo.png'"><div class="style-body"><span class="card-kicker">${s.category==="barba"?"BARBA":s.category==="clasico"?"CLÁSICO":"TENDENCIA"}</span><h3>${escapeHtml(s.title)}</h3><p>${escapeHtml(s.description)}</p><div class="tags">${s.tags.slice(0,2).map(t=>`<span>${escapeHtml(t)}</span>`).join("")}</div></div></article>`).join("");
 $$(".style-card").forEach(c=>c.addEventListener("click",()=>openStyle(c.dataset.id)));
}
function openStyle(id){const s=styles.find(x=>x.id===id);if(!s)return;$("#dialogImage").src=s.image; $("#dialogImage").onerror=()=>{$("#dialogImage").src="./assets/logo.png";};$("#dialogImage").alt=`Referencia del estilo ${s.title}`;$("#dialogCategory").textContent=s.category==="barba"?"BARBA":s.category==="clasico"?"CLÁSICOS":"TENDENCIAS";$("#dialogTitle").textContent=s.title;$("#dialogDescription").textContent=s.description;$("#dialogTags").innerHTML=s.tags.map(t=>`<span>${escapeHtml(t)}</span>`).join("");$("#dialogBook").href=wa();$("#dialogDownload").href=s.image;$("#dialogDownload").download=`hair-factory-${s.id}.png`;$("#styleDialog").showModal();}
function showToast(t){const el=$("#toast");el.textContent=t;el.classList.add("show");clearTimeout(window.__toast);window.__toast=setTimeout(()=>el.classList.remove("show"),2200);}

$$(".tab").forEach(tab=>tab.addEventListener("click",()=>{$$(".tab").forEach(t=>t.classList.remove("active"));tab.classList.add("active");renderStyles(tab.dataset.filter);}));
$(".text-button").addEventListener("click",()=>renderStyles("all"));
$("#closeDialog").addEventListener("click",()=>$("#styleDialog").close());
$("#finderButton").addEventListener("click",()=>$("#finderDialog").showModal());$("#closeFinder").addEventListener("click",()=>$("#finderDialog").close());
$("#finderResult").addEventListener("click",()=>{const l=$("#finderLength").value,m=$("#finderMaintenance").value,b=$("#finderBeard").value;let r=l==="corto"?(m==="bajo"?styles.find(s=>s.id==="buzz-cut"):styles.find(s=>s.id==="low-fade")):l==="medio"?styles.find(s=>s.id==="textured-crop"):styles.find(s=>s.id==="tijera");if(b==="si")r=styles.find(s=>s.id==="barba-corta")||r;$("#finderOutput").hidden=false;$("#finderOutput").innerHTML=`<strong>Te proponemos: ${escapeHtml(r.title)}</strong><p>${escapeHtml(r.description)}</p><button class="outline-button small" id="finderOpen">VER ESTILO</button>`;$("#finderOpen").onclick=()=>{$("#finderDialog").close();openStyle(r.id);};});
$("#menuButton").addEventListener("click",()=>$("#drawer").showModal());$("#closeDrawer").addEventListener("click",()=>$("#drawer").close());$$('#drawer a').forEach(a=>a.addEventListener('click',()=>$("#drawer").close()));
$("#shareButton").addEventListener("click",async e=>{e.preventDefault();try{await navigator.share({title:document.title,text:"Hair Factory · Peluquería en El Tablero",url:location.href});}catch(err){if(err?.name!=="AbortError")try{await navigator.clipboard.writeText(location.href),showToast("Enlace copiado")}catch{showToast("Puedes compartirla desde el navegador")}}});
let deferredPrompt;window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e;$("#installButton").hidden=false;});$("#installButton").addEventListener("click",async()=>{if(!deferredPrompt)return showToast("Instala la app desde el menú del navegador");deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;});
$$('.bottom-nav a').forEach(a=>a.addEventListener('click',()=>{$$('.bottom-nav a').forEach(x=>x.classList.remove('active'));a.classList.add('active')}));
renderBusiness();renderStyles();
if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
