import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Scrollspy from 'react-scrollspy';

import { DrawerContext } from '../../contexts/DrawerContext';

import ScrollSpyContainer from './scrollspy.style.js';

const ScrollSpyMenu = ({ className, menuItems, resourceItems, productItems, companyItems, drawerClose, ...props }) => {
  const { dispatch } = useContext(DrawerContext);
  // empty array for scrollspy items
  const scrollItems = [];

  // convert menu path to scrollspy items
  menuItems.forEach((item) => {
    scrollItems.push(item.path.slice(1));
  });

  // Add all classs to an array
  const addAllClasses = ['scrollspy__menu'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  // Close drawer when click on menu item
  const toggleDrawer = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  const [productOpen, setProductOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [comapanyOpen, setCompanyOpen] = useState(false);

  return (
    <Scrollspy
      items={scrollItems}
      className={addAllClasses.join(' ')}
      drawerClose={drawerClose}
      {...props}
    >
      {menuItems.map((menu, index) => (
        <>
          {
            menu.label === "Product" &&
            <li className='cursor-pointer' key={`menu-item-${index}`} onClick={() => setProductOpen(prev => !prev)} 
            onMouseEnter={() => setProductOpen(true)} onMouseLeave={() => setProductOpen(false)}>
              {
                productOpen
                  ? <ScrollSpyContainer>
                    <a href={menu.path}>{menu.label}</a>
                    <div className='extra-container'>
                      {productItems.map((menu, index) => (
                        <a className="highlight" key={`product-item-${index}`} href={menu.path}>{menu.label}</a>
                      ))}
                    </div>
                  </ScrollSpyContainer>
                  : <a>{menu.label}</a>
              }
            </li>
          }
          {
            menu.label === "Resources" &&
            <li className='cursor-pointer' key={`menu-item-${index}`} onClick={() => setResourcesOpen(prev => !prev)} onMouseEnter={() => setResourcesOpen(true)} onMouseLeave={() => setResourcesOpen(false)}>
              {
                resourcesOpen
                  ? <ScrollSpyContainer>
                    <a>{menu.label}</a>
                    <div className='extra-container'>
                      {resourceItems.map((menu, index) => (
                        <a className="highlight" key={`resource-item-${index}`} href={menu.path}>{menu.label}</a>
                      ))}
                    </div>
                  </ScrollSpyContainer>
                  : <a>{menu.label}</a>
              }
            </li>
          }
          {
            menu.label === "Company" &&
            <li className='cursor-pointer' key={`menu-item-${index}`} onClick={() => setCompanyOpen(prev => !prev)} onMouseEnter={() => setCompanyOpen(true)} onMouseLeave={() => setCompanyOpen(false)}>
              {
                comapanyOpen
                  ? <ScrollSpyContainer>
                    <a>{menu.label}</a>
                    <div className='extra-container'>
                      {companyItems.map((menu, index) => (
                        <a className="highlight" key={`company-item-${index}`} href={menu.path}>{menu.label}</a>
                      ))}
                    </div>
                  </ScrollSpyContainer>
                  : <a>{menu.label}</a>
              }
            </li>
          }
          {
            (menu.label !== "Resources" && menu.label !== "Company" && menu.label !== "Product") &&
            <li key={`menu-item-${index}`}>
              {menu.staticLink ? (
                <a href={menu.path}>{menu.label}</a>
              ) : (
                <>
                  {drawerClose ? (
                    <a
                      href={menu.path}
                      offset={menu.offset}
                      onClick={toggleDrawer}
                    >
                      {menu.label}
                    </a>
                  ) : (
                    <a href={menu.path} offset={menu.offset}>
                      {menu.label}
                    </a>
                  )}
                </>
              )}
            </li>
          }
        </>
      ))
      }
    </Scrollspy >
  );
};

ScrollSpyMenu.propTypes = {
  /** className of the ScrollSpyMenu. */
  className: PropTypes.string,

  /** menuItems is an array of object prop which contain your menu
   * data.
   */
  menuItems: PropTypes.array.isRequired,

  /** Class name that apply to the navigation element paired with the content element in viewport. */
  currentClassName: PropTypes.string,

  /** Class name that apply to the navigation elements that have been scrolled past [optional]. */
  scrolledPastClassName: PropTypes.string,

  /** HTML tag for Scrollspy component if you want to use other than <ul/> [optional]. */
  componentTag: PropTypes.string,

  /** Style attribute to be passed to the generated <ul/> element [optional]. */
  style: PropTypes.object,

  /** Offset value that adjusts to determine the elements are in the viewport [optional]. */
  offset: PropTypes.number,

  /** Name of the element of scrollable container that can be used with querySelector [optional]. */
  rootEl: PropTypes.string,

  /**
   * Function to be executed when the active item has been updated [optional].
   */
  onUpdate: PropTypes.func,
};

ScrollSpyMenu.defaultProps = {
  componentTag: 'ul',
  currentClassName: 'is-current',
};

export default ScrollSpyMenu;
