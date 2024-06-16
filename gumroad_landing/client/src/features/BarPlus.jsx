// BarPlus.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import DropdownMenu from './DropdownMenu';

const HorizontalBar = styled.div`
  width: calc(100% - 40px); /* Subtract 40px (20px padding on each side) */
  height: 2px;
  background-color: #fff;
  position: fixed;
  display: flex;
  left: 50%; /* Position the left side at 50% of the viewport width */
  transform: translateX(-50%);
  justify-content: center;
  align-items: center;
  padding: 0 20px; /* Add 20px padding on each side */
  box-sizing: border-box; /* Include padding in the total width */
  z-index:1000;
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