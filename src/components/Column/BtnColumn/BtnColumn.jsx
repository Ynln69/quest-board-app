import sprite from '../../../images/sprite.svg';
import { Button, BoxAddSvg, SvgAdd } from './BtnColumn.styled';

const BtnColumn = ({ text, onClick }) => {
  return (
    <Button onClick={onClick}>
      <BoxAddSvg>
        <SvgAdd>
          <use href={`${sprite}#icon-plus`} />
        </SvgAdd>
      </BoxAddSvg>
      {text}
    </Button>
  );
};

export default BtnColumn;
