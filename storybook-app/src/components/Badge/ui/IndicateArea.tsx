/** @jsxImportSource @emotion/react */
import { ColorType, indicateStyle } from "../style";

const IndicateArea = ({ innerText, color }: { innerText?: string, color: ColorType }) => {
    return (
        <div css={indicateStyle({ color })}>
            {innerText}
        </div>
    );
};

export default IndicateArea;