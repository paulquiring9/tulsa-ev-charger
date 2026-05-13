// FAQ accordion
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// Mobile nav toggle
const toggle = document.querySelector('.nav__toggle');
const links  = document.querySelector('.nav__links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.style.display === 'flex';
    links.style.display = open ? 'none' : 'flex';
    links.style.flexDirection = 'column';
    links.style.position = 'absolute';
    links.style.top = '64px';
    links.style.left = '0';
    links.style.right = '0';
    links.style.background = '#0f1f38';
    links.style.padding = '1rem 1.5rem 1.5rem';
    links.style.gap = '1rem';
    links.style.zIndex = '99';
  });
}

// Form submission (replace with real handler / webhook)
const form = document.getElementById('lead-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending…';
    btn.disabled = true;
    setTimeout(() => {
      form.innerHTML = `
        <div style="text-align:center;padding:2rem 0">
          <div style="font-size:2.5rem;margin-bottom:1rem">✅</div>
          <h3 style="font-family:'DM Serif Display',serif;color:#0f1f38;margin-bottom:0.5rem">Got it — thank you!</h3>
          <p style="color:#4b5563;font-size:0.95rem">A licensed Tulsa installer will reach out within one business day.</p>
        </div>`;
    }, 800);
  });
}
