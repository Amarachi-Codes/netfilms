import "./langButton.css";
import { MdLanguage } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

interface ILang{
    title:string
    list:string[]
    width?: "widthNormal" | "widthLarge"
    
}

function LangButton({title, list, width}:ILang) {

    function printLang(list: string[]) {
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
        <MdLanguage color="#fff"/>
      <button className={width} onClick={toggleDropdown}>{title} <FaCaretDown/></button>
      <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
        <ul>
        {printLang(list)}
        </ul>
      </div>
    </div>
  );
}

export default LangButton;


// const LangButton = () => {
//   return (
//     <>
//     <div>
//       <MdLanguage />
//       <p>English</p>
//       <FaCaretDown/>
//     </div>
//     </>
//   )
// }

// export default LangButton
