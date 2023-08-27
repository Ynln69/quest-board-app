import { Container, Image, BackLink } from './NotFoundPae.styled';
import { Text } from 'components/Welcome/Welcome.styled';
import notFoundImage from '../../images/404.png';

const NotFoundPage = () => {
  return (
    <Container>
      <Image src={notFoundImage} alt="404 page"></Image>
      <Text>
        Oooops! We can't seem to find <br />a page you are looking for...
      </Text>
      <BackLink to="/">Back to homepage</BackLink>
    </Container>
  );
};

export default NotFoundPage;
