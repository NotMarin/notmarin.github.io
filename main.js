(() => {
  const THEME_STORAGE_KEY = "theme";
  const LANGUAGE_STORAGE_KEY = "language";
  const root = document.documentElement;
  const themeButtons = Array.from(document.querySelectorAll("[data-theme-toggle]"));
  const languageButtons = Array.from(document.querySelectorAll("[data-language-toggle]"));
  const mobileMenuToggle = document.querySelector("[data-mobile-menu-toggle]");
  const mobileMenuPanel = document.querySelector("[data-mobile-menu-panel]");
  const cvDownloadLink = document.querySelector("[data-cv-download]");
  const layer = document.getElementById("mouse-effect-layer");
  const desktopNavTrack = document.querySelector("[data-desktop-nav-track]");
  const desktopNavPill = document.querySelector("[data-desktop-nav-pill]");
  const desktopNavLinks = Array.from(document.querySelectorAll("[data-desktop-nav-link]"));

  const translations = {
    en: {
      siteTitle: "MarinDev Portfolio",
      toggleTheme: "Toggle theme",
      toggleLanguage: "Switch language",
      toggleMenu: "Toggle menu",
      navHome: "Home",
      navAbout: "About",
      navProjects: "Projects",
      navSkills: "Skills",
      navContact: "Contact",
      heroTag: "FRONTEND DEVELOPER",
      heroHeadingLead: "From",
      heroHeadingAccent1: "design",
      heroHeadingMid: "to",
      heroHeadingAccent2: "deployment",
      heroParagraphStart: "I'm",
      heroParagraphAfterName: ", Next.js + TypeScript specialist.",
      heroParagraphSecondLine:
        "Dedicated to building high-performance, user-centric web applications.",
      heroCtaProjects: "Projects",
      heroCtaCv: "Download CV",
      aboutTitle: "About",
      aboutTitleAccent: "The Developer",
      aboutDescription:
        "I’m Frontend Developer specializing in TypeScript and building high-performance, scalable applications with React and Next.js. I craft responsive, user-centric interfaces and design reusable component systems to ensure consistency and maintainability. Focused on clean code and performance, I optimize rendering, manage state efficiently, and integrate APIs using GraphQL and REST to deliver robust, production-ready solutions.",
      aboutYearsExperience: "Years Experience",
      aboutEnglishLevel: "English",
      aboutWorkedProjects: "Production Projects",
      navExperience: "Experience",
      experienceEyebrow: "CAREER PATH",
      experienceTitleLead: "Experience",
      experienceTitleAccent: "Timeline",
      experienceIntro:
        "A quick view of how I evolved from frontend foundations to shipping production-ready web products.",
      // Experience Timeline Items
      experienceJobTitle1: "Frontend Developer",
      experienceCompany1: "Amatista Team",
      experiencePeriod1: "May 2024 - March 2026",
      experienceListItem1:
        "Component library development with shadcn/ui distributed via GitHub Packages.",
      experienceListItem2: "GraphQL and REST API integration.",
      experienceListItem3: "Global state management with Zustand.",
      experienceListItem4: "Performance optimization with 20% load time reduction.",
      experienceListItem5: "Unit testing with Jest and documentation with Storybook.",
      experienceChip1: "Amatista Team",
      experienceJobTitle2: "Frontend Development Beginnings",
      experienceChip2: "Technical Learning",
      experiencePeriod2: "2023",
      experienceDescription2:
        "Started with personal projects and online courses, learning HTML, CSS, JavaScript and React to build interactive web interfaces.",
      experienceJobTitle3: "Systems Engineering and Computing",
      experienceChip3: "Education",
      experiencePeriod3: "February 2022 - Present",
      experienceDescription3:
        "Training in software engineering fundamentals, algorithms, computer architecture, artificial intelligence and distributed systems at Technological University of Pereira.",
      // Projects Section
      projectsEyebrow: "Portfolio",
      projectsTitleLead: "Featured",
      projectsTitleAccent: "Projects",
      projectsIntro: "A selection of projects that demonstrate my skills in frontend development.",
      projectsTitle1: "FlyLogixs",
      projectsDesc1:
        "Flight management web app for real-time route tracking, status monitoring, and operational insights through a fast, modern, and user-friendly interface.",
      projectsTitle2: "Dispatch Algorithm",
      projectsDesc2:
        "Dispatching algorithms visualization tool for analyzing scheduling strategies, task prioritization, and performance through interactive simulations.",
      projectsTitle3: "PsyTrack",
      projectsDesc3:
        "Mental health tracking and support app for monitoring mood, managing emotional states, and providing structured psychological guidance through a clean, user-focused interface.",
      projectsButtonLiveDemo: "Live Demo",
      projectsButtonSource1: "Source",
      projectsButtonSource2: "Source",
      // Skills Section
      skillsEyebrow: "CORE STACK",
      skillsTitleLead: "Skills",
      skillsTitleAccent: "Toolkit",
      skillsIntro: "Technologies I use to design, build and ship robust frontend products.",
      skillsCardTitle1: "Frontend",
      skillsCardDesc1:
        "Interfaces focused on performance, accessibility and maintainable architecture.",
      skillsCardTitle2: "APIs And Data",
      skillsCardDesc2:
        "Integration of modern services for reliable data flows and production deployments.",
      skillsCardTitle3: "Tooling And Quality",
      skillsCardDesc3:
        "Workflow optimized for collaboration, testing and clean iterative delivery.",
      // Contact Section
      contactEyebrow: "LET'S BUILD SOMETHING",
      contactTitleLead: "Contact",
      contactTitleAccent: "Section",
      contactIntro: "Have a project in mind? Send me a message and let's talk.",
      contactFieldName: "Name",
      contactFieldNamePlaceholder: "Your name",
      contactFieldEmail: "Email",
      contactFieldEmailPlaceholder: "you@example.com",
      contactFieldMessage: "Message",
      contactFieldMessagePlaceholder: "Tell me about your project",
      contactButtonSend: "Send Message",
      contactStatusIdle: "Fill the form and send your message.",
      contactStatusInvalid: "Complete all fields correctly before sending.",
      contactStatusSending: "Sending message...",
      contactStatusSuccess: "Message sent successfully. I will get back to you soon.",
      contactStatusError: "There was an error sending your message. Please try again.",
      contactDirectTitle: "DIRECT CONTACT",
      contactEmailLabel: "Email",
      contactLocationLabel: "Location",
      contactSocialTitle: "SOCIAL",
      contactGithubAria: "GitHub profile",
      contactLinkedinAria: "LinkedIn profile",
      footerSubtitle: "Frontend experiences built with performance and intention.",
      footerNavTitle: "Navigation",
      footerConnectTitle: "Connect",
      footerCopy: "Made by Santiago Marin.",
      footerRights: "All rights reserved.",
    },
    es: {
      siteTitle: "Portafolio de MarinDev",
      toggleTheme: "Cambiar tema",
      toggleLanguage: "Cambiar idioma",
      toggleMenu: "Abrir menú",
      navHome: "Inicio",
      navAbout: "Sobre mí",
      navProjects: "Proyectos",
      navSkills: "Habilidades",
      navContact: "Contacto",
      heroTag: "DESARROLLADOR FRONTEND",
      heroHeadingLead: "Del",
      heroHeadingAccent1: "diseño",
      heroHeadingMid: "al",
      heroHeadingAccent2: "despliegue",
      heroParagraphStart: "Soy",
      heroParagraphAfterName: ", especialista en Next.js + TypeScript.",
      heroParagraphSecondLine:
        "Enfocado en construir aplicaciones web de alto rendimiento centradas en el usuario.",
      heroCtaProjects: "Proyectos",
      heroCtaCv: "Descargar CV",
      aboutTitle: "Sobre",
      aboutTitleAccent: "El Desarrollador",
      aboutDescription:
        "Soy desarrollador frontend especializado en TypeScript y en la construcción de aplicaciones escalables y de alto rendimiento con React y Next.js. Creo interfaces responsivas centradas en el usuario y diseño sistemas de componentes reutilizables para mantener consistencia y mantenibilidad. Enfocado en código limpio y performance, optimizo renderizado, gestiono el estado de forma eficiente e integro APIs GraphQL y REST para entregar soluciones robustas listas para producción.",
      aboutYearsExperience: "Años de experiencia",
      aboutEnglishLevel: "Inglés",
      aboutWorkedProjects: "Proyectos de producción",
      navExperience: "Experiencia",
      experienceEyebrow: "CAMINO PROFESIONAL",
      experienceTitleLead: "Experiencia",
      experienceTitleAccent: "Profesional",
      experienceIntro:
        "Una vista rápida de como evolucioné desde bases frontend hasta entregar productos web listos para producción.",
      // Experience Timeline Items
      experienceJobTitle1: "Desarrollador Frontend",
      experienceCompany1: "Amatista Team",
      experiencePeriod1: "Mayo 2024 - Marzo 2026",
      experienceListItem1:
        "Desarrollo de librería de componentes con shadcn/ui distribuida por GitHub Packages.",
      experienceListItem2: "Integración de APIs GraphQL y REST.",
      experienceListItem3: "Gestión de estado global con Zustand.",
      experienceListItem4: "Optimización de rendimiento con reducción de tiempos de carga del 20%.",
      experienceListItem5: "Testing unitario con Jest y documentación con Storybook.",
      experienceChip1: "Amatista Team",
      experienceJobTitle2: "Comienzos En Desarrollo Frontend",
      experienceChip2: "Aprendizaje técnico",
      experiencePeriod2: "2023",
      experienceDescription2:
        "Empecé con proyectos personales y cursos online, aprendiendo HTML, CSS, JavaScript y React para construir interfaces web interactivas.",
      experienceJobTitle3: "Ingeniería De Sistemas Y Computación",
      experienceChip3: "Educación",
      experiencePeriod3: "Febrero 2022 - Actualidad",
      experienceDescription3:
        "Formación en fundamentos de ingeniería de software, algoritmos, arquitectura de computadores, inteligencia artificial y sistemas distribuidos en la Universidad Tecnológica de Pereira.",
      // Projects Section
      projectsEyebrow: "Portafolio",
      projectsTitleLead: "Proyectos",
      projectsTitleAccent: "Destacados",
      projectsIntro:
        "Una selección de proyectos que demuestran mis habilidades en desarrollo frontend.",
      projectsTitle1: "FlyLogixs",
      projectsDesc1:
        "Aplicación web de gestión de vuelos para seguimiento de rutas en tiempo real, monitoreo de estado e información operativa a través de una interfaz rápida, moderna y fácil de usar.",
      projectsTitle2: "Dispatch Algorithm",
      projectsDesc2:
        "Herramienta de visualización de algoritmos de distribución para analizar estrategias de programación, priorización de tareas y rendimiento a través de simulaciones interactivas.",
      projectsTitle3: "PsyTrack",
      projectsDesc3:
        "Aplicación de seguimiento y apoyo de salud mental para monitorear el estado de ánimo, gestionar estados emocionales y proporcionar orientación psicológica estructurada a través de una interfaz limpia y centrada en el usuario.",
      projectsButtonLiveDemo: "Demo en Vivo",
      projectsButtonSource1: "Código",
      projectsButtonSource2: "Código",
      // Skills Section
      skillsEyebrow: "STACK PRINCIPAL",
      skillsTitleLead: "Habilidades",
      skillsTitleAccent: "Técnicas",
      skillsIntro:
        "Tecnologías que uso para diseñar, construir y desplegar productos frontend robustos.",
      skillsCardTitle1: "Frontend",
      skillsCardDesc1:
        "Interfaces enfocadas en rendimiento, accesibilidad y arquitectura mantenible.",
      skillsCardTitle2: "APIs Y Datos",
      skillsCardDesc2:
        "Integración de servicios modernos para flujos de datos confiables y despliegues a producción.",
      skillsCardTitle3: "Herramientas Y Calidad",
      skillsCardDesc3:
        "Flujo de trabajo optimizado para colaboración, pruebas y entrega iterativa limpia.",
      // Contact Section
      contactEyebrow: "CONSTRUYAMOS ALGO",
      contactTitleLead: "Sección",
      contactTitleAccent: "Contacto",
      contactIntro: "¿Tienes un proyecto en mente? Envíame un mensaje y lo hablamos.",
      contactFieldName: "Nombre",
      contactFieldNamePlaceholder: "Tu nombre",
      contactFieldEmail: "Correo",
      contactFieldEmailPlaceholder: "tu@correo.com",
      contactFieldMessage: "Mensaje",
      contactFieldMessagePlaceholder: "Cuéntame sobre tu proyecto",
      contactButtonSend: "Enviar Mensaje",
      contactStatusIdle: "Completa el formulario y envía tu mensaje.",
      contactStatusInvalid: "Completa correctamente todos los campos antes de enviar.",
      contactStatusSending: "Enviando mensaje...",
      contactStatusSuccess: "Mensaje enviado con exito. Te responderé pronto.",
      contactStatusError: "Hubo un error al enviar tu mensaje. Intentalo de nuevo.",
      contactDirectTitle: "CONTACTO DIRECTO",
      contactEmailLabel: "Correo",
      contactLocationLabel: "Ubicación",
      contactSocialTitle: "SOCIAL",
      contactGithubAria: "Perfil de GitHub",
      contactLinkedinAria: "Perfil de LinkedIn",
      footerSubtitle: "Experiencias frontend construidas con rendimiento e intencion.",
      footerNavTitle: "Navegación",
      footerConnectTitle: "Conecta",
      footerCopy: "Hecho por Santiago Marin.",
      footerRights: "Todos los derechos reservados.",
    },
  };

  let contactStatusI18nKey = "contactStatusIdle";
  let contactButtonI18nKey = "contactButtonSend";

  const syncLanguageButtons = (language) => {
    const nextLanguage = language === "es" ? "en" : "es";

    languageButtons.forEach((button) => {
      const label = button.querySelector("[data-language-toggle-label]");
      if (label) {
        label.textContent = nextLanguage.toUpperCase();
      }
    });
  };

  const translate = (language, key) => {
    return translations[language]?.[key] ?? translations.en[key] ?? key;
  };

  const applyTranslations = (language) => {
    root.lang = language;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (!key) return;
      element.textContent = translate(language, key);
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      const key = element.getAttribute("data-i18n-aria-label");
      if (!key) return;
      element.setAttribute("aria-label", translate(language, key));
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.getAttribute("data-i18n-placeholder");
      if (!key) return;
      if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
        element.setAttribute("placeholder", translate(language, key));
      }
    });

    if (cvDownloadLink) {
      const isSpanish = language === "es";
      cvDownloadLink.setAttribute(
        "href",
        isSpanish
          ? "/public/cv/CV_Santiago_Marin_Español.pdf"
          : "/public/cv/CV_Santiago_Marin_English.pdf"
      );
      cvDownloadLink.setAttribute(
        "download",
        isSpanish ? "CV_Santiago_Marin_Español.pdf" : "CV_Santiago_Marin_English.pdf"
      );
    }

    if (window.syncDesktopNavPill) {
      requestAnimationFrame(() => {
        window.syncDesktopNavPill();
      });
    }

    if (window.syncContactFormCopy) {
      window.syncContactFormCopy();
    }
  };

  const getInitialLanguage = () => {
    const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (storedLanguage === "es" || storedLanguage === "en") {
      return storedLanguage;
    }

    const browserLanguage = navigator.language?.slice(0, 2).toLowerCase();
    return browserLanguage === "es" ? "es" : "en";
  };

  const setLanguage = (language, persist = true) => {
    const normalizedLanguage = language === "es" ? "es" : "en";
    applyTranslations(normalizedLanguage);
    syncLanguageButtons(normalizedLanguage);

    if (persist) {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, normalizedLanguage);
    }
  };

  const toggleLanguage = () => {
    const currentLanguage = root.lang === "es" ? "es" : "en";
    const nextLanguage = currentLanguage === "es" ? "en" : "es";
    setLanguage(nextLanguage);
  };

  window.setLanguage = (language) => {
    setLanguage(language);
  };

  const syncThemeIcons = (theme) => {
    const isDark = theme === "dark";

    themeButtons.forEach((button) => {
      const moonIcon = button.querySelector(".lucide-moon");
      const sunIcon = button.querySelector(".lucide-sun");

      const moonContainer = moonIcon?.parentElement;
      const sunContainer = sunIcon?.parentElement;

      if (moonContainer) {
        moonContainer.style.opacity = isDark ? "1" : "0";
        moonContainer.style.transform = isDark ? "none" : "scale(0) rotate(180deg)";
      }

      if (sunContainer) {
        sunContainer.style.opacity = isDark ? "0" : "1";
        sunContainer.style.transform = isDark ? "scale(0) rotate(-180deg)" : "none";
      }
    });
  };

  const setTheme = (theme, persist = true) => {
    root.setAttribute("data-theme", theme);
    if (persist) {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    }
    syncThemeIcons(theme);
  };

  const getInitialTheme = () => {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme === "dark" || storedTheme === "light") {
      return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const toggleTheme = () => {
    const currentTheme = root.getAttribute("data-theme") || "dark";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  setLanguage(getInitialLanguage(), false);
  setTheme(getInitialTheme(), false);

  languageButtons.forEach((button) => {
    button.addEventListener("click", toggleLanguage);
  });

  themeButtons.forEach((button) => {
    button.addEventListener("click", toggleTheme);
  });

  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
  systemTheme.addEventListener("change", (event) => {
    if (localStorage.getItem(THEME_STORAGE_KEY)) return;
    setTheme(event.matches ? "dark" : "light", false);
  });

  if (mobileMenuToggle && mobileMenuPanel) {
    const menuLines = Array.from(mobileMenuToggle.querySelectorAll("span"));
    let isMobileMenuOpen = false;

    const setMobileMenuState = (open) => {
      isMobileMenuOpen = open;
      mobileMenuToggle.setAttribute("aria-expanded", String(open));
      mobileMenuPanel.setAttribute("data-open", String(open));

      if (open) {
        mobileMenuPanel.style.height = `${mobileMenuPanel.scrollHeight}px`;
        mobileMenuPanel.style.opacity = "1";
        mobileMenuPanel.style.transform = "translateY(0)";
        mobileMenuPanel.style.pointerEvents = "auto";
      } else {
        mobileMenuPanel.style.height = "0px";
        mobileMenuPanel.style.opacity = "0";
        mobileMenuPanel.style.transform = "translateY(-8px)";
        mobileMenuPanel.style.pointerEvents = "none";
      }

      if (menuLines.length >= 3) {
        const [topLine, middleLine, bottomLine] = menuLines;

        topLine.style.transform = open ? "translateY(6px) rotate(45deg)" : "none";
        middleLine.style.opacity = open ? "0" : "1";
        bottomLine.style.transform = open ? "translateY(-6px) rotate(-45deg)" : "none";
      }
    };

    const toggleMobileMenu = () => {
      setMobileMenuState(!isMobileMenuOpen);
    };

    mobileMenuToggle.addEventListener("click", toggleMobileMenu);

    mobileMenuPanel.addEventListener("click", (event) => {
      const target = event.target;
      if (
        target instanceof Element &&
        target.closest("a, button") !== null &&
        target.closest("[data-mobile-menu-panel]") === mobileMenuPanel
      ) {
        setMobileMenuState(false);
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuState(false);
      } else if (isMobileMenuOpen) {
        mobileMenuPanel.style.height = `${mobileMenuPanel.scrollHeight}px`;
      }
    });
  }

  const navSectionLinks = Array.from(document.querySelectorAll("header nav a[href*='#']"));

  if (navSectionLinks.length > 0) {
    const seenSectionIds = new Set();
    const navSections = [];

    navSectionLinks.forEach((link) => {
      const href = link.getAttribute("href") || "";
      const hashIndex = href.indexOf("#");
      if (hashIndex < 0) return;

      const sectionId = href.slice(hashIndex + 1).trim();
      if (!sectionId || seenSectionIds.has(sectionId)) return;

      const sectionElement = document.getElementById(sectionId);
      if (!sectionElement) return;

      seenSectionIds.add(sectionId);
      navSections.push({ id: sectionId, element: sectionElement });
    });

    const navSectionsById = new Map(navSections.map((section) => [section.id, section.element]));
    const prefersReducedMotionNav = window.matchMedia("(prefers-reduced-motion: reduce)");

    const NAV_PILL_TRANSITION_MS = 360;
    const NAV_SCROLL_MAX_MS = 760;
    const NAV_SCROLL_SETTLE_PX = 2;
    const NAV_SCROLL_LOCK_BUFFER_MS = 180;

    let navScrollAnimationFrameId = null;
    let navScrollAnimationToken = 0;
    let scrollSpyLock = null;

    const easeOutNavScroll = (progress) => {
      return 1 - (1 - progress) ** 3;
    };

    const getNavScrollDuration = (distance) => {
      const scaledDuration = NAV_PILL_TRANSITION_MS + Math.abs(distance) * 0.12;
      return Math.min(NAV_SCROLL_MAX_MS, Math.max(NAV_PILL_TRANSITION_MS, scaledDuration));
    };

    const getSectionScrollTop = (sectionElement) => {
      const absoluteTop = window.scrollY + sectionElement.getBoundingClientRect().top;
      return Math.max(0, Math.round(absoluteTop));
    };

    const releaseScrollSpyLock = () => {
      scrollSpyLock = null;
    };

    const hasSettledScrollSpyLock = () => {
      if (!scrollSpyLock) return true;

      const distanceToTarget = Math.abs(window.scrollY - scrollSpyLock.targetTop);
      const reachedTarget = distanceToTarget <= NAV_SCROLL_SETTLE_PX;
      const timedOut = performance.now() >= scrollSpyLock.unlockAt;

      if (!reachedTarget && !timedOut) {
        return false;
      }

      releaseScrollSpyLock();
      return true;
    };

    const cancelNavScrollAnimation = () => {
      if (navScrollAnimationFrameId !== null) {
        cancelAnimationFrame(navScrollAnimationFrameId);
        navScrollAnimationFrameId = null;
      }
      navScrollAnimationToken += 1;
    };

    const animateScrollToSection = (sectionId) => {
      const sectionElement = navSectionsById.get(sectionId);
      if (!sectionElement) return;

      const targetTop = getSectionScrollTop(sectionElement);

      cancelNavScrollAnimation();

      if (prefersReducedMotionNav.matches) {
        window.scrollTo(0, targetTop);
        releaseScrollSpyLock();
        return;
      }

      const startTop = window.scrollY;
      const distance = targetTop - startTop;

      if (Math.abs(distance) <= NAV_SCROLL_SETTLE_PX) {
        window.scrollTo(0, targetTop);
        releaseScrollSpyLock();
        return;
      }

      const duration = getNavScrollDuration(distance);
      const animationToken = navScrollAnimationToken;
      const startTime = performance.now();

      scrollSpyLock = {
        sectionId,
        targetTop,
        unlockAt: startTime + duration + NAV_SCROLL_LOCK_BUFFER_MS,
      };

      const step = (now) => {
        if (animationToken !== navScrollAnimationToken) return;

        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);
        const easedProgress = easeOutNavScroll(progress);

        window.scrollTo(0, startTop + distance * easedProgress);

        if (progress < 1) {
          navScrollAnimationFrameId = requestAnimationFrame(step);
          return;
        }

        window.scrollTo(0, targetTop);
        navScrollAnimationFrameId = null;
        releaseScrollSpyLock();
        scheduleScrollSpyUpdate();
      };

      navScrollAnimationFrameId = requestAnimationFrame(step);
    };

    const moveDesktopPillToLink = (link, animate = true) => {
      if (!desktopNavTrack || !desktopNavPill || !(link instanceof Element)) return;
      if (desktopNavTrack.offsetParent === null || link.offsetParent === null) return;

      const trackBounds = desktopNavTrack.getBoundingClientRect();
      const linkBounds = link.getBoundingClientRect();

      const x = linkBounds.left - trackBounds.left;
      const width = linkBounds.width;

      if (!animate) {
        desktopNavPill.style.transition = "none";
      } else {
        desktopNavPill.style.transition =
          "transform 360ms cubic-bezier(0.22, 1, 0.36, 1), width 320ms cubic-bezier(0.22, 1, 0.36, 1), opacity 180ms ease";
      }

      desktopNavPill.style.width = `${width}px`;
      desktopNavPill.style.transform = `translate3d(${x}px, -50%, 0)`;
      desktopNavPill.style.opacity = "1";

      if (!animate) {
        requestAnimationFrame(() => {
          desktopNavPill.style.transition =
            "transform 360ms cubic-bezier(0.22, 1, 0.36, 1), width 320ms cubic-bezier(0.22, 1, 0.36, 1), opacity 180ms ease";
        });
      }
    };

    window.syncDesktopNavPill = () => {
      const activeDesktopLink = desktopNavLinks.find((link) => {
        return link.getAttribute("aria-current") === "page";
      });

      if (!activeDesktopLink) return;
      moveDesktopPillToLink(activeDesktopLink, false);
    };

    const setNavLinkState = (activeSectionId) => {
      let activeDesktopLink = null;

      navSectionLinks.forEach((link) => {
        const href = link.getAttribute("href") || "";
        const hashIndex = href.indexOf("#");
        const sectionId = hashIndex >= 0 ? href.slice(hashIndex + 1).trim() : "";
        const isActive = sectionId !== "" && sectionId === activeSectionId;
        const isDesktopLink = link.matches("[data-desktop-nav-link]");

        if (isActive) {
          link.style.color = "var(--foreground)";
          link.style.opacity = "1";
          link.style.background = isDesktopLink
            ? "transparent"
            : "color-mix(in srgb, var(--accent) 16%, transparent)";
          link.setAttribute("aria-current", "page");

          if (isDesktopLink) {
            activeDesktopLink = link;
          }
        } else {
          link.style.color = "var(--muted)";
          link.style.opacity = isDesktopLink ? "1" : "0.8";
          link.style.background = "transparent";
          link.removeAttribute("aria-current");
        }
      });

      if (activeDesktopLink) {
        moveDesktopPillToLink(activeDesktopLink);
      }
    };

    const findActiveSectionId = () => {
      if (navSections.length === 0) return null;

      const activationLine = window.innerHeight * 0.38;
      let fallbackSectionId = navSections[0].id;
      let minDistance = Number.POSITIVE_INFINITY;

      for (const section of navSections) {
        const bounds = section.element.getBoundingClientRect();
        const containsLine = bounds.top <= activationLine && bounds.bottom >= activationLine;

        if (containsLine) {
          return section.id;
        }

        const distanceToLine = Math.abs(bounds.top - activationLine);
        if (distanceToLine < minDistance) {
          minDistance = distanceToLine;
          fallbackSectionId = section.id;
        }
      }

      return fallbackSectionId;
    };

    let activeSectionId = null;
    let scrollSpyRafId = null;

    const updateActiveNavByViewport = () => {
      if (!hasSettledScrollSpyLock()) return;

      const nextSectionId = findActiveSectionId();
      if (!nextSectionId || nextSectionId === activeSectionId) return;
      activeSectionId = nextSectionId;
      setNavLinkState(activeSectionId);
    };

    const scheduleScrollSpyUpdate = () => {
      if (scrollSpyRafId !== null) return;
      scrollSpyRafId = requestAnimationFrame(() => {
        updateActiveNavByViewport();
        scrollSpyRafId = null;
      });
    };

    navSectionLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        const href = link.getAttribute("href") || "";
        const hashIndex = href.indexOf("#");
        const sectionId = hashIndex >= 0 ? href.slice(hashIndex + 1).trim() : "";
        if (!sectionId) return;

        const sectionElement = navSectionsById.get(sectionId);
        if (!sectionElement) return;

        event.preventDefault();

        activeSectionId = sectionId;
        setNavLinkState(activeSectionId);
        animateScrollToSection(sectionId);

        const nextHash = `#${sectionId}`;
        if (window.location.hash !== nextHash) {
          if (history.pushState) {
            history.pushState(null, "", nextHash);
          } else {
            window.location.hash = nextHash;
          }
        }
      });
    });

    window.addEventListener("scroll", scheduleScrollSpyUpdate, { passive: true });
    window.addEventListener("resize", scheduleScrollSpyUpdate);
    scheduleScrollSpyUpdate();
  }

  const sectionRevealItems = Array.from(document.querySelectorAll(".ease-animation"));

  if (sectionRevealItems.length > 0) {
    const prefersReducedMotionSections = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (prefersReducedMotionSections.matches || !("IntersectionObserver" in window)) {
      sectionRevealItems.forEach((item) => {
        if (!(item instanceof Element)) return;
        item.classList.add("is-visible");
      });
    } else {
      const sectionRevealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!(entry.target instanceof Element)) return;
            entry.target.classList.toggle("is-visible", entry.isIntersecting);
          });
        },
        {
          threshold: 0.22,
          rootMargin: "0px 0px -8% 0px",
        }
      );

      sectionRevealItems.forEach((item) => {
        sectionRevealObserver.observe(item);
      });
    }
  }

  const timelineItems = Array.from(document.querySelectorAll("[data-timeline-item]"));

  if (timelineItems.length > 0) {
    const prefersReducedMotionTimeline = window.matchMedia("(prefers-reduced-motion: reduce)");

    const setTimelineItemVisibility = (item, isVisible) => {
      if (!(item instanceof Element)) return;
      item.classList.toggle("is-visible", isVisible);
    };

    if (prefersReducedMotionTimeline.matches || !("IntersectionObserver" in window)) {
      timelineItems.forEach((item) => {
        setTimelineItemVisibility(item, true);
      });
    } else {
      const timelineObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setTimelineItemVisibility(entry.target, entry.isIntersecting);
          });
        },
        {
          threshold: 0.22,
          rootMargin: "0px 0px -8% 0px",
        }
      );

      timelineItems.forEach((item) => {
        timelineObserver.observe(item);
      });
    }
  }

  const projectItems = Array.from(document.querySelectorAll("[data-project-item]"));

  if (projectItems.length > 0) {
    const prefersReducedMotionProjects = window.matchMedia("(prefers-reduced-motion: reduce)");

    const setProjectItemVisibility = (item, index, isVisible) => {
      if (!(item instanceof Element)) return;
      item.style.transitionDelay = isVisible ? `${Math.min(index * 110, 260)}ms` : "0ms";
      item.classList.toggle("opacity-0", !isVisible);
      item.classList.toggle("translate-y-8", !isVisible);
      item.classList.toggle("blur-sm", !isVisible);
      item.classList.toggle("opacity-100", isVisible);
      item.classList.toggle("translate-y-0", isVisible);
      item.classList.toggle("blur-0", isVisible);
    };

    if (prefersReducedMotionProjects.matches || !("IntersectionObserver" in window)) {
      projectItems.forEach((item, index) => {
        setProjectItemVisibility(item, index, true);
      });
    } else {
      const projectObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const index = projectItems.indexOf(entry.target);
            setProjectItemVisibility(entry.target, index < 0 ? 0 : index, entry.isIntersecting);
          });
        },
        {
          threshold: 0.2,
          rootMargin: "0px 0px -10% 0px",
        }
      );

      projectItems.forEach((item) => {
        projectObserver.observe(item);
      });
    }
  }

  const skillItems = Array.from(document.querySelectorAll("[data-skill-item]"));

  if (skillItems.length > 0) {
    const prefersReducedMotionSkills = window.matchMedia("(prefers-reduced-motion: reduce)");

    const setSkillItemVisibility = (item, index, isVisible) => {
      if (!(item instanceof Element)) return;

      const hiddenTranslateClass = item.getAttribute("data-hidden-translate")
        ? item.getAttribute("data-hidden-translate")
        : item.classList.contains("translate-y-6")
          ? "translate-y-6"
          : "translate-y-8";

      if (hiddenTranslateClass) {
        item.setAttribute("data-hidden-translate", hiddenTranslateClass);
      }

      item.style.transitionDelay = isVisible ? `${Math.min(index * 90, 420)}ms` : "0ms";
      item.classList.toggle("opacity-0", !isVisible);
      item.classList.toggle("blur-sm", !isVisible);
      item.classList.toggle("opacity-100", isVisible);
      item.classList.toggle("translate-y-0", isVisible);
      item.classList.toggle("blur-0", isVisible);

      if (hiddenTranslateClass === "translate-y-6") {
        item.classList.toggle("translate-y-6", !isVisible);
        item.classList.remove("translate-y-8");
      } else {
        item.classList.toggle("translate-y-8", !isVisible);
        item.classList.remove("translate-y-6");
      }
    };

    if (prefersReducedMotionSkills.matches || !("IntersectionObserver" in window)) {
      skillItems.forEach((item, index) => {
        setSkillItemVisibility(item, index, true);
      });
    } else {
      const skillsObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const index = skillItems.indexOf(entry.target);
            setSkillItemVisibility(entry.target, index < 0 ? 0 : index, entry.isIntersecting);
          });
        },
        {
          threshold: 0.16,
          rootMargin: "0px 0px -10% 0px",
        }
      );

      skillItems.forEach((item) => {
        skillsObserver.observe(item);
      });
    }
  }

  const contactItems = Array.from(document.querySelectorAll("[data-contact-item]"));

  if (contactItems.length > 0) {
    const prefersReducedMotionContact = window.matchMedia("(prefers-reduced-motion: reduce)");

    const setContactItemVisibility = (item, index, isVisible) => {
      if (!(item instanceof Element)) return;

      const hiddenTranslateClass = item.getAttribute("data-hidden-translate")
        ? item.getAttribute("data-hidden-translate")
        : item.classList.contains("translate-y-6")
          ? "translate-y-6"
          : "translate-y-8";

      if (hiddenTranslateClass) {
        item.setAttribute("data-hidden-translate", hiddenTranslateClass);
      }

      item.style.transitionDelay = isVisible ? `${Math.min(index * 90, 420)}ms` : "0ms";
      item.classList.toggle("opacity-0", !isVisible);
      item.classList.toggle("blur-sm", !isVisible);
      item.classList.toggle("opacity-100", isVisible);
      item.classList.toggle("translate-y-0", isVisible);
      item.classList.toggle("blur-0", isVisible);

      if (hiddenTranslateClass === "translate-y-6") {
        item.classList.toggle("translate-y-6", !isVisible);
        item.classList.remove("translate-y-8");
      } else {
        item.classList.toggle("translate-y-8", !isVisible);
        item.classList.remove("translate-y-6");
      }
    };

    if (prefersReducedMotionContact.matches || !("IntersectionObserver" in window)) {
      contactItems.forEach((item, index) => {
        setContactItemVisibility(item, index, true);
      });
    } else {
      const contactObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const index = contactItems.indexOf(entry.target);
            setContactItemVisibility(entry.target, index < 0 ? 0 : index, entry.isIntersecting);
          });
        },
        {
          threshold: 0.16,
          rootMargin: "0px 0px -10% 0px",
        }
      );

      contactItems.forEach((item) => {
        contactObserver.observe(item);
      });
    }
  }

  const contactForm = document.querySelector("[data-contact-form]");
  const contactStatusElement = document.querySelector("[data-contact-status]");
  const contactSubmitButton = document.querySelector("[data-contact-submit]");
  const contactNameField = document.querySelector("#contact-name");
  const contactEmailField = document.querySelector("#contact-email");
  const contactMessageField = document.querySelector("#contact-message");

  const setContactStatus = (status, i18nKey) => {
    contactStatusI18nKey = i18nKey;

    if (contactStatusElement) {
      contactStatusElement.setAttribute("data-state", status);
      contactStatusElement.textContent = translate(root.lang, i18nKey);
    }
  };

  const setContactButtonCopy = (i18nKey, disabled) => {
    contactButtonI18nKey = i18nKey;
    if (!contactSubmitButton) return;

    contactSubmitButton.disabled = disabled;
    contactSubmitButton.textContent = translate(root.lang, i18nKey);
  };

  const isContactFieldFilled = (field) => {
    if (!(field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement)) return false;
    return field.value.trim().length > 0;
  };

  const isContactNameValid = () => {
    if (!(contactNameField instanceof HTMLInputElement)) return false;
    return contactNameField.value.trim().length >= 2;
  };

  const isContactEmailValid = () => {
    if (!(contactEmailField instanceof HTMLInputElement)) return false;
    const emailValue = contactEmailField.value.trim();
    if (emailValue.length === 0) return false;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
  };

  const isContactMessageValid = () => {
    if (!(contactMessageField instanceof HTMLTextAreaElement)) return false;
    return contactMessageField.value.trim().length >= 10;
  };

  const isContactFormValid = () => {
    return isContactNameValid() && isContactEmailValid() && isContactMessageValid();
  };

  const syncContactSubmitDisabledState = () => {
    if (!contactSubmitButton) return;

    const isValid = isContactFormValid();
    contactSubmitButton.disabled = !isValid;

    if (
      contactStatusI18nKey === "contactStatusSuccess" ||
      contactStatusI18nKey === "contactStatusError"
    ) {
      return;
    }

    const hasSomeInput =
      isContactFieldFilled(contactNameField) ||
      isContactFieldFilled(contactEmailField) ||
      isContactFieldFilled(contactMessageField);

    if (isValid) {
      setContactStatus("idle", "contactStatusIdle");
      return;
    }

    if (hasSomeInput) {
      setContactStatus("error", "contactStatusInvalid");
    } else {
      setContactStatus("idle", "contactStatusIdle");
    }
  };

  window.syncContactFormCopy = () => {
    if (contactStatusElement) {
      contactStatusElement.textContent = translate(root.lang, contactStatusI18nKey);
    }

    if (contactSubmitButton) {
      contactSubmitButton.textContent = translate(root.lang, contactButtonI18nKey);
    }
  };

  if (contactForm instanceof HTMLFormElement) {
    let resetStatusTimeoutId = null;

    const watchedFields = [contactNameField, contactEmailField, contactMessageField];
    watchedFields.forEach((field) => {
      if (!(field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement)) return;

      field.addEventListener("input", () => {
        syncContactSubmitDisabledState();
      });

      field.addEventListener("blur", () => {
        syncContactSubmitDisabledState();
      });
    });

    syncContactSubmitDisabledState();

    contactForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      if (resetStatusTimeoutId !== null) {
        clearTimeout(resetStatusTimeoutId);
        resetStatusTimeoutId = null;
      }

      if (!isContactFormValid()) {
        setContactButtonCopy("contactButtonSend", true);
        syncContactSubmitDisabledState();
        setContactStatus("error", "contactStatusInvalid");
        return;
      }

      setContactButtonCopy("contactStatusSending", true);
      setContactStatus("sending", "contactStatusSending");

      try {
        const formData = new FormData(contactForm);
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Web3Forms request failed");
        }

        const payload = await response.json();
        if (!payload.success) {
          throw new Error("Web3Forms returned an unsuccessful response");
        }

        contactForm.reset();
        setContactStatus("success", "contactStatusSuccess");
      } catch {
        setContactStatus("error", "contactStatusError");
      } finally {
        setContactButtonCopy("contactButtonSend", !isContactFormValid());
        resetStatusTimeoutId = window.setTimeout(() => {
          syncContactSubmitDisabledState();
          resetStatusTimeoutId = null;
        }, 4600);
      }
    });
  }

  if (!layer) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = 0;
  let rafId = null;

  const applyMouseVars = () => {
    layer.style.setProperty("--mouse-x", `${mouseX}px`);
    layer.style.setProperty("--mouse-y", `${mouseY}px`);
    rafId = null;
  };

  const scheduleUpdate = () => {
    if (rafId !== null) return;
    rafId = requestAnimationFrame(applyMouseVars);
  };

  window.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    scheduleUpdate();
  });

  window.addEventListener("touchmove", (event) => {
    const touch = event.touches[0];
    if (!touch) return;
    mouseX = touch.clientX;
    mouseY = touch.clientY;
    scheduleUpdate();
  });

  scheduleUpdate();

  const tiltCards = Array.from(document.querySelectorAll("[data-parallax-tilt]"));
  if (tiltCards.length === 0) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const clamp = (value, min, max) => {
    return Math.min(max, Math.max(min, value));
  };

  const getMaxTilt = () => {
    if (window.innerWidth < 640) return 5;
    if (window.innerWidth < 1024) return 7;
    return 9;
  };

  const resetTilt = (card) => {
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
  };

  const setCardGlareFromViewport = (card, pointerX, pointerY) => {
    const bounds = card.getBoundingClientRect();
    if (bounds.width === 0 || bounds.height === 0) return;

    const px = clamp((pointerX - bounds.left) / bounds.width, 0, 1);
    const py = clamp((pointerY - bounds.top) / bounds.height, 0, 1);

    card.style.setProperty("--glare-x", `${(px * 100).toFixed(1)}%`);
    card.style.setProperty("--glare-y", `${(py * 100).toFixed(1)}%`);
  };

  const syncCardsGlareWithPointer = (pointerX, pointerY) => {
    tiltCards.forEach((card) => {
      setCardGlareFromViewport(card, pointerX, pointerY);
    });
  };

  if (prefersReducedMotion) {
    syncCardsGlareWithPointer(window.innerWidth / 2, window.innerHeight / 3);
    return;
  }

  const createTiltController = (card) => {
    let currentTiltX = 0;
    let currentTiltY = 0;
    let targetTiltX = 0;
    let targetTiltY = 0;
    let currentGlareX = 50;
    let currentGlareY = 50;
    let targetGlareX = 50;
    let targetGlareY = 50;
    let isInteracting = false;
    let cardRafId = null;

    const epsilon = 0.02;

    const lerp = (from, to, factor) => {
      return from + (to - from) * factor;
    };

    const flushCardStyles = () => {
      const tiltEase = isInteracting ? 0.2 : 0.13;
      const glareEase = isInteracting ? 0.22 : 0.15;

      currentTiltX = lerp(currentTiltX, targetTiltX, tiltEase);
      currentTiltY = lerp(currentTiltY, targetTiltY, tiltEase);
      currentGlareX = lerp(currentGlareX, targetGlareX, glareEase);
      currentGlareY = lerp(currentGlareY, targetGlareY, glareEase);

      card.style.setProperty("--tilt-x", `${currentTiltX.toFixed(2)}deg`);
      card.style.setProperty("--tilt-y", `${currentTiltY.toFixed(2)}deg`);
      card.style.setProperty("--glare-x", `${currentGlareX.toFixed(1)}%`);
      card.style.setProperty("--glare-y", `${currentGlareY.toFixed(1)}%`);

      const tiltSettled =
        Math.abs(currentTiltX - targetTiltX) < epsilon &&
        Math.abs(currentTiltY - targetTiltY) < epsilon;

      const glareSettled =
        Math.abs(currentGlareX - targetGlareX) < 0.05 &&
        Math.abs(currentGlareY - targetGlareY) < 0.05;

      if (tiltSettled && glareSettled && !isInteracting) {
        card.removeAttribute("data-tilting");
        cardRafId = null;
        return;
      }

      cardRafId = requestAnimationFrame(flushCardStyles);
    };

    const scheduleCardStyles = () => {
      if (cardRafId !== null) return;
      cardRafId = requestAnimationFrame(flushCardStyles);
    };

    const updateCardFromPointer = (pointerX, pointerY) => {
      const bounds = card.getBoundingClientRect();
      if (bounds.width === 0 || bounds.height === 0) return;

      const px = clamp((pointerX - bounds.left) / bounds.width, 0, 1);
      const py = clamp((pointerY - bounds.top) / bounds.height, 0, 1);
      const maxTilt = getMaxTilt();

      targetTiltY = (px - 0.5) * (maxTilt * 2);
      targetTiltX = (0.5 - py) * (maxTilt * 2);
      targetGlareX = px * 100;
      targetGlareY = py * 100;
      scheduleCardStyles();
    };

    const setIdleState = () => {
      isInteracting = false;
      targetTiltX = 0;
      targetTiltY = 0;
      scheduleCardStyles();
    };

    resetTilt(card);
    setCardGlareFromViewport(card, mouseX, mouseY);

    card.addEventListener("pointerenter", (event) => {
      isInteracting = true;
      card.setAttribute("data-tilting", "true");
      updateCardFromPointer(event.clientX, event.clientY);
    });

    card.addEventListener("pointermove", (event) => {
      isInteracting = true;
      card.setAttribute("data-tilting", "true");
      updateCardFromPointer(event.clientX, event.clientY);
    });

    card.addEventListener("pointerleave", setIdleState);
    card.addEventListener("pointerup", setIdleState);
    card.addEventListener("pointercancel", setIdleState);

    card.addEventListener(
      "touchmove",
      (event) => {
        const touch = event.touches[0];
        if (!touch) return;
        isInteracting = true;
        card.setAttribute("data-tilting", "true");
        updateCardFromPointer(touch.clientX, touch.clientY);
      },
      { passive: true }
    );

    card.addEventListener("touchend", setIdleState, { passive: true });
    card.addEventListener("touchcancel", setIdleState, { passive: true });

    return { setIdleState };
  };

  const controllers = tiltCards.map((card) => createTiltController(card));

  let glarePointerX = mouseX;
  let glarePointerY = mouseY;
  let glareRafId = null;

  const flushGlare = () => {
    syncCardsGlareWithPointer(glarePointerX, glarePointerY);
    glareRafId = null;
  };

  const scheduleGlareSync = () => {
    if (glareRafId !== null) return;
    glareRafId = requestAnimationFrame(flushGlare);
  };

  window.addEventListener(
    "pointermove",
    (event) => {
      glarePointerX = event.clientX;
      glarePointerY = event.clientY;
      scheduleGlareSync();
    },
    { passive: true }
  );

  window.addEventListener(
    "touchmove",
    (event) => {
      const touch = event.touches[0];
      if (!touch) return;
      glarePointerX = touch.clientX;
      glarePointerY = touch.clientY;
      scheduleGlareSync();
    },
    { passive: true }
  );

  window.addEventListener("resize", () => {
    controllers.forEach((controller) => {
      controller.setIdleState();
    });

    glarePointerX = window.innerWidth / 2;
    glarePointerY = window.innerHeight / 3;
    scheduleGlareSync();
  });
})();
