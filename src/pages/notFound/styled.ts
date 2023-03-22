import styled from 'styled-components';

export const NotFoundPageContainer = styled.main`
  width: 100vw;
  height: 100dvh;
  display: flex;
  padding: 0 16px;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background.light };

  > .styled-button {
    order: 4;
    width: 76.45vw;
  }

  > .landing-page_Header {
    top: 0;
    position: fixed;

    > .logo {
      display: flex;
      justify-content: flex-start;
    }

    > .header_navigation-LandingPage,
    > .menu-navigation_Header {
      display: none;
    }
  }

  > * {
    z-index: 6;
  }

  @media (max-width: 1023px) {
    > .landing-page_Header {
      > .logo {
        > figcaption {
          display: none;
        }
      }
    }
  }
`;

export const NotFoundMessage = styled.h2`
  order: 1;
  color: ${({ theme }) => theme.colors.typography.main };
  font-size: ${({ theme }) => theme.typography.size.h4 };
  font-weight: ${({ theme }) => theme.typography.weight.semibold };
`;

export const DetailedNotFoundMessage = styled.p`
  order: 3;
  width: 100%;
  text-align: center;
  margin: 28px 0 36px 0;
  color: ${({ theme }) => theme.colors.subtext.light };
  font-size: ${({ theme }) => theme.typography.size.h5 };
  font-weight: ${({ theme }) => theme.typography.weight.medium };
`;

export const NotFoundIllustration = styled.img`
  width: auto;
  bottom: 42px;
  height: 16vh;
  position: absolute;
`;

export const GlitchTextEffect = styled.h1`
  order: 2;
  z-index: 5;
  display: flex;
  font-size: 56px;
  line-height: 92px;
  position: relative;
  align-items: center;
  transform: scale(2);
  justify-content: center;
  margin: 20px 0 0 0;
  color: ${({ theme }) => theme.colors.primary.main };
  font-weight: ${({ theme }) => theme.typography.weight.bold };

  &:after, 
  &:before {
    padding: 30px;
    color: ${({ theme }) => theme.colors.primary.main };
    content: attr(data-text);
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.background.light };
    overflow: hidden;
    top: -40%;
  }

  &:before {
    margin: 0 0 0 3px;
    text-shadow: -2px;
    animation: glitch-1 2s infinite reverse;
  }

  &:after {
    margin: 0 0 0 -8px;
    text-shadow: -2px 0 blue;
    animation: glitch-2 2s linear infinite reverse;
  }

  @keyframes glitch-1{
  0% {
    clip: rect(132px, auto, 101px, 30px);
  }
  5% {
    clip: rect(17px, auto, 94px, 30px);
  }
  10% {
    clip: rect(40px, auto, 66px, 30px);
  }
  15% {
    clip: rect(87px, auto, 82px, 30px);
  }
  20% {
    clip: rect(137px, auto, 61px, 30px);
  }
  25% {
    clip: rect(34px, auto, 14px, 30px);
  }
  30% {
    clip: rect(133px, auto, 74px, 30px);
  }
  35% {
    clip: rect(76px, auto, 107px, 30px);
  }
  40% {
    clip: rect(59px, auto, 130px, 30px);
  }
  45% {
    clip: rect(29px, auto, 84px, 30px);
  }
  50% {
    clip: rect(22px, auto, 67px, 30px);
  }
  55% {
    clip: rect(67px, auto, 62px, 30px);
  }
  60% {
    clip: rect(10px, auto, 105px, 30px);
  }
  65% {
    clip: rect(78px, auto, 115px, 30px);
  }
  70% {
    clip: rect(105px, auto, 13px, 30px);
  }
  75% {
    clip: rect(15px, auto, 75px, 30px);
  }
  80% {
    clip: rect(66px, auto, 39px, 30px);
  }
  85% {
    clip: rect(133px, auto, 73px, 30px);
  }
  90% {
    clip: rect(36px, auto, 128px, 30px);
  }
  95% {
    clip: rect(68px, auto, 103px, 30px);
  }
  100% {
    clip: rect(14px, auto, 100px, 30px);
  }
}

@keyframes glitch-2 {
  0% {
    clip: rect(129px, auto, 36px, 30px);
  }
  5% {
    clip: rect(36px, auto, 4px, 30px);
  }
  10% {
    clip: rect(85px, auto, 66px, 30px);
  }
  15% {
    clip: rect(91px, auto, 91px, 30px);
  }
  20% {
    clip: rect(148px, auto, 138px, 30px);
  }
  25% {
    clip: rect(38px, auto, 122px, 30px);
  }
  30% {
    clip: rect(69px, auto, 54px, 30px);
  }
  35% {
    clip: rect(98px, auto, 71px, 30px);
  }
  40% {
    clip: rect(146px, auto, 34px, 30px);
  }
  45% {
    clip: rect(134px, auto, 43px, 30px);
  }
  50% {
    clip: rect(102px, auto, 80px, 30px);
  }
  55% {
    clip: rect(119px, auto, 44px, 30px);
  }
  60% {
    clip: rect(106px, auto, 99px, 30px);
  }
  65% {
    clip: rect(141px, auto, 74px, 30px);
  }
  70% {
    clip: rect(20px, auto, 78px, 30px);
  }
  75% {
    clip: rect(133px, auto, 79px, 30px);
  }
  80% {
    clip: rect(78px, auto, 52px, 30px);
  }
  85% {
    clip: rect(35px, auto, 39px, 30px);
  }
  90% {
    clip: rect(67px, auto, 70px, 30px);
  }
  95% {
    clip: rect(71px, auto, 103px, 30px);
  }
  100% {
    clip: rect(83px, auto, 40px, 30px);
  }
`;