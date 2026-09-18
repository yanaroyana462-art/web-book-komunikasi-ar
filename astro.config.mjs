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
            { label: 'مقدمة الكتاب وطريقة الاستخدام', slug: 'المقدمة-وطريقة-استخدام-الكتاب' },
          ],
        },
        {
          label: 'الجزء الأول: الأساسيات وأخلاقيات القول', // Bagian 1: Fondasi & Etika Lisan
          items: [
            { label: 'الفصل الأول: مبادئ القول القرآني', slug: 'الفصل-الأول-أسس-القول-مبادئ-القول-الستة' },
            { label: 'الفصل الثاني: فن الاستماع والإنصات', slug: 'الفصل-الثاني-فن-الاستماع-الاستماع-الفعال' },
            { label: 'الفصل الثالث: لغة الجسد ونبرة الصوت', slug: 'الفصل-الثالث-الوضوح-نبرة-الصوت-ولغة-الجسد' },
            { label: 'الفصل الرابع: التواصل الأسري', slug: 'الفصل-الرابع-في-البيت-الزوجة-والأطفال' },
          ],
        },
        {
          label: 'الجزء الثاني: التواصل حسب المخاطَبين', // Bagian 2: Berdasarkan Audiens
          items: [
            { label: 'الفصل الخامس: مع الأصحاب وفريق العمل', slug: 'الفصل-الخامس-مع-الأصحاب-وفريق-العمل' },
            { label: 'الفصل السادس: مع عامة الناس والمجتمع', slug: 'الفصل-السادس-مع-عامة-الناس-والمجتمع' },
            { label: 'الفصل السابع: مع الخصوم والمعارضين', slug: 'الفصل-السابع-مع-الأعداء-والمعارضين' },
          ],
        },
        {
          label: 'الجزء الثالث: مواقف خاصة', // Bagian 3: Situasi Khusus
          items: [
            { label: 'الفصل الثامن: القيادة والاستراتيجية', slug: 'الفصل-الثامن-القيادة-والتواصل-الاستراتيجي' },
            { label: 'الفصل التاسع: في الأزمات والحروب', slug: 'الفصل-التاسع-في-الأزمات-والحروب-والضغوط-العالية' },
            { label: 'الفصل العاشر: النقد والتقييم', slug: 'الفصل-العاشر-تقديم-النقد-وتصحيح-الأخطاء' },
          ],
        },
        {
          label: 'المراجع', // Back Matter / Referensi
          items: [
            { label: 'المراجع والمصادر', slug: 'المراجع-والمصادر' },
          ],
        },
      ],
    }),
  ],
});