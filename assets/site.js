(function () {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const menuButton = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('.nav-menu');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  document.querySelectorAll('.dropdown-toggle').forEach((toggle) => {
    toggle.addEventListener('click', (event) => {
      if (window.matchMedia('(max-width: 940px)').matches) {
        event.preventDefault();
        toggle.closest('.dropdown').classList.toggle('open');
      }
    });
  });

  const params = new URLSearchParams(window.location.search);
  const qr = params.get('qr');
  if (qr) {
    document.body.classList.add('qr-visitor');
    const tellLink = document.getElementById('qr-tell-link');
    const itemId = (qr === '1' || qr.toLowerCase() === 'true') ? '' : qr;
    if (tellLink) {
      const subject = encodeURIComponent('I scanned a Flying B custom item');
      const body = encodeURIComponent(`Hi Flying B,\n\nI scanned one of your custom items.\n\nQR / item ID: ${itemId || 'generic'}\nWhere I found it or saw it:\n\nMy name:\n\nThanks!`);
      tellLink.href = `mailto:orders@flyingbindustries.com?subject=${subject}&body=${body}`;
    }
    try {
      params.delete('qr');
      const cleanQuery = params.toString();
      const cleanUrl = window.location.pathname + (cleanQuery ? '?' + cleanQuery : '') + window.location.hash;
      window.history.replaceState(null, '', cleanUrl);
    } catch (e) {}
    if (typeof gtag === 'function') {
      try { gtag('event', 'qr_visit', { event_category: 'qr', event_label: itemId || 'generic' }); } catch (e) {}
    }
  }
})();

function dismissQrBanner() {
  document.body.classList.remove('qr-visitor');
}

function buildQuoteEmail(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const lines = [
    'Hi Flying B Industries,',
    '',
    "I'd like a quote for a custom project.",
    '',
    '===== PROJECT =====',
    `Project type: ${data.get('projectType') || ''}`,
    `Item/material: ${data.get('item') || ''}`,
    `Quantity: ${data.get('quantity') || ''}`,
    `Approx. size / print area: ${data.get('size') || ''}`,
    `Indoor or outdoor use: ${data.get('environment') || ''}`,
    `Needed by: ${data.get('deadline') || ''}`,
    '',
    '===== ARTWORK / DESIGN =====',
    `Artwork status: ${data.get('artwork') || ''}`,
    `Colors / finish preferences: ${data.get('finish') || ''}`,
    '',
    '===== CONTACT / SHIPPING =====',
    `Name: ${data.get('name') || ''}`,
    `Phone: ${data.get('phone') || ''}`,
    `Shipping address or city/state: ${data.get('shipping') || ''}`,
    '',
    '===== NOTES =====',
    `${data.get('notes') || ''}`,
    '',
    'Please attach any logo, photo, screenshot, sketch, or reference image before sending.',
    'Thanks!'
  ];
  const subject = encodeURIComponent(`Custom Project Quote Request - ${data.get('projectType') || 'Flying B'}`);
  const body = encodeURIComponent(lines.join('\n'));
  window.location.href = `mailto:orders@flyingbindustries.com?subject=${subject}&body=${body}`;
}

function copyQuoteTemplate(button) {
  const template = document.getElementById('quote-template');
  if (!template) return;
  navigator.clipboard.writeText(template.innerText).then(() => {
    const old = button.textContent;
    button.textContent = 'Copied';
    setTimeout(() => button.textContent = old, 1600);
  }).catch(() => {
    alert('Copy failed. You can manually highlight and copy the template.');
  });
}
