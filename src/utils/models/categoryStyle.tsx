import { HiOutlineHome, HiOutlineTrendingUp } from 'react-icons/hi';
import { HiOutlineAcademicCap, HiOutlineBookOpen, HiOutlineBriefcase, HiOutlineBuildingOffice2, HiOutlineDocumentCheck, HiOutlineGlobeAmericas, HiOutlineShoppingBag, HiOutlineUser } from 'react-icons/hi2';

interface categoriesInfoProps {
  [name: string]: {
    color: string;
    Icon: JSX.Element;
  }
}

export const CategoriesStyle: categoriesInfoProps = {
  'pessoal': {
    color: 'primary',
    Icon: <HiOutlineUser />,
  },
  'casa': {
    color: 'primary',
    Icon: <HiOutlineHome />,
  },
  'estudos': {
    color: 'warning',
    Icon: <HiOutlineBookOpen />,
  },
  'compras': {
    color: 'warning',
    Icon: <HiOutlineShoppingBag />,
  },
  'profissional': {
    color: 'info',
    Icon: <HiOutlineBriefcase />,
  },
  'afazeres': {
    color: 'info',
    Icon: <HiOutlineDocumentCheck />,
  },
  'trabalho': {
    color: 'danger',
    Icon: <HiOutlineBuildingOffice2 />,
  },
  'escola': {
    color: 'danger',
    Icon: <HiOutlineAcademicCap />,
  },
  'outros': {
    color: 'success',
    Icon: <HiOutlineGlobeAmericas />,
  },
  'metas': {
    color: 'success',
    Icon: <HiOutlineTrendingUp />,
  },
}