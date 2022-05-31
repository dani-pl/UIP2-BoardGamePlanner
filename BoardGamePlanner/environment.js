import Constants from "expo-constants"
import { Platform } from "react-native"

/**
 * our env values
 */
export const ENV = {
    dev: {
        apikey: "dbe8c500c75b3a99fb04b43e7ef4265e"
    }
}

// TODO: make this work
/**
 * this function releases the env variables for the specified stage 
 * @param {*} env 
 * @returns 
 */
const getEnvVars = (env = Constants.manifest.releaseChannel) => {
    if(__DEV__){
        return ENV.dev;
    }
}

export default getEnvVars;