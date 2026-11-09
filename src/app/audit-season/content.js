/**
 * Copy for the audit-season landing page (/audit-season).
 * Kept apart from the component so the text can be edited (and reused in
 * the FAQ structured data) without touching layout code.
 */

export const AUDIT_STAGES = [
  {
    icon: "target",
    title: { ar: "التخطيط", en: "Planning" },
    body: {
      ar: "نفهم نشاطك ومخاطره، ونحدد ما يستحق الفحص الأدق.",
      en: "We understand your business and its risks, and focus testing where it matters.",
    },
    why: {
      ar: "تخطيط جيد يعني مراجعة أسرع وأسئلة أقل لفريقك.",
      en: "Good planning means a faster audit and fewer questions for your team.",
    },
  },
  {
    icon: "shield",
    title: { ar: "تقييم الرقابة الداخلية", en: "Internal control review" },
    body: {
      ar: "هل إجراءاتك تمنع الأخطاء، أم تكتشفها متأخرًا؟",
      en: "Do your procedures prevent errors, or catch them too late?",
    },
    why: {
      ar: "الملاحظة المبكرة تُصلَح قبل أن تصبح ملاحظة في التقرير.",
      en: "An early finding gets fixed before it becomes a finding in the report.",
    },
  },
  {
    icon: "box",
    title: { ar: "الجرد والمصادقات", en: "Stock count & confirmations" },
    body: {
      ar: "نحضر جرد المخزون، ونتأكد من الأرصدة مع البنوك والعملاء والموردين.",
      en: "We attend the stock count and confirm balances with banks, customers and suppliers.",
    },
    why: {
      ar: "الجرد في 31 ديسمبر، والمراجع الذي يحضره يجب أن يُعيَّن قبله.",
      en: "The count is on 31 December — the auditor who attends it must be appointed before.",
    },
    highlight: true,
  },
  {
    icon: "search",
    title: { ar: "الفحص التفصيلي", en: "Detailed testing" },
    body: {
      ar: "نختبر الإيرادات والمصروفات والأصول والالتزامات.",
      en: "We test revenue, expenses, assets and liabilities.",
    },
    why: {
      ar: "دفاتر منظمة ومستندات جاهزة تختصر هذه المرحلة كثيرًا.",
      en: "Organised books and ready documents shorten this stage considerably.",
    },
  },
  {
    icon: "report",
    title: { ar: "تقرير المراجع", en: "Auditor's report" },
    body: {
      ar: "رأي مهني مستقل يعتمد عليه البنك والشريك والجهات الرسمية.",
      en: "An independent professional opinion relied on by banks, partners and authorities.",
    },
    why: {
      ar: "قوائم مراجَعة بثقة تعني قرارات تمويل وشراكة أوضح.",
      en: "Confidently audited statements mean clearer financing and partnership decisions.",
    },
  },
  {
    icon: "upload",
    title: { ar: "الإيداع", en: "Filing" },
    body: {
      ar: "نرافقك حتى رفع القوائم على منصة قوائم.",
      en: "We stay with you until the statements are filed on the Qawaem platform.",
    },
    why: {
      ar: "الإيداع في موعده يجنّبك غرامات التأخير.",
      en: "Filing on time spares you late-filing penalties.",
    },
  },
];

export const BEFORE_AFTER = {
  before: {
    title: { ar: "مراجع يُعيَّن قبل الجرد", en: "Auditor appointed before the count" },
    points: {
      ar: [
        "يحضر العدّ ويختبره بنفسه",
        "دليل مباشر على رصيد المخزون",
        "تقرير في موعده",
      ],
      en: [
        "Attends and tests the count first-hand",
        "Direct evidence of the stock balance",
        "Report delivered on time",
      ],
    },
  },
  after: {
    title: { ar: "مراجع يُعيَّن بعد الإقفال", en: "Auditor appointed after year-end" },
    points: {
      ar: [
        "إجراءات بديلة أطول",
        "مستندات إضافية من فريقك",
        "احتمال التحفّظ على المخزون",
      ],
      en: [
        "Longer alternative procedures",
        "Extra documents from your team",
        "Possible qualification on inventory",
      ],
    },
  },
};

export const CHECKLIST = {
  ar: [
    "ميزان المراجعة للسنة المالية",
    "كشوف الحسابات البنكية ومطابقاتها",
    "قوائم جرد المخزون في 31 ديسمبر",
    "سجل الأصول الثابتة والإهلاكات",
    "أعمار الذمم المدينة والدائنة",
    "العقود والاتفاقيات الجوهرية",
    "السجل التجاري وعقد التأسيس",
    "الإقرارات الزكوية والضريبية السابقة",
    "القوائم المالية المراجَعة للسنة السابقة",
  ],
  en: [
    "Trial balance for the financial year",
    "Bank statements and reconciliations",
    "Stock count sheets as at 31 December",
    "Fixed asset register and depreciation",
    "Receivables and payables ageing",
    "Material contracts and agreements",
    "Commercial registration and articles",
    "Prior zakat and tax returns",
    "Prior-year audited financial statements",
  ],
};

export const AUDIT_FAQ = [
  {
    q: {
      ar: "متى يجب أن أعيّن مراجع الحسابات؟",
      en: "When should I appoint my auditor?",
    },
    a: {
      ar: "الأفضل قبل نهاية السنة المالية، وتحديدًا قبل جرد 31 ديسمبر؛ حتى يتمكن المراجع من التخطيط مبكرًا وحضور جرد المخزون بنفسه، فيصدر التقرير في موعده دون إجراءات إضافية.",
      en: "Ideally before the financial year ends — specifically before the 31 December stock count — so the auditor can plan early and attend the count in person, and issue the report on time without extra procedures.",
    },
  },
  {
    q: {
      ar: "لماذا يجب أن يحضر المراجع جرد المخزون؟",
      en: "Why must the auditor attend the stock count?",
    },
    a: {
      ar: "تتطلب معايير المراجعة الدولية من المراجع الحصول على أدلة كافية عن وجود المخزون وحالته، وأقوى دليل هو حضوره الجرد الفعلي. إذا عُيّن بعد الجرد يلجأ إلى إجراءات بديلة أطول وقد يضطر للتحفّظ على رصيد المخزون في تقريره.",
      en: "International auditing standards require sufficient evidence of inventory existence and condition, and the strongest evidence is attending the physical count. An auditor appointed afterwards must use longer alternative procedures and may have to qualify the inventory balance.",
    },
  },
  {
    q: {
      ar: "متى يبدأ موسم مراجعة القوائم المالية فعليًا؟",
      en: "When does the audit season really start?",
    },
    a: {
      ar: "يعتقد كثيرون أنه يبدأ في يناير وينتهي في يونيو، لكن المراجعة الناجحة تبدأ قبل إقفال السنة: تعيين المراجع والتخطيط وتقييم الرقابة الداخلية ثم حضور جرد 31 ديسمبر. البدء المبكر يجعل الإقرار الزكوي والإيداع في منصة قوائم يمرّان في موعدهما دون ضغط.",
      en: "Many assume it runs January to June, but a smooth audit starts before year-end: appointing the auditor, planning, reviewing internal controls and attending the 31 December count. Starting early lets the zakat return and Qawaem filing happen on time without pressure.",
    },
  },
  {
    q: {
      ar: "ما آخر موعد لتقديم الإقرار الزكوي؟",
      en: "What is the zakat return deadline?",
    },
    a: {
      ar: "يُقدَّم الإقرار الزكوي خلال 120 يومًا من نهاية السنة المالية، أي في 30 أبريل تقريبًا للمنشآت التي تنتهي سنتها في 31 ديسمبر (29 أبريل في السنوات الكبيسة)، وإذا صادف آخر المدة عطلة رسمية امتدت إلى أول يوم عمل بعدها.",
      en: "The zakat return is due within 120 days of year-end — around 30 April for a 31 December year-end (29 April in leap years). If the last day falls on an official holiday, it moves to the next working day.",
    },
  },
  {
    q: {
      ar: "ما آخر موعد لإيداع القوائم المالية في منصة قوائم؟",
      en: "What is the deadline to file on the Qawaem platform?",
    },
    a: {
      ar: "وفق نظام الشركات تُودَع القوائم المالية خلال 6 أشهر من تاريخ انتهاء السنة المالية، أي حتى 30 يونيو للمنشآت التي تنتهي سنتها في 31 ديسمبر، ويعرّض التأخير المنشأة لغرامات نظامية.",
      en: "Under the Companies Law, financial statements must be filed within 6 months of year-end — by 30 June for a 31 December year-end. Late filing exposes the company to statutory penalties.",
    },
  },
  {
    q: {
      ar: "ماذا يحدث إذا تأخرت في تعيين المراجع؟",
      en: "What happens if I appoint the auditor late?",
    },
    a: {
      ar: "تطول المراجعة، ويُطلب من فريقك مستندات إضافية، وقد يتأخر إصدار التقرير ومعه إيداع القوائم المالية والإقرارات النظامية، مما قد يعرّض المنشأة لغرامات التأخير.",
      en: "The audit takes longer, your team is asked for extra documents, and the report may be delayed — and with it the filing of financial statements and statutory returns, which may expose the company to late penalties.",
    },
  },
  {
    q: {
      ar: "ما المستندات المطلوبة لبدء مراجعة القوائم المالية؟",
      en: "What documents are needed to start the audit?",
    },
    a: {
      ar: "أهمها: ميزان المراجعة، وكشوف الحسابات البنكية ومطابقاتها، وقوائم جرد المخزون، وسجل الأصول الثابتة، وأعمار الذمم، والعقود الجوهرية، والسجل التجاري، والإقرارات الزكوية والضريبية، وقوائم السنة السابقة.",
      en: "Mainly: the trial balance, bank statements and reconciliations, stock count sheets, fixed asset register, receivables/payables ageing, material contracts, commercial registration, zakat and tax returns, and prior-year statements.",
    },
  },
  {
    q: {
      ar: "هل تساعدون في رفع القوائم المالية على منصة قوائم؟",
      en: "Do you help file the statements on the Qawaem platform?",
    },
    a: {
      ar: "نعم، نرافقك في جميع مراحل المراجعة حتى رفع القوائم المالية المراجَعة على منصة قوائم.",
      en: "Yes. We accompany you through every stage of the audit until the audited statements are filed on the Qawaem platform.",
    },
  },
  {
    q: {
      ar: "هل تقدمون خدمة المراجعة خارج الرياض؟",
      en: "Do you provide audit services outside Riyadh?",
    },
    a: {
      ar: "نعم، نخدم عملاءنا من مقرنا الرئيسي في الرياض وعبر 9 فروع في المملكة، منها جدة والمدينة المنورة والخبر والقصيم وحفر الباطن وخميس مشيط وجازان.",
      en: "Yes. We serve clients from our Riyadh head office and 9 branches across the Kingdom, including Jeddah, Madinah, Al Khobar, Qassim, Hafr Al-Batin, Khamis Mushait and Jazan.",
    },
  },
  {
    q: {
      ar: "كم تستغرق مراجعة القوائم المالية؟",
      en: "How long does a financial statement audit take?",
    },
    a: {
      ar: "تعتمد المدة على حجم المنشأة وطبيعة نشاطها ومدى جاهزية دفاترها، ونحدد في عرض الخدمة جدولًا زمنيًا واضحًا لكل مرحلة. وكلما بدأنا قبل الإقفال كان الإنجاز أسرع.",
      en: "It depends on the company's size, activity and how ready its books are; our proposal sets a clear timeline for each stage. The earlier we start before year-end, the faster it goes.",
    },
  },
];
