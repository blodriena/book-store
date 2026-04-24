const canvas=document.getElementById('bg-canvas'),ctx=canvas.getContext('2d');
let W,H,stars=[];
function resize(){W=canvas.width=window.innerWidth;H=canvas.height=window.innerHeight;}
function initStars(){stars=[];for(let i=0;i<140;i++)stars.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.2+0.2,a:Math.random(),s:Math.random()*0.003+0.001,c:['#a855f7','#22d3ee','#e2e8f0','#60a5fa'][Math.floor(Math.random()*4)]});}
function drawStars(){ctx.clearRect(0,0,W,H);stars.forEach(s=>{s.a+=s.s;if(s.a>1)s.s*=-1;if(s.a<0.05)s.s*=-1;ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fillStyle=s.c;ctx.globalAlpha=s.a*0.5;ctx.fill();});ctx.globalAlpha=1;requestAnimationFrame(drawStars);}
resize();initStars();drawStars();
window.addEventListener('resize',()=>{resize();initStars();});
 
const dg=document.getElementById('dot-grid-wrap');
let dgH='<div class="dot-grid">';
for(let i=0;i<64;i++)dgH+=`<span style="--delay:${(Math.random()*3).toFixed(2)}s;--d:${(2+Math.random()*3).toFixed(2)}s;"></span>`;
dg.innerHTML=dgH+'</div>';

const books=[
  {id:1,title:"A Brief History of Time",author:"Stephen Hawking",cat:"science",price:18.99,origPrice:24.99,rating:4.9,ratingCount:12400,badge:"bestseller",img:"https://covers.openlibrary.org/b/isbn/9780553380163-L.jpg",year:2020},
  {id:2,title:"The Intelligent Investor",author:"Benjamin Graham",cat:"finance",price:22.99,origPrice:29.99,rating:4.8,ratingCount:9800,badge:"bestseller",img:"https://covers.openlibrary.org/b/isbn/9780060555665-L.jpg",year:2021},
  {id:3,title:"Atomic Habits",author:"James Clear",cat:"self-help",price:16.99,origPrice:null,rating:4.9,ratingCount:18200,badge:"bestseller",img:"https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",year:2019},
  {id:4,title:"The Pragmatic Programmer",author:"Hunt & Thomas",cat:"technology",price:39.99,origPrice:49.99,rating:4.6,ratingCount:6200,badge:"new",img:"https://covers.openlibrary.org/b/isbn/9780135957059-L.jpg",year:2023},
  {id:5,title:"Six Easy Pieces",author:"Richard Feynman",cat:"science",price:14.99,origPrice:19.99,rating:4.8,ratingCount:4100,badge:null,img:"https://covers.openlibrary.org/b/isbn/9780465025275-L.jpg",year:2018},
  {id:6,title:"Rich Dad Poor Dad",author:"Robert Kiyosaki",cat:"finance",price:14.99,origPrice:19.99,rating:4.6,ratingCount:22000,badge:"bestseller",img:"https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg",year:2020},
  {id:7,title:"Thinking, Fast and Slow",author:"Daniel Kahneman",cat:"self-help",price:19.99,origPrice:null,rating:4.7,ratingCount:8700,badge:null,img:"https://covers.openlibrary.org/b/isbn/9780374533557-L.jpg",year:2021},
  {id:8,title:"Clean Code",author:"Robert C. Martin",cat:"technology",price:34.99,origPrice:44.99,rating:4.5,ratingCount:5400,badge:null,img:"https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg",year:2022},
  {id:9,title:"Meditations",author:"Marcus Aurelius",cat:"philosophy",price:12.99,origPrice:null,rating:4.9,ratingCount:14600,badge:"bestseller",img:"https://covers.openlibrary.org/b/isbn/9780812968255-L.jpg",year:2019},
  {id:10,title:"Sapiens",author:"Yuval Noah Harari",cat:"history",price:21.99,origPrice:26.99,rating:4.8,ratingCount:19300,badge:"bestseller",img:"https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg",year:2020},
  {id:11,title:"The Art of War",author:"Sun Tzu",cat:"philosophy",price:9.99,origPrice:14.99,rating:4.5,ratingCount:11200,badge:null,img:"https://covers.openlibrary.org/b/isbn/9781599869773-L.jpg",year:2018},
  {id:12,title:"Thinking in Systems",author:"Donella H. Meadows",cat:"science",price:23.99,origPrice:null,rating:4.6,ratingCount:3200,badge:"new",img:"https://covers.openlibrary.org/b/isbn/9781603580557-L.jpg",year:2023},
  {id:13,title:"Zero to One",author:"Peter Thiel",cat:"finance",price:17.99,origPrice:22.99,rating:4.7,ratingCount:7600,badge:null,img:"https://covers.openlibrary.org/b/isbn/9780804139021-L.jpg",year:2021},
  {id:14,title:"Deep Work",author:"Cal Newport",cat:"self-help",price:15.99,origPrice:null,rating:4.6,ratingCount:8900,badge:null,img:"https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg",year:2020},
  {id:15,title:"The Design of Everyday Things",author:"Don Norman",cat:"art",price:24.99,origPrice:29.99,rating:4.5,ratingCount:4100,badge:null,img:"https://covers.openlibrary.org/b/isbn/9780465050659-L.jpg",year:2022},
  {id:16,title:"Guns, Germs & Steel",author:"Jared Diamond",cat:"history",price:20.99,origPrice:null,rating:4.7,ratingCount:6800,badge:null,img:"https://covers.openlibrary.org/b/isbn/9780393354324-L.jpg",year:2019},
  {id:17,title:"The Republic",author:"Plato",cat:"philosophy",price:11.99,origPrice:16.99,rating:4.6,ratingCount:5200,badge:null,img:"https://covers.openlibrary.org/b/isbn/9780140455113-L.jpg",year:2018},
  {id:18,title:"Psychology of Money",author:"Morgan Housel",cat:"finance",price:19.99,origPrice:24.99,rating:4.8,ratingCount:13400,badge:"new",img:"https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg",year:2023},
  {id:19,title:"The Selfish Gene",author:"Richard Dawkins",cat:"science",price:16.99,origPrice:21.99,rating:4.7,ratingCount:7100,badge:null,img:"https://covers.openlibrary.org/b/isbn/9780198788607-L.jpg",year:2020},
  {id:20,title:"Can't Hurt Me: Master Your Mind and Defy the Odds",author:"David Goggins",cat:"biography",price:23.99,origPrice:17.99,rating:4.9,ratingCount:24000,badge:"bestseller",img:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1610277160i/52458172.jpg",year:2018},
  {id:20,title:"Dune",author:"Frank Herbert",cat:"science",price:13.99,origPrice:17.99,rating:4.9,ratingCount:24000,badge:"bestseller",img:"https://covers.openlibrary.org/b/isbn/9780441013593-L.jpg",year:2021},
  {id:20,title:"String Theory",author:"Corey Sinclair",cat:"science",price:20.99,origPrice:25.99,rating:5.0,ratingCount:34000,img:"https://images.booksense.com/images/724/857/9781774857724.jpg",year:2019},
  {id:20,title:"The God Equation",author:"Michio Kaku",cat:"science",price:19.99,origPrice:14.99,rating:4.8,ratingCount:27000,badge:"new",img:"https://m.media-amazon.com/images/I/71JBwL9XXoL._AC_UF1000,1000_QL80_.jpg",year:2022},
  {id:20,title:"Power",author:"Robert Greene",cat:"Finance",price:15.00,origPrice:16.99,rating:4.8,ratingCount:27000,img:"https://bookoutlet.com/api/image?url=https://images.bookoutlet.com/covers/large/isbn978186/9781861972781-l.jpg&w=3840&q=75",year:2020},
  {id:20,title:"Black Box Thinking",author:"Mattew Syed",cat:"Self-Help",price:19.99,origPrice:22.99,rating:4.8,ratingCount:27000,badge:"bestseller",img:"https://m.media-amazon.com/images/I/716QlXCweSL._AC_UF1000,1000_QL80_.jpg",year:2022},
  {id:20,title:"The Law Of Human Nature",author:"Robert Greene",cat:"philosophy",price:20.99,origPrice:21.99,rating:5.0,ratingCount:30000,badge:"bestseller",img:"https://m.media-amazon.com/images/I/61UPuQRgNKL._AC_UF1000,1000_QL80_.jpg",year:2017},
  {id:20,title:"High Road Leadership",author:"Jhone.C Maxwell",cat:"Self-Help",price:25.99,origPrice:21.99,rating:4.0,ratingCount:30000,img:"https://m.media-amazon.com/images/I/71M-dUs1L0L._AC_UF1000,1000_QL80_.jpg",year:2009},
  {id:20,title:"Cryptocurrency For Beginners",author:"Sam Ledgen",cat:"technology",price:18.97,origPrice:28.99,rating:4.99,ratingCount:20500,img:"https://i5.walmartimages.com/seo/Cryptocurrency-for-Beginners-How-to-Master-Blockchain-Defi-and-start-Investing-in-Bitcoin-and-Altcoins-Paperback-9781804340516_796f3a09-d25f-4d5d-9b29-70c08a03ef9f.10813b4c7c5ef7008cb488cd58285d0c.jpeg",year:2014},
  {id:20,title:"The Entrepreneur Mind",author:"Arun Sehgal",cat:"finance",price:29.99,origPrice:12.90,rating:4.2,ratingCount:30100,img:"https://m.media-amazon.com/images/I/81zqeO4wOpL.jpg",year:2015},
];
 
const catColors={science:"linear-gradient(135deg,#150028,#001a3a)",finance:"linear-gradient(135deg,#0a1f0a,#1a3a0d)","self-help":"linear-gradient(135deg,#1a0a00,#3a1500)",technology:"linear-gradient(135deg,#001a33,#0a0028)",philosophy:"linear-gradient(135deg,#1a1000,#332000)",history:"linear-gradient(135deg,#001a1a,#00331a)",art:"linear-gradient(135deg,#1a0028,#001a33)"};
const catEmoji={science:'⚛️',finance:'📈','self-help':'🧠',technology:'💻',philosophy:'🏛️',history:'🌍',art:'🎨'};
 
let cartCount=0,wishCount=0,activeFilter='all',activeSort='default',searchQuery='';
let wishlist=new Set(),cartItems=new Set();
 
function showToast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('show'),2200);}
 
function addToCart(id){
  cartItems.add(id);cartCount=cartItems.size;
  document.getElementById('cart-count').textContent=cartCount;
  const b=books.find(x=>x.id===id);showToast('🛒 "'+b.title+'" added to cart!');
  const btn=document.querySelector('.cart-btn-card[data-id="'+id+'"]');
  if(btn){btn.classList.add('added');btn.innerHTML='✓';setTimeout(()=>{btn.classList.remove('added');btn.innerHTML='🛒';},1500);}
}
 
function toggleWish(id){
  const btn=document.querySelector('.wish-btn[data-id="'+id+'"]');
  if(wishlist.has(id)){wishlist.delete(id);if(btn)btn.classList.remove('active');}
  else{wishlist.add(id);if(btn)btn.classList.add('active');const b=books.find(x=>x.id===id);showToast('❤️ "'+b.title+'" wishlisted!');}
  wishCount=wishlist.size;document.getElementById('wish-count').textContent=wishCount;
}
 
function toggleCartPanel(){showToast('🛒 You have '+cartCount+' item(s) in cart.');}
function toggleWishlist(){showToast('❤️ You have '+wishCount+' item(s) in wishlist.');}
 
function renderStars(r){
  const f=Math.floor(r);let h='';
  for(let i=1;i<=5;i++)h+=`<span class="star ${i<=f?'on':'off'}">★</span>`;
  return h+`<span class="rating-val">${r.toFixed(1)}</span>`;
}
 
function renderBooks(){
  let list=books.filter(b=>{
    const catOk=activeFilter==='all'||b.cat===activeFilter;
    const q=searchQuery.trim().toLowerCase();
    const searchOk=!q||b.title.toLowerCase().includes(q)||b.author.toLowerCase().includes(q)||b.cat.toLowerCase().includes(q);
    return catOk&&searchOk;
  });
  if(activeSort==='price-asc')list.sort((a,b)=>a.price-b.price);
  if(activeSort==='price-desc')list.sort((a,b)=>b.price-a.price);
  if(activeSort==='rating')list.sort((a,b)=>b.rating-a.rating);
  if(activeSort==='newest')list.sort((a,b)=>b.year-a.year);
 
  document.getElementById('count-display').textContent=list.length;
  const grid=document.getElementById('books-grid');
 
  if(!list.length){
    const q=searchQuery||(activeFilter!=='all'?activeFilter:'');
    grid.innerHTML=`<div class="empty-state">
      <div class="empty-404">404</div>
      <div class="empty-icon">🔭</div>
      <div class="empty-title">No books found${q?' for "'+q+'"':''}</div>
      <div class="empty-sub">Try a different search term or browse another category.</div>
      <button class="empty-reset" onclick="resetAll()">← Back to All Books</button>
    </div>`;
    return;
  }
 
  grid.innerHTML=list.map((b,i)=>`
    <div class="book-card" style="animation-delay:${Math.min(i*0.05,0.4)}s;">
      <div class="book-cover-wrap">
        <img src="${b.img}" alt="${b.title}" loading="lazy"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
        <div class="cover-fallback" style="background:${catColors[b.cat]||'linear-gradient(135deg,#150028,#001a3a)'}">
          <div class="cover-fallback-icon">${catEmoji[b.cat]||'📚'}</div>
          <div class="cover-fallback-title">${b.title}</div>
          <div class="cover-fallback-author">${b.author}</div>
        </div>
        <div class="cover-overlay"></div>
        ${b.badge?`<div class="book-badge ${b.badge}">${b.badge==='bestseller'?'🔥 Bestseller':'✦ New'}</div>`:''}
      </div>
      <div class="book-info">
        <div class="book-cat">${b.cat.replace('-',' ')}</div>
        <div class="book-title">${b.title}</div>
        <div class="book-author">${b.author}</div>
        <div class="book-stars">${renderStars(b.rating)}</div>
        <div class="book-footer">
          <div class="book-price">
            ${b.origPrice?`<div class="price-orig">$${b.origPrice}</div>`:''}
            <div class="price-now">$${b.price}</div>
          </div>
          <div class="card-actions">
            <button class="wish-btn ${wishlist.has(b.id)?'active':''}" data-id="${b.id}" onclick="toggleWish(${b.id})">♡</button>
            <button class="cart-btn-card" data-id="${b.id}" onclick="addToCart(${b.id})">🛒</button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}
 
function resetAll(){
  searchQuery='';activeFilter='all';activeSort='default';
  document.getElementById('search-input').value='';
  document.getElementById('search-clear').classList.remove('visible');
  document.querySelectorAll('#cat-row .pill').forEach(p=>p.classList.toggle('active',p.dataset.cat==='all'));
  document.querySelectorAll('#sort-row .pill').forEach(p=>p.classList.toggle('active',p.dataset.sort==='default'));
  renderBooks();
}
 
document.querySelectorAll('#cat-row .pill').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('#cat-row .pill').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');activeFilter=btn.dataset.cat;renderBooks();
  });
});
 
document.querySelectorAll('#sort-row .pill').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('#sort-row .pill').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');activeSort=btn.dataset.sort;renderBooks();
  });
});
 
const si=document.getElementById('search-input'),sc=document.getElementById('search-clear');
si.addEventListener('input',e=>{
  searchQuery=e.target.value;
  sc.classList.toggle('visible',searchQuery.length>0);
  renderBooks();
});
sc.addEventListener('click',()=>{
  searchQuery='';si.value='';sc.classList.remove('visible');si.focus();renderBooks();
});
 
renderBooks();