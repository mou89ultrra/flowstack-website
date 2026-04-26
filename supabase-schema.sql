-- ─── FlowStack AI Website Tables ─────────────────────────────────────────────
-- Run this in Supabase SQL Editor
-- Brand filter: always use brand = 'ai' for FlowStack AI

-- ─── Articles table ───────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS fs_articles (
  id               uuid        DEFAULT gen_random_uuid() PRIMARY KEY,
  slug             text        UNIQUE NOT NULL,
  title            text        NOT NULL,
  category         text        NOT NULL DEFAULT 'n8n',
  category_color   text        NOT NULL DEFAULT '#7C3AED',
  read_time        text        DEFAULT '5 دقائق',
  published_at     timestamptz DEFAULT now(),
  description      text,
  excerpt          text,
  content          text,
  youtube_url      text,
  is_published     boolean     NOT NULL DEFAULT false,
  pipeline_run_id  uuid        REFERENCES pipeline_runs(id) ON DELETE SET NULL,
  content_queue_id uuid        REFERENCES content_queue(id) ON DELETE SET NULL,
  brand            text        NOT NULL DEFAULT 'ai'
);

-- ─── Workflows table ──────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS fs_workflows (
  id               uuid        DEFAULT gen_random_uuid() PRIMARY KEY,
  slug             text        UNIQUE NOT NULL,
  title            text        NOT NULL,
  subtitle         text,
  category         text        NOT NULL DEFAULT 'n8n',
  color            text        NOT NULL DEFAULT '#7C3AED',
  description      text,
  long_description text,
  tools            text[]      DEFAULT '{}',
  downloads_count  int         DEFAULT 0,
  file_url         text,
  use_cases        text[]      DEFAULT '{}',
  steps            text[]      DEFAULT '{}',
  is_published     boolean     NOT NULL DEFAULT false,
  pipeline_run_id  uuid        REFERENCES pipeline_runs(id) ON DELETE SET NULL,
  brand            text        NOT NULL DEFAULT 'ai',
  created_at       timestamptz DEFAULT now()
);

-- ─── Row Level Security ───────────────────────────────────────────────────────
ALTER TABLE fs_articles  ENABLE ROW LEVEL SECURITY;
ALTER TABLE fs_workflows ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read published articles"
  ON fs_articles FOR SELECT
  USING (is_published = true AND brand = 'ai');

CREATE POLICY "Public read published workflows"
  ON fs_workflows FOR SELECT
  USING (is_published = true AND brand = 'ai');

-- ─── Migrate existing articles ────────────────────────────────────────────────
INSERT INTO fs_articles (slug, title, category, category_color, read_time, published_at, description, excerpt, content, is_published, brand) VALUES
('n8n-oauth-403', 'حل مشكلة OAuth Error 403 في n8n مع Google', 'n8n', '#7C3AED', '8 دقائق', '2026-04-10', 'دليل كامل لحل خطأ OAuth 403 عند ربط n8n مع Google Drive أو Sheets.', 'دليل كامل لحل أشهر مشكلة في ربط n8n مع خدمات Google.', '<p>محتوى المقال هنا...</p>', true, 'ai'),
('whatsapp-bot-free', 'كيف تبني بوت واتساب بالذكاء الاصطناعي مجاناً', 'WhatsApp AI', '#10B981', '12 دقيقة', '2026-04-15', 'دليل كامل لبناء بوت واتساب بالذكاء الاصطناعي.', 'Evolution API + DeepSeek + n8n = بوت واتساب احترافي بدون تكاليف.', '<p>محتوى المقال هنا...</p>', true, 'ai'),
('deepseek-n8n-guide', 'ربط DeepSeek API مع n8n — الدليل الكامل', 'AI Integration', '#06B6D4', '6 دقائق', '2026-03-20', 'كيف تستخدم DeepSeek كبديل مجاني لـ ChatGPT مع n8n.', 'كيف تستخدم DeepSeek كبديل مجاني وقوي لـ ChatGPT.', '<p>محتوى المقال هنا...</p>', true, 'ai'),
('n8n-vps-setup', 'إعداد n8n على VPS في 10 دقائق — Docker Compose', 'n8n', '#7C3AED', '10 دقائق', '2026-03-10', 'كيف تثبت n8n على Hostinger VPS باستخدام Docker Compose.', 'كيف تثبت n8n على VPS وتأمنه بـ SSL مجاني.', '<p>محتوى المقال هنا...</p>', true, 'ai'),
('evolution-api-vs-whatsapp-business', 'Evolution API vs WhatsApp Business API — أيهما أفضل؟', 'WhatsApp AI', '#10B981', '7 دقائق', '2026-03-05', 'مقارنة شاملة بين Evolution API والـ Official WhatsApp Business API.', 'مقارنة شاملة بين الخيارين — التكلفة والميزات.', '<p>محتوى المقال هنا...</p>', true, 'ai'),
('ecommerce-automation-n8n', 'أتمتة متجرك الإلكتروني مع n8n — من صفر لبطل', 'Automation', '#F59E0B', '15 دقيقة', '2026-02-20', 'أتمتة شاملة للمتجر الإلكتروني مع n8n.', 'أوتمت إشعارات الطلبات والمخزون وتواصل العملاء.', '<p>محتوى المقال هنا...</p>', true, 'ai')
ON CONFLICT (slug) DO NOTHING;

-- ─── Migrate existing workflows ───────────────────────────────────────────────
INSERT INTO fs_workflows (slug, title, subtitle, category, color, description, tools, downloads_count, file_url, is_published, brand) VALUES
('whatsapp-ai-bot', 'بوت واتساب للرد التلقائي', 'WhatsApp AI Customer Support Bot', 'WhatsApp', '#10B981', 'بوت ذكي يقرأ رسائل العملاء ويجاوب تلقائياً بالذكاء الاصطناعي.', ARRAY['n8n','Evolution API','DeepSeek AI','Google Sheets'], 2340, '/workflows/whatsapp-ai-bot.json', true, 'ai'),
('facebook-leads-whatsapp', 'جمع Leads من فيسبوك → واتساب', 'Facebook Leads to WhatsApp Auto-Notifier', 'Marketing', '#7C3AED', 'عند كل تسجيل جديد يصل العميل رسالة واتساب ترحيبية فورية.', ARRAY['n8n','Meta Graph API','WhatsApp Business','Google Sheets'], 1870, '/workflows/facebook-leads-whatsapp.json', true, 'ai'),
('social-media-poster', 'نشر تلقائي على السوشيال ميديا', 'Auto Social Media Poster from Google Sheets', 'Social Media', '#06B6D4', 'اكتب البوستات في Google Sheet والأتمتة تنشر تلقائياً.', ARRAY['n8n','Google Sheets','Meta API','Telegram Bot'], 3120, '/workflows/social-media-poster.json', true, 'ai'),
('order-notifications', 'إشعارات الطلبات التلقائية', 'Order Notifications Automation', 'E-commerce', '#F59E0B', 'أرسل إشعار واتساب تلقائياً عند كل طلب جديد.', ARRAY['n8n','WooCommerce','WhatsApp','Gmail'], 980, '/workflows/order-notifications.json', true, 'ai'),
('simple-crm', 'CRM بسيط على Google Sheets', 'Simple CRM with Google Sheets + n8n', 'CRM', '#EC4899', 'نظام CRM خفيف يتبع العملاء ويرسل تذكيرات تلقائية.', ARRAY['n8n','Google Sheets','Gmail','Telegram'], 1240, '/workflows/simple-crm.json', true, 'ai'),
('website-monitor', 'مراقب الموقع مع تنبيه واتساب', 'Website Monitor with WhatsApp Alert', 'Monitoring', '#8B5CF6', 'راقب موقعك كل 5 دقائق ويوصلك تنبيه واتساب فوراً لو وقع.', ARRAY['n8n','HTTP Request','WhatsApp','Telegram'], 760, '/workflows/website-monitor.json', true, 'ai')
ON CONFLICT (slug) DO NOTHING;
