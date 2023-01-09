import { Header } from "../../layouts/Header";
import { Navbar } from "../../layouts/Navbar";
import { Body, PageContainer } from "./styled";

type PageProps = {
  children: JSX.Element
}

export const AuthLayout: React.FC<PageProps> = ({ children }) => {
  return (
    <PageContainer>
      <Header />
      <Navbar />
      <Body>
        { children }
      </Body>
    </PageContainer>
  );
}