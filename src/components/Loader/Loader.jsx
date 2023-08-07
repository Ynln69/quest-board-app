import { PropagateLoader } from 'react-spinners';

import { LoaderCont } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderCont>
      <PropagateLoader color="#BEDBB0" size={20} />
    </LoaderCont>
  );
};
