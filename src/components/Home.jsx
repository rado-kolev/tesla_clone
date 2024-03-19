import styled from 'styled-components';
import Section from './Section';
import jsonData from '../carInfo.json';

const Home = () => {
  return (
    <Container>
      {jsonData.map((item) => (
        <Section
          key={item.id}
          title={item.title}
          description={item.description}
          image={`/assets/images/${item.image}`}
          leftBtnText={item.leftBtnText}
          rightBtnText={item.rightBtnText}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
`;

export default Home;
