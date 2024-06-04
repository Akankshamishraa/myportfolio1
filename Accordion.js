import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderedItems = items.map((item, index) => {
    const isActive = index === activeIndex;
    
    const titleStyle = {
      height: '60px',
      cursor: 'pointer',
      fontSize:'1.3rem',
      padding: '10px 0 0px 10px ',
      background: isActive ? 'black' : '#060417',
      border: '1px solid #ddd',
      margin: '4px 0 ',
      display:"flex", 
      justifyContent:"space-between"
      
      
      
    };

    const contentStyle = {
      padding: '8px',
      border: '1px solid #ddd',
      borderTop: 'none',

      display: isActive ? 'block' : 'none',
      
      
    };

    const locationStyle = {
     marginLeft: '50rem',
     gap: '1rem',
     
      
    }
    
    

    return (
      <div key={item.title}>
        <div style={titleStyle} onClick={() => onTitleClick(index)}>
          {/* <i className="dropdown icon"></i> */}
          
         {item.title} 
          <div style={{paddingRight:"2rem" ,}}>{isActive?"-" :"+"}</div>
         

        </div>
        <div style={contentStyle}>
          <div style={{marginBottom:"1rem"}}>
        <h2 style ={{display:"flex"}}>{item.heading}</h2>
        
        <p style={{fontSize:"1.1rem" , marginLeft:"58rem"}}>{item.date}</p>
        </div>
          
         
        
        <div style={{display:"flex", gap:"40rem"}}>
        <p style={{fontSize:"1.1rem" ,margin:"0.6rem 0 1rem 0" }}>{item.organisation}</p>
        
        <p style={{fontSize:"1.1rem", }}>{item.location}</p>
        </div>
         <p style={{fontSize:"1.1rem"}} dangerouslySetInnerHTML={{__html:item.content}}></p>
          
         
        </div>
       
        
      </div>
    );
  });

  return <div>{renderedItems}</div>;
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

Accordion.defaultProps = {
  items: [],
};

export default Accordion;