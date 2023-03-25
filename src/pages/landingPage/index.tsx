import { useRef, useState, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { Button } from '../../components/buttons/Button';
import { Header } from '../../components/layouts/Header';
import { ThemeEnums } from '../../utils/enums/ThemeEnums';
import { HiOutlinePuzzle, HiOutlineTemplate } from 'react-icons/hi';
import { BsTwitter, BsGithub, BsGlobe2, BsLinkedin } from 'react-icons/bs';
import BenefitsSectionImage from '../../assets/images/images/BenefitsSectionImage.png'
import { HiOutlineChevronDoubleDown, HiOutlinePencil, HiOutlinePresentationChartLine, HiPhone } from 'react-icons/hi2';
import Divider_LandingPageIllustration from '../../assets/images/illustrations/Divider_LandingPageIllustration.svg'
import { LandingPageContainer, HomeSectionLP, HomeArrowAnchor, SectionTitleLP, LandingPageSections, AboutProjectSectionContent, IconDivider, AboutFeaturesListing, FeaturesSectionContent, FeaturesCardLP, LandingPageFooter, ContactsSectionContent } from './styled';
import { Logo } from '../../components/common/Logo';
import { useLocation } from 'react-router-dom';

interface FeaturesCardItemsTypes {
  title: string;
  Icon: JSX.Element;
  description: string;
  color: 'danger' | 'info' | 'success' | 'warning';
}

export const LandingPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    landingPageRef.current?.childNodes.forEach((element) => {
      let el = element as HTMLElement;
      if(el?.id !== '' && hash.includes(el?.id))
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    })
  }, [ hash ])

  const landingPageRef = useRef<HTMLDivElement>(null);
  const [ hasUserScrolled, setHasUserScrolled ] = useState<boolean>(false);

  const featuresCardItems: Array<FeaturesCardItemsTypes> = [
    {
      Icon: <HiOutlinePresentationChartLine />,
      title: 'Produtividade',
      color: 'info',
      description: 'Tortor vitae purus faucibus ornare suspendisse sed nisi. Egestas pretium aenean pharetra placerat.',
    }, {
      Icon: <HiOutlinePuzzle />,
      title: 'Praticidade',
      color: 'danger',
      description: 'Auctor neque vitae tempus quam pellentesque nec. Sed nisi lacus sed viverra tellus in hac.',
    }, {
      Icon: <HiOutlineTemplate />,
      title: 'Organização',
      color: 'success',
      description: 'Enim lobortis scelerisque fermentum dui. Tristique senectus et netus et in hac.',
    }, {
      Icon: <HiOutlinePencil />,
      title: 'Customização',
      color: 'warning',
      description: 'Eros donec ac odio tempor orci dapibus ultrices. Donec enim diam vulputate ut.',
    }, 
  ]

  function getCurrentYear() {
    let currentYear = new Date().getFullYear();
    return currentYear > 2023 ? `2023 - ${currentYear}` : '2023'
  }

  return (
    <LandingPageContainer
      onScroll={e => {
        setHasUserScrolled((e.currentTarget.scrollTop > 60))
      }}
      ref={landingPageRef}
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
          <p className='section-description text-centered'>MyNotes é uma aplicação web de gerenciamento de anotações que irá tornar a sua vida muito mais fácil e organizada. Através de customizações e possibilidades de organização, a aplicação facilitará o seu processo de registro e busca de anotações. Anote tudo o que precisar e encontre quando precisar!</p>
          <IconDivider alt='' src={Divider_LandingPageIllustration} />
          <AboutFeaturesListing>
            <figure>
              <img src={BenefitsSectionImage} alt='' />
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
      <LandingPageSections id='features'>
        <SectionTitleLP>
          <h2 section-title='Recursos'>Recursos</h2>
          <h3>O que temos a te oferecer?</h3>
        </SectionTitleLP>
        <FeaturesSectionContent>
          <p className='section-description'>Neque sodales ut etiam sit amet nisl purus in mollis. Hendrerit dolor magna eget est. Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer. Lacinia quis vel eros donec ac odio. Commodo odio aenean sed adipiscing diam donec.</p>
          <ul className='features-listing'>
            {
              featuresCardItems.map(({ Icon, title, color, description }, index) => (
                <li key={index}>
                  <FeaturesCardLP iconColor={color} aria-labelledby={`Feature-CardBox-title_${index}`}>
                    <div>
                      <IconContext.Provider value={{ size: '24px' }}>{ Icon }</IconContext.Provider>
                    </div>
                    <strong id={`Feature-CardBox-title_${index}`}>{ title }</strong>
                    <p className='Feature-CardBox-description'>{ description }</p>
                  </FeaturesCardLP>
                </li>
              ))
            }
            <li></li>
          </ul>
        </FeaturesSectionContent>
      </LandingPageSections>
      <div className='section-divider'>
        <IconDivider alt='' src={Divider_LandingPageIllustration} />
      </div>
      <LandingPageSections id='contact'>
        <ContactsSectionContent>
          <SectionTitleLP className='background'>
            <figure className='section-icon'>
              <HiPhone />
            </figure>
            <h2 section-title='Contato'>Contato</h2>
            <h3>Fale direto conosco</h3>
          </SectionTitleLP>
          <form className='contacts-Form_Container'>
            <legend className='section-description background'>Use esse espaço para tirar suas dúvidas, dar sugestões, fazer explanações, reclamações e até mesmo críticas construtivas! Estamos abertos a te escutar e a encontrar os melhores meios de solucionar seus problemas e garantir a melhor experiência para você.</legend>
            <textarea placeholder='Conte-nos sobre sua experiência...'/>
            <Button theme={ThemeEnums.SURFACE}>
              <>Enviar texto</>
            </Button>
          </form>
        </ContactsSectionContent>
      </LandingPageSections>
      <LandingPageFooter>
        <p className='copyrights'>
          Copyrights © { getCurrentYear() }
        </p>
        <Logo />
        <div className='social-media'>
          <IconContext.Provider value={{
            size: '28px'
          }}>
            <BsTwitter />
            <BsGithub />
            <BsGlobe2 />
            <BsLinkedin />
          </IconContext.Provider>
        </div>
      </LandingPageFooter>
    </LandingPageContainer>
  );
}