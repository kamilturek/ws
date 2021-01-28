import Card from './Card/Card';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  width: 25%;
`;

const Socials: React.FC = () => (
  <Row>
    <Card link='https://github.com/kamilturek'>
      <AiFillGithub size={50} />
    </Card>
    <Card link='https://www.linkedin.com/in/kamilturek/'>
      <AiFillLinkedin size={50} />
    </Card>
    <Card link='mailto:kontakt@kamilturek.it'>
      <AiFillMail size={50} />
    </Card>
  </Row>
);

export default Socials;
