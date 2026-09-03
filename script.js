/**
 * Gaurav Gautam Portfolio - Static Vanilla JavaScript
 */

const PROJECTS_DATA = {
  'portfolio-website': {
    id: 'portfolio-website',
    name: 'Portfolio Website',
    category: 'Web Development',
    subtitle: 'Personal Identity & Showcase',
    description: 'A modern, responsive personal website developed to present projects, technical competencies, and contact gateways with high visual fidelity and mobile optimization.',
    technologies: ['HTML', 'CSS', 'JS'],
    liveUrl: 'https://www.ggaurav.com.np',
    highlights: [
      'Responsive design adapting flawlessly across mobile, tablet, and desktop screens',
      'Optimized asset delivery and clean, semantic markup for high SEO performance',
      'Interactive animations, dynamic typography, and intuitive navigation flow',
    ],
    accentGradient: 'from-cyan-500 via-blue-400 to-transparent',
    badgeStyle: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
    tagStyle: 'bg-cyan-500/5 text-cyan-200/90 border-cyan-500/15',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-cyan-400"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>`,
  },
  'elearning-platform': {
    id: 'elearning-platform',
    name: 'E-learning Platform',
    category: 'Web Application',
    subtitle: 'Interactive Education Portal',
    description: 'An educational web platform built to facilitate distance learning, course browsing, student enrollments, and organized lesson resource access.',
    technologies: ['HTML', 'CSS/JS', 'PHP'],
    liveUrl: 'https://www.topperdaju.com',
    highlights: [
      'Course catalog with categorized learning tracks and topic modules',
      'User authentication for students and educators with access control',
      'Dynamic PHP backend handling registration, lesson views, and downloads',
    ],
    accentGradient: 'from-amber-500 via-orange-400 to-transparent',
    badgeStyle: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    tagStyle: 'bg-amber-500/5 text-amber-200/90 border-amber-500/15',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-amber-400"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>`,
  },
  'travelling-site': {
    id: 'travelling-site',
    name: 'Travelling Site',
    category: 'Database / Web App',
    subtitle: 'Destination & Tourism Hub',
    description: 'A dynamic travel and tourism portal highlighting breathtaking holiday destinations, travel itineraries, adventure packages, and inquiry booking management.',
    technologies: ['JS/CSS', 'PHP', 'MySQL'],
    liveUrl: 'https://www.prashannakuikel.com.np',
    highlights: [
      'Interactive destination showcase featuring rich image galleries and route guides',
      'Relational MySQL database storing destinations, user inquiries, and package details',
      'Direct inquiry submission form with backend validation and email notification',
    ],
    accentGradient: 'from-teal-500 via-emerald-400 to-transparent',
    badgeStyle: 'bg-teal-500/15 text-teal-300 border-teal-500/30',
    tagStyle: 'bg-teal-500/5 text-teal-200/90 border-teal-500/15',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-teal-400"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/></svg>`,
  },
  'surprise-site': {
    id: 'surprise-site',
    name: 'Surprise Site',
    category: 'Interactive Web App',
    subtitle: 'Personalized Interactive Surprise Portal',
    description: 'An interactive web application enabling users to craft custom surprise links with heartfelt messages, memorable photos, background music, and an engaging animated reveal.',
    technologies: ['HTML5', 'CSS3/JS', 'Web Audio', 'Vercel'],
    liveUrl: 'https://pyari-surprise.vercel.app/',
    highlights: [
      'Personalized surprise link creation with custom recipient notes, photos, and music',
      'Interactive gift-box reveal flow with particle celebrations and sound effects',
      'Instant link and QR code generation for effortless sharing on mobile or desktop',
    ],
    accentGradient: 'from-purple-500 via-pink-400 to-transparent',
    badgeStyle: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
    tagStyle: 'bg-purple-500/5 text-purple-200/90 border-purple-500/15',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-400"><polyline points="20 12 20 22 4 22 4 12"/><rect width="20" height="5" x="2" y="7" rx="1"/><line x1="12" x2="12" y1="22" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>`,
  },
};

document.addEventListener('DOMContentLoaded', () => {
  initImageFallbacks();
  initNavigation();
  initScrollToTop();
  initNepalTime();
  initProjectModals();
  initEmailCopy();
  initContactForm();
});

function initNepalTime() {
  const timeElement = document.getElementById('nepal-time');
  if (!timeElement) return;

  const formatter = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kathmandu',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  const updateTime = () => {
    const now = new Date();
    timeElement.textContent = `${formatter.format(now)} NPT`;
    timeElement.dateTime = now.toISOString();
  };

  updateTime();
  window.setInterval(updateTime, 1000);
}

function initScrollToTop() {
  const scrollButton = document.getElementById('scroll-to-top');
  if (!scrollButton) return;

  const updateVisibility = () => {
    scrollButton.classList.toggle('is-visible', window.scrollY > 120);
  };

  window.addEventListener('scroll', updateVisibility, { passive: true });
  updateVisibility();

  scrollButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initImageFallbacks() {
  document.querySelectorAll('img[data-fallback]').forEach((img) => {
    img.addEventListener('error', () => {
      const fallback = img.getAttribute('data-fallback');
      if (fallback && img.src !== fallback) {
        img.src = fallback;
      }
    });
  });
}

function initNavigation() {
  const navPill = document.getElementById('cinematic-nav-pill');
  const mobileToggle = document.getElementById('nav-mobile-toggle');
  const mobileDrawer = document.getElementById('nav-mobile-drawer');
  const navLinks = document.querySelectorAll('[data-nav-target]');
  const sectionIds = ['hero', 'about', 'skills', 'projects', 'contact'];

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-nav-target');
      if (!targetId) return;

      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }

      if (mobileDrawer && !mobileDrawer.classList.contains('hidden')) {
        closeMobileMenu();
      }
    });
  });

  window.addEventListener(
    'scroll',
    () => {
      const scrollY = window.scrollY;

      if (navPill) {
        if (scrollY > 20) {
          navPill.className =
            'pointer-events-auto flex items-center justify-between gap-3 px-3.5 py-2 sm:py-2.5 rounded-full transition-all duration-300 border bg-[#090d18]/85 backdrop-blur-2xl border-white/15 shadow-2xl shadow-black/80';
        } else {
          navPill.className =
            'pointer-events-auto flex items-center justify-between gap-3 px-3.5 py-2 sm:py-2.5 rounded-full transition-all duration-300 border bg-[#090d18]/60 backdrop-blur-xl border-white/10 shadow-lg shadow-black/40';
        }
      }

      let currentSection = 'hero';
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && scrollY >= el.offsetTop - 190) {
          currentSection = sectionIds[i];
          break;
        }
      }

      updateActiveNav(currentSection);
    },
    { passive: true }
  );

  function updateActiveNav(activeId) {
    document.querySelectorAll('.desktop-nav-link').forEach((btn) => {
      const id = btn.getAttribute('data-nav-target');
      const isActive = id === activeId;
      const highlightSpan = btn.querySelector('.active-indicator');

      if (isActive) {
        btn.classList.add('text-white', 'font-semibold');
        btn.classList.remove('text-slate-400');
        if (highlightSpan) highlightSpan.classList.remove('hidden');
      } else {
        btn.classList.remove('text-white', 'font-semibold');
        btn.classList.add('text-slate-400');
        if (highlightSpan) highlightSpan.classList.add('hidden');
      }
    });

    document.querySelectorAll('.mobile-nav-link').forEach((btn) => {
      const id = btn.getAttribute('data-nav-target');
      const isActive = id === activeId;
      const activeDot = btn.querySelector('.mobile-active-dot');

      if (isActive) {
        btn.className =
          'mobile-nav-link relative z-10 flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all text-left bg-gradient-to-r from-teal-500/15 via-teal-500/10 to-transparent text-teal-300 border border-teal-500/30 shadow-sm shadow-teal-500/10';
        if (activeDot) activeDot.classList.remove('hidden');
      } else {
        btn.className =
          'mobile-nav-link relative z-10 flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all text-left text-slate-300 hover:bg-white/5 hover:text-white';
        if (activeDot) activeDot.classList.add('hidden');
      }
    });
  }

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      if (mobileDrawer.classList.contains('hidden')) {
        openMobileMenu();
      } else {
        closeMobileMenu();
      }
    });

    document.addEventListener('click', (e) => {
      if (!mobileDrawer.contains(e.target) && !mobileToggle.contains(e.target)) {
        closeMobileMenu();
      }
    });
  }

  function openMobileMenu() {
    if (!mobileDrawer || !mobileToggle) return;
    mobileDrawer.classList.remove('hidden');
    mobileToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;
  }

  function closeMobileMenu() {
    if (!mobileDrawer || !mobileToggle) return;
    mobileDrawer.classList.add('hidden');
    mobileToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`;
  }
}

function initProjectModals() {
  const modal = document.getElementById('project-modal');
  const modalBox = document.getElementById('project-modal-box');
  const closeBtn = document.getElementById('modal-close-btn');

  document.querySelectorAll('[data-open-project]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-open-project');
      if (!projectId || !PROJECTS_DATA[projectId]) return;
      openProjectModal(PROJECTS_DATA[projectId]);
    });
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', closeProjectModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeProjectModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeProjectModal();
    }
  });

  function openProjectModal(project) {
    if (!modal || !modalBox) return;

    const accentLine = document.getElementById('modal-accent-line');
    const iconContainer = document.getElementById('modal-icon-container');
    const badge = document.getElementById('modal-category-badge');
    const title = document.getElementById('modal-title');
    const desc = document.getElementById('modal-description');
    const highlightsList = document.getElementById('modal-highlights');
    const techList = document.getElementById('modal-technologies');
    const liveLink = document.getElementById('modal-live-link');
    const domainText = document.getElementById('modal-live-domain');

    if (accentLine) accentLine.className = `absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.accentGradient} opacity-90`;
    if (iconContainer) iconContainer.innerHTML = project.iconSvg;
    if (badge) {
      badge.textContent = project.category;
      badge.className = `text-[10px] sm:text-xs font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border ${project.badgeStyle} inline-block mb-1`;
    }
    if (title) title.textContent = project.name;
    if (desc) desc.textContent = project.description;

    if (highlightsList) {
      highlightsList.innerHTML = project.highlights
        .map((h) => `
          <li class="flex items-start gap-2 text-xs text-slate-300 font-normal">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-teal-400 shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            <span>${h}</span>
          </li>
        `).join('');
    }

    if (techList) {
      techList.innerHTML = project.technologies
        .map((tech) => `
          <span class="px-2.5 py-1 rounded-lg sm:rounded-xl border ${project.tagStyle} text-[11px] sm:text-xs font-mono">
            ${tech}
          </span>
        `).join('');
    }

    if (liveLink && domainText) {
      liveLink.href = project.liveUrl;
      domainText.textContent = project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '');
    }

    modal.classList.remove('hidden');
    modalBox.classList.add('modal-enter');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (!modal) return;
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

function initEmailCopy() {
  const copyBtn = document.getElementById('copy-email-btn');
  if (!copyBtn) return;

  const email = 'gauravz.me0@gmail.com';
  let timeoutId;

  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(email);
      copyBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-400"><path d="M20 6 9 17l-5-5"/></svg>
        <span class="text-emerald-400 font-medium">Copied!</span>
      `;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        copyBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
          <span>Copy</span>
        `;
      }, 2200);
    } catch {
      window.prompt('Copy email address:', email);
    }
  });
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const submitBtn = document.getElementById('contact-submit-btn');
  const errorContainer = document.getElementById('contact-error-container');
  const errorMessage = document.getElementById('contact-error-message');
  const successContainer = document.getElementById('contact-success-container');
  const mailtoFallback = document.getElementById('contact-mailto-fallback');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const messageInput = document.getElementById('contact-message');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !email || !message) {
      showError('Please fill in all required fields.');
      return;
    }

    hideError();

    const formspreeId = window.FORMSPREE_ID || localStorage.getItem('user_formspree_id') || '';

    if (!formspreeId) {
      window.location.href = `mailto:gauravz.me0@gmail.com?subject=${encodeURIComponent(`Portfolio Inquiry from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      return;
    }

    if (submitBtn) {
      submitBtn.setAttribute('disabled', 'true');
      submitBtn.innerHTML = `<span>Sending Message...</span>`;
    }

    try {
      const endpoint = formspreeId.startsWith('http') ? formspreeId : `https://formspree.io/f/${formspreeId}`;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, _replyto: email, _subject: `New Portfolio Message from ${name} (${email})` }),
      });

      if (response.ok) {
        form.classList.add('hidden');
        if (successContainer) successContainer.classList.remove('hidden');
        form.reset();
      } else {
        const data = await response.json().catch(() => null);
        const errMsg = data?.errors?.map((err) => err.message).join(', ') || data?.error || 'Formspree submission failed. You can send directly via email.';
        showError(errMsg, name, email, message);
      }
    } catch {
      showError('Network error. You can email gauravz.me0@gmail.com directly.', name, email, message);
    } finally {
      if (submitBtn) {
        submitBtn.removeAttribute('disabled');
        submitBtn.innerHTML = `
          <span>Send Message</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
        `;
      }
    }
  });

  function showError(msg, name = '', email = '', message = '') {
    if (errorMessage) errorMessage.textContent = msg;
    if (mailtoFallback) {
      mailtoFallback.href = `mailto:gauravz.me0@gmail.com?subject=${encodeURIComponent(`Inquiry from ${name || 'Portfolio Visitor'}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    }
    if (errorContainer) errorContainer.classList.remove('hidden');
  }

  function hideError() {
    if (errorContainer) errorContainer.classList.add('hidden');
  }
}
