import { Header } from '../../components/layouts/Header';
import { LandingPageContainer, HomeSectionLP } from './styled';
import { useRef, useState } from 'react';

export const LandingPage = () => {
  const ref = useRef<HTMLDivElement>();
  const [ hasUserScrolled, setHasUserScrolled ] = useState<boolean>(false);

  return (
    <LandingPageContainer
      onScroll={e => {
        if(e.currentTarget.scrollTop > 120)
          setHasUserScrolled(true)
        else
          setHasUserScrolled(false)
      }}
    >
      <Header isLandingPage isLogged={false} isScrolled={hasUserScrolled} />
      <HomeSectionLP>
        <small>chega de preocupações</small>
        <h1>Tenha controle sobre suas <span>anotações</span>!</h1>
        <p>Se você não vive sem um papel e caneta no seu cotidiano, o MyNotes irá tornar sua vida mais organizada. Diga adeus a pilhas enormes de bloco de notas, abrace o <strong>MyNotes</strong>!</p>
      </HomeSectionLP>
    </LandingPageContainer>
  );
}