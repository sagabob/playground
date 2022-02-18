import { TabletSize, MobileSize, IsMobile, IsTablet, IsDesktop } from './constants'
import { metricMediumColor, metricGoodColor, metricTopColor } from './colors'

const detectScreenMode = (inputWindowSize) => {

    let outputSize = IsDesktop;

    if (inputWindowSize <= MobileSize)
        outputSize = IsMobile;
    else if (inputWindowSize > MobileSize && inputWindowSize < TabletSize)
        outputSize = IsTablet;

    return outputSize;
}

const selectColorFromMetric = (metric) => {
    if (metric < 80)
        return metricMediumColor;

    if (metric >= 90)
        return metricTopColor;

    return metricGoodColor;
}

const detectTabStyleBasedOnScreenMode = (inputScreenSizeMode) => {
    const stickyTabStyle = {
        "position": "fixed",
        "top": inputScreenSizeMode !== IsDesktop ? "50px" : "0px",
        "left": "0px",
        "width": "100vw",
        "zIndex": 25,
        "backgroundColor": "#77d2f3"
    };

    return  stickyTabStyle;
}

export { detectScreenMode, selectColorFromMetric, detectTabStyleBasedOnScreenMode }