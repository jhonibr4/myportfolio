import { useState } from "react";
import { ContainerMenu, ButtonMenu, WrapperButton, ImageLogo } from "./styles";
import { HiHome, HiOutlineDesktopComputer } from "react-icons/hi";
import { FaUserGraduate, FaUser } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { IoMailSharp } from "react-icons/io5";
import Logo from "../../../../assets/LogoWhite.svg";

export function Menu() {
  const [buttonSelected, setButtonSelected] = useState<string>("buttonHome");

  window.addEventListener("scroll", function () {
    if (this.scrollY > 100 && this.scrollY < 300) {
      setButtonSelected("buttonHome");
    } else if (this.scrollY > 720 && this.scrollY < 920) {
      setButtonSelected("buttonProfile");
    } else if (this.scrollY > 1600 && this.scrollY < 1800) {
      setButtonSelected("buttonGraduation");
    } else if (this.scrollY > 2300 && this.scrollY < 2400) {
      setButtonSelected("buttonTechs");
    } else if (this.scrollY > 3120 && this.scrollY < 3720) {
      setButtonSelected("buttonProjects");
    } else if (this.scrollY > 4380 && this.scrollY < 4714) {
      setButtonSelected("buttonContact");
    }
  });
  return (
    <ContainerMenu>
      <ImageLogo src={Logo} />
      <WrapperButton>
        <ButtonMenu
          onClick={() => setButtonSelected("buttonHome")}
          className="button"
        >
          <HiHome
            style={
              buttonSelected === "buttonHome"
                ? { backgroundColor: "white", color: "#9F51BA" }
                : { backgroundColor: "transparent", color: "white" }
            }
          />
        </ButtonMenu>
        <ButtonMenu
          className="button"
          onClick={() => setButtonSelected("buttonProfile")}
        >
          <FaUser
            style={
              buttonSelected === "buttonProfile"
                ? { backgroundColor: "white", color: "#9F51BA" }
                : { backgroundColor: "transparent", color: "white" }
            }
          />
        </ButtonMenu>
        <ButtonMenu
          className="button"
          onClick={() => setButtonSelected("buttonGraduation")}
        >
          <FaUserGraduate
            style={
              buttonSelected === "buttonGraduation"
                ? { backgroundColor: "white", color: "#9F51BA" }
                : { backgroundColor: "transparent", color: "white" }
            }
          />
        </ButtonMenu>
        <ButtonMenu
          className="button"
          onClick={() => setButtonSelected("buttonTechs")}
        >
          <BsCodeSlash
            style={
              buttonSelected === "buttonTechs"
                ? { backgroundColor: "white", color: "#9F51BA" }
                : { backgroundColor: "transparent", color: "white" }
            }
          />
        </ButtonMenu>
        <ButtonMenu
          className="button"
          onClick={() => setButtonSelected("buttonProjects")}
        >
          <HiOutlineDesktopComputer
            style={
              buttonSelected === "buttonProjects"
                ? { backgroundColor: "white", color: "#9F51BA" }
                : { backgroundColor: "transparent", color: "white" }
            }
          />
        </ButtonMenu>
        <ButtonMenu
          className="button"
          onClick={() => setButtonSelected("buttonContact")}
        >
          <IoMailSharp
            style={
              buttonSelected === "buttonContact"
                ? { backgroundColor: "white", color: "#9F51BA" }
                : { backgroundColor: "transparent", color: "white" }
            }
          />
        </ButtonMenu>
      </WrapperButton>
    </ContainerMenu>
  );
}
