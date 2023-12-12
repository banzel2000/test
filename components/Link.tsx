// LinkComponent.tsx
import React, { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

interface LinkComponentProps extends LinkProps {
  children: ReactNode;
  skipLocaleHandling?: boolean;
  locale?: string;
  className?: string;
  rel?: string;
  target?: string;
}

const LinkComponent: React.FC<LinkComponentProps> = ({
  children,
  skipLocaleHandling,
  locale,
  className,
  rel,
  target,
  ...rest
}) => {
  const router = useRouter();
  const currentLocale = locale || (router.query.locale as string) || '';

  let href = typeof rest.href === 'string' ? rest.href : router.asPath;
  if (href.indexOf('http') === 0) skipLocaleHandling = true;
  if (currentLocale && !skipLocaleHandling) {
    href = href ? `/${currentLocale}${href}` : router.pathname.replace('[locale]', currentLocale);
  }

  return (
    <Link {...rest} href={href} legacyBehavior>
      <a className={className} rel={rel} target={target}>
        {/* Do not include <a> as a direct child */}
        <span>{children}</span>
      </a>
    </Link>
  );
};

export default LinkComponent;
