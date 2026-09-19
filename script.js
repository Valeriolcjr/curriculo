'use strict';

const courses = [
  {
    title: 'Go Bootcamp: gRPC & Protocol Buffers',
    provider: 'Udemy · Ashish Sharma',
    category: 'backend',
    label: 'Backend & Go',
    description: 'Formação extensa em Go, da base a recursos avançados, com concorrência, APIs REST e gRPC, Protocol Buffers, HTTP/2, TLS, bancos SQL/NoSQL e benchmarking.',
    skills: [
      'Golang',
      'Goroutines',
      'Channels',
      'gRPC',
      'Protocol Buffers',
      'REST',
      'HTTP/2',
      'Benchmarking'
    ]
  },
  {
    title: 'Terraform on AWS EKS Kubernetes IaC/SRE',
    provider: 'Udemy · Kalyan Reddy',
    category: 'cloud',
    label: 'Cloud & DevOps',
    description: 'Infraestrutura como código para ambientes AWS EKS, incluindo VPC, IAM, armazenamento, ingress, load balancers, Fargate, autoscaling, logging e monitoramento.',
    skills: [
      'Terraform',
      'AWS EKS',
      'Kubernetes',
      'VPC',
      'IAM',
      'Helm',
      'Fargate',
      'Autoscaling'
    ]
  },
  {
    title: 'AWS EKS Kubernetes Masterclass',
    provider: 'Udemy · Kalyan Reddy',
    category: 'cloud',
    label: 'Cloud & DevOps',
    description: 'Operação de workloads e microsserviços em EKS com storage, ingress, ECR, Fargate, CodePipeline, service discovery, tracing, canary deployment e observabilidade.',
    skills: [
      'AWS EKS',
      'Kubernetes',
      'ECR',
      'Fargate',
      'X-Ray',
      'CloudWatch',
      'Microservices',
      'CI/CD'
    ]
  },
  {
    title: 'DevSecOps: Kubernetes DevOps & Security',
    provider: 'Udemy · Siddharth Barahalikar',
    category: 'devsecops',
    label: 'DevSecOps',
    description: 'Integração de segurança ao SDLC e pipelines Jenkins, com SAST, DAST, testes, Vault, análise de imagens e recursos Kubernetes, Falco, Prometheus e Grafana.',
    skills: [
      'Shift Left',
      'SAST',
      'DAST',
      'Jenkins',
      'Vault',
      'Trivy',
      'Falco',
      'Kubernetes'
    ]
  },
  {
    title: 'DevSecOps com projetos e pipelines seguros',
    provider: 'Udemy · DevOps Door',
    category: 'devsecops',
    label: 'DevSecOps',
    description: 'Projetos práticos de segurança no ciclo DevOps, automação de controles, análise de dependências e infraestrutura, policy as code e proteção cloud-native.',
    skills: [
      'Secure CI/CD',
      'Snyk',
      'Trivy',
      'Kyverno',
      'Cosign',
      'Policy as Code',
      'Kubernetes',
      'Compliance'
    ]
  },
  {
    title: 'Engenharia Reversa de Modelos de IA',
    provider: 'Red Team Leaders',
    category: 'ai',
    label: 'Segurança em IA',
    description: 'Auditoria de modelos por análise de arquitetura, dados de treinamento, privacidade, comportamento adversarial, interpretabilidade e engenharia reversa multimodal.',
    skills: [
      'Model Auditing',
      'Adversarial AI',
      'Privacy',
      'Transformers',
      'Model Extraction',
      'Interpretability',
      'PII',
      'Responsible Disclosure'
    ]
  },
  {
    title: 'Certified LLM Security Professional — CLLMSP',
    provider: 'Red Team Leaders',
    category: 'ai',
    label: 'Segurança em IA',
    description: 'Segurança de aplicações baseadas em LLM, cobrindo OWASP LLM Top 10, jailbreaks, RAG, agentes, MCP, governança, privacidade e resposta a incidentes de IA.',
    skills: [
      'LLM Security',
      'Prompt Injection',
      'MCP Security',
      'RAG',
      'AI Agents',
      'NIST AI RMF',
      'ISO 42001',
      'OWASP LLM'
    ]
  },
  {
    title: 'Digital Forensics & Incident Investigation',
    provider: 'Red Team Leaders',
    category: 'defensive',
    label: 'Blue Team & DFIR',
    description: 'Aquisição, preservação e análise de evidências em Windows, Linux, memória, rede e nuvem, com cadeia de custódia, timelines, MITRE ATT&CK e relatórios.',
    skills: [
      'DFIR',
      'Incident Response',
      'Memory Forensics',
      'Disk Forensics',
      'MITRE ATT&CK',
      'Chain of Custody',
      'Cloud Forensics'
    ]
  },
  {
    title: 'OpSec & Anonymity for Red Teams',
    provider: 'Red Team Leaders',
    category: 'offensive',
    label: 'Red Team',
    description: 'Segurança operacional para simulações ofensivas, com isolamento de personas, infraestrutura C2, redução de atribuição, anti-forense e higiene de metadados.',
    skills: [
      'OpSec',
      'C2 Infrastructure',
      'Anti-Attribution',
      'Redirectors',
      'Network Obfuscation',
      'Anti-Forensics',
      'Threat Modeling'
    ]
  },
  {
    title: 'Windows API for Red Team Introduction',
    provider: 'Red Team Leaders',
    category: 'offensive',
    label: 'Red Team',
    description: 'Programação Windows em C++ e APIs nativas, processos, memória, syscalls, enumeração, resolução dinâmica e fundamentos de desenvolvimento ofensivo.',
    skills: [
      'Windows API',
      'C++',
      'Windows Internals',
      'Syscalls',
      'Memory',
      'API Hashing',
      'Hook Detection',
      'Offensive Development'
    ]
  },
  {
    title: 'AWS para Blue & Red Team',
    provider: 'Udemy · Diego Fukayama',
    category: 'offensive',
    label: 'Cloud Security',
    description: 'Auditoria ofensiva e defesa de ambientes AWS, exploração de configurações, escalada de privilégios, monitoramento e detecção com serviços nativos.',
    skills: [
      'AWS Security',
      'Cloud Pentest',
      'Privilege Escalation',
      'GuardDuty',
      'AWS Config',
      'Macie',
      'Blue Team'
    ]
  },
  {
    title: 'Wazuh: SIEM & XDR do básico ao avançado',
    provider: 'Udemy · Vitor Mazuco',
    category: 'defensive',
    label: 'Blue Team',
    description: 'Implantação e operação do Wazuh para análise de logs, detecção, vulnerabilidades, threat hunting, resposta automatizada e monitoramento cloud.',
    skills: [
      'Wazuh',
      'SIEM',
      'XDR',
      'Threat Hunting',
      'Sysmon',
      'Suricata',
      'MITRE ATT&CK',
      'Incident Response'
    ]
  },
  {
    title: 'AI for Cybersecurity with ChatGPT',
    provider: 'Udemy · Pavel Hrabec',
    category: 'ai',
    label: 'Segurança em IA',
    description: 'Automação de defesa com IA, integração de ChatGPT a SIEM, Sentinel e Logic Apps, enriquecimento de ameaças e análise de logs e malware.',
    skills: [
      'GenAI Security',
      'Microsoft Sentinel',
      'Logic Apps',
      'Threat Intelligence',
      'KQL',
      'VirusTotal',
      'Azure',
      'SOC Automation'
    ]
  },
  {
    title: 'Especialista em Segurança da Informação',
    provider: 'Udemy · Daniel Donda',
    category: 'defensive',
    label: 'Cibersegurança',
    description: 'Fundamentos e práticas de segurança, principais ameaças, métodos utilizados por atacantes e controles corporativos de proteção.',
    skills: [
      'Security Fundamentals',
      'Threats',
      'Attack Methods',
      'Corporate Security',
      'Risk Awareness'
    ]
  },
  {
    title: 'Curso Completo em Cyber Security',
    provider: 'Udemy · Stefan Sales',
    category: 'governance',
    label: 'Cyber & Gestão',
    description: 'Visão ampla de segurança defensiva e ofensiva, prevenção, SOC, resposta a incidentes, tecnologias de proteção e liderança de segurança.',
    skills: [
      'Cyber Strategy',
      'SOC',
      'Incident Response',
      'Security Leadership',
      'Firewalls',
      'WAF',
      'MFA',
      'Metasploit'
    ]
  },
  {
    title: 'Política de Segurança baseada na ISO 27001',
    provider: 'Udemy · Cláudio Dodt',
    category: 'governance',
    label: 'Governança',
    description: 'Criação, revisão e aplicação de políticas de segurança alinhadas à ISO 27001, objetivos de negócio e requisitos de proteção de dados da LGPD.',
    skills: [
      'ISO 27001',
      'Security Policy',
      'LGPD',
      'Governance',
      'Risk',
      'Compliance'
    ]
  },
  {
    title: 'Formação Linux: do básico ao avançado',
    provider: 'Udemy · Mateus Müller',
    category: 'cloud',
    label: 'Infraestrutura',
    description: 'Administração Linux, shell, redes, serviços, armazenamento, segurança, automação e arquitetura de infraestrutura open source.',
    skills: [
      'Linux',
      'Bash',
      'Shell Script',
      'Networking',
      'SSH',
      'DNS',
      'Nginx',
      'Firewall',
      'LDAP',
      'Samba'
    ]
  },
  {
    title: 'Complete Ethical Hacking with Python',
    provider: 'Udemy · Neamatullah Ekhteyari',
    category: 'offensive',
    label: 'Red Team',
    description: 'Automação de tarefas de segurança com Python, análise de redes, scanners, interceptação de tráfego e testes de aplicações em laboratório.',
    skills: [
      'Python',
      'Kali Linux',
      'Scapy',
      'Network Scanning',
      'ARP',
      'Packet Analysis',
      'Web Security',
      'Automation'
    ]
  },
  {
    title: 'Hacker Ético Profissional com Kali Linux',
    provider: 'Udemy · Vitor Mazuco',
    category: 'offensive',
    label: 'Red Team',
    description: 'Pentest com Kali Linux, reconhecimento, análise de vulnerabilidades, redes, aplicações web, Nmap, Wireshark e técnicas de evasão.',
    skills: [
      'Kali Linux',
      'Nmap',
      'Wireshark',
      'Web Pentest',
      'Network Security',
      'OSINT',
      'Python',
      'Bug Bounty'
    ]
  },
  {
    title: 'Fundamentos de Ethical Hacking e Pentest',
    provider: 'Udemy · Clécius Wilton',
    category: 'offensive',
    label: 'Red Team',
    description: 'Fundamentos de redes e Linux aplicados a pentest, scanning, enumeração, Metasploit, exploração controlada e hardening defensivo.',
    skills: [
      'Pentest',
      'Kali Linux',
      'Nmap',
      'Metasploit',
      'Enumeration',
      'Hardening',
      'Network Security'
    ]
  },
  {
    title: 'Pentest em Sites e Aplicações Web',
    provider: 'Udemy · Clécius Wilton',
    category: 'offensive',
    label: 'AppSec',
    description: 'Testes de segurança web com Burp Suite, OWASP ZAP e laboratórios vulneráveis, cobrindo OWASP Top 10, XSS, SQLi, autenticação e sessões.',
    skills: [
      'Web Pentest',
      'Burp Suite',
      'OWASP ZAP',
      'XSS',
      'SQL Injection',
      'Authentication',
      'HTTP',
      'OWASP Top 10'
    ]
  },
  {
    title: 'Ataques DoS e DDoS com Kali Linux',
    provider: 'Udemy · Clécius Wilton',
    category: 'offensive',
    label: 'Network Security',
    description: 'Funcionamento, simulação controlada, detecção e mitigação de ataques DoS/DDoS com análise de tráfego, FortiGate e Cloudflare.',
    skills: [
      'DoS/DDoS',
      'Traffic Analysis',
      'FortiGate',
      'Cloudflare',
      'Rate Limiting',
      'Incident Response'
    ]
  },
  {
    title: 'Gerenciamento de Ameaças Cibernéticas',
    provider: 'Cisco Networking Academy · 16h',
    category: 'defensive',
    label: 'Blue Team',
    description: 'Governança, conformidade, testes de rede, inteligência de ameaças, avaliação de vulnerabilidades, riscos, forense e resposta a incidentes.',
    skills: [
      'Threat Management',
      'Governance',
      'Wireshark',
      'Vulnerability Assessment',
      'Risk',
      'DFIR',
      'Incident Response',
      'Packet Tracer'
    ]
  },
  {
    title: 'Introdução à Cibersegurança',
    provider: 'Cisco Networking Academy',
    category: 'defensive',
    label: 'Fundamentos',
    description: 'Fundamentos de ameaças, ataques e técnicas, proteção de dados e privacidade, segurança organizacional e carreira em cibersegurança.',
    skills: [
      'Cyber Fundamentals',
      'Threats',
      'Privacy',
      'Data Protection',
      'Organizational Security'
    ]
  },
  {
    title: 'Fundamentos para Carreira em Cibersegurança',
    provider: 'Microsoft & LinkedIn',
    category: 'governance',
    label: 'Fundamentos',
    description: 'Princípios de segurança da informação, gestão de riscos, conscientização e fundamentos para atuação profissional em cibersegurança.',
    skills: [
      'Security Fundamentals',
      'Risk Management',
      'Awareness',
      'Information Security'
    ]
  },
  {
    title: 'Microsoft Defender XDR',
    provider: 'Microsoft Learn',
    category: 'defensive',
    label: 'Blue Team',
    description: 'Defesa contra ameaças com o ecossistema Microsoft Defender XDR, investigação, monitoramento e resposta coordenada a incidentes.',
    skills: [
      'Defender XDR',
      'Threat Detection',
      'Investigation',
      'Incident Response',
      'Microsoft Security'
    ]
  }
];

const $ = (selector, context = document) =>
  context.querySelector(selector);

const $$ = (selector, context = document) =>
  Array.from(context.querySelectorAll(selector));

const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
);

const categoryNames = {
  all: 'Todas as formações',
  backend: 'Backend & Go',
  cloud: 'Cloud & DevOps',
  devsecops: 'DevSecOps',
  offensive: 'Red Team',
  defensive: 'Blue Team',
  ai: 'Segurança em IA',
  governance: 'Governança'
};

let selectedCategory = 'all';
let filteredCourses = [...courses];
let activeCourseIndex = 0;
let lastFocusedElement = null;
let toastTimer = null;
let renderTimer = null;
let touchStartX = 0;
let touchStartY = 0;

function escapeHTML(value = '') {
  return String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  })[character]);
}

function createCourseCard(course) {
  const tags = course.skills
    .map(skill => `<span>${escapeHTML(skill)}</span>`)
    .join('');

  return `
    <article class="course-card">
      <div class="course-meta">
        <span>${escapeHTML(course.label)}</span>
        <span>Formação técnica</span>
      </div>

      <h3>${escapeHTML(course.title)}</h3>

      <p class="course-provider">
        ${escapeHTML(course.provider)}
      </p>

      <p class="course-description">
        ${escapeHTML(course.description)}
      </p>

      <div class="tag-list">
        ${tags}
      </div>

      <button
        type="button"
        class="course-details-button"
        data-open-course
        aria-label="Ver competências da formação ${escapeHTML(course.title)}"
      >
        <span>Ver competências</span>
        <i
          class="fa-solid fa-arrow-right"
          aria-hidden="true"
        ></i>
      </button>
    </article>
  `;
}

function renderCourse(animate = true) {
  const track = $('#courseTrack');
  const count = $('#courseCount');
  const position = $('#coursePosition');
  const category = $('#activeCourseCategory');
  const progress = $('#carouselProgress');
  const progressContainer = progress?.parentElement;
  const previousButton = $('#prevCourse');
  const nextButton = $('#nextCourse');

  if (!track || !filteredCourses.length) return;

  const course = filteredCourses[activeCourseIndex];
  const current = activeCourseIndex + 1;
  const total = filteredCourses.length;
  const formattedCurrent = String(current).padStart(2, '0');
  const formattedTotal = String(total).padStart(2, '0');

  clearTimeout(renderTimer);

  const updateCard = () => {
    track.innerHTML = createCourseCard(course);
    track.classList.remove('is-changing');

    $('[data-open-course]', track)?.addEventListener(
      'click',
      event => {
        openCourse(course, event.currentTarget);
      }
    );
  };

  if (animate && !prefersReducedMotion.matches) {
    track.classList.add('is-changing');
    renderTimer = setTimeout(updateCard, 170);
  } else {
    updateCard();
  }

  if (count) {
    count.textContent = total === 1
      ? '1 formação nesta categoria'
      : `${total} formações nesta categoria`;
  }

  if (position) {
    position.textContent =
      `${formattedCurrent} / ${formattedTotal}`;
  }

  if (category) {
    category.textContent =
      categoryNames[selectedCategory];
  }

  if (progress) {
    progress.style.width =
      `${(current / total) * 100}%`;
  }

  if (progressContainer) {
    progressContainer.setAttribute(
      'aria-valuemax',
      String(total)
    );

    progressContainer.setAttribute(
      'aria-valuenow',
      String(current)
    );
  }

  if (previousButton) {
    previousButton.disabled =
      activeCourseIndex === 0;
  }

  if (nextButton) {
    nextButton.disabled =
      activeCourseIndex === total - 1;
  }
}

function changeCourse(direction) {
  const nextIndex =
    activeCourseIndex + direction;

  if (
    nextIndex < 0 ||
    nextIndex >= filteredCourses.length
  ) {
    return;
  }

  activeCourseIndex = nextIndex;
  renderCourse();
}

function selectCategory(category) {
  selectedCategory = category;
  activeCourseIndex = 0;

  filteredCourses = category === 'all'
    ? [...courses]
    : courses.filter(
        course => course.category === category
      );

  $$('.filter-btn').forEach(button => {
    const isActive =
      button.dataset.filter === category;

    button.classList.toggle(
      'active',
      isActive
    );

    button.setAttribute(
      'aria-pressed',
      String(isActive)
    );
  });

  $$('.formation-dropdown-option').forEach(option => {
    option.classList.toggle(
      'active',
      option.dataset.mobileFilter === category
    );
  });

  const label = $('#courseFilterLabel');

  if (label) {
    label.textContent = categoryNames[category];
  }

  closeFormationDropdown();
  renderCourse();
}

function closeFormationDropdown() {
  const dropdown = $('.formation-dropdown');
  const button = $('#courseFilterButton');
  const menu = $('#courseFilterMenu');

  if (!dropdown || !button || !menu) return;

  dropdown.classList.remove('open');
  button.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-hidden', 'true');
}

function initializeFormation() {
  $$('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
      selectCategory(
        button.dataset.filter || 'all'
      );
    });
  });

  const dropdown = $('.formation-dropdown');
  const dropdownButton = $('#courseFilterButton');
  const dropdownMenu = $('#courseFilterMenu');

  dropdownButton?.addEventListener('click', event => {
    event.stopPropagation();

    const isOpen =
      dropdown.classList.toggle('open');

    dropdownButton.setAttribute(
      'aria-expanded',
      String(isOpen)
    );

    dropdownMenu.setAttribute(
      'aria-hidden',
      String(!isOpen)
    );
  });

  $$('.formation-dropdown-option').forEach(option => {
    option.addEventListener('click', () => {
      selectCategory(
        option.dataset.mobileFilter || 'all'
      );
    });
  });

  document.addEventListener('click', event => {
    if (
      dropdown?.classList.contains('open') &&
      !dropdown.contains(event.target)
    ) {
      closeFormationDropdown();
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeFormationDropdown();
    }
  });

  $('#prevCourse')?.addEventListener(
    'click',
    () => changeCourse(-1)
  );

  $('#nextCourse')?.addEventListener(
    'click',
    () => changeCourse(1)
  );

  const stage = $('.formation-stage');

  stage?.addEventListener(
    'touchstart',
    event => {
      const touch = event.changedTouches[0];

      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
    },
    { passive: true }
  );

  stage?.addEventListener(
    'touchend',
    event => {
      const touch = event.changedTouches[0];

      const differenceX =
        touch.clientX - touchStartX;

      const differenceY =
        touch.clientY - touchStartY;

      if (
        Math.abs(differenceX) < 55 ||
        Math.abs(differenceX) <
          Math.abs(differenceY)
      ) {
        return;
      }

      changeCourse(
        differenceX < 0 ? 1 : -1
      );
    },
    { passive: true }
  );

  renderCourse(false);
}

function openCourse(course, trigger) {
  const modal = $('#courseModal');

  if (!course || !modal) return;

  const modalMeta = $('#modalMeta');
  const modalTitle = $('#modalTitle');
  const modalDescription =
    $('#modalDescription');
  const modalSkills = $('#modalSkills');

  lastFocusedElement =
    trigger || document.activeElement;

  if (modalMeta) {
    modalMeta.textContent =
      `${course.label} · ${course.provider}`;
  }

  if (modalTitle) {
    modalTitle.textContent = course.title;
  }

  if (modalDescription) {
    modalDescription.textContent =
      course.description;
  }

  if (modalSkills) {
    modalSkills.innerHTML = course.skills
      .map(
        skill =>
          `<span>${escapeHTML(skill)}</span>`
      )
      .join('');
  }

  modal.classList.add('open');
  modal.setAttribute(
    'aria-hidden',
    'false'
  );

  document.body.style.overflow = 'hidden';

  requestAnimationFrame(() => {
    $('.modal-close', modal)?.focus();
  });
}

function closeCourse() {
  const modal = $('#courseModal');

  if (
    !modal ||
    !modal.classList.contains('open')
  ) {
    return;
  }

  modal.classList.remove('open');
  modal.setAttribute(
    'aria-hidden',
    'true'
  );

  document.body.style.overflow = '';

  lastFocusedElement?.focus();
  lastFocusedElement = null;
}

function initializeModal() {
  $$('[data-close-modal]').forEach(
    element => {
      element.addEventListener(
        'click',
        closeCourse
      );
    }
  );

  document.addEventListener(
    'keydown',
    event => {
      const modal = $('#courseModal');

      if (
        !modal?.classList.contains('open')
      ) {
        return;
      }

      if (event.key === 'Escape') {
        closeCourse();
        return;
      }

      if (event.key !== 'Tab') return;

      const focusableElements = $$(
        [
          'button:not([disabled])',
          'a[href]',
          'input:not([disabled])',
          'select:not([disabled])',
          'textarea:not([disabled])',
          '[tabindex]:not([tabindex="-1"])'
        ].join(','),
        modal
      ).filter(
        element =>
          element.offsetParent !== null
      );

      if (!focusableElements.length) {
        return;
      }

      const firstElement =
        focusableElements[0];

      const lastElement =
        focusableElements[
          focusableElements.length - 1
        ];

      if (
        event.shiftKey &&
        document.activeElement ===
          firstElement
      ) {
        event.preventDefault();
        lastElement.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement ===
          lastElement
      ) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  );
}

function showToast(message) {
  const toast = $('#toast');

  if (!toast) return;

  const text = $('span', toast);

  if (text) {
    text.textContent = message;
  }

  clearTimeout(toastTimer);
  toast.classList.add('show');

  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}

async function copiarEmail() {
  const email = 'valeriolima97@gmail.com';
  const copyText = $('#copyText');
  let copied = false;

  try {
    if (
      navigator.clipboard &&
      window.isSecureContext
    ) {
      await navigator.clipboard.writeText(
        email
      );

      copied = true;
    }
  } catch {
    copied = false;
  }

  if (!copied) {
    const field =
      document.createElement('textarea');

    field.value = email;
    field.readOnly = true;
    field.style.position = 'fixed';
    field.style.left = '-9999px';

    document.body.appendChild(field);

    field.select();
    field.setSelectionRange(
      0,
      field.value.length
    );

    try {
      copied =
        document.execCommand('copy');
    } catch {
      copied = false;
    }

    field.remove();
  }

  if (copied) {
    if (copyText) {
      copyText.textContent = 'Copiado!';
    }

    showToast(`${email} copiado!`);

    setTimeout(() => {
      if (copyText) {
        copyText.textContent = 'Contato';
      }
    }, 2200);
  } else {
    showToast(email);
  }
}

window.copiarEmail = copiarEmail;

function closeMobileMenu() {
  const menu = $('#mobileMenu');
  const button = $('#menuButton');
  const icon = button
    ? $('i', button)
    : null;

  if (!menu || !button) return;

  menu.classList.add('hidden');

  button.setAttribute(
    'aria-expanded',
    'false'
  );

  button.setAttribute(
    'aria-label',
    'Abrir menu'
  );

  if (icon) {
    icon.className =
      'fa-solid fa-bars';
  }
}

function initializeMobileMenu() {
  const menu = $('#mobileMenu');
  const button = $('#menuButton');

  if (!menu || !button) return;

  button.addEventListener('click', () => {
    const isOpen =
      !menu.classList.contains('hidden');

    menu.classList.toggle('hidden');

    button.setAttribute(
      'aria-expanded',
      String(!isOpen)
    );

    button.setAttribute(
      'aria-label',
      isOpen
        ? 'Abrir menu'
        : 'Fechar menu'
    );

    const icon = $('i', button);

    if (icon) {
      icon.className = isOpen
        ? 'fa-solid fa-bars'
        : 'fa-solid fa-xmark';
    }
  });

  $$('a', menu).forEach(link => {
    link.addEventListener(
      'click',
      closeMobileMenu
    );
  });

  document.addEventListener(
    'click',
    event => {
      const isOpen =
        !menu.classList.contains('hidden');

      if (
        isOpen &&
        !menu.contains(event.target) &&
        !button.contains(event.target)
      ) {
        closeMobileMenu();
      }
    }
  );
}

function initializeExperiences() {
  $$('.experience-trigger').forEach(
    button => {
      button.addEventListener(
        'click',
        () => {
          const card =
            button.closest(
              '.experience-card'
            );

          if (!card) return;

          const isOpen =
            card.classList.toggle('open');

          button.setAttribute(
            'aria-expanded',
            String(isOpen)
          );
        }
      );
    }
  );
}

function initializeRevealAnimations() {
  const elements = $$('.reveal');

  if (
    prefersReducedMotion.matches ||
    !('IntersectionObserver' in window)
  ) {
    elements.forEach(element => {
      element.classList.add('visible');
    });

    return;
  }

  const observer =
    new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add(
            'visible'
          );

          observer.unobserve(
            entry.target
          );
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -30px'
      }
    );

  elements.forEach(element => {
    observer.observe(element);
  });
}

function initializeNavigationObserver() {
  const sections =
    $$('main section[id]');

  const links = $$('.nav-link');

  if (
    !sections.length ||
    !links.length ||
    !('IntersectionObserver' in window)
  ) {
    return;
  }

  const observer =
    new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            return;
          }

          links.forEach(link => {
            link.classList.toggle(
              'active',
              link.getAttribute('href') ===
                `#${entry.target.id}`
            );
          });
        });
      },
      {
        rootMargin: '-35% 0px -55%',
        threshold: 0
      }
    );

  sections.forEach(section => {
    observer.observe(section);
  });
}

function initializeBackgroundCanvas() {
  const canvas = $('#bgCanvas');

  if (
    !canvas ||
    prefersReducedMotion.matches
  ) {
    return;
  }

  const context =
    canvas.getContext('2d');

  if (!context) return;

  let width = 0;
  let height = 0;
  let particles = [];
  let animationFrame = null;
  let running = false;
  let resizeTimer = null;

  function createParticles() {
    const mobile =
      window.innerWidth <= 640;

    const total = mobile
      ? 18
      : Math.min(
          44,
          Math.max(
            24,
            Math.floor(width / 32)
          )
        );

    particles = Array.from(
      { length: total },
      () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx:
          (Math.random() - 0.5) *
          0.28,
        vy:
          (Math.random() - 0.5) *
          0.28,
        radius:
          Math.random() * 1.2 + 0.5
      })
    );
  }

  function resizeCanvas() {
    const ratio = Math.min(
      window.devicePixelRatio || 1,
      1.5
    );

    width =
      document.documentElement.clientWidth;

    height = window.innerHeight;

    canvas.width =
      Math.floor(width * ratio);

    canvas.height =
      Math.floor(height * ratio);

    canvas.style.width =
      `${width}px`;

    canvas.style.height =
      `${height}px`;

    context.setTransform(
      ratio,
      0,
      0,
      ratio,
      0,
      0
    );

    createParticles();
  }

  function draw() {
    if (!running) return;

    context.clearRect(
      0,
      0,
      width,
      height
    );

    particles.forEach(
      (particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (
          particle.x <= 0 ||
          particle.x >= width
        ) {
          particle.vx *= -1;
        }

        if (
          particle.y <= 0 ||
          particle.y >= height
        ) {
          particle.vy *= -1;
        }

        context.fillStyle =
          'rgba(52, 211, 153, 0.32)';

        context.beginPath();

        context.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2
        );

        context.fill();

        for (
          let comparison = index + 1;
          comparison < particles.length;
          comparison += 1
        ) {
          const secondParticle =
            particles[comparison];

          const distance = Math.hypot(
            particle.x -
              secondParticle.x,
            particle.y -
              secondParticle.y
          );

          if (distance >= 115) {
            continue;
          }

          const opacity =
            0.065 *
            (1 - distance / 115);

          context.strokeStyle =
            `rgba(16, 185, 129, ${opacity})`;

          context.lineWidth = 1;
          context.beginPath();

          context.moveTo(
            particle.x,
            particle.y
          );

          context.lineTo(
            secondParticle.x,
            secondParticle.y
          );

          context.stroke();
        }
      }
    );

    animationFrame =
      requestAnimationFrame(draw);
  }

  function start() {
    if (running) return;

    running = true;

    animationFrame =
      requestAnimationFrame(draw);
  }

  function stop() {
    running = false;

    if (animationFrame) {
      cancelAnimationFrame(
        animationFrame
      );

      animationFrame = null;
    }
  }

  window.addEventListener(
    'resize',
    () => {
      clearTimeout(resizeTimer);

      resizeTimer = setTimeout(() => {
        resizeCanvas();

        if (window.innerWidth >= 1024) {
          closeMobileMenu();
        }
      }, 160);
    },
    { passive: true }
  );

  document.addEventListener(
    'visibilitychange',
    () => {
      if (document.hidden) {
        stop();
      } else {
        start();
      }
    }
  );

  resizeCanvas();
  start();
}

function initializeSite() {
  const year = $('#currentYear');

  if (year) {
    year.textContent =
      new Date().getFullYear();
  }

  initializeMobileMenu();
  initializeExperiences();
  initializeFormation();
  initializeModal();
  initializeRevealAnimations();
  initializeNavigationObserver();
  initializeBackgroundCanvas();
}

if (document.readyState === 'loading') {
  document.addEventListener(
    'DOMContentLoaded',
    initializeSite
  );
} else {
  initializeSite();
}