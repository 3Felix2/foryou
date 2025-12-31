const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

class Particle{
  constructor(x,y,color){
    this.x=x;
    this.y=y;
    this.color=color;
    this.radius=2;
    this.life=100;
    this.speed={
      x:(Math.random()-0.5)*10,
      y:(Math.random()-0.5)*10
    }
  }
  draw(){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
    ctx.fillStyle=this.color;
    ctx.fill();
  }
  update(){
    this.x+=this.speed.x;
    this.y+=this.speed.y;
    this.life--;
    this.draw();
  }
}

let particles=[];

function createFirework(){
  const x=Math.random()*canvas.width;
  const y=Math.random()*canvas.height/2;
  const colors=["#ff0088","#00ffff","#ffff00","#ff6600"];

  for(let i=0;i<50;i++){
    particles.push(new Particle(x,y,colors[Math.floor(Math.random()*colors.length)]));
  }
}

function animate(){
  ctx.fillStyle="rgba(0,0,0,0.2)";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  particles=particles.filter(p=>p.life>0);
  particles.forEach(p=>p.update());

  requestAnimationFrame(animate);
}

setInterval(createFirework,800);
animate();

 const delayTampil = 10000; // 4 detik tampil
  const durasiAnimasi = 1200; // harus sama dengan CSS

  setTimeout(() => {
    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = "home.html";
    }, durasiAnimasi);

  }, delayTampil);