/**
 * Central data source for Al-Batel publications.
 * Editing a book's copy, price, or media here propagates everywhere.
 */

export const AUTHORS = {
  batel: {
    id: "batel",
    name: { ar: "باتل الباتل", en: "Batel Al-Batel" },
    role: {
      ar: "رئيس مجلس الإدارة (CEO) — الباتل وشركاؤه",
      en: "Chairman & CEO — Al-Batel & Co.",
    },
    affiliation: {
      ar: "الباتل وشركاؤه للاستشارات المهنية",
      en: "Al-Batel & Co. Professional Services",
    },
    bio: {
      ar: "محاسب قانوني معتمد، رئيس مجلس إدارة شركة الباتل وشركاؤه للاستشارات المهنية، ومدير مركز بتيل الاتقان للتدريب. حاصل على الماجستير في المحاسبة من جامعة ميامي – فلوريدا.",
      en: "Certified Public Accountant, Chairman of Al-Batel & Co. Professional Services, and Director of Batel Al-Etqan Training Center. Holds a Master's in Accounting from Miami University, Florida.",
    },
    credentials: {
      ar: [
        "رئيس مجلس إدارة الباتل وشركاؤه للاستشارات المهنية",
        "مدير مركز بتيل الاتقان للتدريب",
        "مدرب سابق في معهد الإدارة العامة لمدة تسع سنوات",
        "رخصة مزاولة المحاسبة والمراجعة المعتمدة — وزارة التجارة",
        "ماجستير المحاسبة — جامعة ميامي، فلوريدا، الولايات المتحدة",
        "بكالوريوس المحاسبة — جامعة الإمام محمد بن سعود",
        "زمالة الهيئة السعودية للمحاسبين والمراجعين (SOCPA)",
        "مستشار مالي معتمد (CFC)",
        "مدير أعمال معتمد (CBA)",
      ],
      en: [
        "Chairman of Al-Batel & Co. Professional Services",
        "Director of Batel Al-Etqan Training Center",
        "Former trainer at the Institute of Public Administration (9 years)",
        "Licensed CPA — Saudi Ministry of Commerce",
        "M.Sc. in Accounting — Miami University, Florida, USA",
        "B.Sc. in Accounting — Imam Muhammad ibn Saud Islamic University",
        "Fellow of the Saudi Organization for CPAs (SOCPA)",
        "Certified Financial Consultant (CFC)",
        "Certified Business Administrator (CBA)",
      ],
    },
    img: "/Books/Batel.jpeg",
  },

  mohamed: {
    id: "mohamed",
    name: { ar: "محمد عرفة", en: "Mohamed Arafa" },
    role: {
      ar: "محاسب قانوني ومراجع معتمد — Certified IPSASB",
      en: "Certified Public Accountant & Auditor — Certified IPSASB",
    },
    affiliation: {
      ar: "مُشارك كفرد في التأليف والتعريب — خبير مهني في المراجعة والامتثال",
      en: "Individual contributor to authoring & translation — Professional Expert in Audit & Compliance",
    },
    bio: {
      ar: "خبير مهني في المراجعة والامتثال، وخبير في التدريب المهني وتطوير الكفاءات في المحاسبة والمراجعة، ومدير التشغيل والعمليات بمركز بتيل الإتقان للتدريب.",
      en: "Professional expert in audit and compliance, a specialist in professional training and competency development in accounting and audit, and Operations Director at Batel Al-Etqan Training Center.",
    },
    credentials: {
      ar: [
        "شريك المراجعة في UHY العالمية",
        "عضو جمعية المحاسبين القانونيين",
        "عضو اتحاد المحاسبين والمراجعين العرب",
        "حاصل على شهادة المعايير الدولية للقطاع العام (IPSAS) من ACCA",
        "أمين صندوق جمعية المحاسبين والمدققين الداخليين (AAIA)",
        "أمين عام لجنة البحث والتطوير بـ AAIA",
        "مدرب مهني معتمد من مؤسسة التمويل الدولية (IFC) — مجموعة البنك الدولي",
        "مدير التشغيل والعمليات — مركز بتيل الإتقان للتدريب",
      ],
      en: [
        "Audit Partner at UHY Global",
        "Member of the Society of Chartered Accountants",
        "Member of the Arab Federation of Accountants & Auditors",
        "Certified IPSAS holder — ACCA (International Public Sector Accounting Standards)",
        "Treasurer — Accountants & Internal Auditors Association (AAIA)",
        "Secretary-General, Research & Development Committee at AAIA",
        "Certified professional trainer — International Finance Corporation (IFC), World Bank Group",
        "Operations Director — Batel Al-Etqan Training Center",
      ],
    },
    img: "/Books/Mohamed.jpeg",
  },

  walid: {
    id: "walid",
    name: { ar: "وليد منير", en: "Walid Munir" },
    role: {
      ar: "خبير الضرائب وتسعير المعاملات — ماجستير في المالية العامة والضرائب",
      en: "Tax & Transfer Pricing Expert — Master's in Public Finance & Tax",
    },
    affiliation: {
      ar: "مُشارك كفرد في التأليف والتعريب — خبير مهني في الضرائب وتسعير المعاملات",
      en: "Individual contributor to authoring & translation — Professional Expert in Taxation & Transfer Pricing",
    },
    bio: {
      ar: "خبير في الضرائب وتسعير المعاملات (Transfer Pricing)، ومدير التدريب والتطوير بمركز بتيل الإتقان للتدريب. حاصل على الماجستير في المالية العامة والضرائب.",
      en: "Expert in taxation and Transfer Pricing, and Training & Development Director at Batel Al-Etqan Training Center. Holds a Master's in Public Finance & Tax.",
    },
    credentials: {
      ar: [
        "شريك الضرائب ورئيس قسم تسعير المعاملات (Transfer Pricing) في UHY",
        "ماجستير في المالية العامة والضرائب",
        "دبلوم في الضرائب والمحاسبة والمالية",
        "شهادة المعايير الدولية للمحاسبة في القطاع العام (CIPSAS) — ACCA",
        "زميل جمعية الضرائب المصرية (Fellow EAT)",
        "زميل الجمعية المصرية للمالية العامة والضرائب (Fellow EAPFT)",
        "أمين عام ومؤسس جمعية المحاسبين والمدققين الداخليين (AAIA)",
        "مدرب معتمد من مؤسسة التمويل الدولية (IFC) — مجموعة البنك الدولي",
        "عضو اتحاد المحاسبين والمراجعين العرب (M.AFAA)",
        "عضو رابطة محترفي الضرائب الأمريكية (M.NATP)",
        "مدير التدريب والتطوير — مركز بتيل الإتقان للتدريب",
      ],
      en: [
        "Tax Partner & Head of Transfer Pricing Department at UHY",
        "Master's in Public Finance & Tax",
        "Diploma in Taxation, Accounting and Finance",
        "CIPSAS — ACCA (Public Sector International Accounting Standards)",
        "Fellow of the Egyptian Association of Taxation (Fellow EAT)",
        "Fellow of the Egyptian Association of Public Finance & Taxation (EAPFT)",
        "Secretary-General & co-founder of AAIA",
        "Certified trainer — International Finance Corporation (IFC), World Bank Group",
        "Member of the Arab Federation of Accountants & Auditors (M.AFAA)",
        "Member of the U.S. National Association of Tax Professionals (M.NATP)",
        "Training & Development Director — Batel Al-Etqan Training Center",
      ],
    },
    img: "/Books/Walid.jpeg",
  },
};

export const PUBLICATIONS = [
  {
    slug: "football-economics",
    title: {
      ar: "اقتصاديات كرة القدم — من الملاعب إلى البورصات",
      en: "Football Economics — From Stadiums to Stock Exchanges",
    },
    subtitle: {
      ar: "موسوعة بحثية مهنية في الاستثمار الرياضي",
      en: "A professional research encyclopedia on sports investment",
    },
    shortDesc: {
      ar: "الأولى من نوعها في المكتبة العربية — مرجع تطبيقي ومهني وبحثي يخدم الباحثين والمتخصصين وصنّاع القرار في الإدارة والاقتصاد والمحاسبة الرياضية.",
      en: "The first of its kind in the Arabic library — an applied, professional, and research reference for researchers, specialists, and decision-makers in sports management, economics, and accounting.",
    },
    longDesc: {
      ar: "موسوعة علمية متكاملة تتناول الاستثمار الرياضي بوجه عام، وكرة القدم بوجه خاص، من منظور مهني وتطبيقي وبحثي متكامل. تقدّم نماذج اقتصادية مقارنة لأندية عربية وأوروبية، وتضع المكتبة العربية أمام مرجع أصيل في حقل بدأ يتشكّل عالميًا.",
      en: "A comprehensive encyclopedia addressing sports investment broadly and football specifically, from an integrated professional, applied, and research perspective. It presents comparative economic models for Arab and European clubs, offering the Arabic library an authentic reference in an emerging global field.",
    },
    authors: ["batel", "mohamed", "walid"],
    authorRole: "author",
    cover: "/Books/Book1.JPG",
    coverBadge: { ar: "الأعلى مبيعًا", en: "Best Seller" },
    publisher: { ar: "دار فاروس للنشر والتوزيع", en: "Faros Publishing House" },
    price: 170,
    originalPrice: 250,
    currency: { ar: "﷼", en: "SAR" },
    structure: [
      {
        icon: "management",
        title: { ar: "الإدارة الرياضية", en: "Sports Management" },
        count: { ar: "3 فصول", en: "3 chapters" },
        color: "from-blue-500 to-indigo-600",
      },
      {
        icon: "economy",
        title: { ar: "اقتصاديات الرياضة", en: "Sports Economics" },
        count: { ar: "5 فصول", en: "5 chapters" },
        color: "from-emerald-500 to-green-600",
      },
      {
        icon: "accounting",
        title: {
          ar: "المحاسبة عن الاستثمار الرياضي",
          en: "Sports Investment Accounting",
        },
        count: {
          ar: "5 فصول + نماذج تطبيقية",
          en: "5 chapters + applied models",
        },
        color: "from-amber-500 to-orange-600",
      },
      {
        icon: "analysis",
        title: {
          ar: "تحليل وتقييم الأداء",
          en: "Performance Analysis & Evaluation",
        },
        count: { ar: "3 فصول", en: "3 chapters" },
        color: "from-rose-500 to-pink-600",
      },
      {
        icon: "data",
        title: {
          ar: "بيانات تحليلية للأندية",
          en: "Analytical Club Data",
        },
        count: {
          ar: "الأهلي المصري، الهلال السعودي، أندية أوروبية",
          en: "Al-Ahly (EG), Al-Hilal (SA), European clubs",
        },
        color: "from-violet-500 to-purple-700",
      },
    ],
    audience: {
      ar: [
        "الباحثون والأكاديميون في الاقتصاد الرياضي",
        "المتخصصون في الإدارة والمحاسبة الرياضية",
        "صُنّاع القرار في الأندية والاتحادات",
        "الجامعات العربية والمكتبات المتخصصة",
        "المحللون الماليون في قطاع الرياضة",
        "المستثمرون في الصناعة الرياضية",
      ],
      en: [
        "Researchers and academics in sports economics",
        "Specialists in sports management and accounting",
        "Decision-makers in clubs and federations",
        "Arab universities and specialized libraries",
        "Financial analysts in the sports sector",
        "Investors in the sports industry",
      ],
    },
    highlights: [
      {
        ar: "متوفّر في مكتبة جرير",
        en: "Available at Jarir Bookstore",
        icon: "jarir",
      },
      {
        ar: "تحت الترجمة للإنجليزية — معرض فرانكفورت الدولي",
        en: "Being translated — Frankfurt Book Fair",
        icon: "global",
      },
      {
        ar: "مرجع مُرشّح للاعتماد الجامعي",
        en: "Nominated as a university reference",
        icon: "academic",
      },
      {
        ar: "محل اهتمام مجلات دولية",
        en: "Featured in international journals",
        icon: "quote",
      },
    ],
    purchase: {
      jarir: {
        url: "https://www.jarir.com/arabic-books-671222.html",
        label: { ar: "اشترِ من مكتبة جرير", en: "Buy from Jarir Bookstore" },
      },
      direct: {
        enabled: true,
        label: { ar: "اطلب مباشرة من الباتل", en: "Order directly from Al-Batel" },
      },
    },
    events: [
      {
        key: "cairo2026",
        title: {
          ar: "معرض القاهرة الدولي للكتاب 2026",
          en: "Cairo International Book Fair 2026",
        },
        date: {
          ar: "الخميس 29 يناير 2026",
          en: "Thursday, January 29, 2026",
        },
        description: {
          ar: "ندوة علمية وحفل توقيع للموسوعة بمشاركة المؤلفين الثلاثة، ضمن فعاليات معرض القاهرة الدولي للكتاب — والدعوة عامة.",
          en: "A scientific seminar and official book signing with all three authors, hosted at the Cairo International Book Fair.",
        },
        images: [
          "/Books/Cairo1.jfif",
          "/Books/Cairo2.jfif",
          "/Books/Cairo3.jfif",
          "/Books/Cairo4.jfif",
        ],
      },
      {
        key: "riyadh",
        title: {
          ar: "معرض الرياض الدولي للكتاب",
          en: "Riyadh International Book Fair",
        },
        date: { ar: "2025", en: "2025" },
        description: {
          ar: "حضور مميّز للموسوعة في معرض الرياض الدولي للكتاب — تعزيز لحضور الكتاب في المشهد الثقافي السعودي.",
          en: "A strong presence of the encyclopedia at the Riyadh International Book Fair — reinforcing its place on the Saudi cultural stage.",
        },
        images: [
          "/Books/Riyad1.jfif",
          "/Books/Riyad2.jfif",
          "/Books/Riyad3.jfif",
          "/Books/Riyad4.jfif",
          "/Books/Riyad5.jfif",
        ],
      },
    ],
    jarirShowcase: {
      image: "/Books/Jarir.jfif",
      title: {
        ar: "أول إصداراتنا يتصدّر المشهد في جرير",
        en: "Our first publication takes the stage at Jarir",
      },
      description: {
        ar: "شراكة مميّزة مع مكتبة جرير — إحدى أكبر شبكات المكتبات في المملكة والخليج — تضع الموسوعة في متناول القارئ العربي.",
        en: "A distinguished partnership with Jarir — one of the largest bookstore chains in the Kingdom and the Gulf — making the encyclopedia accessible to the Arab reader.",
      },
    },
    testimonialQuote: {
      ar: "يحظى الكتاب باهتمام مجلات دولية، ويُعد أول مرجع إداري واقتصادي وتحليلي للبيانات يدعم مفهوم الاستثمار الرياضي، ويركّز على كرة القدم كلعبة عالمية أولى.",
      en: "The book has attracted international journal attention, and is regarded as the first management, economic, and data-analytical reference supporting sports investment — with a focus on football as the world's leading game.",
    },
  },
  {
    slug: "internal-audit",
    title: {
      ar: "مراجعة الرقابة الداخلية والامتثال",
      en: "Internal Control Audit and Compliance",
    },
    subtitle: {
      ar: "التوثيق والاختبار في ظل إطار لجنة COSO الجديد",
      en: "Documentation and Testing Under the New COSO Framework",
    },
    shortDesc: {
      ar: "مرجع احترافي للمراجعين والمحاسبين، يُقدّم ترجمة علمية دقيقة لأحد أهم المؤلفات العالمية في مجال الرقابة الداخلية والامتثال وفق إطار COSO.",
      en: "A professional reference for auditors and accountants — a rigorous translation of one of the leading works in internal control and compliance under the COSO framework.",
    },
    longDesc: {
      ar: "تعريب علمي دقيق لكتاب البروفيسور Lynford Graham الشهير، أنجزه فريق من كبار الخبراء المهنيين بقيادة الأستاذ باتل الباتل (الباتل وشركاؤه)، بمشاركة فردية من الأستاذ محمد عرفة والأستاذ وليد منير. يغطّي الكتاب منهجيات التوثيق والاختبار في بيئة الرقابة الداخلية، وتطبيقات إطار COSO المحدّث، ويُعدّ مرجعًا أساسيًا لمدقّقي الحسابات والمراجعين الداخليين وطلاب الدراسات العليا.",
      en: "A rigorous translation of Professor Lynford Graham's renowned book, produced by a team of senior professional experts led by Batel Al-Batel (Al-Batel & Co.), with individual contributions from Mohamed Arafa and Walid Munir. It covers documentation and testing methodologies in internal control environments, applications of the updated COSO framework, and serves as a core reference for external auditors, internal auditors, and graduate students.",
    },
    authors: ["batel", "mohamed", "walid"],
    authorRole: "translator",
    originalAuthor: {
      ar: "تأليف: Lynford Graham",
      en: "Author: Lynford Graham",
    },
    cover: "/Books/Book2.jfif",
    coverBadge: { ar: "تعريب مهني", en: "Professional Translation" },
    publisher: { ar: "دار فاروس للنشر والتوزيع", en: "Faros Publishing House" },
    price: 120,
    originalPrice: 200,
    currency: { ar: "﷼", en: "SAR" },
    highlights: [
      {
        ar: "وفق إطار COSO المُحدّث",
        en: "Based on the updated COSO framework",
        icon: "framework",
      },
      {
        ar: "منهجيات توثيق واختبار تطبيقية",
        en: "Practical documentation & testing methodologies",
        icon: "methodology",
      },
      {
        ar: "مرجع للمدقّقين والمحاسبين",
        en: "A reference for auditors & accountants",
        icon: "audit",
      },
    ],
    audience: {
      ar: [
        "مدقّقو الحسابات الخارجيون",
        "المراجعون الداخليون",
        "مسؤولو الحوكمة والامتثال",
        "طلاب الدراسات العليا في المحاسبة والمراجعة",
        "الجامعات والمراكز الأكاديمية",
      ],
      en: [
        "External auditors",
        "Internal auditors",
        "Governance and compliance officers",
        "Graduate students in accounting and audit",
        "Universities and academic centers",
      ],
    },
    purchase: {
      jarir: null,
      direct: {
        enabled: true,
        label: { ar: "اطلب نسختك من الباتل", en: "Order your copy from Al-Batel" },
      },
    },
    events: [],
    testimonialQuote: {
      ar: "ترجمة دقيقة وأكاديمية لأحد أهم مراجع الرقابة الداخلية العالمية، بلمسة مهنية من فريق الباتل.",
      en: "A precise, academic translation of one of the world's leading internal control references — with a professional touch from the Al-Batel team.",
    },
  },
  {
    slug: "sports-corruption-fraud",
    title: {
      ar: "الفساد والاحتيال في الرياضة",
      en: "Corruption and Fraud in Sports",
    },
    subtitle: {
      ar: "ثمانية عشر فصلًا بين النظرية والتطبيق والرقابة والحوكمة",
      en: "Eighteen chapters spanning theory, practice, oversight, and governance",
    },
    shortDesc: {
      ar: "مرجع عربي متكامل في الفساد والاحتيال بقطاع الرياضة — يجمع العمق النظري بدراسات الحالة والأدوات القانونية والرقابية للمواجهة. صادر برعاية رسمية من مؤسسة باتل عبدالله الباتل للبحوث والدراسات.",
      en: "A comprehensive Arabic reference on corruption and fraud in the sports sector — integrating theoretical depth with case studies and legal & oversight tools. Published under the official patronage of the Batel Abdullah Al-Batel Foundation for Research and Studies.",
    },
    longDesc: {
      ar: "يُمثّل هذا الإصدار مرجعًا عربيًا متكاملاً حول الفساد والاحتيال في قطاع الرياضة. ينطلق من تشخيص التحوّل الاقتصادي والسياسي والإعلامي للقطاع، ثم يتوسّع في المفاهيم والأدلة والأدوات القانونية والرقابية للمواجهة، جامعًا بين العمق النظري والوقائع التاريخية ودراسات الحالة في مسار منطقي يخدم الباحث وصانع القرار والمهتم بالنزاهة الرياضية. يضمّ الإصدار ثمانية عشر فصلاً مرتّبة تسلسليًا بين الجوانب المفاهيمية والتطبيقية والقانونية، ويناقش تلاعب النتائج والرشوة وفساد المناقصات والعقود وارتباط الرياضة بجرائم غسل الأموال، ويُحلّل قانون ماكولين في مكافحة التلاعب الرياضي، ويستعين بفصل مترجم من أعمال البروفيسور Wray Vamplew حول اقتصاديات التلاعب بالرياضة. صدر الكتاب برعاية رسمية وحصرية من مؤسسة باتل عبدالله الباتل للبحوث والدراسات ضمن مبادراتها لدعم الإنتاج العلمي وسدّ الفجوات المعرفية في الوطن العربي.",
      en: "This publication represents a comprehensive Arabic reference on corruption and fraud in the sports sector. It begins by diagnosing the economic, political, and media transformation of the sector, then expands into concepts, evidence, and the legal and oversight tools to confront it — combining theoretical depth with historical facts and case studies in a logical path that serves researchers, decision-makers, and anyone concerned with sports integrity. The work comprises eighteen sequentially organized chapters spanning conceptual, applied, and legal dimensions, covering match-fixing, bribery, procurement and contract fraud, and the link between sports and money laundering. It analyzes the McLaren law on combating sports manipulation, and draws on a translated chapter from Professor Wray Vamplew's work on the economics of sports manipulation. The book is published under the exclusive official patronage of the Batel Abdullah Al-Batel Foundation for Research and Studies, as part of its initiatives to support scientific output and bridge knowledge gaps across the Arab world.",
    },
    authors: ["batel", "mohamed", "walid"],
    authorRole: "author",
    cover: "/Books/book3.JPG",
    listCover: "/Books/book3-1.JPG",
    coverBadge: { ar: "إصدار جديد", en: "New Release" },
    publisher: { ar: "دار فاروس للنشر والتوزيع", en: "Faros Publishing House" },
    sponsor: {
      ar: "برعاية رسمية وحصرية من مؤسسة باتل عبدالله الباتل للبحوث والدراسات",
      en: "Under the exclusive official patronage of the Batel Abdullah Al-Batel Foundation for Research and Studies",
    },
    price: 99,
    currency: { ar: "﷼", en: "SAR" },
    stats: [
      {
        value: "18",
        label: { ar: "فصلاً متسلسلاً", en: "Sequential chapters" },
      },
      {
        value: "5",
        label: { ar: "محاور علمية رئيسية", en: "Main scientific axes" },
      },
      {
        value: "1",
        label: { ar: "مرجع عربي متكامل", en: "Comprehensive Arabic reference" },
      },
      {
        value: "+",
        label: { ar: "دراسات حالة محلية ودولية", en: "Local & international case studies" },
      },
    ],
    structure: [
      {
        icon: "analysis",
        title: { ar: "الموضوع والدافع", en: "Topic & Motivation" },
        count: {
          ar: "تشخيص تحوّل الرياضة من ترفيه إلى صناعة",
          en: "Diagnosing sport's shift from leisure to industry",
        },
        color: "from-blue-500 to-indigo-600",
      },
      {
        icon: "data",
        title: { ar: "المفهوم والأبعاد", en: "Concept & Dimensions" },
        count: {
          ar: "تلاعب، رشوة، فساد العقود، وغسل أموال",
          en: "Match-fixing, bribery, contract fraud, money laundering",
        },
        color: "from-rose-500 to-pink-600",
      },
      {
        icon: "accounting",
        title: { ar: "المنهجية والمحتوى", en: "Methodology & Content" },
        count: {
          ar: "18 فصلاً + دراسات حالة + فصل لـ Wray Vamplew",
          en: "18 chapters + case studies + a Wray Vamplew chapter",
        },
        color: "from-amber-500 to-orange-600",
      },
      {
        icon: "management",
        title: { ar: "المواجهة والمعالجة", en: "Addressing & Treatment" },
        count: {
          ar: "حوكمة، إبلاغ، أُطر قانونية وقانون ماكولين",
          en: "Governance, whistleblowing, legal frameworks & McLaren law",
        },
        color: "from-emerald-500 to-green-600",
      },
      {
        icon: "economy",
        title: { ar: "الرعاية والهدف", en: "Patronage & Objective" },
        count: {
          ar: "برعاية مؤسسة باتل عبدالله الباتل للبحوث والدراسات",
          en: "Sponsored by the Batel Abdullah Al-Batel Foundation",
        },
        color: "from-violet-500 to-purple-700",
      },
    ],
    highlights: [
      {
        ar: "18 فصلاً تجمع النظرية بالتطبيق والرقابة والحوكمة",
        en: "18 chapters integrating theory, practice, oversight, and governance",
        icon: "framework",
      },
      {
        ar: "برعاية رسمية من مؤسسة باتل عبدالله الباتل للبحوث والدراسات",
        en: "Officially sponsored by the Batel Abdullah Al-Batel Foundation",
        icon: "global",
      },
      {
        ar: "تحليل قانون ماكولين في مكافحة التلاعب الرياضي",
        en: "Analysis of the McLaren law on combating sports manipulation",
        icon: "methodology",
      },
      {
        ar: "فصل مترجم من أعمال البروفيسور Wray Vamplew",
        en: "Translated chapter from Professor Wray Vamplew's work",
        icon: "audit",
      },
    ],
    audience: {
      ar: [
        "صنّاع القرار في الاتحادات والأندية والهيئات الرياضية",
        "الباحثون والأكاديميون في الإدارة والقانون والاقتصاد الرياضي",
        "مسؤولو الحوكمة والامتثال ومكافحة الفساد في المؤسسات",
        "الإعلام الرياضي والمهتمون بالشفافية والرقابة",
        "الجامعات والمكتبات المتخصصة في الدراسات الرياضية والقانونية",
      ],
      en: [
        "Decision-makers in sports federations, clubs, and governing bodies",
        "Researchers and academics in sports management, law, and economics",
        "Governance, compliance, and anti-corruption officers in organizations",
        "Sports media and those interested in transparency and oversight",
        "Universities and specialized libraries in sports and legal studies",
      ],
    },
    purchase: {
      jarir: null,
      direct: {
        enabled: true,
        label: { ar: "اطلب نسختك من الباتل", en: "Order your copy from Al-Batel" },
      },
    },
    events: [],
    testimonialQuote: {
      ar: "حماية الرياضة من العبث ليست رفاهية — بل شرط لمصداقية الصناعة وكرامة المنافسة.",
      en: "Protecting sports from manipulation is not a luxury — it is a condition for the credibility of the industry and the dignity of competition.",
    },
  },
];

export function getPublicationBySlug(slug) {
  return PUBLICATIONS.find((p) => p.slug === slug) || null;
}

export function getAuthorsForPublication(pub) {
  if (!pub?.authors) return [];
  return pub.authors.map((id) => AUTHORS[id]).filter(Boolean);
}
