import { Link } from 'react-router-dom';
import { BtnText, Container, Button, Image } from './NotFoundPae.styled';
import notFoundImage from '../../images/404.png';
import { Text } from 'components/Welcome/Welcome.styled';

const NotFoundPage = () => {
  return (
    <Container>
      <Image src={notFoundImage} alt="404 page"></Image>
      <Text>
        Oooops! We can't seem to find <br />a page you are looking for...
      </Text>
      <div>
        <Button>
          <Link to="/">
            <BtnText>Back to homepage</BtnText>
          </Link>
        </Button>
      </div>
    </Container>
  );
};

export default NotFoundPage;
