const courses = [
  {
    title: 'Go Bootcamp: gRPC & Protocol Buffers',
    provider: 'Udemy · Ashish Sharma',
    category: 'backend',
    label: 'Backend & Go',
    description: 'Formação extensa em Go, da base a recursos avançados, com concorrência, APIs REST e gRPC, Protocol Buffers, HTTP/2, TLS, bancos SQL/NoSQL e benchmarking.',
    skills: ['Golang', 'Goroutines', 'Channels', 'gRPC', 'Protocol Buffers', 'REST', 'HTTP/2', 'Benchmarking']
  },
  {
    title: 'Terraform on AWS EKS Kubernetes IaC/SRE',
    provider: 'Udemy · Kalyan Reddy',
    category: 'cloud',
    label: 'Cloud & DevOps',
    description: 'Infraestrutura como código para ambientes AWS EKS, incluindo VPC, IAM, armazenamento, ingress, load balancers, Fargate, autoscaling, logging e monitoramento.',
    skills: ['Terraform', 'AWS EKS', 'Kubernetes', 'VPC', 'IAM', 'Helm', 'Fargate', 'Autoscaling']
  },
  {
    title: 'AWS EKS Kubernetes Masterclass',
    provider: 'Udemy · Kalyan Reddy',
    category: 'cloud',
    label: 'Cloud & DevOps',
    description: 'Operação de workloads e microsserviços em EKS com storage, ingress, ECR, Fargate, CodePipeline, service discovery, tracing, canary deployment e observabilidade.',
    skills: ['AWS EKS', 'Kubernetes', 'ECR', 'Fargate', 'X-Ray', 'CloudWatch', 'Microservices', 'CI/CD']
  },
  {
    title: 'DevSecOps: Kubernetes DevOps & Security',
    provider: 'Udemy · Siddharth Barahalikar',
    category: 'devsecops',
    label: 'DevSecOps',
    description: 'Integração de segurança ao SDLC e pipelines Jenkins, com SAST, DAST, testes, Vault, análise de imagens e recursos Kubernetes, Falco, Prometheus e Grafana.',
    skills: ['Shift Left', 'SAST', 'DAST', 'Jenkins', 'Vault', 'Trivy', 'Falco', 'Kubernetes']
  },
  {
    title: 'DevSecOps com projetos e pipelines seguros',
    provider: 'Udemy · DevOps Door',
    category: 'devsecops',
    label: 'DevSecOps',
    description: 'Projetos práticos de segurança no ciclo DevOps, automação de controles, análise de dependências e infraestrutura, policy as code e proteção cloud-native.',
    skills: ['Secure CI/CD', 'Snyk', 'Trivy', 'Kyverno', 'Cosign', 'Policy as Code', 'Kubernetes', 'Compliance']
  },
  {
    title: 'Engenharia Reversa de Modelos de IA',
    provider: 'Red Team Leaders',
    category: 'ai',
    label: 'Segurança em IA',
    description: 'Auditoria de modelos por análise de arquitetura, dados de treinamento, privacidade, comportamento adversarial, interpretabilidade e engenharia reversa multimodal.',
    skills: ['Model Auditing', 'Adversarial AI', 'Privacy', 'Transformers', 'Model Extraction', 'Interpretability', 'PII', 'Responsible Disclosure']
  },
  {
    title: 'Certified LLM Security Professional — CLLMSP',
    provider: 'Red Team Leaders',
    category: 'ai',
    label: 'Segurança em IA',
    description: 'Segurança de aplicações baseadas em LLM, cobrindo OWASP LLM Top 10, jailbreaks, RAG, agentes, MCP, governança, privacidade e resposta a incidentes de IA.',
    skills: ['LLM Security', 'Prompt Injection', 'MCP Security', 'RAG', 'AI Agents', 'NIST AI RMF', 'ISO 42001', 'OWASP LLM']
  },
  {
    title: 'Digital Forensics & Incident Investigation',
    provider: 'Red Team Leaders',
    category: 'defensive',
    label: 'Blue Team & DFIR',
    description: 'Aquisição, preservação e análise de evidências em Windows, Linux, memória, rede e nuvem, com cadeia de custódia, timelines, MITRE ATT&CK e relatórios.',
    skills: ['DFIR', 'Incident Response', 'Memory Forensics', 'Disk Forensics', 'MITRE ATT&CK', 'Chain of Custody', 'Cloud Forensics']
  },
  {
    title: 'OpSec & Anonymity for Red Teams',
    provider: 'Red Team Leaders',
    category: 'offensive',
    label: 'Red Team',
    description: 'Segurança operacional para simulações ofensivas, com isolamento de personas, infraestrutura C2, redução de atribuição, anti-forense e higiene de metadados.',
    skills: ['OpSec', 'C2 Infrastructure', 'Anti-Attribution', 'Redirectors', 'Network Obfuscation', 'Anti-Forensics', 'Threat Modeling']
  },
  {
    title: 'Windows API for Red Team Introduction',
    provider: 'Red Team Leaders',
    category: 'offensive',
    label: 'Red Team',
    description: 'Programação Windows em C++ e APIs nativas, processos, memória, syscalls, enumeração, resolução dinâmica e fundamentos de desenvolvimento ofensivo.',
    skills: ['Windows API', 'C++', 'Windows Internals', 'Syscalls', 'Memory', 'API Hashing', 'Hook Detection', 'Offensive Development']
  },
  {
    title: 'AWS para Blue & Red Team',
    provider: 'Udemy · Diego Fukayama',
    category: 'offensive',
    label: 'Cloud Security',
    description: 'Auditoria ofensiva e defesa de ambientes AWS, exploração de configurações, escalada de privilégios, monitoramento e detecção com serviços nativos.',
    skills: ['AWS Security', 'Cloud Pentest', 'Privilege Escalation', 'GuardDuty', 'AWS Config', 'Macie', 'Blue Team']
  },
  {
    title: 'Wazuh: SIEM & XDR do básico ao avançado',
    provider: 'Udemy · Vitor Mazuco',
    category: 'defensive',
    label: 'Blue Team',
    description: 'Implantação e operação do Wazuh para análise de logs, detecção, vulnerabilidades, threat hunting, resposta automatizada e monitoramento cloud.',
    skills: ['Wazuh', 'SIEM', 'XDR', 'Threat Hunting', 'Sysmon', 'Suricata', 'MITRE ATT&CK', 'Incident Response']
  },
  {
    title: 'AI for Cybersecurity with ChatGPT',
    provider: 'Udemy · Pavel Hrabec',
    category: 'ai',
    label: 'Segurança em IA',
    description: 'Automação de defesa com IA, integração de ChatGPT a SIEM, Sentinel e Logic Apps, enriquecimento de ameaças e análise de logs e malware.',
    skills: ['GenAI Security', 'Microsoft Sentinel', 'Logic Apps', 'Threat Intelligence', 'KQL', 'VirusTotal', 'Azure', 'SOC Automation']
  },
  {
    title: 'Especialista em Segurança da Informação',
    provider: 'Udemy · Daniel Donda',
    category: 'defensive',
    label: 'Cibersegurança',
    description: 'Fundamentos e práticas de segurança, principais ameaças, métodos utilizados por atacantes e controles corporativos de proteção.',
    skills: ['Security Fundamentals', 'Threats', 'Attack Methods', 'Corporate Security', 'Risk Awareness']
  },
  {
    title: 'Curso Completo em Cyber Security',
    provider: 'Udemy · Stefan Sales',
    category: 'governance',
    label: 'Cyber & Gestão',
    description: 'Visão ampla de segurança defensiva e ofensiva, prevenção, SOC, resposta a incidentes, tecnologias de proteção e liderança de segurança.',
    skills: ['Cyber Strategy', 'SOC', 'Incident Response', 'Security Leadership', 'Firewalls', 'WAF', 'MFA', 'Metasploit']
  },
  {
    title: 'Política de Segurança baseada na ISO 27001',
    provider: 'Udemy · Cláudio Dodt',
    category: 'governance',
    label: 'Governança',
    description: 'Criação, revisão e aplicação de políticas de segurança alinhadas à ISO 27001, objetivos de negócio e requisitos de proteção de dados da LGPD.',
    skills: ['ISO 27001', 'Security Policy', 'LGPD', 'Governance', 'Risk', 'Compliance']
  },
  {
    title: 'Formação Linux: do básico ao avançado',
    provider: 'Udemy · Mateus Müller',
    category: 'cloud',
    label: 'Infraestrutura',
    description: 'Administração Linux, shell, redes, serviços, armazenamento, segurança, automação e arquitetura de infraestrutura open source.',
    skills: ['Linux', 'Bash', 'Shell Script', 'Networking', 'SSH', 'DNS', 'Nginx', 'Firewall', 'LDAP', 'Samba']
  },
  {
    title: 'Complete Ethical Hacking with Python',
    provider: 'Udemy · Neamatullah Ekhteyari',
    category: 'offensive',
    label: 'Red Team',
    description: 'Automação de tarefas de segurança com Python, análise de redes, scanners, interceptação de tráfego e testes de aplicações em laboratório.',
    skills: ['Python', 'Kali Linux', 'Scapy', 'Network Scanning', 'ARP', 'Packet Analysis', 'Web Security', 'Automation']
  },
  {
    title: 'Hacker Ético Profissional com Kali Linux',
    provider: 'Udemy · Vitor Mazuco',
    category: 'offensive',
    label: 'Red Team',
    description: 'Pentest com Kali Linux, reconhecimento, análise de vulnerabilidades, redes, aplicações web, Nmap, Wireshark e técnicas de evasão.',
    skills: ['Kali Linux', 'Nmap', 'Wireshark', 'Web Pentest', 'Network Security', 'OSINT', 'Python', 'Bug Bounty']
  },
  {
    title: 'Fundamentos de Ethical Hacking e Pentest',
    provider: 'Udemy · Clécius Wilton',
    category: 'offensive',
    label: 'Red Team',
    description: 'Fundamentos de redes e Linux aplicados a pentest, scanning, enumeração, Metasploit, exploração controlada e hardening defensivo.',
    skills: ['Pentest', 'Kali Linux', 'Nmap', 'Metasploit', 'Enumeration', 'Hardening', 'Network Security']
  },
  {
    title: 'Pentest em Sites e Aplicações Web',
    provider: 'Udemy · Clécius Wilton',
    category: 'offensive',
    label: 'AppSec',
    description: 'Testes de segurança web com Burp Suite, OWASP ZAP e laboratórios vulneráveis, cobrindo OWASP Top 10, XSS, SQLi, autenticação e sessões.',
    skills: ['Web Pentest', 'Burp Suite', 'OWASP ZAP', 'XSS', 'SQL Injection', 'Authentication', 'HTTP', 'OWASP Top 10']
  },
  {
    title: 'Ataques DoS e DDoS com Kali Linux',
    provider: 'Udemy · Clécius Wilton',
    category: 'offensive',
    label: 'Network Security',
    description: 'Funcionamento, simulação controlada, detecção e mitigação de ataques DoS/DDoS com análise de tráfego, FortiGate e Cloudflare.',
    skills: ['DoS/DDoS', 'Traffic Analysis', 'FortiGate', 'Cloudflare', 'Rate Limiting', 'Incident Response']
  },
  {
    title: 'Gerenciamento de Ameaças Cibernéticas',
    provider: 'Cisco Networking Academy · 16h',
    category: 'defensive',
    label: 'Blue Team',
    description: 'Governança, conformidade, testes de rede, inteligência de ameaças, avaliação de vulnerabilidades, riscos, forense e resposta a incidentes.',
    skills: ['Threat Management', 'Governance', 'Wireshark', 'Vulnerability Assessment', 'Risk', 'DFIR', 'Incident Response', 'Packet Tracer']
  },
  {
    title: 'Introdução à Cibersegurança',
    provider: 'Cisco Networking Academy',
    category: 'defensive',
    label: 'Fundamentos',
    description: 'Fundamentos de ameaças, ataques e técnicas, proteção de dados e privacidade, segurança organizacional e carreira em cibersegurança.',
    skills: ['Cyber Fundamentals', 'Threats', 'Privacy', 'Data Protection', 'Organizational Security']
  },
  {
    title: 'Fundamentos para Carreira em Cibersegurança',
    provider: 'Microsoft & LinkedIn',
    category: 'governance',
    label: 'Fundamentos',
    description: 'Princípios de segurança da informação, gestão de riscos, conscientização e fundamentos para atuação profissional em cibersegurança.',
    skills: ['Security Fundamentals', 'Risk Management', 'Awareness', 'Information Security']
  },
  {
    title: 'Microsoft Defender XDR',
    provider: 'Microsoft Learn',
    category: 'defensive',
    label: 'Blue Team',
    description: 'Defesa contra ameaças com o ecossistema Microsoft Defender XDR, investigação, monitoramento e resposta coordenada a incidentes.',
    skills: ['Defender XDR', 'Threat Detection', 'Investigation', 'Incident Response', 'Microsoft Security']
  }
];

const $ = (selector, context = document) =>
  context.querySelector(selector);

const $$ = (selector, context = document) =>
  [...context.querySelectorAll(selector)];

const track = $('#courseTrack');

let filteredCourses = [...courses];
let lastFocusedElement = null;

function courseCard(course, index) {
  const tags = course.skills
    .slice(0, 4)
    .map(skill => `<span>${skill}</span>`)
    .join('');

  return `
    <article
      class="course-card glass-card"
      data-course-index="${index}"
    >
      <div class="course-meta">
        <span>${course.label}</span>
        <span>${String(index + 1).padStart(2, '0')}</span>
      </div>

      <h3>${course.title}</h3>

      <p>${course.description}</p>

      <div class="tag-list">
        ${tags}
      </div>

      <button type="button" data-open-course="${index}">
        <span>Ver competências</span>
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </article>
  `;
}

function renderCourses() {
  track.innerHTML = filteredCourses
    .map(courseCard)
    .join('');

  $('#courseCount').textContent =
    `${filteredCourses.length} formações nesta categoria`;

  track.scrollTo({
    left: 0,
    behavior: 'instant'
  });

  updateCarousel();

  $$('[data-open-course]', track).forEach(button => {
    button.addEventListener('click', () => {
      openCourse(
        Number(button.dataset.openCourse),
        button
      );
    });
  });
}

function updateCarousel() {
  const max = Math.max(
    track.scrollWidth - track.clientWidth,
    1
  );

  const ratio = Math.min(
    track.scrollLeft / max,
    1
  );

  const visibleRatio = Math.min(
    track.clientWidth / Math.max(track.scrollWidth, 1),
    1
  );

  const progress = $('#carouselProgress');

  progress.style.width =
    `${Math.max(visibleRatio * 100, 12)}%`;

  progress.style.transform =
    `translateX(${ratio * (100 / visibleRatio - 100)}%)`;

  $('#prevCourse').disabled =
    track.scrollLeft < 4;

  $('#nextCourse').disabled =
    track.scrollLeft >= max - 4;
}

function moveCarousel(direction) {
  const card = $('.course-card', track);

  track.scrollBy({
    left: direction * ((card?.offsetWidth || 320) + 16),
    behavior: 'smooth'
  });
}

function openCourse(index, trigger) {
  const course = filteredCourses[index];

  if (!course) return;

  lastFocusedElement = trigger;

  $('#modalMeta').textContent =
    `${course.label} · ${course.provider}`;

  $('#modalTitle').textContent =
    course.title;

  $('#modalDescription').textContent =
    course.description;

  $('#modalSkills').innerHTML =
    course.skills
      .map(skill => `<span>${skill}</span>`)
      .join('');

  const modal = $('#courseModal');

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');

  document.body.style.overflow = 'hidden';

  $('.modal-close', modal).focus();
}

function closeCourse() {
  const modal = $('#courseModal');

  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');

  document.body.style.overflow = '';

  lastFocusedElement?.focus();
}

async function copiarEmail() {
  const email = 'valeriolima97@gmail.com';

  try {
    await navigator.clipboard.writeText(email);
  } catch (_) {
    const field = document.createElement('textarea');

    field.value = email;
    document.body.appendChild(field);
    field.select();
    document.execCommand('copy');
    field.remove();
  }

  const copyText = document.querySelector('#copyText');

  if (copyText) {
    copyText.textContent = 'Copiado!';
  }

  const toast = document.querySelector('#toast');

  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');

    if (copyText) {
      copyText.textContent = 'Contato';
    }
  }, 2200);
}

window.copiarEmail = copiarEmail;

$('#menuButton').addEventListener('click', () => {
  const menu = $('#mobileMenu');

  const open =
    !menu.classList.contains('hidden');

  menu.classList.toggle('hidden');

  $('#menuButton').setAttribute(
    'aria-expanded',
    String(!open)
  );

  $('#menuButton i').className = open
    ? 'fa-solid fa-bars'
    : 'fa-solid fa-xmark';
});

$$('#mobileMenu a').forEach(link => {
  link.addEventListener('click', () => {
    $('#mobileMenu').classList.add('hidden');

    $('#menuButton').setAttribute(
      'aria-expanded',
      'false'
    );

    $('#menuButton i').className =
      'fa-solid fa-bars';
  });
});

$$('.experience-trigger').forEach(button => {
  button.addEventListener('click', () => {
    const card =
      button.closest('.experience-card');

    const open =
      card.classList.toggle('open');

    button.setAttribute(
      'aria-expanded',
      String(open)
    );
  });
});

$$('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    $$('.filter-btn').forEach(item => {
      item.classList.remove('active');
    });

    button.classList.add('active');

    filteredCourses =
      button.dataset.filter === 'all'
        ? [...courses]
        : courses.filter(course =>
            course.category === button.dataset.filter
          );

    renderCourses();
  });
});

$('#prevCourse').addEventListener(
  'click',
  () => moveCarousel(-1)
);

$('#nextCourse').addEventListener(
  'click',
  () => moveCarousel(1)
);

track.addEventListener(
  'scroll',
  updateCarousel,
  { passive: true }
);

window.addEventListener(
  'resize',
  updateCarousel
);

$$('[data-close-modal]').forEach(element => {
  element.addEventListener(
    'click',
    closeCourse
  );
});

document.addEventListener('keydown', event => {
  if (
    event.key === 'Escape' &&
    $('#courseModal').classList.contains('open')
  ) {
    closeCourse();
  }
});

const revealObserver =
  new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08
  });

$$('.reveal').forEach(element => {
  revealObserver.observe(element);
});

const sections =
  $$('main section[id]');

const navObserver =
  new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        $$('.nav-link').forEach(link => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') ===
              `#${entry.target.id}`
          );
        });
      }
    });
  }, {
    rootMargin: '-35% 0px -55%'
  });

sections.forEach(section => {
  navObserver.observe(section);
});

const canvas = $('#bgCanvas');

if (
  canvas &&
  !window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches
) {
  const ctx = canvas.getContext('2d');

  let width = 0;
  let height = 0;
  let particles = [];
  let animationId;

  const makeParticles = () =>
    Array.from({
      length: Math.min(
        42,
        Math.floor(width / 28)
      )
    }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 1.2 + 0.5
    }));

  const resize = () => {
    const dpr = Math.min(
      window.devicePixelRatio || 1,
      1.5
    );

    width = innerWidth;
    height = innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.setTransform(
      dpr,
      0,
      0,
      dpr,
      0,
      0
    );

    particles = makeParticles();
  };

  const animate = () => {
    ctx.clearRect(
      0,
      0,
      width,
      height
    );

    particles.forEach((particle, index) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (
        particle.x < 0 ||
        particle.x > width
      ) {
        particle.vx *= -1;
      }

      if (
        particle.y < 0 ||
        particle.y > height
      ) {
        particle.vy *= -1;
      }

      ctx.fillStyle =
        'rgba(52, 211, 153, 0.32)';

      ctx.beginPath();

      ctx.arc(
        particle.x,
        particle.y,
        particle.r,
        0,
        Math.PI * 2
      );

      ctx.fill();

      for (
        let comparisonIndex = index + 1;
        comparisonIndex < particles.length;
        comparisonIndex++
      ) {
        const comparisonParticle =
          particles[comparisonIndex];

        const distance = Math.hypot(
          particle.x - comparisonParticle.x,
          particle.y - comparisonParticle.y
        );

        if (distance < 115) {
          ctx.strokeStyle =
            `rgba(16, 185, 129, ${
              0.045 * (1 - distance / 115)
            })`;

          ctx.beginPath();

          ctx.moveTo(
            particle.x,
            particle.y
          );

          ctx.lineTo(
            comparisonParticle.x,
            comparisonParticle.y
          );

          ctx.stroke();
        }
      }
    });

    animationId =
      requestAnimationFrame(animate);
  };

  let resizeTimer;

  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);

    resizeTimer =
      setTimeout(resize, 150);
  });

  document.addEventListener(
    'visibilitychange',
    () => {
      if (document.hidden) {
        cancelAnimationFrame(animationId);
      } else {
        animate();
      }
    }
  );

  resize();
  animate();
}

$('#currentYear').textContent =
  new Date().getFullYear();

renderCourses();