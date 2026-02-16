import { Button, Container, Title, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Container
        style={{
          position: 'absolute',
          width: '707px',
          height: '556px',
          top: '132px',
          left: '367px',
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          padding: '32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
      
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start', 
          width: '100%',
        }}>
         
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            width: '508px', 
          }}>
            <Title order={2} style={{ 
              fontFamily: '"Open Sans", sans-serif',
              marginBottom: 0, marginLeft: 50,
            }}>
              Упс! Такой страницы 
              <br/>
              не существует
            </Title>
            <Text style={{
              fontFamily: '"Open Sans", sans-serif',
              marginTop: 0, marginLeft: 50,
            }}>
              Давайте перейдём к началу
            </Text>
          </div>

          
          <Button
            style={{
              color: 'white',
              backgroundColor: 'blue',
              width: '135px',
              height: '42px',
              fontFamily: '"Open Sans", sans-serif',
              alignSelf: 'flex-end', 
              marginRight: '65px'
            }}
            onClick={() => navigate('/vacancies')}
          >
            На главную
          </Button>
        </div>

        <div
          style={{
            width: '640px',
            height: '336px',
            borderRadius: '12px',
            overflow: 'hidden',
          }}
        >
          <img 
            src="./Cat.gif"  
            alt="Not Found Page"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              marginLeft: '50px',
              marginRight: '50px',
              borderRadius: '12px',
            }}
          />
        </div>
      </Container>
    </>
  );
};

export default NotFoundPage;