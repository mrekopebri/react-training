import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AppHeader = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1.75rem;
  padding-right: 1.75rem;
  margin-right: auto;
  margin-left: auto;
  font-size: 18px;
  z-index: 10;
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2);
`;

const NavMenu = styled.div`
  * + * {
    margin-left: 1.25rem;
  }
  a {
    color: #000;
    text-decoration: none;
    font-size: 18px;
  }
  a: hover {
    color: blue;
  }
`;

const Wrapper = styled.div`
  padding-left: 2.5rem;
  padding-right: 2.5rem;
`;

const Layout = ({ children }) => {
  return (
    <div>
      <AppHeader>
        <div>
          <h2>Library App</h2>
        </div>
        <NavMenu>
          <Link to='/'>Home</Link>
          <Link to='/loanList'>Loan List</Link>
        </NavMenu>
      </AppHeader>
      <Wrapper>{children}</Wrapper>
    </div>
  );
};

export default Layout;
