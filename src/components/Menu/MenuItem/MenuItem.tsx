import * as S from './MenuItem.styles';

type MenuItemProps = {
  title: string
}

export const MenuItem = ({title}: MenuItemProps) => {
  return (
    <>
      <S.MenuItemContainer>{title}</S.MenuItemContainer>
    </>
  )
}