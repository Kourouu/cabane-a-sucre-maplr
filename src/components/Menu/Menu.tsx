import { Image } from '../Image/Image';

import { Link } from '../../ui/Link/Link';
import { MenuItem } from './MenuItem/MenuItem';

import * as S from './Menu.styles';

export const Menu = () => {
  return (
    <S.MenuContainer>
      <S.MenuItems>
        <Link to='/'>
          <Image initialWidth src='src/assets/favicon-maplr.png' alt='Logo Maplr' />
        </Link>
        <MenuItem title={'Catalogue'} destination='products'/>
      </S.MenuItems>
      <S.MenuItems>
        <MenuItem title={'Panier'} destination='cart'/>
      </S.MenuItems>
    </S.MenuContainer>
  )
}