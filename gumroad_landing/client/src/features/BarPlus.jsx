// BarPlus.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import DropdownMenu from './DropdownMenu';

const HorizontalBar = styled.div`
  width: 100%;
  height: 2px;
  background-color: #fff;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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
  z-index: 1000;
`;

const BarPlus = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HorizontalBar>
      <PlusSign onClick={toggleDropdown}>+</PlusSign>
      <DropdownMenu isOpen={isOpen} />
    </HorizontalBar>
  );
};

export default BarPlus;