import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'التواصل الفعال على طريقة النبوة',
      defaultLocale: 'ar',
      locales: {
        root: {
          label: 'العربية',
          lang: 'ar',
          dir: 'rtl',
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
          label: 'محتويات الكتاب',
          items: [{ autogenerate: { directory: '' } }],
        },
      ],
    }),
  ],
});
