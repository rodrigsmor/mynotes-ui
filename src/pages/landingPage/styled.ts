import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LandingPageContainer = styled.div`
  width: 100vw;
  max-width: 100vw;
  overflow-x: hidden;
  height: 100vh;
  background: ${({ theme }) => theme.colors.background.light };

  > .section-divider {
    width: 100%;
    display: grid;
    place-items: center;
  }
`;

export const HomeSectionLP = styled.main`
  width: 100vw;
  display: flex;
  height: 100dvh;
  padding: 0 16px;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background.light};

  > * {
    text-align: center;
  }

  > h1 {
    width: 100%;
    color: ${({ theme }) => theme.colors.typography.main};
    font-size: ${({ theme }) => theme.typography.size.h1 };
    font-weight: ${({ theme }) => theme.typography.weight.bold };

    span {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }

  > small {
    gap: 22px;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.subtext.light };
    font-size: ${({ theme }) => theme.typography.size.h5};
    font-weight: ${({ theme }) => theme.typography.weight.medium };

    &:after,
    &:before {
      width: 53px;
      height: 2px;
      content: '';
      display: block;
      background: ${({ theme }) => theme.colors.subtext.light };
    }
  }

  > p {
    width: 100%;
    margin: 36px 0 68px 0;
    color: ${({ theme }) => theme.colors.subtext.main };
    font-size: ${({ theme }) => theme.typography.size.h6 };
    font-weight: ${({ theme }) => theme.typography.weight.regular };

    > strong {
      color: ${({ theme }) => theme.colors.primary.main };
    }
  }

  > .landingPage-Home_ButtonGroup {
    gap: 16px;
    width: 100%;
    display: grid;
    min-width: 100%;
    height: fit-content;
    align-items: center;
    grid-auto-flow: row;
    justify-content: stretch;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({ theme }) => theme.media.desktop } {
    padding: 0 15.12%;

    > h1 {
      font-size: 64px;
      max-width: 706px;
      text-align: center;
      line-height: 68px;
    }

    > p {
      margin: 18px 0 36px 0;
      font-size: ${({ theme }) => theme.typography.size.h4 };
    }

    > .landingPage-Home_ButtonGroup {
      width: 37.2vw;
      min-width: 37.2vw;
    }
  }
`;

export const HomeArrowAnchor = styled(Link)`
  bottom: 24px;
  height: 44px;
  position: absolute;
  transition: ease .5s;
  color: ${({ theme }) => theme.colors.subtext.light };

  &:hover {
    margin: 0 0 20px 0;
    transform: scale(1.5);
  }
`;

export const SectionTitleLP = styled.hgroup`
  gap: 36px;
  display: flex;
  flex-direction: column;

  > h2 {
    z-index: 3;
    width: 100%;
    display: flex;
    position: relative;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: ${({ theme }) => theme.typography.size.h1 };
    color: ${({ theme }) => theme.colors.typography.light };
    font-weight: ${({ theme }) => theme.typography.weight.bold };

    &:before {
      z-index: -1;
      font-size: 48px;
      position: absolute;
      min-width: max-content;
      content: attr(section-title);
      color: ${({ theme }) => theme.colors.primary.light };
    }
  }

  > h3 {
    width: 100%;
    color: ${({ theme }) => theme.colors.primary.main };
    font-size: ${({ theme }) => theme.typography.size.h4 };
    font-weight: ${({ theme }) => theme.typography.weight.semibold };

    &:after {
      width: 100%;
      height: 3px;
      content: '';
      display: block;
      margin: 14px 0 0 0;
      background: ${({ theme }) => theme.colors.primary.main };
    }
  }

  @media ${({ theme }) => theme.media.desktop } {
    gap: 12px;
    align-items: center;

    > h3 {
      gap: 14px;
      text-align: center;
      align-items: center;
      justify-content: center;

      &:after {
        width: 47vw;
        margin: 14px auto 0;
      }
    }

    &.aside {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      
      > h3 {
        text-align: left;
        align-items: flex-start;
        justify-content: flex-start;
      }

      > h2 {
        width: fit-content;
        min-width: fit-content;
      }

      > h3 {
        width: fit-content;
        &:after {
          margin: 14px 0 0 0;
        }
      }
    }
  }
`;

export const LandingPageSections = styled.section`
  gap: 42px;
  width: 100vw;
  display: flex;
  max-width: 100vw;
  padding: 48px 16px;
  flex-direction: column;

  > article > .section-description {
    text-align: justify;
    color: ${({ theme }) => theme.colors.subtext.light };
    font-size: ${({ theme }) => theme.typography.size.h5};
    font-weight: ${({ theme }) => theme.typography.weight.regular };
  }

  @media ${({ theme }) => theme.media.desktop } {
    padding: 84px 9.4vw;

    > article > .section-description.text-centered {
      text-align: center;
    }
  }
`;

export const AboutProjectSectionContent = styled.article`
  gap: 48px;
  width: 100%;
  display: flex;
  height: fit-content;
  flex-direction: column;
`;

export const IconDivider = styled.img`
  width: auto;
  height: 42px;
  margin: auto;
`;

export const AboutFeaturesListing = styled.div`
  gap: 58px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  > figure {
    > img {
      width: 243px;
      height: 142px;
      border-radius: 48px;
    }
  }

  > ol.benefits-listing {
    gap: 42px;
    width: 100%;
    items: center;
    display: flex;
    list-style: none;
    height: max-content;
    flex-direction: column;
    justify-content: center;

    > li {
      gap: 32px;
      display: flex;
      text-align: left;
      align-items: center;
      color: ${({ theme }) => theme.colors.subtext.light};
      font-size: ${({ theme }) => theme.typography.size.h5};
      font-weight: ${({ theme }) => theme.typography.weight.regular };

      &:before {
        width: 32px;
        height: 32px;
        display: flex;
        min-width: 32px;
        align-items: center;
        border-radius: 100%;
        justify-content: center;
        content: attr(li-number);
        color: ${({ theme }) => theme.colors.background.light};
        font-size: ${({ theme }) => theme.typography.size.h4};
        background: ${({ theme }) => theme.colors.primary.main};
        font-weight: ${({ theme }) => theme.typography.weight.bold };
      }
    }
  }

  @media ${({ theme }) => theme.media.desktop } {
    padding: 0 120px;
    flex-direction: row;

    > ol.benefits-listing {
      > li {
        &:nth-of-type(2) {
          margin-left: 24px;
        }
      }
    }
  }
`;

export const FeaturesSectionContent = styled.article`
  gap: 48px;
  width: 100%;
  display: flex;
  flex-direction: column;

  > ul.features-listing {
    gap: 30px;
    width: 100%;
    display: flex;
    min-width: 100%;
    list-style: none;
    flex-direction: column;

    > li {
      flex-grow: 1;
      display: flex;
      flex-shrink: 0;
      padding: 22px 0 0;
    }
  }

  @media ${({ theme }) => theme.media.desktop } {
    width: 100%;
    min-width: 100%;
    
    > ul.features-listing {
      gap: 24px;
      display: grid;
      flex-direction: row;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

interface FeaturesCardProps {
  iconColor: 'danger' | 'info' | 'success' | 'warning';
}

export const FeaturesCardLP = styled.div<FeaturesCardProps>`
  gap: 4px;
  width: 100%;
  display: flex;
  min-width: 100%;
  position: relative;
  border-radius: 16px;
  flex-direction: column;
  padding: 28px 12px 12px;
  box-shadow: ${({ theme }) => theme.shadow.main};
  background: ${({ theme }) => theme.colors.background.main };

  > div {
    top: -22px;
    width: 44px;
    height: 44px;
    display: grid;
    position: absolute;
    place-items: center;
    border-radius: 16px;
    color: ${({ theme }) => theme.colors.background.light};
    border: ${({ theme }) => theme.colors.primary.light } 2px solid;
    background: ${({ iconColor, theme }) => theme.colors[iconColor].main};
  }

  > strong {
    color: ${({ theme }) => theme.colors.subtext.main };
    font-size: ${({ theme }) => theme.typography.size.h5 };
    font-weight: ${({ theme }) => theme.typography.weight.semibold };
  }

  > .Feature-CardBox-description {
    color: ${({ theme }) => theme.colors.subtext.light };
    font-size: ${({ theme }) => theme.typography.size.h6 };
    font-weight: ${({ theme }) => theme.typography.weight.regular };
  }
`;

export const LandingPageFooter = styled.footer`
  gap: 18px;
  display: flex;
  padding: 28px 16px;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.subtext.light };
  background: ${({ theme }) => theme.colors.primary.light };

  > .social-media {
    gap: 32px;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.subtext.light };
  }

  > .copyrights {
    text-align: center;
    font-size: ${({ theme }) => theme.typography.size.h6 };
    font-weight: ${({ theme }) => theme.typography.weight.medium };
  }

  > .logo > figcaption {
    display: none;
  }

  @media ${({ theme }) => theme.media.desktop } {
    height: 84px;
    padding: 0 9.4vw;
    flex-direction: row;
    justify-content: space-between;
    
    > .copyrights {
      min-width: 208px;
      text-align: left;
    }
  }
`;