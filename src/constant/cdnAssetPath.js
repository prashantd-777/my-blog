const cu = path => {
    const originUrl =  window?.location?.origin;
    return (originUrl) + "/images/" + path;
};

const cuPDF = path => {
    const originUrl =  window?.location?.origin;
    return (originUrl) + "/pdf/" + path;
};

export const HEADER_BG = cu("header-bg.png");
export const THUMBNAIL_ICON = cu("thumbnail.svg");
export const TWITTER_ICON = cu("twitter.svg");
export const FACEBOOK_ICON = cu("facebook.svg");
export const INSTAGRAM_ICON = cu("instagram.svg");