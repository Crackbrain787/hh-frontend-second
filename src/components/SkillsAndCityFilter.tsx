import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/useAppDispatch';
import {
  addSkill,
  removeSkill,
  setCurrentPage,
  
} from '../store/slices/vacanciesSlice';

const SkillsAndCityFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const { filters } = useAppSelector((state) => state.vacancies);

  const [newSkill, setNewSkill] = useState('');

  

  const handleAddSkill = () => {
    if (newSkill.trim() && !filters.skills.includes(newSkill.trim())) {
      dispatch(addSkill(newSkill.trim()));
      setNewSkill('');
      dispatch(setCurrentPage(0));
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAddSkill();
    }
  };

  const handleRemoveSkill = (skill: string) => {
    dispatch(removeSkill(skill));
    dispatch(setCurrentPage(0));
  };

  

  return (
    <div
      style={{
        width: '317px',
        backgroundColor: '#FFFFFF',
        borderRadius: '12px',
        padding: '24px',
        boxSizing: 'border-box',
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
 
      <div>
        <div
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: '14px',
            fontWeight: 400,
            color: '#0F0F10',
            marginBottom: '12px',
          }}
        >
          Ключевые навыки:
        </div>

        <div
          style={{
            display: 'flex',
            gap: '8px',
            marginBottom: '16px',
          }}
        >
          <input
            type="text"
            placeholder="Добавить навык"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyPress={handleKeyPress}
            style={{
              flex: 1,
              height: '36px',
              padding: '0 12px',
              fontFamily: '"Open Sans", sans-serif',
              fontSize: '14px',
              border: '1px solid rgba(15, 15, 16, 0.2)',
              borderRadius: '8px',
              backgroundColor: '#FFFFFF',
              boxSizing: 'border-box',
              outline: 'none',
            }}
          />
          <button
            onClick={handleAddSkill}
            disabled={!newSkill.trim()}
            style={{
              width: '36px',
              height: '36px',
              backgroundColor: '#4263EB',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: newSkill.trim() ? 1 : 0.5,
            }}
          >
            +
          </button>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '20px',
            maxHeight: '120px',
            overflowY: 'auto',
          }}
        >
          {filters.skills.map((skill) => (
            <div
              key={skill}
              style={{
                backgroundColor: 'rgba(15, 15, 16, 0.1)',
                color: '#0F0F10',
                fontFamily: '"Open Sans", sans-serif',
                fontSize: '14px',
                padding: '6px 12px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              {skill}
              <button
                onClick={() => handleRemoveSkill(skill)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'rgba(15, 15, 16, 0.5)',
                  fontSize: '12px',
                  padding: '0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '16px',
                  height: '16px',
                }}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsAndCityFilter;