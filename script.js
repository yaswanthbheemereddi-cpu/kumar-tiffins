/* ====================================================
   KUMAR TIFFIN'S — JAVASCRIPT
   Interactive 3D Animations, Particle System, etc.
   ==================================================== */

'use strict';

// ─── Utility ───
const $ = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

// ─── MENU DATA ───
const menuData = {
  tiffin: [
    { type: 'item', name: 'Sambar Idly', price: 15, thumb: 'images/real_idli.png', emoji: '🍚', desc: 'Soft idly with hot sambar & chutney' },
    { type: 'item', name: 'Idly (2 pcs)', price: 10, thumb: 'images/real_idli.png', emoji: '🍚', desc: 'Two soft steamed rice cakes' },
    { type: 'item', name: 'Bonda (2 pcs)', price: 10, thumb: 'images/real_bonda.png', emoji: '🧆', desc: 'Golden crispy potato bondas' },
    { type: 'item', name: 'Vada (1 pc)', price: 10, thumb: 'images/real_vada.png', emoji: '🧆', desc: 'Crispy medu vada with sambar' },
    { type: 'item', name: 'Puri (1 pc)', price: 15, thumb: 'images/real_puri.png', emoji: '🫓', desc: 'Fluffy deep-fried puri with curry' },
    { type: 'item', name: 'Masala Dosa', price: 25, thumb: 'images/real_dosa.png', emoji: '🫓', desc: 'Crispy dosa with spiced potato filling', badge: '<span class="mi-badge">★ Bestseller</span>', rowClass: 'bestseller-row' },
    { type: 'item', name: 'Onion Dosa', price: 20, thumb: 'images/real_dosa.png', emoji: '🫓', desc: 'Crispy dosa with caramelized onions' },
    { type: 'item', name: 'Plain Dosa', price: 15, thumb: 'images/real_dosa.png', emoji: '🫓', desc: 'Classic crispy dosa with sambar & chutney' },
    { type: 'item', name: 'Egg Dosa', price: 30, thumb: 'images/real_egg_dosa.png', emoji: '🥚', desc: 'Crispy dosa layered with fluffy egg' },
    { type: 'item', name: 'Double Egg Dosa', price: 40, thumb: 'images/real_egg_dosa.png', emoji: '🥚', desc: 'Double egg loaded dosa with spicy chutney', badge: '<span class="mi-badge special">🔥 Special</span>', rowClass: 'bestseller-row' },
    { type: 'item', name: 'Upma Pesara Attu', price: 30, emoji: '🥘', desc: 'Moong dal crepe with upma filling' },
    { type: 'item', name: 'Uthapam', price: 30, thumb: 'images/real_uthapam.png', emoji: '🫓', desc: 'Thick pancake with onions, tomatoes & chillies' },
  ],
  drinks: [
    { type: 'item', name: 'Badam Milk', price: 30, thumb: 'images/real_badammilk.png', emoji: '🥛', desc: 'Rich & creamy almond milk' },
    { type: 'item', name: 'Lassi', price: 25, thumb: 'images/real_lassi.png', emoji: '🥛', desc: 'Traditional creamy yogurt drink' },
    { type: 'label', text: '🥤 Thums Up' },
    { type: 'item', name: 'Thums Up 250ml', price: 20, thumb: 'images/real_thumsup.png', emoji: '🥤', rowClass: 'size-row' },
    { type: 'item', name: 'Thums Up 1L', price: 50, thumb: 'images/real_thumsup.png', emoji: '🥤', rowClass: 'size-row' },
    { type: 'item', name: 'Thums Up 2.5L', price: 100, thumb: 'images/real_thumsup.png', emoji: '🥤', rowClass: 'size-row' },
    { type: 'label', text: '🍊 Fanta' },
    { type: 'item', name: 'Fanta 250ml', price: 20, thumb: 'images/real_fanta.png', emoji: '🍊', rowClass: 'size-row' },
    { type: 'item', name: 'Fanta 1L', price: 50, thumb: 'images/real_fanta.png', emoji: '🍊', rowClass: 'size-row' },
    { type: 'item', name: 'Fanta 2.5L', price: 100, thumb: 'images/real_fanta.png', emoji: '🍊', rowClass: 'size-row' },
    { type: 'label', text: '🥤 Pepsi' },
    { type: 'item', name: 'Pepsi 250ml', price: 20, thumb: 'images/real_pepsi.png', emoji: '🥤', rowClass: 'size-row' },
    { type: 'item', name: 'Pepsi 1L', price: 50, thumb: 'images/real_pepsi.png', emoji: '🥤', rowClass: 'size-row' },
    { type: 'item', name: 'Pepsi 2.5L', price: 100, thumb: 'images/real_pepsi.png', emoji: '🥤', rowClass: 'size-row' },
    { type: 'label', text: '💧 Water Bottle' },
    { type: 'item', name: 'Water Bottle 500ml', price: 10, thumb: 'images/real_water.png', emoji: '💧', rowClass: 'size-row' },
    { type: 'item', name: 'Water Bottle 1L', price: 20, thumb: 'images/real_water.png', emoji: '💧', rowClass: 'size-row' },
    { type: 'item', name: 'Water Bottle 2L', price: 35, thumb: 'images/real_water.png', emoji: '💧', rowClass: 'size-row' },
    { type: 'label', text: '🍊 Pulpy Orange' },
    { type: 'item', name: 'Pulpy Orange 200ml', price: 25, thumb: 'images/real_pulpyorange.png', emoji: '🍊', rowClass: 'size-row' },
    { type: 'item', name: 'Pulpy Orange 1L', price: 50, thumb: 'images/real_pulpyorange.png', emoji: '🍊', rowClass: 'size-row' },
  ],
  snacks: [
    { type: 'item', name: 'Bajji (1 pc)', price: 5, thumb: 'images/real_bajji.png', emoji: '🌶️', desc: 'Crispy battered chilli fritter' },
    { type: 'item', name: 'Punukulu (Plate)', price: 20, thumb: 'images/real_bonda.png', emoji: '🧆', desc: 'Golden fried rice flour dumplings' },
    { type: 'item', name: 'Samosa (1 pc)', price: 10, thumb: 'images/real_samosa.png', emoji: '🔺', desc: 'Crispy pastry with spiced potato filling' },
    { type: 'item', name: 'Pani Puri', price: 20, thumb: 'images/real_panipuri.png', emoji: '🫕', desc: 'Crispy puris filled with tangy flavored water', badge: '<span class="mi-badge">★ Popular</span>', rowClass: 'bestseller-row' },
    { type: 'item', name: 'Chat', price: 20, thumb: 'images/real_panipuri.png', emoji: '🥗', desc: 'Tangy & spicy mixed chat with chutneys' },
    { type: 'item', name: 'Pakodi', price: 20, thumb: 'images/real_bajji.png', emoji: '🍘', desc: 'Crispy onion & vegetable fritters' },
    { type: 'item', name: 'Jelebi (1 pc)', price: 5, thumb: 'images/real_jalebi.png', emoji: '🍩', desc: 'Sweet crispy spiral soaked in sugar syrup' },
  ]
};

function renderMenu() {
  for (const category in menuData) {
    const panel = document.querySelector(`.menu-category-panel[data-category="${category}"] .menu-items-list`);
    if (!panel) continue;
    
    panel.innerHTML = ''; // clear existing
    
    menuData[category].forEach(item => {
      if (item.type === 'label') {
        const labelDiv = document.createElement('div');
        labelDiv.className = 'menu-item-group-label';
        labelDiv.textContent = item.text;
        panel.appendChild(labelDiv);
      } else {
        const rowDiv = document.createElement('div');
        rowDiv.className = `menu-item-row ${item.thumb ? 'has-thumb' : ''} ${item.rowClass || ''}`.trim();
        rowDiv.setAttribute('data-name', item.name);
        rowDiv.setAttribute('data-price', item.price);
        rowDiv.setAttribute('data-emoji', item.emoji || '');
        
        let visualHtml = '';
        if (item.thumb) {
          visualHtml = `<img class="mi-thumb" src="${item.thumb}" alt="${item.name}" loading="lazy" />`;
        } else if (item.emoji) {
          visualHtml = `<span class="mi-emoji">${item.emoji}</span>`;
        }
        
        const badgeHtml = item.badge ? ` ${item.badge}` : '';
        const descHtml = item.desc ? `<span class="mi-desc">${item.desc}</span>` : '';
        const nameHtml = `<span class="mi-name">${item.name}${badgeHtml}</span>`;
        
        rowDiv.innerHTML = `
          ${visualHtml}
          <div class="mi-info">${nameHtml}${descHtml}</div>
          <span class="mi-price">₹${item.price}</span>
          <button class="mi-add-btn" onclick="addItemDirect(this)">+</button>
        `;
        
        panel.appendChild(rowDiv);
      }
    });
  }
}

// ─── DOM Ready ───
document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  initCursor();
  initParticles();
  initNavbar();
  initHamburger();
  initScrollAnimations();
  initMenuFilter();
  initReviews();
  initSmoothScrollNavLinks();
  initTiltEffect();
  initCounters();
});

/* =======================================================
   CUSTOM CURSOR
======================================================= */
function initCursor() {
  const cursor = $('cursor');
  const follower = $('cursorFollower');
  if (!cursor || !follower) return;

  let fx = 0, fy = 0;
  let cx = 0, cy = 0;

  document.addEventListener('mousemove', e => {
    cx = e.clientX;
    cy = e.clientY;
    cursor.style.left = cx + 'px';
    cursor.style.top  = cy + 'px';
  });

  // Lerp follower
  function animFollower() {
    fx += (cx - fx) * 0.12;
    fy += (cy - fy) * 0.12;
    follower.style.left = fx + 'px';
    follower.style.top  = fy + 'px';
    requestAnimationFrame(animFollower);
  }
  animFollower();

  // Hover expand
  $$('a, button, .menu-card, .feature-card, .service-card, .gallery-item').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width  = '20px';
      cursor.style.height = '20px';
      follower.style.width  = '56px';
      follower.style.height = '56px';
      follower.style.borderColor = 'rgba(255,107,0,0.8)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width  = '12px';
      cursor.style.height = '12px';
      follower.style.width  = '36px';
      follower.style.height = '36px';
      follower.style.borderColor = 'rgba(255,107,0,0.5)';
    });
  });
}

/* =======================================================
   PARTICLE CANVAS
======================================================= */
function initParticles() {
  const canvas = $('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W = canvas.width  = window.innerWidth;
  let H = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  });

  const PARTICLE_COUNT = 60;
  const particles = [];

  const colors = [
    'rgba(255,107,0,',
    'rgba(255,215,0,',
    'rgba(255,61,0,',
    'rgba(255,170,0,',
  ];

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
      pulse: Math.random() * Math.PI * 2,
    });
  }

  function drawParticles() {
    ctx.clearRect(0, 0, W, H);

    particles.forEach(p => {
      p.pulse += 0.02;
      const alpha = p.alpha + Math.sin(p.pulse) * 0.1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color + Math.max(0, Math.min(1, alpha)) + ')';
      ctx.fill();

      p.x += p.dx;
      p.y += p.dy;

      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;
    });

    // Draw connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(255,107,0,${0.04 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(drawParticles);
  }

  drawParticles();
}

/* =======================================================
   NAVBAR — shrink on scroll
======================================================= */
function initNavbar() {
  const navbar = $('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/* =======================================================
   HAMBURGER MENU
======================================================= */
function initHamburger() {
  const hamburger = $('hamburger');
  const navLinks  = $('navLinks');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  // Close on nav link click
  $$('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* =======================================================
   SMOOTH SCROLL FOR NAV LINKS
======================================================= */
function initSmoothScrollNavLinks() {
  $$('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* =======================================================
   SCROLL ANIMATIONS (Intersection Observer)
======================================================= */
function initScrollAnimations() {
  const elements = Array.from($$('[data-animate]'));
  if (!elements.length) return;

  // After 2 frames (to guarantee initial paint with opacity:1),
  // set elements to hidden so they can animate in on scroll.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const el   = entry.target;
          const delay = parseInt(el.dataset.delay || 0);
          setTimeout(() => {
            el.classList.add('animated');
          }, delay);
          observer.unobserve(el);
        });
      }, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });

      elements.forEach(el => {
        const type = el.dataset.animate;
        el.classList.add('pre-anim');
        if (type === 'fade-up')  el.classList.add('fade-up');
        if (type === 'scale-in') el.classList.add('scale-in');
        observer.observe(el);
      });

      // Absolute safety net: show everything after 1.5s
      setTimeout(() => {
        elements.forEach(el => {
          if (!el.classList.contains('animated')) {
            el.classList.add('animated');
          }
        });
      }, 1500);
    });
  });
}

/* =======================================================
   MENU FILTER
======================================================= */
function initMenuFilter() {
  const filterBtns = $$('.filter-btn');
  const panels     = $$('.menu-category-panel');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      panels.forEach(panel => {
        const cat = panel.dataset.category;
        const show = filter === 'all' || cat === filter;

        panel.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
        if (show) {
          panel.style.opacity = '1';
          panel.style.transform = 'scale(1)';
          panel.style.pointerEvents = 'auto';
          panel.style.display = '';
        } else {
          panel.style.opacity = '0';
          panel.style.transform = 'scale(0.9)';
          panel.style.pointerEvents = 'none';
          setTimeout(() => {
            if (panel.style.opacity === '0') panel.style.display = 'none';
          }, 350);
        }
      });
    });
  });
}

/* =======================================================
   REVIEWS — auto-populated
======================================================= */
function initReviews() {
  const track = $('reviewsTrack');
  if (!track) return;

  const reviewsData = [
    { name: 'Ravi Kumar', date: '2 weeks ago', text: `Best dosa I've ever had! The sambar is absolutely fresh and the chutney is homemade. Amazing place, always clean and the service is very fast.`, emoji: '👨‍💼' },
    { name: 'Priya Devi', date: '1 month ago', text: 'Open 24 hours is a real blessing. Came here after late night work and the idlis were perfectly soft and hot. Will definitely return!', emoji: '👩' },
    { name: 'Suresh Reddy', date: '3 weeks ago', text: 'Super affordable prices with fantastic taste. The masala chai is the best in the area — strong and perfectly spiced. Highly recommend!', emoji: '👨' },
    { name: 'Lakshmi Rao', date: '1 week ago', text: 'The thali is absolutely filling and delicious. Rice, sambar, rasam, curries all served hot on banana leaf. Authentic Andhra taste!', emoji: '👩‍🦱' },
    { name: 'Venkat Babu', date: '5 days ago', text: 'Medu vada here is unmatched — crispy outside, fluffy inside, and the coconut chutney is heavenly. 5 stars without a doubt!', emoji: '👨‍🦳' },
    { name: 'Ananya Krishnan', date: '2 months ago', text: 'A hidden gem in Yerakannapalem! The combo breakfast is worth every rupee. Food is fresh, ambiance is warm, and staff are very kind.', emoji: '👩‍🦰' },
    { name: 'Murali Prasad', date: '3 days ago', text: 'Never disappointed even after visiting 20+ times. Consistency is their biggest strength. Dosa is always golden and crispy.', emoji: '🧔' },
    { name: 'Sita Kumari', date: '1 week ago', text: 'My family visits every Sunday. Children love the idli and I love the filter coffee. The store section is also well-stocked with essentials.', emoji: '👩‍👧' },
  ];

  // Duplicate for seamless scroll
  const allReviews = [...reviewsData, ...reviewsData];

  allReviews.forEach(r => {
    const card = document.createElement('div');
    card.className = 'review-card';
    card.innerHTML = `
      <div class="review-header">
        <div class="reviewer-avatar">${r.emoji}</div>
        <div>
          <div class="reviewer-name">${r.name}</div>
          <div class="reviewer-date">${r.date}</div>
        </div>
        <div class="review-stars" style="margin-left:auto;">⭐⭐⭐⭐⭐</div>
      </div>
      <p class="review-text">${r.text}</p>
    `;
    track.appendChild(card);
  });
}

/* =======================================================
   3D TILT EFFECT on cards
======================================================= */
function initTiltEffect() {
  const tiltElements = $$('.feature-card, .service-card, .stat-card');

  tiltElements.forEach(el => {
    el.addEventListener('mousemove', e => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotX = ((y - cy) / cy) * -8;
      const rotY = ((x - cx) / cx) * 8;

      el.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
}

/* =======================================================
   NUMBER COUNTERS for stat-cards
======================================================= */
function initCounters() {
  // Animate the star rating numbers on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateBigRating();
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });

  const bigRating = document.querySelector('.big-rating');
  if (bigRating) observer.observe(bigRating);

  function animateBigRating() {
    const target = 5.0;
    const duration = 1500;
    const startTime = performance.now();

    function update(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = (eased * target).toFixed(1);
      if (bigRating) bigRating.textContent = current;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }
}

/* =======================================================
   PARALLAX on Hero Image
======================================================= */
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Subtle hero parallax
  const heroImg = document.querySelector('.hero-img-glass');
  if (heroImg) {
    heroImg.style.transform = `translateY(${scrollY * 0.08}px)`;
  }

  // Float foods parallax
  const floatingFoods = $$('.food-item');
  floatingFoods.forEach((f, i) => {
    const speed = 0.02 + i * 0.01;
    f.style.transform = `translateY(${scrollY * speed}px)`;
  });
});

/* =======================================================
   HERO IMAGE 3D magnetic effect
======================================================= */
const heroImageWrap = document.querySelector('.hero-image-wrap');
if (heroImageWrap) {
  document.addEventListener('mousemove', e => {
    const rect = heroImageWrap.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = (e.clientX - centerX) / window.innerWidth;
    const dy = (e.clientY - centerY) / window.innerHeight;

    const glassEl = heroImageWrap.querySelector('.hero-img-glass');
    if (glassEl) {
      glassEl.style.transform = `
        perspective(1000px)
        rotateX(${dy * -6}deg)
        rotateY(${dx * 8}deg)
        translateY(${Math.sin(Date.now() / 1000) * 8}px)
      `;
    }
  });
}

/* =======================================================
   NAVBAR ACTIVE LINK HIGHLIGHT on Scroll
======================================================= */
const sections = $$('section[id]');
const navLinks  = $$('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = 'var(--primary-light)';
    }
  });
});

/* =======================================================
   NEON GLOW on Open Status
======================================================= */
setInterval(() => {
  const badge = document.querySelector('.open-badge');
  if (badge) {
    badge.style.textShadow = `0 0 ${10 + Math.random() * 10}px rgba(0,255,136,0.7)`;
  }
}, 500);

console.log(
  '%c🍽️ Kumar Tiffins & Kirana Store%c\nYerakannapalem, Andhra Pradesh | Open 24/7 | Rating: ⭐ 5.0 | 📞 9703822556',
  'color: #ff6b00; font-size: 18px; font-weight: bold;',
  'color: #b0b0a8; font-size: 12px;'
);

/* =======================================================
   FOOD ORDER / DELIVERY SYSTEM
======================================================= */

// Cart state
let cart = {}; // { itemName: { name, price, emoji, qty } }
let currentOrderType = 'pickup'; // 'pickup' | 'delivery'
const DELIVERY_CHARGE = 30;
const FREE_DELIVERY_THRESHOLD = 100;

/* ── Add / Update item in cart (old image cards) ── */
function addToCart(btn) {
  const card = btn.closest('.menu-card');
  const name  = card.dataset.name;
  const price = parseInt(card.dataset.price, 10);
  const emoji = card.dataset.emoji;

  if (cart[name]) {
    cart[name].qty += 1;
  } else {
    cart[name] = { name, price, emoji, qty: 1 };
  }

  // Button feedback
  btn.classList.add('added');
  btn.textContent = '✅ Added!';
  setTimeout(() => {
    btn.classList.remove('added');
    btn.textContent = '🛒 Add to Order';
  }, 1500);

  updateCartUI();
}

/* ── Add item from list-style menu rows ── */
function addItemDirect(btn) {
  const row   = btn.closest('.menu-item-row');
  const name  = row.dataset.name;
  const price = parseInt(row.dataset.price, 10);
  const emoji = row.dataset.emoji;

  if (cart[name]) {
    cart[name].qty += 1;
  } else {
    cart[name] = { name, price, emoji, qty: 1 };
  }

  // Button feedback
  btn.classList.add('added');
  btn.textContent = '✓';
  setTimeout(() => {
    btn.classList.remove('added');
    btn.textContent = '+';
  }, 800);

  updateCartUI();
  showToast(`✅ ${emoji} ${name} added to order!`);
}

/* ── Change qty of item ── */
function changeQty(name, delta) {
  if (!cart[name]) return;
  cart[name].qty += delta;
  if (cart[name].qty <= 0) {
    delete cart[name];
  }
  updateCartUI();
}

/* ── Remove item from cart entirely ── */
function removeFromCart(name) {
  delete cart[name];
  updateCartUI();
}

/* ── Get subtotal ── */
function getSubtotal() {
  return Object.values(cart).reduce((sum, item) => sum + item.price * item.qty, 0);
}

/* ── Get delivery fee ── */
function getDeliveryFee() {
  if (currentOrderType !== 'delivery') return 0;
  const sub = getSubtotal();
  return sub >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_CHARGE;
}

/* ── Master UI refresh ── */
function updateCartUI() {
  const items    = Object.values(cart);
  const subtotal = getSubtotal();
  const fee      = getDeliveryFee();
  const total    = subtotal + fee;
  const count    = items.reduce((s, i) => s + i.qty, 0);

  // Badge
  const badge = document.getElementById('cartBadge');
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'flex';
  }

  // ─── Cart Sidebar ───────────────────────────────────
  const list    = document.getElementById('cartItemsList');
  const empty   = document.getElementById('cartEmpty');
  const footer  = document.getElementById('cartFooter');
  const subEl   = document.getElementById('cartSubtotal');
  const delEl   = document.getElementById('cartDelivery');
  const totEl   = document.getElementById('cartTotal');

  if (list) {
    // Remove old item cards (keep empty state)
    Array.from(list.querySelectorAll('.cart-item-card')).forEach(el => el.remove());
  }

  if (items.length === 0) {
    if (empty)  empty.style.display  = 'flex';
    if (footer) footer.style.display = 'none';
  } else {
    if (empty)  empty.style.display  = 'none';
    if (footer) footer.style.display = 'flex';

    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'cart-item-card';
      card.innerHTML = `
        <div class="cart-item-emoji">${item.emoji}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">₹${item.price} × ${item.qty} = ₹${item.price * item.qty}</div>
        </div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="changeQty('${item.name}', -1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty('${item.name}', 1)">+</button>
          <button class="cart-remove-btn" onclick="removeFromCart('${item.name}')">🗑</button>
        </div>
      `;
      if (list) list.appendChild(card);
    });

    if (subEl) subEl.textContent = `₹ ${subtotal}`;
    if (delEl) delEl.textContent = fee === 0 ? 'FREE 🎉' : `₹ ${fee}`;
    if (totEl) totEl.textContent = `₹ ${total}`;
  }

  // ─── Order Section Summary ───────────────────────────
  const orderItemsEl      = document.getElementById('orderCartItems');
  const orderTotalRow     = document.getElementById('orderTotalRow');
  const orderGrandRow     = document.getElementById('orderGrandTotalRow');
  const deliveryChargeEl  = document.getElementById('deliveryCharge');
  const grandTotalEl      = document.getElementById('orderGrandTotal');

  if (orderItemsEl) {
    orderItemsEl.innerHTML = '';
    if (items.length === 0) {
      orderItemsEl.innerHTML = '<p class="empty-cart-msg">No items yet. Add items from the menu above! ↑</p>';
      if (orderTotalRow)  orderTotalRow.style.display  = 'none';
      if (orderGrandRow)  orderGrandRow.style.display  = 'none';
    } else {
      items.forEach(item => {
        const row = document.createElement('div');
        row.className = 'order-item-row';
        row.innerHTML = `
          <span class="order-item-name">${item.emoji} ${item.name}</span>
          <div class="order-item-qty-ctrl">
            <button class="qty-btn" onclick="changeQty('${item.name}', -1)">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty('${item.name}', 1)">+</button>
          </div>
          <span>₹${item.price * item.qty}</span>
        `;
        orderItemsEl.appendChild(row);
      });

      if (orderTotalRow)  orderTotalRow.style.display  = 'flex';
      if (orderGrandRow)  orderGrandRow.style.display  = 'flex';
      if (deliveryChargeEl) deliveryChargeEl.textContent = fee === 0 ? 'FREE 🎉' : `₹ ${fee}`;
      if (grandTotalEl)   grandTotalEl.textContent = `₹ ${total}`;
    }
  }
}

/* ── Toggle cart sidebar ── */
function toggleCart() {
  const sidebar  = document.getElementById('cartSidebar');
  const overlay  = document.getElementById('cartOverlay');
  const isOpen   = sidebar && sidebar.classList.contains('open');
  if (sidebar)  sidebar.classList.toggle('open',  !isOpen);
  if (overlay)  overlay.classList.toggle('open',  !isOpen);
  document.body.style.overflow = (!isOpen) ? 'hidden' : '';
}

/* ── Pickup / Delivery toggle ── */
function setOrderType(type) {
  currentOrderType = type;
  const btnPickup   = document.getElementById('btnPickup');
  const btnDelivery = document.getElementById('btnDelivery');
  const addrGroup   = document.getElementById('deliveryAddressGroup');
  const addrInput   = document.getElementById('deliveryAddress');

  if (btnPickup)   btnPickup.classList.toggle('active',   type === 'pickup');
  if (btnDelivery) btnDelivery.classList.toggle('active', type === 'delivery');

  if (addrGroup) {
    addrGroup.classList.toggle('hidden', type !== 'delivery');
  }
  // Make address field required only for delivery
  if (addrInput) addrInput.required = (type === 'delivery');

  updateCartUI(); // Recalculate fees
}



/* ── Submit Order ── */
function submitOrder(e) {
  e.preventDefault();

  const name    = document.getElementById('custName')?.value.trim();
  const phone   = document.getElementById('custPhone')?.value.trim();
  const address = document.getElementById('deliveryAddress')?.value.trim();
  const items   = Object.values(cart);

  if (items.length === 0) {
    showToast('⚠️ Please add at least one item to your order!');
    return;
  }
  if (currentOrderType === 'delivery' && !address) {
    showToast('📍 Please enter your delivery address!');
    return;
  }

  // Build WhatsApp message
  let msg = `🍽️ *New Order from Kumar Tiffins & Kirana Store!*\n\n`;
  msg += `👤 Name: ${name}\n📞 Phone: ${phone}\n`;
  msg += currentOrderType === 'delivery'
    ? `📦 Type: 🛵 Home Delivery\n📍 Address: ${address}\n`
    : `🏠 Type: Self Pickup\n`;
  msg += `\n🛒 *Order Items:*\n`;
  items.forEach(i => {
    msg += `• ${i.emoji} ${i.name} × ${i.qty} = ₹${i.price * i.qty}\n`;
  });
  const sub = getSubtotal();
  const fee = getDeliveryFee();
  msg += `\n💰 Subtotal: ₹${sub}`;
  if (fee > 0) msg += `\n🛵 Delivery: ₹${fee}`;
  msg += `\n✅ *Total: ₹${sub + fee}*`;
  msg += `\n💳 Payment: Cash on Delivery`;
  const special = document.getElementById('specialInstructions')?.value.trim();
  if (special) msg += `\n📝 Notes: ${special}`;

  // Send to WhatsApp
  const url = `https://wa.me/919703822556?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');

  // Show confirmation
  const msgEl  = document.getElementById('orderConfirmMsg');
  const noteEl = document.getElementById('orderTypeNote');

  if (msgEl) {
    msgEl.textContent = currentOrderType === 'delivery'
      ? `Your order is confirmed, ${name}! 🎉 We'll prepare and deliver to your address within 30–45 minutes.`
      : `Your order is confirmed, ${name}! 🎉 Your food will be ready for pickup at the counter.`;
  }
  if (noteEl) {
    noteEl.textContent = currentOrderType === 'delivery'
      ? `📍 Delivering to: ${address}`
      : `🏠 Ready for pickup at Kumar Tiffin's, Yerakannapalem`;
  }

  openOrderModal();
  simulateOrderTracking(currentOrderType);

  // Clear cart and form
  cart = {};
  updateCartUI();
  if (e.target) e.target.reset();
  setOrderType('pickup');
}



/* ── Open / close modal ── */
function openOrderModal() {
  const overlay = document.getElementById('orderModalOverlay');
  if (overlay) {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeOrderModal() {
  const overlay = document.getElementById('orderModalOverlay');
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
  // Reset tracking
  [1,2,3,4].forEach(i => {
    const step = document.getElementById(`trackStep${i}`);
    if (step) step.classList.remove('active', 'done');
  });
  document.querySelectorAll('.track-line').forEach(l => l.classList.remove('done'));
  const step1 = document.getElementById('trackStep1');
  if (step1) step1.classList.add('active');
}

/* ── Animated order tracking simulation ── */
function simulateOrderTracking(type) {
  // Reset all
  [1,2,3,4].forEach(i => {
    const s = document.getElementById(`trackStep${i}`);
    if (s) s.classList.remove('active', 'done');
  });
  document.querySelectorAll('.track-line').forEach(l => l.classList.remove('done'));

  const delays = type === 'pickup'
    ? [0, 1200, 2500, 4000]
    : [0, 1500, 3500, 6000];

  const lines = document.querySelectorAll('.track-line');

  delays.forEach((delay, idx) => {
    setTimeout(() => {
      const stepEl = document.getElementById(`trackStep${idx + 1}`);
      if (!stepEl) return;

      // Mark previous as done
      if (idx > 0) {
        const prev = document.getElementById(`trackStep${idx}`);
        if (prev) { prev.classList.remove('active'); prev.classList.add('done'); }
        if (lines[idx - 1]) lines[idx - 1].classList.add('done');
      }

      stepEl.classList.add('active');
    }, delay);
  });
}

/* ── Simple toast notification ── */
function showToast(message) {
  let toast = document.getElementById('__toast__');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = '__toast__';
    toast.style.cssText = `
      position:fixed; bottom:100px; right:24px; z-index:9999;
      background: linear-gradient(135deg,#ff6b00,#ff9a3c);
      color:#fff; padding:14px 22px; border-radius:50px;
      font-size:0.9rem; font-weight:600; font-family:'Outfit',sans-serif;
      box-shadow:0 8px 30px rgba(255,107,0,0.5);
      transform:translateY(20px); opacity:0;
      transition:all 0.35s cubic-bezier(0.23,1,0.32,1);
      max-width:320px; pointer-events:none;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  setTimeout(() => { toast.style.transform = 'translateY(0)'; toast.style.opacity = '1'; }, 10);
  setTimeout(() => { toast.style.transform = 'translateY(20px)'; toast.style.opacity = '0'; }, 2800);
}

// Initialize defaults
document.addEventListener('DOMContentLoaded', () => {
  setOrderType('pickup'); // default
  updateCartUI();
  initDarkMode();
  initOpenClosedStatus();
  initLightbox();
});

/* =======================================================
   DARK / LIGHT MODE TOGGLE
======================================================= */
function initDarkMode() {
  const toggle = document.getElementById('darkModeToggle');
  const icon   = document.getElementById('toggleIcon');
  if (!toggle || !icon) return;

  // Check saved preference
  const saved = localStorage.getItem('kumarTheme');
  if (saved === 'light') {
    document.body.classList.add('light-mode');
    icon.textContent = '🌙';
  } else {
    icon.textContent = '☀️';
  }

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    icon.textContent = isLight ? '🌙' : '☀️';
    localStorage.setItem('kumarTheme', isLight ? 'light' : 'dark');

    // Smooth flash animation
    toggle.style.transform = 'rotate(360deg) scale(1.2)';
    setTimeout(() => { toggle.style.transform = ''; }, 400);
  });
}

/* =======================================================
   REAL-TIME OPEN / CLOSED STATUS
======================================================= */
function initOpenClosedStatus() {
  updateOpenClosedStatus();
  // Update every 30 seconds
  setInterval(updateOpenClosedStatus, 30000);
}

function updateOpenClosedStatus() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentMin = hours * 60 + minutes;

  // Morning: 6:00 AM (360) – 11:00 AM (660)
  // Evening: 5:00 PM (1020) – 10:00 PM (1320)
  const morningStart = 6 * 60;   // 360
  const morningEnd   = 11 * 60;  // 660
  const eveningStart = 17 * 60;  // 1020
  const eveningEnd   = 22 * 60;  // 1320

  const isMorning = currentMin >= morningStart && currentMin < morningEnd;
  const isEvening = currentMin >= eveningStart && currentMin < eveningEnd;
  const isOpen = isMorning || isEvening;

  // Update live status card
  const card     = document.getElementById('liveStatusCard');
  const dotEl    = document.getElementById('statusDot');
  const textEl   = document.getElementById('statusText');
  const nextEl   = document.getElementById('nextSession');

  if (card) {
    card.classList.remove('is-open', 'is-closed');
    card.classList.add(isOpen ? 'is-open' : 'is-closed');
  }

  if (textEl) {
    if (isMorning) {
      textEl.textContent = '🟢 We\'re Open — Morning Session';
    } else if (isEvening) {
      textEl.textContent = '🟢 We\'re Open — Evening Session';
    } else {
      textEl.textContent = '🔴 Currently Closed';
    }
  }

  if (nextEl) {
    if (isMorning) {
      const remaining = morningEnd - currentMin;
      nextEl.textContent = `⏱️ Closes in ${formatMinutes(remaining)}`;
    } else if (isEvening) {
      const remaining = eveningEnd - currentMin;
      nextEl.textContent = `⏱️ Closes in ${formatMinutes(remaining)}`;
    } else if (currentMin < morningStart) {
      const until = morningStart - currentMin;
      nextEl.textContent = `🌅 Morning opens in ${formatMinutes(until)}`;
    } else if (currentMin >= morningEnd && currentMin < eveningStart) {
      const until = eveningStart - currentMin;
      nextEl.textContent = `🌆 Evening opens in ${formatMinutes(until)}`;
    } else {
      nextEl.textContent = `🌅 Opens tomorrow at 6:00 AM`;
    }
  }

  // Highlight active session card
  const morningCard = document.getElementById('morningCard');
  const eveningCard = document.getElementById('eveningCard');
  if (morningCard) morningCard.classList.toggle('active-session', isMorning);
  if (eveningCard) eveningCard.classList.toggle('active-session', isEvening);

  // Update hero badge
  const heroBadge = document.getElementById('heroBadgeText');
  const heroDot   = document.getElementById('heroBadgeDot');
  if (heroBadge) {
    heroBadge.textContent = isOpen ? 'Open Now' : 'Closed Now';
  }
  if (heroDot) {
    heroDot.style.background = isOpen ? '#00ff88' : '#ff3d00';
    heroDot.style.boxShadow = isOpen
      ? '0 0 10px #00ff88'
      : '0 0 10px #ff3d00';
  }
}

function formatMinutes(mins) {
  if (mins < 60) return `${mins} min`;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return m > 0 ? `${h}h ${m}m` : `${h}h`;
}

/* =======================================================
   GALLERY LIGHTBOX
======================================================= */
let lightboxImages = [];
let lightboxIndex  = 0;

function initLightbox() {
  const items = document.querySelectorAll('.gallery-item');
  items.forEach((item, idx) => {
    item.addEventListener('click', () => {
      openLightbox(idx);
    });
  });

  // Build lightbox images array
  items.forEach(item => {
    const img     = item.querySelector('img');
    const overlay = item.querySelector('.gallery-overlay span');
    lightboxImages.push({
      src: img ? img.src : '',
      alt: img ? img.alt : '',
      caption: overlay ? overlay.textContent : ''
    });
  });

  // Keyboard navigation
  document.addEventListener('keydown', e => {
    const overlay = document.getElementById('lightboxOverlay');
    if (!overlay || !overlay.classList.contains('open')) return;

    if (e.key === 'Escape') closeLightbox(e);
    if (e.key === 'ArrowLeft')  navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });
}

function openLightbox(index) {
  lightboxIndex = index;
  const overlay   = document.getElementById('lightboxOverlay');
  const img       = document.getElementById('lightboxImg');
  const caption   = document.getElementById('lightboxCaption');
  const counter   = document.getElementById('lightboxCounter');

  if (!overlay || !lightboxImages[index]) return;

  img.src = lightboxImages[index].src;
  img.alt = lightboxImages[index].alt;
  if (caption) caption.textContent = lightboxImages[index].caption;
  if (counter) counter.textContent = `${index + 1} / ${lightboxImages.length}`;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(e) {
  if (e) e.stopPropagation();
  const overlay = document.getElementById('lightboxOverlay');
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function navigateLightbox(dir) {
  lightboxIndex += dir;
  if (lightboxIndex < 0) lightboxIndex = lightboxImages.length - 1;
  if (lightboxIndex >= lightboxImages.length) lightboxIndex = 0;

  const img     = document.getElementById('lightboxImg');
  const caption = document.getElementById('lightboxCaption');
  const counter = document.getElementById('lightboxCounter');

  if (img) {
    img.style.opacity = '0';
    img.style.transform = 'scale(0.9)';
    setTimeout(() => {
      img.src = lightboxImages[lightboxIndex].src;
      img.alt = lightboxImages[lightboxIndex].alt;
      img.style.opacity = '1';
      img.style.transform = 'scale(1)';
    }, 150);
  }
  if (caption) caption.textContent = lightboxImages[lightboxIndex].caption;
  if (counter) counter.textContent = `${lightboxIndex + 1} / ${lightboxImages.length}`;
}

/* =======================================================
   FEEDBACK FORM
======================================================= */
function submitFeedback() {
  const satisfied = document.querySelector('input[name="satisfaction"]:checked').value;
  const text = document.getElementById('feedbackText').value.trim();

  let msg = `📝 *New Customer Feedback*\n\n`;
  msg += `Satisfaction: ${satisfied === 'Satisfied' ? '😊 Satisfied' : '😞 Not Satisfied'}\n`;
  if (text) {
    msg += `Message: "${text}"\n`;
  }
  
  // Send to the shop's WhatsApp
  const url = `https://wa.me/919703822556?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
  
  // Clear the text box
  document.getElementById('feedbackText').value = '';
  
  // Alert confirmation
  alert('Thank you for your feedback! It will be sent to the owner.');
}

// ==========================================
// MOBILE MENU TOGGLE
// ==========================================
const hamburger = document.getElementById('hamburger');
const navLinksContainer = document.getElementById('navLinks');

if (hamburger && navLinksContainer) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinksContainer.classList.toggle('active');
  });

  // Close menu when a link is clicked
  const navLinksItems = navLinksContainer.querySelectorAll('.nav-link');
  navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinksContainer.classList.remove('active');
    });
  });
}
