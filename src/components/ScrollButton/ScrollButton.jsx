import { useState, useEffect } from 'react';
import PropTypes from "prop-types";


function ScrollButton({ onClick }) {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 500) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <>
        {isScrolled && <button className="scrollButton" onClick={onClick} ></button>}
        </>
    )

}

ScrollButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default ScrollButton