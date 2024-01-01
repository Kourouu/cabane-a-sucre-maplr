import * as S from './Menu.styles';
import { MenuItem } from './MenuItem/MenuItem';

export const Menu = () => {
  return (
    <S.MenuContainer>
      <MenuItem title={'Catalogue'} destination='products'/>
      <MenuItem title={'Panier'} destination='cart'/>
    </S.MenuContainer>
  )
}