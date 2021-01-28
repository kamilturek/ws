import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  width: 25%;
`;

const Socials: React.FC = () => (
  <Row>
    <AiFillGithub size={50} />
    <AiFillLinkedin size={50} />
  </Row>
);

export default Socials;
