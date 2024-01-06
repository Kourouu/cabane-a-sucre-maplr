import { useNavigate } from 'react-router-dom';

import { Button } from '../../ui/Button/Button';

import * as S from './Home.styles';

export const Home = () => {
  const navigate = useNavigate();
  return (
    <S.HomeContainer>
      <S.Video
        src="https://maplr.co/wp-content/uploads/2023/02/welcome-maplr-1080.mp4"
        autoPlay
        loop
        muted
      />
      <Button
        text="Acceder au catalogue"
        onClick={() => navigate('./products')}
      />
    </S.HomeContainer>
  );
};
