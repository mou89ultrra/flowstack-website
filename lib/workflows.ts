export interface Workflow {
  slug: string
  title: string
  subtitle: string
  category: string
  color: string
  description: string
  longDescription: string
  tools: string[]
  downloads: string
  file: string
  useCases: string[]
  steps: string[]
}

export const workflows: Workflow[] = [
  {
    slug: 'whatsapp-ai-bot',
    title: 'بوت واتساب للرد التلقائي',
    subtitle: 'WhatsApp AI Customer Support Bot',
    category: 'WhatsApp',
    color: '#10B981',
    description: 'بوت ذكي يقرأ رسائل العملاء ويجاوب تلقائياً بالذكاء الاصطناعي ويحفظ المحادثات في Google Sheets.',
    longDescription: 'بوت واتساب كامل يستخدم Evolution API لاستقبال الرسائل، وDeepSeek AI للرد الذكي، وGoogle Sheets لحفظ كل المحادثات. يعمل 24/7 بدون تدخل بشري.',
    tools: ['n8n', 'Evolution API', 'DeepSeek AI', 'Google Sheets'],
    downloads: '2,340',
    file: 'whatsapp-ai-bot.json',
    useCases: ['خدمة عملاء تلقائية', 'الرد على الأسئلة الشائعة', 'تأهيل العملاء المحتملين', 'حجز المواعيد تلقائياً'],
    steps: ['حمّل الـ Workflow وافتحه في n8n', 'ثبّت Evolution API على سيرفرك', 'أضف DeepSeek API Key', 'اربط Google Sheets', 'عدّل الـ System Prompt', 'فعّل الـ Workflow'],
  },
  {
    slug: 'facebook-leads-whatsapp',
    title: 'جمع Leads من فيسبوك → واتساب',
    subtitle: 'Facebook Leads to WhatsApp Auto-Notifier',
    category: 'Marketing',
    color: '#7C3AED',
    description: 'لما شخص يملأ فورم Facebook Lead Ads، يوصله رسالة واتساب تلقائية وتتحفظ بياناته في Sheets.',
    longDescription: 'أتمتة كاملة لجمع الـ Leads من Facebook Lead Ads — عند كل تسجيل جديد، يصل العميل رسالة واتساب ترحيبية فورية وتُحفظ بياناته في Google Sheets.',
    tools: ['n8n', 'Meta Graph API', 'WhatsApp Business', 'Google Sheets'],
    downloads: '1,870',
    file: 'facebook-leads-whatsapp.json',
    useCases: ['حملات Facebook Lead Ads', 'التواصل الفوري مع العملاء', 'بناء قاعدة بيانات العملاء', 'متابعة الـ Leads تلقائياً'],
    steps: ['حمّل الـ Workflow في n8n', 'اربط Meta Graph API', 'أضف WhatsApp credentials', 'اربط Google Sheets', 'اختبر بتسجيل تجريبي', 'فعّل الـ Workflow'],
  },
  {
    slug: 'social-media-poster',
    title: 'نشر تلقائي على السوشيال ميديا',
    subtitle: 'Auto Social Media Poster from Google Sheets',
    category: 'Social Media',
    color: '#06B6D4',
    description: 'اكتب البوستات في Google Sheet، حدد الوقت — والأتمتة تنشر على إنستا وفيسبوك وتيليجرام تلقائياً.',
    longDescription: 'نظام نشر تلقائي كامل — اكتب محتواك في Google Sheets مع تحديد التوقيت، وسيتولى n8n نشره على Instagram وFacebook وTelegram.',
    tools: ['n8n', 'Google Sheets', 'Meta API', 'Telegram Bot'],
    downloads: '3,120',
    file: 'social-media-poster.json',
    useCases: ['جدولة المحتوى الأسبوعي', 'نشر على منصات متعددة', 'إدارة حسابات سوشيال ميديا', 'أتمتة المحتوى التسويقي'],
    steps: ['حمّل الـ Workflow في n8n', 'انسخ Google Sheet وملأه', 'اربط Instagram وFacebook API', 'أضف Telegram Bot Token', 'حدد وقت التشغيل', 'فعّل الـ Workflow'],
  },
  {
    slug: 'order-notifications',
    title: 'إشعارات الطلبات التلقائية',
    subtitle: 'Order Notifications Automation',
    category: 'E-commerce',
    color: '#F59E0B',
    description: 'أرسل إشعار واتساب وإيميل تلقائياً عند كل طلب جديد على متجرك.',
    longDescription: 'أتمتة إشعارات المتجر الإلكتروني — عند كل طلب جديد، يصل العميل إشعار واتساب فوري، ويصل فريقك إشعار على تيليجرام.',
    tools: ['n8n', 'WooCommerce', 'WhatsApp', 'Gmail'],
    downloads: '980',
    file: 'order-notifications.json',
    useCases: ['إشعار العملاء بتأكيد الطلب', 'تحديثات حالة الشحن', 'إشعار الفريق بالطلبات', 'تقارير المبيعات اليومية'],
    steps: ['حمّل الـ Workflow في n8n', 'اربط WooCommerce Webhook', 'أضف WhatsApp credentials', 'اربط Gmail', 'خصّص رسائل الإشعار', 'فعّل الـ Workflow'],
  },
  {
    slug: 'simple-crm',
    title: 'CRM بسيط على Google Sheets',
    subtitle: 'Simple CRM with Google Sheets + n8n',
    category: 'CRM',
    color: '#EC4899',
    description: 'نظام CRM خفيف يتبع العملاء، يذكرك بالمتابعة، ويرسل رسائل تلقائية.',
    longDescription: 'CRM مبسط يعمل على Google Sheets — يتتبع العملاء ومراحل البيع، يرسل تذكيرات متابعة تلقائية، ويوفر تقارير يومية.',
    tools: ['n8n', 'Google Sheets', 'Gmail', 'Telegram'],
    downloads: '1,240',
    file: 'simple-crm.json',
    useCases: ['تتبع العملاء المحتملين', 'تذكيرات المتابعة التلقائية', 'تقارير المبيعات اليومية', 'إدارة pipeline المبيعات'],
    steps: ['حمّل الـ Workflow وانسخ Google Sheet', 'أضف بيانات عملاءك', 'اربط Gmail وTelegram', 'حدد مواعيد التذكيرات', 'فعّل الـ Workflow'],
  },
  {
    slug: 'website-monitor',
    title: 'مراقب الموقع مع تنبيه واتساب',
    subtitle: 'Website Monitor with WhatsApp Alert',
    category: 'Monitoring',
    color: '#8B5CF6',
    description: 'راقب موقعك كل 5 دقائق — لو وقع يوصلك تنبيه واتساب فوراً.',
    longDescription: 'نظام مراقبة يفحص موقعك كل 5 دقائق، وإذا انقطع يرسل تنبيهاً فورياً على واتساب وتيليجرام.',
    tools: ['n8n', 'HTTP Request', 'WhatsApp', 'Telegram'],
    downloads: '760',
    file: 'website-monitor.json',
    useCases: ['مراقبة توفر الموقع 24/7', 'تنبيهات فورية عند الانقطاع', 'تقارير الأداء اليومية', 'مراقبة وقت الاستجابة'],
    steps: ['حمّل الـ Workflow في n8n', 'أضف URL موقعك', 'اربط WhatsApp وTelegram', 'حدد وقت الفحص (5 دقائق)', 'فعّل الـ Workflow'],
  },
]

export function getWorkflowBySlug(slug: string): Workflow | undefined {
  return workflows.find((w) => w.slug === slug)
}
