export interface Article {
  slug: string
  title: string
  category: string
  categoryColor: string
  readTime: string
  date: string
  dateISO: string
  description: string
  excerpt: string
  content: string
}

export const articles: Article[] = [
  {
    slug: 'n8n-oauth-403',
    title: 'حل مشكلة OAuth Error 403 في n8n مع Google',
    category: 'n8n',
    categoryColor: '#7C3AED',
    readTime: '8 دقائق',
    date: 'أبريل 2026',
    dateISO: '2026-04-10',
    description: 'دليل كامل لحل خطأ OAuth 403 عند ربط n8n مع Google Drive أو Sheets.',
    excerpt: 'دليل كامل لحل أشهر مشكلة في ربط n8n مع خدمات Google — الأسباب والحلول خطوة بخطوة.',
    content: `
<p class="lead">إذا كنت تحاول ربط n8n مع Google Drive أو Google Sheets وظهر لك خطأ <code>403 Forbidden</code>، فأنت لست وحدك. هذه من أكثر المشاكل شيوعاً مع n8n.</p>
<h2>ما هي المشكلة بالضبط؟</h2>
<p>عند إنشاء Google OAuth credential في n8n، تحدث المشكلة في 4 أسباب رئيسية:</p>
<ul>
  <li><strong>Redirect URI غير مطابق</strong> — العنوان لا يطابق ما هو مسجل في Google Cloud Console</li>
  <li><strong>صفحة Consent Screen غير مكتملة</strong></li>
  <li><strong>بريدك غير مضاف كـ Test User</strong></li>
  <li><strong>Scopes ناقصة</strong></li>
</ul>
<h2>الحل خطوة بخطوة</h2>
<h3>الخطوة 1: اذهب إلى Google Cloud Console</h3>
<p>افتح <strong>console.cloud.google.com</strong> وتأكد أنك في المشروع الصحيح.</p>
<h3>الخطوة 2: أكمل OAuth Consent Screen</h3>
<p>من القائمة: <strong>APIs & Services → OAuth consent screen</strong> → User Type: External → أكمل جميع الحقول.</p>
<h3>الخطوة 3: أضف Test Users</h3>
<p>في قسم <strong>Test users</strong>، أضف بريدك الإلكتروني. هذا ضروري جداً.</p>
<h3>الخطوة 4: تحقق من Redirect URI</h3>
<p>في <strong>Credentials → OAuth 2.0 Client IDs</strong>، أضف:</p>
<pre><code>https://YOUR_N8N_DOMAIN/rest/oauth2-credential/callback</code></pre>
<h3>الخطوة 5: أعد إنشاء الـ Credential في n8n</h3>
<p>في n8n: <strong>Credentials → New → Google Drive OAuth2</strong> وأدخل Client ID وClient Secret.</p>`,
  },
  {
    slug: 'whatsapp-bot-free',
    title: 'كيف تبني بوت واتساب بالذكاء الاصطناعي مجاناً',
    category: 'WhatsApp AI',
    categoryColor: '#10B981',
    readTime: '12 دقيقة',
    date: 'أبريل 2026',
    dateISO: '2026-04-15',
    description: 'دليل كامل لبناء بوت واتساب بالذكاء الاصطناعي باستخدام Evolution API + DeepSeek + n8n.',
    excerpt: 'Evolution API + DeepSeek + n8n = بوت واتساب احترافي بدون أي تكاليف شهرية.',
    content: `
<p class="lead">بوت واتساب بالذكاء الاصطناعي ممكن تبنيه مجاناً تقريباً بالمكونات الصحيحة.</p>
<h2>المكونات التي ستحتاجها</h2>
<ul>
  <li><strong>Evolution API</strong> — واجهة برمجية مفتوحة المصدر لواتساب</li>
  <li><strong>DeepSeek API</strong> — ذكاء اصطناعي أرخص من ChatGPT بـ 95%</li>
  <li><strong>n8n</strong> — منصة أتمتة مفتوحة المصدر</li>
  <li><strong>VPS</strong> — سيرفر لتشغيل كل شيء</li>
</ul>
<h2>الخطوة 1: تثبيت Evolution API</h2>
<pre><code>docker run -d --name evolution-api -p 8080:8080 atendai/evolution-api:latest</code></pre>
<h2>الخطوة 2: إعداد DeepSeek API</h2>
<p>اذهب إلى <strong>platform.deepseek.com</strong> وأنشئ API Key مجاني.</p>
<h2>الخطوة 3: بناء الـ Workflow في n8n</h2>
<p>الـ workflow يتكون من: Webhook → IF → DeepSeek → Evolution API → Google Sheets</p>
<p>حمّل الـ workflow الجاهز من <a href="/workflows/whatsapp-ai-bot">هنا</a>.</p>`,
  },
  {
    slug: 'deepseek-n8n-guide',
    title: 'ربط DeepSeek API مع n8n — الدليل الكامل',
    category: 'AI Integration',
    categoryColor: '#06B6D4',
    readTime: '6 دقائق',
    date: 'مارس 2026',
    dateISO: '2026-03-20',
    description: 'كيف تستخدم DeepSeek كبديل مجاني وقوي لـ ChatGPT في أتمتة أعمالك مع n8n.',
    excerpt: 'كيف تستخدم DeepSeek كبديل مجاني وقوي لـ ChatGPT في أتمتة أعمالك مع n8n.',
    content: `
<p class="lead">DeepSeek أرخص من GPT-4 بـ 95% ويتفوق عليه في كثير من المهام — إليك كيف تربطه مع n8n.</p>
<h2>لماذا DeepSeek؟</h2>
<ul>
  <li><strong>السعر:</strong> $0.14/مليون token مقابل $3 لـ GPT-4o</li>
  <li><strong>الجودة:</strong> يتفوق على GPT-4 في coding وreasoning</li>
  <li><strong>API متوافق مع OpenAI</strong></li>
</ul>
<h2>الإعداد في n8n</h2>
<p>أضف <strong>HTTP Header Auth credential</strong>:</p>
<ul>
  <li>Header: <code>Authorization</code></li>
  <li>Value: <code>Bearer YOUR_API_KEY</code></li>
</ul>
<h2>HTTP Request node</h2>
<pre><code>POST https://api.deepseek.com/chat/completions
Body: { "model": "deepseek-chat", "messages": [...] }</code></pre>
<p>الرد: <code>{{ $json.choices[0].message.content }}</code></p>`,
  },
  {
    slug: 'n8n-vps-setup',
    title: 'إعداد n8n على VPS في 10 دقائق — Docker Compose',
    category: 'n8n',
    categoryColor: '#7C3AED',
    readTime: '10 دقائق',
    date: 'مارس 2026',
    dateISO: '2026-03-10',
    description: 'كيف تثبت n8n على Hostinger VPS باستخدام Docker Compose مع SSL مجاني.',
    excerpt: 'كيف تثبت n8n على Hostinger VPS باستخدام Docker Compose وتأمنه بـ SSL مجاني.',
    content: `
<p class="lead">تثبيت n8n على VPS يعطيك تحكماً كاملاً بدون دفع $20+/شهر لـ n8n Cloud.</p>
<h2>المتطلبات</h2>
<ul>
  <li>VPS بـ Ubuntu 22.04</li>
  <li>دومين أو subdomain</li>
  <li>Docker وDocker Compose</li>
</ul>
<h2>الخطوة 1: تثبيت Docker</h2>
<pre><code>curl -fsSL https://get.docker.com | sh</code></pre>
<h2>الخطوة 2: Docker Compose</h2>
<pre><code>version: '3.8'
services:
  n8n:
    image: n8nio/n8n:latest
    ports: ["5678:5678"]
    environment:
      - N8N_HOST=n8n.yourdomain.com</code></pre>
<h2>الخطوة 3: SSL مجاني</h2>
<pre><code>sudo certbot --nginx -d n8n.yourdomain.com</code></pre>`,
  },
  {
    slug: 'evolution-api-vs-whatsapp-business',
    title: 'Evolution API vs WhatsApp Business API — أيهما أفضل؟',
    category: 'WhatsApp AI',
    categoryColor: '#10B981',
    readTime: '7 دقائق',
    date: 'مارس 2026',
    dateISO: '2026-03-05',
    description: 'مقارنة شاملة بين Evolution API والـ Official WhatsApp Business API.',
    excerpt: 'مقارنة شاملة بين الخيارين — التكلفة، الميزات، والحالات المناسبة لكل منهما.',
    content: `
<p class="lead">عند بناء بوت واتساب، السؤال الأول: Evolution API أم WhatsApp Business API الرسمية؟</p>
<h2>مقارنة سريعة</h2>
<table>
  <tr><th>المعيار</th><th>Evolution API</th><th>WhatsApp Business API</th></tr>
  <tr><td>التكلفة</td><td>مجانية</td><td>$0.005-0.08 لكل رسالة</td></tr>
  <tr><td>الإعداد</td><td>سهل (Docker)</td><td>معقد (Meta verification)</td></tr>
  <tr><td>الموثوقية</td><td>متوسطة</td><td>عالية (رسمية)</td></tr>
</table>
<h2>متى تستخدم Evolution API؟</h2>
<ul>
  <li>للاختبار والتطوير والمشاريع الصغيرة</li>
  <li>عندما تريد البدء بدون تكلفة</li>
</ul>
<h2>التوصية</h2>
<p>ابدأ بـ <strong>Evolution API</strong> للاختبار، ثم انتقل لـ WhatsApp Business API عند الإنتاج.</p>`,
  },
  {
    slug: 'ecommerce-automation-n8n',
    title: 'أتمتة متجرك الإلكتروني مع n8n — من صفر لبطل',
    category: 'Automation',
    categoryColor: '#F59E0B',
    readTime: '15 دقيقة',
    date: 'فبراير 2026',
    dateISO: '2026-02-20',
    description: 'أتمتة شاملة للمتجر الإلكتروني مع n8n — إشعارات الطلبات، المخزون، وتواصل العملاء.',
    excerpt: 'أوتمت إشعارات الطلبات والمخزون وتواصل العملاء لمتجرك على سلة أو WooCommerce.',
    content: `
<p class="lead">إذا كنت تدير متجراً وتضيع وقتك في إشعارات يدوية — هذا المقال سيغير طريقة عملك.</p>
<h2>الأتمتات الأساسية لكل متجر</h2>
<h3>1. إشعار طلب جديد → واتساب + إيميل</h3>
<p>عند كل طلب جديد، يرسل n8n رسالة واتساب للعميل وإشعار لفريقك على تيليجرام.</p>
<h3>2. تتبع حالة الطلب</h3>
<p>عند تغيير حالة الطلب، يرسل تلقائياً رسالة واتساب للعميل بالتحديث.</p>
<h3>3. تنبيه نقص المخزون</h3>
<p>كل يوم الساعة 9 صباحاً، يفحص n8n المنتجات التي نقص مخزونها ويرسل تقريراً.</p>
<h3>4. استرداد العربات المتروكة</h3>
<p>إذا أضاف عميل منتجات ولم يكمل، يرسل له رسالة واتساب تذكيرية بعد ساعة.</p>`,
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}
