import * as S from './Menu.styles';
import { MenuItem } from './MenuItem/MenuItem';

export const Menu = () => {
  return (
    <S.MenuContainer>
      <MenuItem title={'Catalogue'}></MenuItem>
      <MenuItem title={'Panier'}></MenuItem>
    </S.MenuContainer>
  )
}