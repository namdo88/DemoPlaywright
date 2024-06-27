
export default class TestConfig {
    public static BASE_URL = process.env.BASE_URL
    public static USERNAME = process.env.USER_NAME
    public static PASSWORD = process.env.PASSWORD
    public static LANGUAGE = process.env.LANGUAGE || 'en-US'
    public static TEST_ENV = process.env.ENV || 'qa'
}