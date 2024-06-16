// DropdownMenu.jsx
import React from 'react';
import styled from 'styled-components';

const DropdownWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  border: 1px solid #000;
  padding: 10px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  z-index: 1000;
`;

const DropdownList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const DropdownItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #000;
  color: #000;
  cursor: pointer;
  position: relative;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f5f5f5;
  }

  &:hover > ul {
    display: block;
  }
`;

const SubDropdownList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 0;
  left: 100%;
  background-color: #fff;
  border: 1px solid #000;
  display: none;
`;

const SubDropdownItem = styled.li`
  padding: 10px;
  color: #000;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const DropdownMenu = ({ isOpen }) => {
  return (
    <DropdownWrapper isOpen={isOpen}>
      <DropdownList>
        
        <DropdownItem>Rich Text</DropdownItem>
        <DropdownItem>Image</DropdownItem>
        <DropdownItem>Products</DropdownItem>
        <DropdownItem>Socials</DropdownItem>
        <DropdownItem>
          Socials •
          <SubDropdownList>
            <SubDropdownItem>Instagram</SubDropdownItem>
            <SubDropdownItem>Twitter</SubDropdownItem>
            <SubDropdownItem>TikTok</SubDropdownItem>
          </SubDropdownList>
        </DropdownItem>
      </DropdownList>
    </DropdownWrapper>
  );
};

export default DropdownMenu;