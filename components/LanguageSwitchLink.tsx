import React from 'react';
import languageDetector from '../languageDetector';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface LanguageSwitchLinkProps {
  locale: string;
  href?: string;
  children: React.ReactNode;
}

const LanguageSwitchLink: React.FC<LanguageSwitchLinkProps> = ({ locale, ...rest }) => {
  const router = useRouter();

  let href = rest.href || router.asPath;
  let pName = router.pathname;

  Object.keys(router.query).forEach((k) => {
    if (k === 'locale') {
      pName = pName.replace(`[${k}]`, locale);
      return;
    }
    pName = pName.replace(`[${k}]`, router.query[k] as string);
  });

  if (locale) {
    href = rest.href ? `/${locale}${rest.href}` : pName;
  }

  return (
    <Link href={href} onClick={() => languageDetector?.cache?.(locale)} legacyBehavior>
      <a>{rest.children}</a>
    </Link>
  );
};

export default LanguageSwitchLink;
