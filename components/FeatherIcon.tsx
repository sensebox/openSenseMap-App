import FeatherIcons from "@expo/vector-icons/Feather";
import { FeatherIconName } from "../types";

type FeatherIconProps = {
  name: FeatherIconName,
  size: number,
  color: string
}

function FeatherIcon ({name, size, color}: FeatherIconProps) {
  return (
    <FeatherIcons name={name} size={size} color={color} />
  )
}

export default FeatherIcon;