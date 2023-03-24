import { Button } from '../../components/buttons/Button';
import { Header } from '../../components/layouts/Header';
import { LandingPageContainer, HomeSectionLP, HomeArrowAnchor, AboutProjectSectionLP, SectionTitleLP } from './styled';
import { useRef, useState } from 'react';
import { ThemeEnums } from '../../utils/enums/ThemeEnums';
import { HiOutlineChevronDoubleDown } from 'react-icons/hi2';

export const LandingPage = () => {
  const ref = useRef<HTMLDivElement>();
  const [ hasUserScrolled, setHasUserScrolled ] = useState<boolean>(false);

  return (
    <LandingPageContainer
      onScroll={e => {
        console.log(e.currentTarget.scrollTop)
        setHasUserScrolled((e.currentTarget.scrollTop > 60))
      }}
    >
      <Header isLandingPage isLogged={false} isScrolled={hasUserScrolled} />
      <HomeSectionLP id='home'>
        <small>chega de preocupações</small>
        <h1>Tenha controle sobre suas <span>anotações</span>!</h1>
        <p>Se você não vive sem um papel e caneta no seu cotidiano, o MyNotes irá tornar sua vida mais organizada. Diga adeus a pilhas enormes de bloco de notas, abrace o <strong>MyNotes</strong>!</p>
        <div className='landingPage-Home_ButtonGroup'>
          <Button theme={ThemeEnums.DEFAULT} to='/auth/signup'>
            <>começar agora</>
          </Button>
          <Button theme={ThemeEnums.SURFACE} to='/#about-project'>
            <>saber mais</>
          </Button>
        </div>
        <HomeArrowAnchor to='/#about-project'>
          <HiOutlineChevronDoubleDown size={44} />
        </HomeArrowAnchor>
      </HomeSectionLP>
      <AboutProjectSectionLP id='about-project'>
        <SectionTitleLP className='aside'>
          <h2 section-title='O que é?'>O que é?</h2>
          <h3>Um pouco mais sobre a aplicação</h3>
        </SectionTitleLP>
      </AboutProjectSectionLP>
    </LandingPageContainer>
  );
}