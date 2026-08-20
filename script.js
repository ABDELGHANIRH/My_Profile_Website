const translations = {
    fr: {
        nav_portfolio: "Portfolio",
        nav_about: "À propos",
        nav_contact: "Contact",
        nav_dial: "Data",
        nav_cta: "Consultation",
        hero_title: "Des sites web professionnels conçus pour les entreprises.",
        hero_subtitle: "Expertise en développement web et automatisation pour propulser votre présence en ligne.",
        hero_cta: "Voir mes projets",
        hero_cta_secondary: "Consultation Gratuite",
        hero_mockup: "Mockup Devices",
        dial_total: "Projets &amp; Automations",
        dial_sub: "Full-Stack &amp; IA",
        stat_automation: "Automatisation",
        stat_exp: "Années d'expérience",
        stat_support: "Support client",
        svc_heading: "Services",
        svc_live: "En ligne",
        svc1_title: "Développement Web",
        svc1_desc: "Sites vitrines et plateformes sur mesure, rapides et optimisés SEO.",
        svc1_tag1: "Responsive",
        svc1_tag2: "SEO",
        svc1_tag3: "Performance",
        svc2_title: "Flux IA",
        svc2_desc: "Automatisation de flux de travail et agents connectés (WhatsApp, emails).",
        svc2_tag1: "Agents IA",
        svc2_tag2: "Automatisation",
        svc2_tag3: "n8n",
        svc3_title: "UI / UX",
        svc3_desc: "Design premium, frost-glass moderne et expérience utilisateur soignée.",
        svc3_tag1: "Design System",
        svc3_tag2: "Responsive",
        svc3_tag3: "Bento",
        portfolio_title: "Mon Showroom",
        portfolio_tag: "Projets en ligne",
        portfolio_subtitle: "Découvrez une sélection de mes réalisations récentes.",
        status_delivered: "Livré",
        status_active: "Actif",
        status_automated: "Automatisé",
        project_img_placeholder: "Image du Projet",
        about_role: "Full-Stack &amp; Ingénieur en Automatisation IA",
        about_github: "Explore GitHub Repos &amp; Automations",
        stat_exp_short: "Ans auto-didacte",
        stat_proj_short: "Projets &amp; Automations",
        stat_auto_short: "Flux automatisés",
        project1_title: "Clinique Dentaire Dr. Sequalli",
        project1_desc: "Site web bilingue avec système de réservation en ligne.",
        project2_title: "Clinique Dentaire Cartier",
        project2_desc: "Plateforme professionnelle avec un design minimaliste.",
        project3_title: "Cabinet Dentaire Moderne",
        project3_desc: "Landing page réactive avec un design premium.",
        project4_title: "AutoWealth AI",
        project4_desc: "Plateforme innovante pour l'automatisation et l'IA.",
        project_link: "Voir le site \u2192", // ->
        auto_section: "Automation &amp; AI Pipelines",
        web_section: "Client Web Applications",
        status_workflow: "Active Workflow",
        status_production: "Production Ready",
        view_source: "View Source",
        demo: "Demo \u2192",
        auto1_title: "AI Autonomous Agents &amp; Receptionists",
        auto1_desc: "Assistants conversationnels multilingues 24/7 (WhatsApp/Telegram + LLM) g\u00e9rant la qualification instantan\u00e9e des clients et la prise de rendez-vous automatique.",
        auto1_tag1: "n8n",
        auto1_tag2: "OpenAI API",
        auto1_tag3: "WhatsApp Cloud API",
        auto1_tag4: "Smart Scheduling",
        auto2_title: "Autonomous Lead Gen &amp; Prospecting Pipelines",
        auto2_desc: "Workflows automatis\u00e9s de scraping de prospects, enrichissement de donn\u00e9es, v\u00e9rification et injection dans le CRM.",
        auto2_tag1: "n8n",
        auto2_tag2: "Data Extraction",
        auto2_tag3: "Lead Enrichment",
        auto2_tag4: "Webhooks",
        auto3_title: "Sales Automation &amp; Multi-Channel CRM Sync",
        auto3_desc: "Synchronisation bidirectionnelle du pipeline en temps r\u00e9el, s\u00e9quences de relance automatis\u00e9es, suivi des \u00e9tapes de deal et alertes instantan\u00e9es.",
        auto3_tag1: "n8n",
        auto3_tag2: "GoHighLevel",
        auto3_tag3: "Supabase",
        auto3_tag4: "Sales Pipelines",
        auto4_title: "Operations, PM Bots &amp; Content Distribution",
        auto4_desc: "Suivi automatis\u00e9 des t\u00e2ches de projet, traitement des tickets, bots de notification d'\u00e9quipe et publication programm\u00e9e de contenu multi-plateformes.",
        auto4_tag1: "n8n",
        auto4_tag2: "Telegram Bot",
        auto4_tag3: "API Integrations",
        auto4_tag4: "Task Automation",
        web1_title: "Clinique Dentaire Dr. Sequalli (Dr-SQ-KAMAL)",
        web1_desc: "Portail patient bilingue avec syst\u00e8me int\u00e9gr\u00e9 de prise de rendez-vous en ligne.",
        web1_tag1: "Next.js",
        web1_tag2: "Billingue",
        web1_tag3: "R\u00e9servation",
        web2_title: "Clinique Dentaire Cartier",
        web2_desc: "Page d'atterrissage minimaliste pour cabinet m\u00e9dical, optimis\u00e9e pour le SEO local.",
        web2_tag1: "SEO",
        web2_tag2: "Landing",
        web2_tag3: "Responsive",
        web3_title: "Centre Dentaire Dr. El-Bakali &amp; Cabinet F\u00e8s",
        web3_desc: "Interfaces r\u00e9actives \u00e0 forte conversion, con\u00e7ues pour les cliniques de sant\u00e9.",
        web3_tag1: "Conversion",
        web3_tag2: "Clinique",
        web3_tag3: "Responsive",
        pricing_title: "Des Solutions Claires, Sans Engagement",
        pricing_subtitle: "Choisissez la formule adaptée aux besoins actuels de votre entreprise. Une structure modulaire et transparente.",
        pack1_name: "Pack Vitrine",
        pack1_price: "1 500 DH",
        pack1_feat1: "Site web moderne et rapide (1 à 3 pages)",
        pack1_feat2: "Design 100% responsive (Mobile & Desktop)",
        pack1_feat3: "Optimisation SEO locale (Google Business)",
        pack1_feat4: "Bouton d'action direct vers WhatsApp",
        pack_recommended: "Recommandé",
        pack2_name: "Pack Réservation",
        pack2_price: "2 900 DH",
        pack2_feat1: "Tout ce qui est inclus dans le Pack Vitrine",
        pack2_feat2: "Système de prise de rendez-vous interactif",
        pack2_feat3: "Synchronisation automatique avec votre calendrier",
        pack2_feat4: "Rappels et confirmations automatisés par email",
        pack3_name: "Pack Agent WhatsApp IA",
        pack3_price: "3 900 DH",
        pack3_feat1: "Tout ce qui est inclus dans les packs précédents",
        pack3_feat2: "Agent ou Chatbot intelligent connecté sur WhatsApp 24h/24",
        pack3_feat3: "Réponses automatiques aux FAQ en Français et Darija Marocaine",
        pack3_feat4: "Enregistrement automatique des rendez-vous via la discussion",
        pack_cta: "Choisir ce pack",
        about_title: "À Propos de Moi",
        about_subtitle: "Abdelghani Rahmani - Développeur & Intégrateur",
        about_text1: "Après une solide formation initiale à l'OFPPT, j'ai consacré plus de 4 années (de 2021 à aujourd'hui) à approfondir mes compétences en programmation de manière autonome. Cette rigueur m'a permis de maîtriser les technologies web modernes.",
        about_text2: "Depuis mi-2024, j'ai étendu mon champ d'expertise à l'intégration de l'Intelligence Artificielle et à l'automatisation des flux de travail, afin d'offrir des solutions toujours plus performantes et innovantes aux entreprises.",
        contact_title: "Prêt à collaborer ?",
        contact_desc: "Discutons de votre projet et trouvons la solution idéale pour votre entreprise.",
        contact_email: "Envoyer un Email",
        form_name: "Nom Complet",
        form_business: "Nom de l'entreprise",
        form_phone: "Numéro de téléphone",
        form_message: "Message",
        form_submit: "Envoyer",
        footer_rights: "Tous droits réservés."
    },
    ar: {
        nav_portfolio: "أعمالي",
        nav_about: "نبذة عني",
        nav_contact: "تواصل معي",
        nav_dial: "البيانات",
        nav_cta: "استشارة",
        hero_title: "مواقع ويب احترافية مصممة للشركات.",
        hero_subtitle: "خبرة في تطوير الويب والأتمتة لتعزيز حضورك على الإنترنت.",
        hero_cta: "شاهد أعمالي",
        hero_cta_secondary: "استشارة مجانية",
        hero_mockup: "Mockup Devices",
        dial_total: "مشروع وأتمتة",
        dial_sub: "تطوير كامل وذكاء اصطناعي",
        stat_automation: "الأتمتة",
        stat_exp: "سنوات من الخبرة",
        stat_support: "دعم العملاء",
        svc_heading: "الخدمات",
        svc_live: "متصل",
        svc1_title: "تطوير الويب",
        svc1_desc: "مواقع وصفحات ويب حسب الطلب، سريعة ومحسّنة لمحركات البحث.",
        svc1_tag1: "متجاوب",
        svc1_tag2: "سيو",
        svc1_tag3: "أداء",
        svc2_title: "أتمتة بالذكاء الاصطناعي",
        svc2_desc: "أتمتة سير العمل ومساعدين ذكيين مرتبطين على واتساب والبريد.",
        svc2_tag1: "مساعدين IA",
        svc2_tag2: "أتمتة",
        svc2_tag3: "n8n",
        svc3_title: "واجهة وتجربة",
        svc3_desc: "تصميم راقي وحديث مع تجربة استخدام أنيقة وسلسة.",
        svc3_tag1: "نظام تصميم",
        svc3_tag2: "متجاوب",
        svc3_tag3: "Bento",
        portfolio_title: "معرض الأعمال",
        portfolio_tag: "مشاريع نشطة",
        portfolio_subtitle: "اكتشف مجموعة من أحدث مشاريعي.",
        status_delivered: "تم التسليم",
        status_active: "نشط",
        status_automated: "آلي",
        project_img_placeholder: "صورة المشروع",
        about_role: "مهندس تطوير كامل وأتمتة بالذكاء الاصطناعي",
        about_github: "استكشف مستودعات GitHub والأتمتة",
        stat_exp_short: "سنوات تعلّم ذاتي",
        stat_proj_short: "مشاريع وأتمتة",
        stat_auto_short: "سير عمل آلي",
        project1_title: "عيادة طب الأسنان د. سقلي",
        project1_desc: "موقع ثنائي اللغة مع نظام حجز عبر الإنترنت.",
        project2_title: "عيادة طب الأسنان كارتييه",
        project2_desc: "منصة احترافية بتصميم مبسط وأنيق.",
        project3_title: "عيادة أسنان حديثة",
        project3_desc: "صفحة هبوط متجاوبة مع تصميم متميز.",
        project4_title: "AutoWealth AI",
        project4_desc: "منصة مبتكرة للأتمتة والذكاء الاصطناعي.",
        project_link: "\u2190 عرض الموقع", // <-
        auto_section: "خطوط الأتمتة والذكاء الاصطناعي",
        web_section: "تطبيقات الويب للعملاء",
        status_workflow: "مفعّل",
        status_production: "جاهز للإنتاج",
        view_source: "عرض الكود",
        demo: "تجربة →",
        auto1_title: "وكلاء واستقبال ذكيون",
        auto1_desc: "مساعدون محادثة متعددي اللغات على مدار الساعة (واتساب/تيليغرام + نماذج لغوية) يديرون تأهيل العملاء الفوري والحجز التلقائي للمواعيد.",
        auto1_tag1: "n8n",
        auto1_tag2: "OpenAI API",
        auto1_tag3: "WhatsApp Cloud API",
        auto1_tag4: "جدولة ذكية",
        auto2_title: "خطوط توليد العملاء والتواصل",
        auto2_desc: "عملية آلية لاستخراج العملاء المحتملين وإثراء بياناتهم والتحقق منهم وإدخالهم إلى نظام إدارة العلاقات.",
        auto2_tag1: "n8n",
        auto2_tag2: "استخراج البيانات",
        auto2_tag3: "إثراء العملاء",
        auto2_tag4: "Webhooks",
        auto3_title: "أتمتة المبيعات ومزامنة CRM المتعددة القنوات",
        auto3_desc: "مزامنة فورية ثنائية الاتجاه لمسار المبيعات وتسلسلات متابعة آلية وتتبع مراحل الصفقات وتنبيهات فورية.",
        auto3_tag1: "n8n",
        auto3_tag2: "GoHighLevel",
        auto3_tag3: "Supabase",
        auto3_tag4: "مسارات المبيعات",
        auto4_title: "العمليات وروبوتات إدارة المشاريع وتوزيع المحتوى",
        auto4_desc: "تتبع آلي لمهام المشاريع الداخلية ومعالجة التذاكر وروبوتات إشعار الفريق ونشر محتوى مجدول متعدد المنصات.",
        auto4_tag1: "n8n",
        auto4_tag2: "تيليغرام بوت",
        auto4_tag3: "تكاملات API",
        auto4_tag4: "أتمتة المهام",
        web1_title: "عيادة د. سقلي لطب الأسنان (Dr-SQ-KAMAL)",
        web1_desc: "بوابة مرضى ثنائية اللغة مع نظام حجز مواعيد عبر الإنترنت.",
        web1_tag1: "Next.js",
        web1_tag2: "ثنائي اللغة",
        web1_tag3: "حجز",
        web2_title: "عيادة طب الأسنان كارتييه",
        web2_desc: "صفحة هبوط بسيطة لطب ممارس طبي، محسّنة لمحركات البحث المحلية.",
        web2_tag1: "سيو",
        web2_tag2: "صفحة هبوط",
        web2_tag3: "متجاوب",
        web3_title: "مركز الأسنان د. البقالي وعيادة فاس",
        web3_desc: "واجهات متجاوبة عالية التحويل مصممة للعيادات الطبية.",
        web3_tag1: "تحويل",
        web3_tag2: "عيادة",
        web3_tag3: "متجاوب",
        pricing_title: "حلول واضحة، بدون التزام",
        pricing_subtitle: "اختر الباقة المناسبة لاحتياجات شركتك الحالية. هيكلة مرنة وشفافة.",
        pack1_name: "الباقة التعريفية",
        pack1_price: "1,500 درهم",
        pack1_feat1: "موقع إلكتروني حديث وسريع (من 1 إلى 3 صفحات)",
        pack1_feat2: "متوافق بالكامل مع الهواتف والحواسيب",
        pack1_feat3: "تحسين ظهورك على خرائط جوجل (Google Business)",
        pack1_feat4: "زر اتصال مباشر وسريع عبر الواتساب",
        pack_recommended: "موصى به",
        pack2_name: "باقة الحجز الإلكتروني",
        pack2_price: "2,900 درهم",
        pack2_feat1: "كل ما هو متضمن في الباقة التعريفية",
        pack2_feat2: "نظام تفاعلي متكامل لحجز المواعيد",
        pack2_feat3: "ربط وتزامن تلقائي مع تقويمك الخاص",
        pack2_feat4: "رسائل تأكيد وتذكير تلقائية عبر البريد الإلكتروني",
        pack3_name: "باقة مساعد الواتساب بالذكاء الاصطناعي",
        pack3_price: "3,900 درهم",
        pack3_feat1: "كل ما هو متضمن في الباقات السابقة",
        pack3_feat2: "مجيب آلي (شاتبوت) ذكي متصل بالواتساب 24/24 ساعة",
        pack3_feat3: "الرد التلقائي على استفسارات العملاء بالفرنسية والدارجة المغربية",
        pack3_feat4: "تسجيل المواعيد وتأكيدها تلقائياً مباشرة من خلال المحادثة",
        pack_cta: "اختر هذه الباقة",
        about_title: "نبذة عني",
        about_subtitle: "عبد الغني الرحماني — مطور ويب متخصص",
        about_text1: "بدأت مسيرتي المهنية بتكوين متين في التطوير الرقمي من مكتب التكوين المهني وإنعاش الشغل (OFPPT). ولأنني مؤمن بأن التميز يتطلب دائماً مواكبة المستجدات، فقد أمضيت أكثر من 4 سنوات من التعلم الذاتي المستمر (منذ 2021 وحتى اليوم) في تعميق مهاراتي البرمجية وإتقان أحدث تقنيات الويب الحديثة.",
        about_text2: "ومع حلول منتصف عام 2024، قمت بتوسيع نطاق خبرتي لتشمل دمج تقنيات الذكاء الاصطناعي وأتمتة سير العمل الرقمي؛ بهدف تزويد الشركات في جميع أنحاء المغرب بحلول رقمية ذكية، مبتكرة، وعالية الأداء تختصر الوقت وتضاعف الأرباح.",
        contact_title: "جاهز للتعاون؟",
        contact_desc: "دعنا نناقش مشروعك ونجد الحل المثالي لشركتك.",
        contact_email: "إرسال بريد إلكتروني",
        form_name: "الاسم الكامل",
        form_business: "اسم الشركة",
        form_phone: "رقم الهاتف",
        form_message: "الرسالة",
        form_submit: "إرسال",
        footer_rights: "جميع الحقوق محفوظة."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // --- Language Toggle Logic ---
    const langToggleBtn = document.getElementById('lang-toggle');
    const langFrSpan = document.querySelector('.lang-fr');
    const langArSpan = document.querySelector('.lang-ar');
    let currentLang = 'fr';

    function setLanguage(lang) {
        currentLang = lang;

        // Update DOM attributes
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        // Update Toggle UI
        if (lang === 'ar') {
            langArSpan.classList.add('active');
            langFrSpan.classList.remove('active');
        } else {
            langFrSpan.classList.add('active');
            langArSpan.classList.remove('active');
        }

        // Translate text contents
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update WhatsApp links
        const waBaseUrl = 'https://wa.me/212762489130?text=';
        const waLinks = {
            fr: {
                pack1: 'Bonjour Abdelghani, je suis intéressé par le Pack Vitrine',
                pack2: 'Bonjour Abdelghani, je suis intéressé par le Pack Réservation',
                pack3: 'Bonjour Abdelghani, je suis intéressé par le Pack Agent WhatsApp IA'
            },
            ar: {
                pack1: 'مرحباً عبد الغني، أنا مهتم بالباقة التعريفية',
                pack2: 'مرحباً عبد الغني، أنا مهتم بباقة الحجز الإلكتروني',
                pack3: 'مرحباً عبد الغني، أنا مهتم بباقة مساعد الواتساب بالذكاء الاصطناعي'
            }
        };

        const btnPack1 = document.getElementById('btn-pack1');
        const btnPack2 = document.getElementById('btn-pack2');
        const btnPack3 = document.getElementById('btn-pack3');

        if (btnPack1) btnPack1.href = waBaseUrl + encodeURIComponent(waLinks[lang].pack1);
        if (btnPack2) btnPack2.href = waBaseUrl + encodeURIComponent(waLinks[lang].pack2);
        if (btnPack3) btnPack3.href = waBaseUrl + encodeURIComponent(waLinks[lang].pack3);
    }

    langToggleBtn.addEventListener('click', () => {
        const newLang = currentLang === 'fr' ? 'ar' : 'fr';
        setLanguage(newLang);
        navLinks.classList.remove('active');
    });

    // Initialize links and text on load
    setLanguage(currentLang);
});

// --- Beautiful Form Submission & Popup Logic ---
document.querySelector('.form-wrapper').addEventListener('submit', function (e) {
    e.preventDefault();

    const submitBtn = this.querySelector('[type="submit"]');

    // Check current translation language state
    const isAr = document.documentElement.lang === 'ar';

    // Dynamic Button Loading states
    submitBtn.innerText = isAr ? 'جاري الإرسال...' : 'Envoi en cours...';
    submitBtn.disabled = true;

    // Package data using URLSearchParams so all keys show up in Google Sheets
    const formData = new FormData(this);
    const data = new URLSearchParams(formData);

    const scriptURL = 'https://script.google.com/macros/s/AKfycbyDQdJ18sdOERD5_i94uXtEoeBrBfbzNXoNeyr1-N2mMqPJU0zw_AEv_gRRgNbpIKOy/exec';

    fetch(scriptURL, {
        method: 'POST',
        body: data
    })
    .then(() => {
        // Trigger Success Popup
        showPopup(
            true,
            isAr ? 'تم الإرسال بنجاح!' : 'Message envoyé !',
            isAr ? 'شكراً لك. تم حفظ بياناتك وسأتواصل معك في أقرب وقت ممكن.' : 'Merci ! Vos informations ont bien été enregistrées. Je vous contacterai rapidement.',
            isAr ? 'إغلاق' : 'Fermer'
        );
        this.reset();
    })
    .catch(error => {
        console.error('Error!', error.message);
        // Trigger Error Popup
        showPopup(
            false,
            isAr ? 'خطأ في الإرسال' : 'Une erreur est survenue',
            isAr ? 'يرجى التحقق من الاتصال وإعادة المحاولة.' : 'Veuillez réessayer ou me contacter directement via WhatsApp.',
            isAr ? 'موافق' : 'D’accord'
        );
    })
    .finally(() => {
        submitBtn.innerText = isAr ? 'إرسال' : 'Envoyer';
        submitBtn.disabled = false;
    });
});

// Helper function to build and show the modal interface
function showPopup(isSuccess, title, message, btnText) {
    const modal = document.getElementById('customModal');
    const iconWrapper = document.querySelector('.modal-icon-wrapper');
    const svgIcon = document.getElementById('modalIcon');
    const closeBtn = document.getElementById('modalCloseBtn');
    
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalMessage').innerText = message;
    closeBtn.innerText = btnText;

    if (isSuccess) {
        iconWrapper.className = 'modal-icon-wrapper success';
        svgIcon.innerHTML = `<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>`;
    } else {
        iconWrapper.className = 'modal-icon-wrapper error';
        svgIcon.innerHTML = `<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>`;
    }

    // Force display layout active
    modal.style.setProperty('display', 'flex', 'important');
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);

    // Close handlers
    const closeModal = () => {
        modal.classList.remove('active');
        modal.style.setProperty('display', 'none', 'important');
    };
    
    closeBtn.onclick = closeModal;
    modal.onclick = (e) => { if (e.target === modal) closeModal(); };
}

// --- Real-time Inline Form Validation (FR/AR) ---
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form-wrapper');
    const inputs = form.querySelectorAll('input, textarea');

    // Bilingual Error Messages
    const errorMessages = {
        fr: {
            name: "Veuillez entrer un nom valide (lettres et espaces uniquement, 3-50 caractères).",
            business: "Veuillez entrer un nom d'entreprise valide (2-60 caractères).",
            phone: "Numéro invalide. Entrez 10 chiffres commençant par 05, 06 ou 07.",
            message: "Le message doit contenir au moins 10 caractères utiles.",
            spam: "Veuillez éviter de répéter les mêmes lettres."
        },
        ar: {
            name: "يرجى إدخال اسم صحيح (حروف ومساحات فقط، من 3 إلى 50 حرفاً).",
            business: "يرجى إدخال اسم شركة صحيح (من 2 إلى 60 حرفاً).",
            phone: "رقم غير صحيح. يرجى إدخال 10 أرقام تبدأ بـ 05 أو 06 أو 07.",
            message: "يجب أن تحتوي الرسالة على 10 أحرف على الأقل.",
            spam: "يرجى تجنب تكرار الأحرف بشكل عشوائي."
        }
    };

    function validateField(input) {
        const lang = document.documentElement.lang === 'ar' ? 'ar' : 'fr';
        const errorElement = document.getElementById(`${input.id}-error`);
        let isValid = true;
        let customMessage = "";

        // 1. Check basic field requirements
        if (input.required && !input.value.trim()) {
            isValid = false;
            customMessage = lang === 'ar' ? "هذا الحقل مطلوب." : "Ce champ est obligatoire.";
        } 
        // 2. Check regex pattern validations (Name, Business, Phone)
        else if (input.hasAttribute('pattern')) {
            const regex = new RegExp(input.getAttribute('pattern'));
            if (!regex.test(input.value)) {
                isValid = false;
                customMessage = errorMessages[lang][input.id];
            }
        } 
        // 3. Special Textarea Deep Validation (Message length and spam text blocker)
        else if (input.id === 'message') {
            if (input.value.trim().length < 10) {
                isValid = false;
                customMessage = errorMessages[lang].message;
            } else {
                // Catches repeated keyboard mashing spam like "ffffff" or "jjjjjjj"
                const spamRegex = /(.)\1{4,}/g; 
                if (spamRegex.test(input.value)) {
                    isValid = false;
                    customMessage = errorMessages[lang].spam;
                }
            }
        }

        // Apply UI updates based on validation state
        if (!isValid && input.value.length > 0) {
            input.classList.add('invalid');
            input.classList.remove('valid');
            errorElement.innerText = customMessage;
            errorElement.classList.add('visible');
        } else if (isValid && input.value.length > 0) {
            input.classList.remove('invalid');
            input.classList.add('valid');
            errorElement.innerText = "";
            errorElement.classList.remove('visible');
        } else {
            // Clean state if input is completely empty
            input.classList.remove('invalid', 'valid');
            errorElement.innerText = "";
            errorElement.classList.remove('visible');
        }

        return isValid;
    }

    // Bind real-time listening events while the user types
    inputs.forEach(input => {
        input.addEventListener('input', () => validateField(input));
        input.addEventListener('blur', () => validateField(input)); // Checks on click-away
    });

    // Final security check block when hitting submit button
    form.addEventListener('submit', (e) => {
        let formIsValid = true;
        inputs.forEach(input => {
            if (!validateField(input)) {
                formIsValid = false;
            }
        });

        if (!formIsValid) {
            e.preventDefault();
            e.stopImmediatePropagation(); // Hard stops the Google fetch script from firing

            // Soft shake feedback effect on the first bad input field
            const firstInvalid = form.querySelector('.invalid');
            if (firstInvalid) firstInvalid.focus();
        }
    });
});

// --- HUD Animations: Dial count-up, stat fill, cursor glow ---
document.addEventListener('DOMContentLoaded', () => {
    const dialWrap = document.querySelector('.dial-wrap');

    // Count-up the central dial total
    const dialTotal = document.querySelector('.dial-total[data-count]');
    if (dialTotal) {
        const target = parseInt(dialTotal.getAttribute('data-count'), 10) || 0;
        let start = null;
        const duration = 1600;
        const step = (ts) => {
            if (!start) start = ts;
            const p = Math.min((ts - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
            dialTotal.textContent = Math.round(eased * target);
            if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }

    // Fill the stat bars + animate the dial ring on scroll into view
    const bars = document.querySelectorAll('.stat-fill[data-fill]');
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            bars.forEach(bar => {
                bar.style.width = bar.getAttribute('data-fill') + '%';
            });
            if (dialWrap) dialWrap.classList.add('animate');
            io.disconnect();
        });
    }, { threshold: 0.25 });
    if (bars.length && dialWrap) io.observe(dialWrap);

    // Cursor-tracking glow across bento cards
    document.querySelectorAll('.bento-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const r = card.getBoundingClientRect();
            card.style.setProperty('--mx', ((e.clientX - r.left) / r.width) * 100 + '%');
            card.style.setProperty('--my', ((e.clientY - r.top) / r.height) * 100 + '%');
        });
    });
});