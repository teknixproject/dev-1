import _ from "lodash";
import { CSSProperties } from "react";
import {useActionsGlobal} from '@/hooks/useActionsGlobal'
interface TextProps {
  data?: any;
  style?: CSSProperties;
}

const TextCustom = ({ data, style }: TextProps) => {
  const title = _.get(data, "title", "Title Header");

  const newStyle: CSSProperties = {
    ...style,
  };
const {handle1, handle2}=useActionsGlobal()
  return (
    <div
      style={newStyle}
      className="text-[#858585]"
    >
      <button onClick={handle1}>handle1</button>
      <button onClick={handle2}>handle2</button>
      {title}
    </div>
  );
};

export default TextCustom;