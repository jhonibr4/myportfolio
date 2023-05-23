import "styled-components";
import { defaultTheme } from "../style/defaultTheme";

type TypeTheme = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends TypeTheme {}
}
