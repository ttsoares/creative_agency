const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

const withNativeWindOptions = {
  input: "./app/global.css",
  getCSSForPlatform: (platform) => {
    return Promise.resolve(`/* CSS for ${platform} */`);
  },
};

module.exports = withNativeWind(config, withNativeWindOptions);
