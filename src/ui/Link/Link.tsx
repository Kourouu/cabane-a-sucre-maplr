import * as S from './Link.styles';

type LinkProps = {
  to: string;
  children: React.ReactNode
}

export const Link = ({to, children}: LinkProps) => (<S.Link to={to}>{children}</S.Link>)
