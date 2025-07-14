import { NextRequest, NextResponse } from 'next/server';
import { i18n } from './i18n-config';

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language');
  if (!acceptLanguage) {
    return i18n.defaultLocale;
  }

  const languages = acceptLanguage.split(',');

  for (const langSpec of languages) {
    const lang = langSpec.split(';')[0]?.trim();
    if (lang && i18n.locales.includes(lang as any)) {
      return lang;
    }
  }

  return i18n.defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return;
  }

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)'
  ]
}; 