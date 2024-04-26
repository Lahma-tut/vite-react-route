import { FC } from "react"
import { ButtonProps } from "../../types/button.props"

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>
}