import { Button } from '../../components/buttons/Button';
import { ThemeEnums } from '../../utils/enums/ThemeEnums';
import { DetailedNotFoundMessage, GlitchTextEffect, NotFoundIllustration, NotFoundMessage, NotFoundPageContainer } from './styled';
import LookingForNotFoundPage_Illustration from '../../assets/images/illustrations/LookingForNotFoundPage_Illustration.svg';

export const NotFound = () => {
  return (
    <NotFoundPageContainer>
      <GlitchTextEffect data-text='404'>404</GlitchTextEffect>
      <NotFoundMessage>Página não encontrada</NotFoundMessage>
      <DetailedNotFoundMessage>
        Parece que a página que você está procurando não existe. Verifique se a URL informada está correta ou tente voltar para a página inicial.
      </DetailedNotFoundMessage>
      <Button theme={ThemeEnums.DEFAULT} to={'/'}>
        <>voltar para a página inicial</>
      </Button>
      <NotFoundIllustration
        src={LookingForNotFoundPage_Illustration}
      />
    </NotFoundPageContainer>
  );
}