// ==================
// CARD 3D EFFECT
// ==================

const cards = document.querySelectorAll('.card');

cards.forEach(card=>{

  card.addEventListener('mousemove',e=>{

    const rect=card.getBoundingClientRect();

    const x=e.clientX-rect.left;

    const y=e.clientY-rect.top;

    const rotateY=(x-rect.width/2)/18;

    const rotateX=(rect.height/2-y)/18;

    card.style.transform=`
    perspective(1000px)
    rotateY(${rotateY}deg)
    rotateX(${rotateX}deg)
    translateY(-10px)
    `;

  });



  card.addEventListener('mouseleave',()=>{

    card.style.transform=`
    perspective(1000px)
    rotateY(0deg)
    rotateX(0deg)
    translateY(0)
    `;

  });

});



// ==================
// VIDEO AUTOPLAY
// ==================

const videos =
document.querySelectorAll(
'.video-item'
);

videos.forEach(item=>{

const video=
item.querySelector('video');

const btn=
item.querySelector('.play-btn');

btn.addEventListener(

'click',

()=>{

document
.querySelectorAll(
'.portfolio-video'
)

.forEach(v=>{

if(v!==video){

v.pause();

}

});

video.play();

video.controls=true;

btn.classList.add('hide');

});

video.addEventListener(

'pause',

()=>{

btn.classList.remove('hide');

});

video.addEventListener(

'ended',

()=>{

btn.classList.remove('hide');

});



});

// ==================
// PORTFOLIO HOVER
// ==================

const portfolio=document.querySelectorAll('.portfolio-item');

portfolio.forEach(item=>{

  item.addEventListener('mouseenter',()=>{

    item.style.transform='translateY(-10px) scale(1.02)';

  });



  item.addEventListener('mouseleave',()=>{

    item.style.transform='translateY(0) scale(1)';

  });

});

// ==================
// SOFTWARE EFFECT
// ==================

const softwares =
document.querySelectorAll(
'.software-card'
);

softwares.forEach(card=>{

card.addEventListener(

'mouseenter',

()=>{

card.classList.add(
'active'
);

});

card.addEventListener(

'mouseleave',

()=>{

card.classList.remove(
'active'
);

});

});