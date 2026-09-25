/**
 * AutoWealthAI — Interactive Logic, Bilingual Engine (FR/AR) & Business Form Validation
 */

const translations = {
    fr: {
        nav_dial: "Performances",
        nav_services: "Solutions IA",
        nav_portfolio: "Réalisations",
        nav_methode: "Notre Méthode",
        nav_about: "Fondateurs",
        nav_cta: "Diagnostic Offert",
        dial_label: "Disponibilité Commerciale",
        dial_sub: "Zéro Prospect Perdu",
        stat_speed: "Temps de réponse devis & appels",
        stat_booking: "Prise de rendez-vous autonome",
        stat_security: "Données protégées & hébergement sécurisé",
        services_title: "Solutions Métier & Automatisation",
        services_sub: "Développez vos ventes sans alourdir votre charge de travail.",
        tag_active: "Opérationnel",
        svc1_title: "Standard Téléphonique & Réception IA 24/7",
        status_active: "Actif 24/7",
        svc1_desc: "L'assistant vocal décroche instantanément, renseigne sur vos prestations et cale directement les créneaux dans votre agenda professionnel.",
        svc2_title: "Relance Automatique des Devis & Factures",
        status_sync: "Conversion",
        svc2_desc: "Confirmation automatique par SMS et email dès réception d'une demande, suivie de relances intelligentes pour valider vos devis sans intervention manuelle.",
        svc3_title: "Interconnexion de Vos Outils Métier",
        status_tools: "Synchronisé",
        svc3_desc: "Vos formulaires web, e-mails, planning et outils de facturation communiquent ensemble. Fin des doubles saisies et des erreurs de coordination.",
        portfolio_title: "Démonstrations & Plateformes Métier",
        portfolio_sub: "Interfaces pensées pour inspirer confiance et convertir vos visiteurs.",
        portfolio_tag: "En Ligne",
        p1_title: "Atelier Mécanique & Entretien Automobile",
        p1_desc: "Site professionnel adapté aux garages : présentation claire des forfaits, formulaire de devis express et sélection directe des créneaux d'atelier.",
        p1_roi: "Impact client : Devis instantané en ligne et réduction des absences aux rendez-vous d'intervention.",
        p2_title: "Restaurant Gastronomique & Réservations",
        p2_desc: "Vitrine interactive soignée : consultation rapide de la carte du chef et réservation directe de table avec confirmation automatique.",
        p2_roi: "Impact client : Réservations sans commission intermédiaire et optimisation du remplissage de salle.",
        p3_title: "Centre de Soins & Cabinet Médical",
        p3_desc: "Portail patient sécurisé avec module de prise de rendez-vous en ligne et présentation rassurante des spécialités médicales.",
        p3_roi: "Impact client : Allègement du secrétariat téléphonique et gestion autonome du planning praticien.",
        btn_demo: "Tester la démo →",
        btn_source: "Code Source",
        process_title: "Notre Méthode d'Intervention",
        process_sub: "Votre activité d'abord. La technologie ensuite.",
        process_tag: "3 Étapes Simples",
        step1_title: "Diagnostic Gratuit (15 min)",
        step1_desc: "Nous analysons vos méthodes actuelles (gestion des appels, devis, agenda) et ciblons où vous perdez du temps ou des clients potentiels.",
        step2_title: "Mise en Place & Connexion",
        step2_desc: "Nous créons votre plateforme web et raccordons vos automatisations à vos outils du quotidien sans interrompre votre activité.",
        step3_title: "Tranquillité & Suivi Continu",
        step3_desc: "Vos systèmes opèrent en toute autonomie 24h/24. Nous assurons la maintenance, le suivi et les évolutions de vos processus.",
        founders_title: "Fondateurs",
        founders_sub: "Direction technique & accompagnement sur le terrain",
        role1_pill: "Technique",
        role1_title: "Cofondateur & Lead Ingénieur",
        role1_bio: "Conception d'architectures web sur-mesure, intégration d'assistants IA et orchestration de workflows automatisés.",
        btn_github: "Explorer nos projets GitHub",
        role2_pill: "Stratégie Métier",
        role2_title: "Cofondateur & Développement Commercial",
        role2_bio: "Audit des flux opérationnels, analyse de vos besoins concrets et accompagnement personnalisé pour votre déploiement.",
        contact_title: "Parlons de vos opérations",
        contact_sub: "Identifions en 15 minutes les tâches manuelles que vous pouvez automatiser.",
        contact_badge: "Réponse sous 24h",
        form_name: "Nom & Prénom",
        form_business: "Nom de l'entreprise ou activité",
        form_phone: "Numéro de téléphone",
        form_message: "Votre priorité principale",
        form_submit: "Réserver mon diagnostic offert (15 min)",
        form_disclaimer: "Gratuit et sans engagement. Vos données restent strictement confidentielles.",
        footer_rights: "Tous droits réservés."
    },
    ar: {
        nav_dial: "الأداء",
        nav_services: "حلول الذكاء الاصطناعي",
        nav_portfolio: "أعمالنا",
        nav_methode: "منهجية العمل",
        nav_about: "المؤسسان",
        nav_cta: "استشارة مجانية",
        dial_label: "الجاهزية التجارية",
        dial_sub: "صفر عميل محتمل ضائع",
        stat_speed: "سرعة الرد على المكالمات وعروض الأسعار",
        stat_booking: "حجز مواعيد ذاتي ومستمر",
        stat_security: "حماية تامة للبيانات واستضافة آمنة",
        services_title: "حلول الأعمال وأتمتة العمليات",
        services_sub: "طوّر مبيعاتك دون زيادة أعباء العمل اليومية.",
        tag_active: "مفعّل وجاهز",
        svc1_title: "مستقبل المكالمات وسكرتارية ذكية 24/7",
        status_active: "نشط 24/7",
        svc1_desc: "يرد المساعد الصوتي الذكي فورياً، ويجيب عن استفسارات خدماتكم ويسجل المواعيد مباشرة في تقويم العمل.",
        svc2_title: "المتابعة التلقائية لعروض الأسعار والفواتير",
        status_sync: "تحويل المبيعات",
        svc2_desc: "تأكيد فوري عبر الرسائل والبريد عند كل طلب، متبوعاً بمتابعات ذكية لإتمام الصفقات دون مجهود يدوي.",
        svc3_title: "ربط وتكامل أدوات العمل اليومية",
        status_tools: "متزامن",
        svc3_desc: "تزامن فوري بين موقعك، بريدك، تقويمك وأنظمة الفواتير لإنهاء الإدخال اليدوي المكرر والأخطاء.",
        portfolio_title: "نماذج ومنصات أعمال حية",
        portfolio_sub: "واجهات صُممت لتبني الثقة وتحوّل الزوار إلى عملاء فعليين.",
        portfolio_tag: "متصل بالإنترنت",
        p1_title: "ورشة صيانة وميكانيك السيارات",
        p1_desc: "موقع عملي للورش: عرض باقات الصيانة، تقدير فوري للتكلفة وحجز فترات الدخول للورشة.",
        p1_roi: "القيمة المضافة: عروض أسعار فورية وتقليل ملحوظ لحالات الغياب عن المواعيد.",
        p2_title: "مطعم راقٍ وحجز طاولات مباشر",
        p2_desc: "واجهة أنيقة لعرض قائمة المأكولات وحجز الطاولات مباشرة مع تأكيد فوري عبر الرسائل.",
        p2_roi: "القيمة المضافة: حجوزات مباشرة دون عمولات خارجية مع استغلال أمثل للطاولات.",
        p3_title: "مركز رعاية وعيادة طبية متخصصة",
        p3_desc: "بوابة مرضى آمنة مع نظام لحجز المواعيد وعرض احترافي للتخصصات الطبية.",
        p3_roi: "القيمة المضافة: تخفيف الضغط على الاستقبال وإدارة منظمة لجدول الأطباء.",
        btn_demo: "تجربة النموذج المباشر ←",
        btn_source: "الكود المصدري",
        process_title: "منهجية تنفيذ مشاريعنا",
        process_sub: "نشاطكم أولاً. التكنولوجيا في خدمتكم ثانياً.",
        process_tag: "3 خطوات واضحة",
        step1_title: "تشخيص مجاني (15 دقيقة)",
        step1_desc: "نحلل طريقة عملكم الحالية ونحدد المهام والاتصالات التي تتسبب في ضياع الوقت أو العملاء.",
        step2_title: "الإعداد والربط التقني",
        step2_desc: "ننشئ منصتكم الرقمية ونربط الأنظمة الذكية مع أدواتكم الحالية دون أي توقف لنشاطكم اليومي.",
        step3_title: "راحة البال والمتابعة المستمرة",
        step3_desc: "تعمل أنظمتكم بشكل ذاتي على مدار الساعة مع دعم تقني وصيانة مستمرة من طرفنا.",
        founders_title: "المؤسسان",
        founders_sub: "القيادة التقنية والمواكبة الميدانية المباشرة",
        role1_pill: "تقني",
        role1_title: "شريك مؤسس ومدير تقني",
        role1_bio: "هندسة المنصات المخصصة، بناء الوكلاء الصوتيين وتصميم مسارات الأتمتة المتقدمة.",
        btn_github: "مستودعات مشاريع GitHub",
        role2_pill: "استراتيجية الأعمال",
        role2_title: "شريك مؤسس ومدير التطوير التجاري",
        role2_bio: "تحليل ومراجعة سير العمليات، دراسة متطلباتكم ومواكبتكم خطوة بخطوة أثناء التنفيذ.",
        contact_title: "دعنا نناقش عملياتكم",
        contact_sub: "لنحدد خلال 15 دقيقة المهام اليومية التي يمكن أتمتتها فوراً لتوفير وقتكم.",
        contact_badge: "الرد خلال 24 ساعة",
        form_name: "الاسم الكامل",
        form_business: "اسم المؤسسة أو النشاط",
        form_phone: "رقم الهاتف",
        form_message: "الأولوية أو التحدي الرئيسي",
        form_submit: "حجز موعد التشخيص المجاني (15 دقيقة)",
        form_disclaimer: "مجاني وبدون أي التزام. معلوماتكم محمية وسرية تماماً.",
        footer_rights: "جميع الحقوق محفوظة."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // --- 2. Language Toggle Logic (FR/AR) ---
    const langToggleBtn = document.getElementById('lang-toggle');
    const langFrSpan = document.querySelector('.lang-fr');
    const langArSpan = document.querySelector('.lang-ar');
    let currentLang = 'fr';

    function setLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        if (langArSpan && langFrSpan) {
            if (lang === 'ar') {
                langArSpan.classList.add('active');
                langFrSpan.classList.remove('active');
            } else {
                langFrSpan.classList.add('active');
                langArSpan.classList.remove('active');
            }
        }

        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
    }

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const newLang = currentLang === 'fr' ? 'ar' : 'fr';
            setLanguage(newLang);
            if (navLinks) navLinks.classList.remove('active');
        });
    }

    // Initialize text contents
    setLanguage(currentLang);

    // --- 3. HUD Animations: Dial count-up & Progress Bars on Viewport Entry ---
    const dialWrap = document.querySelector('.dial-wrap');
    const dialTotal = document.querySelector('.dial-total[data-count]');
    const bars = document.querySelectorAll('.stat-fill[data-fill]');

    const animateMetrics = () => {
        if (dialTotal) {
            const target = parseInt(dialTotal.getAttribute('data-count'), 10) || 100;
            let start = null;
            const duration = 1500;
            const step = (ts) => {
                if (!start) start = ts;
                const p = Math.min((ts - start) / duration, 1);
                const eased = 1 - Math.pow(1 - p, 3);
                dialTotal.textContent = Math.round(eased * target);
                if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
        }

        bars.forEach(bar => {
            bar.style.width = bar.getAttribute('data-fill') + '%';
        });

        if (dialWrap) dialWrap.classList.add('animate');
    };

    const heroSection = document.getElementById('hero');
    if (heroSection) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateMetrics();
                    io.disconnect();
                }
            });
        }, { threshold: 0.2 });
        io.observe(heroSection);
    }

    // --- 4. Cursor Glow Tracking on Cards ---
    document.querySelectorAll('.bento-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const r = card.getBoundingClientRect();
            card.style.setProperty('--mx', ((e.clientX - r.left) / r.width) * 100 + '%');
            card.style.setProperty('--my', ((e.clientY - r.top) / r.height) * 100 + '%');
        });
    });

    // --- 5. Form Validation & Google Sheets Submission ---
    const form = document.getElementById('consultationForm') || document.querySelector('.form-wrapper');
    if (!form) return;

    const inputs = form.querySelectorAll('input, textarea');
    const submitBtn = form.querySelector('[type="submit"]');

    const errorMessages = {
        fr: {
            name: "Veuillez entrer un nom valide (lettres et espaces uniquement, 3-50 caractères).",
            business: "Veuillez entrer un nom d'entreprise valide (2-60 caractères).",
            phone: "Veuillez entrer un numéro de téléphone valide.",
            message: "Le message doit contenir au moins 10 caractères utiles.",
            spam: "Veuillez éviter de répéter les mêmes lettres."
        },
        ar: {
            name: "يرجى إدخال اسم صحيح (حروف ومساحات فقط، من 3 إلى 50 حرفاً).",
            business: "يرجى إدخال اسم شركة أو نشاط صحيح (من 2 إلى 60 حرفاً).",
            phone: "يرجى إدخال رقم هاتف صحيح للتواصل معكم.",
            message: "يجب أن تحتوي الرسالة على 10 أحرف على الأقل.",
            spam: "يرجى تجنب تكرار الأحرف بشكل عشوائي."
        }
    };

    function validateField(input) {
        const lang = document.documentElement.lang === 'ar' ? 'ar' : 'fr';
        const errorElement = document.getElementById(`${input.id}-error`);
        let isValid = true;
        let customMessage = "";

        if (input.required && !input.value.trim()) {
            isValid = false;
            customMessage = lang === 'ar' ? "هذا الحقل مطلوب." : "Ce champ est obligatoire.";
        } else if (input.hasAttribute('pattern')) {
            const regex = new RegExp(input.getAttribute('pattern'));
            if (!regex.test(input.value)) {
                isValid = false;
                customMessage = errorMessages[lang][input.id] || "Format invalide.";
            }
        } else if (input.id === 'message') {
            if (input.value.trim().length < 10) {
                isValid = false;
                customMessage = errorMessages[lang].message;
            } else {
                const spamRegex = /(.)\1{4,}/g;
                if (spamRegex.test(input.value)) {
                    isValid = false;
                    customMessage = errorMessages[lang].spam;
                }
            }
        }

        if (errorElement) {
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
                input.classList.remove('invalid', 'valid');
                errorElement.innerText = "";
                errorElement.classList.remove('visible');
            }
        }

        return isValid;
    }

    inputs.forEach(input => {
        input.addEventListener('input', () => validateField(input));
        input.addEventListener('blur', () => validateField(input));
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let formIsValid = true;
        inputs.forEach(input => {
            if (!validateField(input)) {
                formIsValid = false;
            }
        });

        if (!formIsValid) {
            const firstInvalid = form.querySelector('.invalid');
            if (firstInvalid) firstInvalid.focus();
            return;
        }

        const isAr = document.documentElement.lang === 'ar';
        const originalBtnText = submitBtn.innerText;
        submitBtn.innerText = isAr ? 'جاري التأكيد...' : 'Envoi en cours...';
        submitBtn.disabled = true;

        const formData = new FormData(this);
        const data = new URLSearchParams(formData);
        const scriptURL = 'https://script.google.com/macros/s/AKfycbyDQdJ18sdOERD5_i94uXtEoeBrBfbzNXoNeyr1-N2mMqPJU0zw_AEv_gRRgNbpIKOy/exec';

        fetch(scriptURL, {
            method: 'POST',
            body: data
        })
        .then(() => {
            showPopup(
                true,
                isAr ? 'تم تأكيد طلبكم بنجاح!' : 'Demande bien reçue !',
                isAr ? 'شكراً لاهتمامكم. سيتواصل معكم أحد المؤسسين خلال 24 ساعة لبدء التشخيص المجاني.' : 'Merci ! Vos informations ont bien été enregistrées. Un cofondateur vous contactera sous 24h ouvrées.',
                isAr ? 'إغلاق' : 'Compris'
            );
            form.reset();
            inputs.forEach(el => el.classList.remove('valid'));
        })
        .catch(error => {
            console.error('Error!', error.message);
            showPopup(
                false,
                isAr ? 'تعذر إرسال الطلب' : 'Une erreur est survenue',
                isAr ? 'يرجى التحقق من الاتصال، أو التواصل معنا مباشرة عبر الواتساب.' : 'Veuillez vérifier votre connexion ou nous contacter directement sur WhatsApp.',
                isAr ? 'موافق' : 'D’accord'
            );
        })
        .finally(() => {
            submitBtn.innerText = originalBtnText;
            submitBtn.disabled = false;
        });
    });
});

// --- 6. Helper: Custom Popup Modal ---
function showPopup(isSuccess, title, message, btnText) {
    const modal = document.getElementById('customModal');
    const iconWrapper = document.getElementById('modalIconWrap') || document.querySelector('.modal-icon-wrapper');
    const svgIcon = document.getElementById('modalIcon');
    const closeBtn = document.getElementById('modalCloseBtn');

    if (!modal) return;

    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalMessage').innerText = message;
    if (closeBtn) closeBtn.innerText = btnText;

    if (iconWrapper && svgIcon) {
        if (isSuccess) {
            iconWrapper.className = 'modal-icon-wrapper success';
            svgIcon.innerHTML = `<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>`;
        } else {
            iconWrapper.className = 'modal-icon-wrapper error';
            svgIcon.innerHTML = `<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>`;
        }
    }

    modal.style.setProperty('display', 'flex', 'important');
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);

    const closeModal = () => {
        modal.classList.remove('active');
        modal.style.setProperty('display', 'none', 'important');
    };

    if (closeBtn) closeBtn.onclick = closeModal;
    modal.onclick = (e) => {
        if (e.target === modal) closeModal();
    };
}

// --- Image Lightbox Expansion ---
const lightbox = document.getElementById('imageLightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

// Select all expandable images (founder headshots and avatars)
const zoomableImages = document.querySelectorAll('.avatar-img, .profile-img, .founder-avatar');

zoomableImages.forEach(img => {
    img.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!lightbox || !lightboxImg) return;
        lightboxImg.src = img.currentSrc || img.src;
        lightboxImg.alt = img.alt || 'Aperçu agrandi';
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // Lock background scroll
    });
});

const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
};

if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        // Close if clicked anywhere outside the image itself
        if (e.target !== lightboxImg) closeLightbox();
    });
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
        closeLightbox();
    }
});

// --- QR Modal Control ---
const openQrBtn = document.getElementById('openQrModalBtn');
const closeQrBtn = document.getElementById('closeQrModalBtn');
const qrModal = document.getElementById('qrModal');

const openQr = () => {
    if (!qrModal) return;
    qrModal.style.setProperty('display', 'flex', 'important');
    setTimeout(() => {
        qrModal.classList.add('active');
        qrModal.setAttribute('aria-hidden', 'false');
    }, 10);
};

const closeQr = () => {
    if (!qrModal) return;
    qrModal.classList.remove('active');
    qrModal.setAttribute('aria-hidden', 'true');
    setTimeout(() => {
        qrModal.style.setProperty('display', 'none', 'important');
    }, 200);
};

if (openQrBtn) openQrBtn.addEventListener('click', openQr);
if (closeQrBtn) closeQrBtn.addEventListener('click', closeQr);
if (qrModal) {
    qrModal.addEventListener('click', (e) => {
        if (e.target === qrModal) closeQr();
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && qrModal && qrModal.classList.contains('active')) {
        closeQr();
    }
});

// --- Client-Side High-Precision QR Generator ---
const qrContainer = document.getElementById('qrcodeCanvas');
if (qrContainer && typeof QRCode !== 'undefined') {
    qrContainer.innerHTML = ''; // Clear existing
    new QRCode(qrContainer, {
        text: "https://portfolio.autowealthai.com/",
        width: 210,
        height: 210,
        colorDark: "#090b0e",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H // High error correction level for fast camera recognition
    });
}