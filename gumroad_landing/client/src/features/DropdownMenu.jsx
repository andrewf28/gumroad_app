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
  z-index: 1000;
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

const DropdownMenu = ({ isOpen, onSelect }) => {
  const handleSelect = (type) => {
    onSelect(type);
  };

  return (
    <DropdownWrapper isOpen={isOpen}>
      <DropdownList>
        <DropdownItem onClick={() => handleSelect('rich_text')}>Rich Text</DropdownItem>
        <DropdownItem onClick={() => handleSelect('image')}>Image</DropdownItem>
        <DropdownItem onClick={() => handleSelect('products')}>
          Products
          <SubDropdownList>
            <SubDropdownItem onClick={() => handleSelect('instagram')}>Single</SubDropdownItem>
            <SubDropdownItem onClick={() => handleSelect('twitter')}>All</SubDropdownItem>
          </SubDropdownList>
        </DropdownItem>
        
        
        <DropdownItem>
          Socials •
          <SubDropdownList>
            <SubDropdownItem onClick={() => handleSelect('instagram')}>Instagram</SubDropdownItem>
            <SubDropdownItem onClick={() => handleSelect('twitter')}>Twitter</SubDropdownItem>
            <SubDropdownItem onClick={() => handleSelect('tiktok')}>TikTok</SubDropdownItem>
          </SubDropdownList>
        </DropdownItem>
      </DropdownList>
    </DropdownWrapper>
  );
};

export default DropdownMenu;

