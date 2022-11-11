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

const Navbar = ({ navbarStyle, logoStyle, button, row, menuWrapper }) => {
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
            <ScrollSpyMenu
              className="main_menu"
              menuItems={Data.saasModernJson.MENU_ITEMS}
              resourceItems={Data.saasModernJson.RESOURCE_ITEMS}
              companyItems={Data.saasModernJson.COMPANY_ITEMS}
              productItems={Data.saasModernJson.PRODUCT_ITEMS}
              offset={-70}
            />
            <a href="https://app.clodura.ai/#/auth/register/" className="navbar_button">
              <Button {...button} title="Free Sign Up" />
            </a>
            <Drawer
              width="420px"
              placement="right"
              drawerHandler={<HamburgMenu barColor="black" />}
              open={state.isOpen}
              toggleHandler={toggleHandler}
            >
              <ScrollSpyMenu
                className="mobile_menu remove-underline"
                menuItems={Data.saasModernJson.MENU_ITEMS}
                resourceItems={Data.saasModernJson.RESOURCE_ITEMS}
                companyItems={Data.saasModernJson.COMPANY_ITEMS}
                productItems={Data.saasModernJson.PRODUCT_ITEMS}
                drawerClose={true}
                offset={-100}
              />
              <a href="https://app.clodura.ai/#/auth/register/" className="navbar_drawer_button">
                <Button {...button} title="FREE SIGN UP" />
              </a>
            </Drawer>
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
  button: {
    type: 'button',
    fontSize: '13px',
    fontWeight: '700',
    borderRadius: '4px',
    pl: '15px',
    pr: '15px',
    colors: 'tertiaryWithBg',
    minHeight: 'auto',
    height: '40px',
  },
  menuWrapper: {
    flexBox: true,
    alignItems: 'center',
  },
};

export default Navbar;
