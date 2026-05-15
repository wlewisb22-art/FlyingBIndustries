/* ============================================================
   FLYING B INDUSTRIES — SHARED CLIENT-SIDE SCRIPTS
   Used on every page.
   ============================================================ */

/* Set the current year in the footer */
document.addEventListener('DOMContentLoaded', function() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

/* Safe Google Analytics 4 wrapper — fires the event only if gtag is loaded */
function track(eventName, params) {
  try {
    if (typeof gtag === 'function') {
      gtag('event', eventName, params || {});
    }
  } catch (e) {
    console.error('Analytics error:', e);
  }
}

/* ============================================================
   COPY-TO-CLIPBOARD (for email template fallback)
   Looks for elements with class "email-template" and a copy button.
   Pass the textarea/pre element id to the copy button via data-target.
   ============================================================ */
function copyTemplate(btn) {
  const targetId = btn.getAttribute('data-target') || 'email-template';
  const sourceEl = document.getElementById(targetId);
  if (!sourceEl) return;

  const text = sourceEl.textContent;
  const resetBtn = () => setTimeout(() => {
    btn.textContent = 'Copy Template to Clipboard';
    btn.classList.remove('copied');
  }, 2000);

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      btn.textContent = '\u2713 Copied!';
      btn.classList.add('copied');
      resetBtn();
      track('template_copy', {
        event_category: 'lead',
        page: document.body.dataset.page || 'unknown'
      });
    }).catch(() => fallbackCopy(btn, sourceEl, resetBtn));
  } else {
    fallbackCopy(btn, sourceEl, resetBtn);
  }
}

function fallbackCopy(btn, sourceEl, resetBtn) {
  const range = document.createRange();
  range.selectNode(sourceEl);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  try {
    document.execCommand('copy');
    btn.textContent = '\u2713 Copied!';
    btn.classList.add('copied');
    resetBtn();
    track('template_copy', {
      event_category: 'lead',
      page: document.body.dataset.page || 'unknown'
    });
  } catch (e) {
    alert('Could not copy automatically. Please select and copy the template text manually.');
  }
  selection.removeAllRanges();
}

/* ============================================================
   QUOTE REQUEST CLICK TRACKING
   Fires whenever any mailto: link to orders@flyingbindustries.com
   is clicked. Categorizes by location on the page.
   ============================================================ */
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="mailto:orders@flyingbindustries.com"]').forEach(function(link) {
    link.addEventListener('click', function() {
      let location = 'other';
      if (link.classList.contains('btn-primary'))         location = 'cta_button';
      else if (link.id === 'qr-tell-link')                location = 'qr_banner';
      else if (link.classList.contains('email-display'))  location = 'cta_email_text';
      else if (link.closest('footer'))                    location = 'footer';
      else if (link.closest('.privacy-body'))             location = 'privacy_section';
      else if (link.closest('.service-card'))             location = 'service_card';

      track('quote_request_click', {
        event_category: 'lead',
        event_label: location,
        page: document.body.dataset.page || 'unknown',
        is_qr_visitor: document.body.classList.contains('qr-visitor')
      });
    });
  });

  /* FAQ engagement tracking */
  document.querySelectorAll('#faq details, .faq-list details').forEach(function(d) {
    d.addEventListener('toggle', function() {
      if (!d.open) return;
      const summary = d.querySelector('summary');
      const question = summary ? summary.textContent.trim() : 'unknown';
      track('faq_open', {
        event_category: 'engagement',
        event_label: question,
        page: document.body.dataset.page || 'unknown'
      });
    });
  });

  /* Service card click tracking (homepage) */
  document.querySelectorAll('.service-card').forEach(function(card) {
    card.addEventListener('click', function() {
      const service = card.dataset.service || 'unknown';
      track('service_card_click', {
        event_category: 'navigation',
        event_label: service
      });
    });
  });
});
