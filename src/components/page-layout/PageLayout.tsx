import * as React from 'react';
import { PropsWithChildren } from 'react';
import Container from 'react-bootstrap/Container';
import Footer from '../page-sections/shared/footer/Footer';
import Navbar from '../page-sections/shared/nav-bar/Navbar';



const PageLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        <Container fluid>
          {children}
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default PageLayout;
