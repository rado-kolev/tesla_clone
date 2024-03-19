import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Fade } from 'react-reveal';

const Section = ({ title, description, image, leftBtnText, rightBtnText }) => {
  return (
    <Wrap style={{ backgroundImage: `url(${image})` }}>
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
          <DownArrow src='/assets/images/down-arrow.svg' />
        </Buttons>
      </Fade>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100vw;
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
  width: 256px;
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
`;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  leftBtnText: PropTypes.string,
  rightBtnText: PropTypes.string,
};

export default Section;
