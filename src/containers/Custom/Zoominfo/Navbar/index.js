import React, { useContext, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import NavbarWrapper from 'common/components/Navbar';
import Drawer from 'common/components/Drawer';
import Button from 'common/components/Button';
import Logo from 'common/components/UIElements/Logo';
import Box from 'common/components/Box';
import HamburgMenu from 'common/components/HamburgMenu';
import Container from 'common/components/UI/Container';
import { DrawerContext } from 'common/contexts/DrawerContext';
import ScrollSpyMenu from 'common/components/ScrollSpyMenu';
import LogoImageAlt from 'common/assets/image/saasModern/logo.png';
import { useDetectOutsideClick } from "./dropdown";
import "@reach/menu-button/styles.css";
import './navbar.css';

const Navbar = ({ navbarStyle, logoStyle, button, row, menuWrapper,buttonWrapper,
  fillButton,
  emailShown,
  buttonHidden }) => {
  const Data = useStaticQuery(graphql`
    query {
      saasModernJson {
        MENU_ITEMS {
          label
          path
          offset
        }
        RESOURCE_ITEMS {
          label
          path
          offset
        }
        COMPANY_ITEMS {
          label
          path
          offset
        }
        PRODUCT_ITEMS {
          label
          path
          offset
        }
      }
    }
  `);

  const { state, dispatch } = useContext(DrawerContext);
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  return (
    <NavbarWrapper {...navbarStyle} className="saas_navbar">
      <Container className="widthset">
        <Box {...row}>
          <Logo
            href="/"
            logoSrc={LogoImageAlt}
            title="Portfolio"
            logoStyle={logoStyle}
            className="main-logo"
          />
          <Logo
            href="/"
            logoSrc={LogoImageAlt}
            title="Portfolio"
            logoStyle={logoStyle}
            className="logo-alt"
          />
          <Box {...menuWrapper} className="remove-underline">
           
         
            {emailShown && <input type="text" placeholder="Business Email" className='fill-input'></input>}
            {!buttonHidden && <a href="https://clodura.ai/request-demo/">
              <Button {...fillButton} title="Book A Demo" />
            </a>}
          
            
          </Box>
        </Box>
      </Container>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  button: PropTypes.object,
  row: PropTypes.object,
  menuWrapper: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    minHeight: '70px',
    display: 'block',
  },
  row: {
    flexBox: true,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logoStyle: {
    maxWidth: ['120px', '200px'],
  },
  fillButton: {
    type: 'button',
    fontSize: ['13px', '14px'],
    fontWeight: '600',
    borderRadius: '4px',
    p: ['0px 15px', '8px 22px'],
    colors: 'tertiaryWithBg',
    minWidth: ['auto', '120px'],
    height: ['40px', '46px'],
    minHeight: 'auto',
  },
  fillInput: {
    fontSize: ['13px', '14px'],
    fontWeight: '600',
    borderRadius: '4px',
    p: ['0px 15px', '8px 22px'],
    minWidth: ['auto', '200px'],
    height: ['40px', '46px'],
    minHeight: 'auto',
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: 'center',
    mt: '25px',
  },
  button: {
    type: 'button',
    fontSize: ['13px', '14px'],
    fontWeight: '600',
    borderRadius: '4px',
    p: ['0px 15px', '8px 22px'],
    color: '#fff',
    colors: 'secondary',
    height: ['40px', '46px'],
    minHeight: 'auto',
  },
  menuWrapper: {
    flexBox: true,
    alignItems: 'center',
  },
};

export default Navbar;
