import { TabletSize, MobileSize, IsMobile, IsTablet, IsDesktop } from './constants'

const detectScreenMode = (inputWindowSize) => {

    let outputSize = IsDesktop;

    if (inputWindowSize <= MobileSize)
        outputSize = IsMobile;
    else if (inputWindowSize > MobileSize && inputWindowSize < TabletSize)
        outputSize = IsTablet;

    return outputSize;
}


export {detectScreenMode}