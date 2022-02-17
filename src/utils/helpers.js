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

export {detectScreenMode, selectColorFromMetric}