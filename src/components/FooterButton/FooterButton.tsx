import "./FooterButton.css";
import { FaCaretDown } from "react-icons/fa";
import { useState, useEffect, useRef } from 'react';

interface IButton{
    title:string
    list:string[]
    width?: "widthNormal" | "widthLarge"
    
}

const FooterButton = ({title, list, width}:IButton) => {
    function printCurrency(list: string[]) {
        return list.map((listItem, index) => (
            <>
                <li key={index}>{listItem}</li>
            </>
        ));
    }
    
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: { target: any; }) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className={width} onClick={toggleDropdown}>{title} <FaCaretDown/></button>
      <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
        <ul>
        {printCurrency(list)}
        </ul>
      </div>
    </div>
  );
}

export default FooterButton
