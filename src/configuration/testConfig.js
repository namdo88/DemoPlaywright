module.exports = {
    baseUrl: 'https://opensource-demo.orangehrmlive.com/',
    login: {
        username: 'Admin',
        password: 'admin123'
    },
    timeouts: {
        navigationTimeout: 30000,
        actionTimeout: 10000,
        testExecutionTimeout: 10 * 60 * 1000,
        expectTimeout: 5000,
    },
    testENV: 'qa',
    language: 'en-US',
}; 