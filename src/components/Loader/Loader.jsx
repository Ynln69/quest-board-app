import { LoaderCont } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderCont>
      <div id="page">
        <div id="container">
          <div id="ring"></div>
          <div id="ring"></div>
          <div id="ring"></div>
          <div id="ring"></div>
          <div id="h3">loading</div>
        </div>
      </div>
    </LoaderCont>
  );
};

export default Loader;
