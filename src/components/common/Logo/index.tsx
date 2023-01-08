import LogoIcon from "../../../assets/images/icons/LogoIcon";
import { BrandTypography, LogoContainer } from './styled';

export const Logo = () => {
  return (
    <LogoContainer>
      <LogoIcon />
      <BrandTypography>MyNotes</BrandTypography>
    </LogoContainer>
  );
}