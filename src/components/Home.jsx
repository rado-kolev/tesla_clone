import styled from 'styled-components';
import Section from './Section';
import jsonData from '../carInfo.json';

const Home = () => {
  return (
    <Container>
      {jsonData.map((item, index) => (
        <Section
          key={item.id}
          id={index}
          title={item.title}
          description={item.description}
          image={`/assets/images/${item.image}`}
          leftBtnText={item.leftBtnText}
          rightBtnText={item.rightBtnText}
          isLastSection={index === jsonData.length - 1}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
`;

export default Home;
