import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'التواصل الفعال على طريقة النبوة', // Komunikasi Efektif ala Nabi
      defaultLocale: 'ar',
      locales: {
        root: {
          label: 'العربية',
          lang: 'ar',
          dir: 'rtl', // Mengaktifkan mode baca dari kanan ke kiri (RTL)
        },
      },
      customCss: [
        './src/styles/custom.css',
      ],
      components: {
        Footer: './src/components/CustomFooter.astro',
        SocialIcons: './src/components/LanguageSwitch.astro',
      },
      sidebar: [
        {
          label: 'المقدمة', // Pendahuluan
          items: [
            { label: 'مقدمة الكتاب وطريقة الاستخدام', slug: '00-pengantar' },
          ],
        },
        {
          label: 'الجزء الأول: الأساسيات وأخلاقيات القول', // Bagian 1: Fondasi & Etika Lisan
          items: [
            { label: 'الفصل الأول: مبادئ القول القرآني', slug: '01-bab-1' },
            { label: 'الفصل الثاني: فن الاستماع والإنصات', slug: '02-bab-2' },
            { label: 'الفصل الثالث: لغة الجسد ونبرة الصوت', slug: '03-bab-3' },
            { label: 'الفصل الرابع: التواصل الأسري', slug: '04-bab-4' },
          ],
        },
        {
          label: 'الجزء الثاني: التواصل حسب المخاطَبين', // Bagian 2: Berdasarkan Audiens
          items: [
            { label: 'الفصل الخامس: مع الأصحاب وفريق العمل', slug: '05-bab-5' },
            { label: 'الفصل السادس: مع عامة الناس والمجتمع', slug: '06-bab-6' },
            { label: 'الفصل السابع: مع الخصوم والمعارضين', slug: '07-bab-7' },
          ],
        },
        {
          label: 'الجزء الثالث: مواقف خاصة', // Bagian 3: Situasi Khusus
          items: [
            { label: 'الفصل الثامن: القيادة والاستراتيجية', slug: '08-bab-8' },
            { label: 'الفصل التاسع: في الأزمات والحروب', slug: '09-bab-9' },
            { label: 'الفصل العاشر: النقد والتقييم', slug: '10-bab-10' },
          ],
        },
        {
          label: 'المراجع', // Back Matter / Referensi
          items: [
            { label: 'المراجع والمصادر', slug: '11-referensi' },
          ],
        },
      ],
    }),
  ],
});