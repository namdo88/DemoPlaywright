import config from '../configuration/testConfig.js';

export default class Constants {
    public static BASE_URL = process.env.BASE_URL || config.baseUrl;
    public static USERNAME = process.env.USER_NAME || config.login.username;
    public static PASSWORD = process.env.PASSWORD || config.login.username;
    public static LANGUAGE = config.language;
    public static TEST_ENV = config.testENV;
}