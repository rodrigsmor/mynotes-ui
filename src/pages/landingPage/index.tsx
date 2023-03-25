import { useRef, useState } from 'react';
import { Button } from '../../components/buttons/Button';
import { Header } from '../../components/layouts/Header';
import { ThemeEnums } from '../../utils/enums/ThemeEnums';
import { HiOutlineChevronDoubleDown } from 'react-icons/hi2';
import BenefitsSectionImage from '../../assets/images/images/BenefitsSectionImage.png'
import Divider_LandingPageIllustration from '../../assets/images/illustrations/Divider_LandingPageIllustration.svg'
import { LandingPageContainer, HomeSectionLP, HomeArrowAnchor, SectionTitleLP, LandingPageSections, AboutProjectSectionContent, IconDivider, AboutFeaturesListing } from './styled';

export const LandingPage = () => {
  const ref = useRef<HTMLDivElement>();
  const [ hasUserScrolled, setHasUserScrolled ] = useState<boolean>(false);

  return (
    <LandingPageContainer
      onScroll={e => {
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
      <LandingPageSections id='about-project'>
        <SectionTitleLP className='aside'>
          <h2 section-title='O que é?'>O que é?</h2>
          <h3>Um pouco mais sobre a aplicação</h3>
        </SectionTitleLP>
        <AboutProjectSectionContent>
          <p className='section-description'>MyNotes é uma aplicação web de gerenciamento de anotações que irá tornar a sua vida muito mais fácil e organizada. Através de customizações e possibilidades de organização, a aplicação facilitará o seu processo de registro e busca de anotações. Anote tudo o que precisar e encontre quando precisar!</p>
          <IconDivider alt='' src={Divider_LandingPageIllustration} />
          <AboutFeaturesListing>
            <figure>
              <img src={BenefitsSectionImage} alt='' />
              <figcaption></figcaption>
            </figure>
            <ol className='benefits-listing'>
              <li li-number='1'>
                Sit amet purus gravida quis blandit. Ut diam quam nulla porttitor massa. Vitae semper quis lectus nulla at volutpat. Ut aliquam purus sit amet.
              </li>
              <li li-number='2'>
                Bibendum ut tristique et egestas. Rhoncus est pellentesque elit ullamcorper dignissim cras. Tincidunt dui ut ornare lectus sit amet est placerat. Amet porttitor eget dolor morbi non.
              </li>
              <li li-number='3'>
                Ultricies tristique nulla aliquet enim tortor. Ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Porta non pulvinar neque laoreet suspendisse interdum consectetur.
              </li>
            </ol>
          </AboutFeaturesListing>
        </AboutProjectSectionContent>
      </LandingPageSections>
    </LandingPageContainer>
  );
}