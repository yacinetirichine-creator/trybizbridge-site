import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['fr', 'en', 'ar', 'es', 'zh'],
  defaultLocale: 'fr'
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);