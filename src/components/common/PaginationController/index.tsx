import { Button } from "../../buttons/Button";
import { ThemeEnums } from "../../../utils/enums/ThemeEnums";
import { ControllerWrapper, RouteIndication } from "./styled";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

export const PaginationController = () => {
  return (
    <ControllerWrapper>
      <Button name="previous_buttonController" theme={ThemeEnums.SURFACE}>
        <>
          <HiChevronLeft />
          <p>anterior</p>
        </>
      </Button>
      <RouteIndication>
        2 de 4
      </RouteIndication>
      <Button name="next_buttonController" theme={ThemeEnums.DEFAULT}>
        <>
          <p>próximo</p>
          <HiChevronRight />
        </>
      </Button>
    </ControllerWrapper>
  );
}