
import React, { useState } from 'react';
import './Tabs.scss';
import solarpictures from '../images/solarhouse.png';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab3');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container1">
      <div className="tabs">
      <div
          className={`tab ${activeTab === 'tab1' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab1')}
        >
          3 KW
        </div>
        <div
          className={`tab ${activeTab === 'tab2' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab2')}
        >
          5 KW
        </div>
        <div
          className={`tab ${activeTab === 'tab3' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab3')}
        >
          10 KW
        </div>
        <div
          className={`tab ${activeTab === 'tab4' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab4')}
        >
          15 KW
        </div>
        <div
          className={`tab ${activeTab === 'tab5' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab5')}
        >
          30 KW
        </div>
      </div>

      <div className="content">
        {activeTab === 'tab1' && 
        <div>
          <div className="solar-panel-container">
      <h4 className='package'>10 kW Package</h4>

      <div className="solar-panel-content">
        <p > 
        10 kilowatt (kW) solar power system is relatively large and can typically meet the electricity needs of a medium to large-sized home.
        </p>
        <p className='content1'>The load this system can handle even in an outage are:</p>
        <h4 className='h5'> Four 1-ton inverter ACs or three 1.5-ton inverter AC, fridges, LCD/LED TV and a number of lights and fans</h4>
      
        {/* Add more content as needed */}
      </div>
      <div className='text-div'>
        <h5 >
          System rated capacity: 10KW
        </h5>
        <h5 className='h5' >Rated Solar Power: 15KW </h5>
        <h5>Net Metering: Enabled</h5>
        <h5 className='h5'> Connectivity: Wifi & cloud communication</h5>
      </div>
      <div className="solar-panel-image">
        {/* Add your solar panel image source here */}
        <img src={solarpictures} alt="Solar Panels" />
      </div>
    
      </div>
     
     
        </div>}


        {activeTab === 'tab2' && <div><div className="solar-panel-container">
      <h4 className='package'>10 kW Package</h4>

      <div className="solar-panel-content">
        <p>
        10 kilowatt (kW) solar power system is relatively large and can typically meet the electricity needs of a medium to large-sized home.
        </p>
        <p className='content1'>The load this system can handle even in an outage are:</p>
        <h4 className='h5'> Four 1-ton inverter ACs or three 1.5-ton inverter AC, fridges, LCD/LED TV and a number of lights and fans</h4>
      
        {/* Add more content as needed */}
      </div>
      <div className='text-div'>
        <h5 >
          System rated capacity: 10KW
        </h5>
        <h5 className='h5' >Rated Solar Power: 15KW </h5>
        <h5>Net Metering: Enabled</h5>
        <h5 className='h5'> Connectivity: Wifi & cloud communication</h5>
      </div>
      <div className="solar-panel-image">
        {/* Add your solar panel image source here */}
        <img src={solarpictures} alt="Solar Panels" />
      </div>
    
      </div>
     
     </div>}
        {activeTab === 'tab3' && <div><div className="solar-panel-container">
      <h4 className='package'>10 kW Package</h4>

      <div className="solar-panel-content">
        <p>
        10 kilowatt (kW) solar power system is relatively large and can typically meet the electricity needs of a medium to large-sized home.
        </p>
        <p className='content1'>The load this system can handle even in an outage are:</p>
        <h4 className='h5'> Four 1-ton inverter ACs or three 1.5-ton inverter AC, fridges, LCD/LED TV and a number of lights and fans</h4>
      
        {/* Add more content as needed */}
      </div>
      <div className='text-div'>
        <h5 >
          System rated capacity: 10KW
        </h5>
        <h5 className='h5' >Rated Solar Power: 15KW </h5>
        <h5>Net Metering: Enabled</h5>
        <h5 className='h5'> Connectivity: Wifi & cloud communication</h5>
      </div>
      <div className="solar-panel-image">
        {/* Add your solar panel image source here */}
        <img src={solarpictures} alt="Solar Panels" />
      </div>
    
      </div>
     
     </div>}
        {activeTab === 'tab4' && <div><div className="solar-panel-container">
      <h4 className='package'>10 kW Package</h4>

      <div className="solar-panel-content">
        <p>
        10 kilowatt (kW) solar power system is relatively large and can typically meet the electricity needs of a medium to large-sized home.
        </p>
        <p className='content1'>The load this system can handle even in an outage are:</p>
        <h4 className='h5'> Four 1-ton inverter ACs or three 1.5-ton inverter AC, fridges, LCD/LED TV and a number of lights and fans</h4>
      
        {/* Add more content as needed */}
      </div>
      <div className='text-div'>
        <h5 >
          System rated capacity: 10KW
        </h5>
        <h5 className='h5' >Rated Solar Power: 15KW </h5>
        <h5>Net Metering: Enabled</h5>
        <h5 className='h5'> Connectivity: Wifi & cloud communication</h5>
      </div>
      <div className="solar-panel-image">
        {/* Add your solar panel image source here */}
        <img src={solarpictures} alt="Solar Panels" />
      </div>
    
      </div>
     
     </div>}
        {activeTab === 'tab5' && <div><div className="solar-panel-container">
      <h4 className='package'>10 kW Package</h4>

      <div className="solar-panel-content">
        <p>
        10 kilowatt (kW) solar power system is relatively large and can typically meet the electricity needs of a medium to large-sized home.
        </p>
        <p className='content1'>The load this system can handle even in an outage are:</p>
        <h4 className='h5'> Four 1-ton inverter ACs or three 1.5-ton inverter AC, fridges, LCD/LED TV and a number of lights and fans</h4>
      
        {/* Add more content as needed */}
      </div>
      <div className='text-div'>
        <h5 >
          System rated capacity: 10KW
        </h5>
        <h5 className='h5' >Rated Solar Power: 15KW </h5>
        <h5>Net Metering: Enabled</h5>
        <h5 className='h5'> Connectivity: Wifi & cloud communication</h5>
      </div>
      <div className="solar-panel-image">
        {/* Add your solar panel image source here */}
        <img src={solarpictures} alt="Solar Panels" />
      </div>
    
      </div>
     
     </div>}
      </div>
    </div>
  );
};

export default Tabs;
