import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/useAppDispatch';
import { updateFilters, setCurrentPage } from '../store/slices/vacanciesSlice';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import SkillsAndCityFilter from '../components/SkillsAndCityFilter';
import VacanciesList from '../components/VacanciesList';
import CityTabs from '../components/CityTabs';

const VacanciesPage = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.vacancies.filters);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const urlSearch = searchParams.get('search') || '';
    const urlSkills = searchParams.getAll('skill');

    const newFilters: Partial<typeof filters> = {};

    if (searchParams.has('search') && urlSearch !== filters.search) {
      newFilters.search = urlSearch;
    }

    if (searchParams.has('skill')) {
      const urlSkillsSorted = [...urlSkills].sort();
      const currentSkillsSorted = [...filters.skills].sort();
      if (JSON.stringify(urlSkillsSorted) !== JSON.stringify(currentSkillsSorted)) {
        newFilters.skills = urlSkills;
      }
    }
    
    if (Object.keys(newFilters).length > 0) {
      dispatch(updateFilters(newFilters));
      dispatch(setCurrentPage(0));
    }
  }, []); 

  useEffect(() => {
    const path = location.pathname;
    let areaFromPath = '';
    if (path.includes('/moscow')) {
      areaFromPath = '1';
    } else if (path.includes('/petersburg')) {
      areaFromPath = '2';
    }

    if (areaFromPath === filters.area) return;

    dispatch(updateFilters({ area: areaFromPath, page: 0 }));
    dispatch(setCurrentPage(0));
  }, [location.pathname, dispatch, filters.area]);


  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    let changed = false;

 
    if (filters.search) {
      if (params.get('search') !== filters.search) {
        params.set('search', filters.search);
        changed = true;
      }
    } else {
      if (params.has('search')) {
        params.delete('search');
        changed = true;
      }
    }

    const currentSkills = params.getAll('skill');
    const newSkills = filters.skills;
    if (JSON.stringify([...currentSkills].sort()) !== JSON.stringify([...newSkills].sort())) {
      params.delete('skill');
      newSkills.forEach(skill => params.append('skill', skill));
      changed = true;
    }

    if (changed) {
      setSearchParams(params, { replace: true });
    }
  }, [filters.search, filters.skills, searchParams, setSearchParams]);

  return (
    <>
      <Header />
      <HeroSection />
      <div style={{ position: 'relative', width: '100%', minHeight: '100vh', paddingTop: '24px' }}>
        <div style={{ position: 'absolute', top: '24px', left: '220px', width: '317px' }}>
          <SkillsAndCityFilter />
        </div>
        <div style={{ position: 'absolute', top: '24px', left: '561px', width: '659px' }}>
          <CityTabs />
          <VacanciesList />
        </div>
      </div>
    </>
  );
};

export default VacanciesPage;