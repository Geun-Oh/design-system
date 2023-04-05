import { create } from '@storybook/theming/create';
import { BaseStyles } from '../src/styles/themes';
import LogoImg from '../src/icons/RESON&CE.png';

export default create ({
    brandImage: LogoImg,
    brandTarget: '_self',
    base: BaseStyles.Color.Black1,
    colorPrimary: BaseStyles.Color.Black3,
    colorSecondary: BaseStyles.Color.Beige2,
    fontBase: BaseStyles.Font.FiraCode,
    fontCode: 'monospace',
    textColor: BaseStyles.Color.Black3,
    textInverseColor: "white",
})
