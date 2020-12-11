import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Container } from 'components/Grid';

import styles from './Topnav.module.scss';

const logo = (
  <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 18.614C21.9461 22.6798 17.731 25.4677 12.8647 25.4677C5.97892 25.4677 0.396912 19.8857 0.396912 13C0.396912 6.11423 5.97892 0.532227 12.8647 0.532227C17.7122 0.532227 21.9136 3.29871 23.9761 7.33897L18.1375 10.537C17.21 8.55484 15.1977 7.18168 12.8647 7.18168C9.65134 7.18168 7.0464 9.78662 7.0464 13C7.0464 16.2133 9.65134 18.8183 12.8647 18.8183C15.2165 18.8183 17.2424 17.4229 18.1597 15.415L24 18.614Z"
      fill="#060B5A"
    />
  </svg>
);

export const Topbar = ({ title }) => {
  return (
    <nav className={styles.topbar}>
      <Container fluid className={styles.topbarContent}>
        <div className={styles.brand}>
          <Link href="/">{logo}</Link>
        </div>
        <ul className={`${styles.linkGroup} ml-auto`}>
          <li>
            <Link href="/">Palettes</Link>
          </li>
          <li>
            <Link href="/generate">Generate</Link>
          </li>
          <li>
            <Link href="/#">More</Link>
            <ul>
              <li>
                <Link href="/#">Favorites</Link>
              </li>
              <li>
                <Link href="/name-that-color">Name that color</Link>
              </li>
              <li>
                <Link href="/#">Contrast checker</Link>
              </li>
              <li>
                <Link href="/#">Tints &amp; shades</Link>
              </li>
            </ul>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

Topbar.propTypes = {
  title: PropTypes.string,
};

Topbar.defaultProps = {
  title: 'Kurutu',
};

export default Topbar;
