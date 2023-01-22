import LogoIcon from "../../../assets/images/icons/LogoIcon";
import { BrandTypography, LogoContainer } from './styled';

export const Logo = () => {
  return (
    <LogoContainer className='logo'>
      <LogoIcon />
      <BrandTypography>MyNotes</BrandTypography>
    </LogoContainer>
  );
}