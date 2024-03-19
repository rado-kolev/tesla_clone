import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Fade } from 'react-reveal';

const Section = ({ id, title, description, image, leftBtnText, rightBtnText, isLastSection }) => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById(`${id + 1}`);
    if (nextSection) {
      nextSection.scrollIntoView();
    }
  };

  return (
    <Wrap id={`${id}`} style={{ backgroundImage: `url(${image})` }}>
      <Fade top>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Fade bottom>
        <Buttons>
          <ButtonGroup>
            <Fade left>
              <LeftButton>{leftBtnText}</LeftButton>
            </Fade>

            <Fade right>
              {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
            </Fade>
          </ButtonGroup>
          {!isLastSection && (
            <DownArrow
              src='/assets/images/down-arrow.svg'
              onClick={() => scrollToNextSection(parseInt(id) + 1)}
            />
          )}
        </Buttons>
      </Fade>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  color: white;
  width: 240px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: rgba(255, 255, 255, 0.65);
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  cursor: pointer;
`;

Section.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  leftBtnText: PropTypes.string,
  rightBtnText: PropTypes.string,
  isLastSection: PropTypes.bool.isRequired,
};

export default Section;
