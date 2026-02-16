import { Tabs } from '@mantine/core';
import { useNavigate, useLocation } from 'react-router-dom';


const CityTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  

  const handleTabChange = (value: string | null) => {
    if (value) {
      
      navigate(`/vacancies/${value}`);
 
    }
  };


  const getActiveTab = () => {
   
    
    
  if (location.pathname.includes('/petersburg')) return 'petersburg';
  if (location.pathname.includes('/moscow')) return 'moscow';
  return null; 
  };

  return (
    <Tabs
      value={getActiveTab()}      
      onChange={handleTabChange}  
      style={{
        marginBottom: '24px',
        width: '659px',
      }}
    >
      <Tabs.List>
        <Tabs.Tab value="moscow">Москва</Tabs.Tab>
        <Tabs.Tab value="petersburg">Санкт-Петербург</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
};

export default CityTabs;