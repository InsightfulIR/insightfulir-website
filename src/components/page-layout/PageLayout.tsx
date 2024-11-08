import * as React from 'react';
import { PropsWithChildren } from 'react';
import Copywrite from '../page-sections/shared/copywrite/Copywrite';
import Footer from '../page-sections/shared/footer/Footer';
import Navbar from '../page-sections/shared/nav-bar/Navbar';
import {
  mainContainer,
  navContainer,
  pageContainer,
} from './PageLayout.module.scss';


const PageLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={pageContainer}>
      <header>
        <div className={navContainer}>
          <Navbar />
        </div>
      </header>
      <main className={mainContainer}>
        {children}
      </main>
      <footer>
        <Footer />
        <Copywrite />
      </footer>
    </div>
  );
};

export default PageLayout;
