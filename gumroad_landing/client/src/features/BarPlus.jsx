// BarPlus.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import DropdownMenu from './DropdownMenu';

const HorizontalBar = styled.div`
  width: 90vw;
  height: 2px;
  background-color: #fff;
  position: absolute;
  display: flex;
  left: 50%;
  transform: translateX(-50%);
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 999;

`;

const PlusSign = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: 18px;
  font-weight: bold;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 999;
`;

const BarPlusWrapper = styled.div`
  position: sticky;
  top: ${({ headerHeight }) => headerHeight}px;
  z-index: 1000;
`;

const BarPlus = ({ headerHeight, onAddElement, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (type) => {
    onAddElement(type, index);
    setIsOpen(false);
  };

  return (
    <BarPlusWrapper headerHeight={headerHeight}>
      <HorizontalBar>
        <PlusSign onClick={toggleDropdown}>+</PlusSign>
        <DropdownMenu isOpen={isOpen} onSelect={handleSelect} />
      </HorizontalBar>
    </BarPlusWrapper>
  );
};

export default BarPlus;