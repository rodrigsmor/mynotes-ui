import { ButtonHTMLAttributes } from 'react';
import { ButtonSeeMore, SeeMoreLink } from './styled';
import { HiChevronDown, HiChevronRight } from 'react-icons/hi2';

interface SeeMoreProps {
  path?: string;
  isLink: boolean;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
}

export const SeeMore = ({ isLink, path = '', buttonProps }: SeeMoreProps) => {
  return (
    <>
      {
        isLink ? (
          <SeeMoreLink to={path}>
            ver tudo <HiChevronRight />
          </SeeMoreLink>
        ) : (
          <ButtonSeeMore { ...buttonProps }>
            ver mais <HiChevronDown />
          </ButtonSeeMore>
        )
      }
    </>
  )
}