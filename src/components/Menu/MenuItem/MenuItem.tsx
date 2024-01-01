import { Link } from 'react-router-dom';

import * as S from './MenuItem.styles';

type MenuItemProps = {
  title: string,
  destination: string,
}

export const MenuItem = ({title, destination}: MenuItemProps) => {
  return (
    <>
      <S.MenuItemContainer>
        <Link to={destination}>{title}</Link>
      </S.MenuItemContainer>
    </>
  )
}