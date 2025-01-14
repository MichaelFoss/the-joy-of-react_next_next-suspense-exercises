import React from 'react';
import Link from 'next/link';

import { getNavLinks } from '@/helpers/web-base-helpers';

function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="" className="logo">
        WebBase
      </Link>
      <nav>
        <ol className="header-nav-links">
          <React.Suspense>
            <HeaderLinks />
          </React.Suspense>
        </ol>
      </nav>
    </header>
  );
}

async function HeaderLinks() {
  let navLinks = React.cache(async () => await getNavLinks());

  if (!Array.isArray(navLinks)) return null;
  // Only show the first 4 links in the header.
  navLinks = navLinks.slice(0, 4);

  return navLinks.map(({ slug, label, href, type }) => (
    <li key={slug}>
      <Link href={href} className={`header-nav-link ${type}`}>
        {label}
      </Link>
    </li>
  ));
}

export default SiteHeader;
