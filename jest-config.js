module.exports = {
    testURL: "http://localhost/",
    moduleNameMapper: {
        "\\.scss": "identity-obj-proxy"
    },
    collectCoverage: true,
    roots: ["<rootDir>/src/"],
    setupFiles: ["<rootDir>/src/setupTests.js"],
    setupTestFrameworkScriptFile: "<rootDir>/src/setupTestFramework.js",
    snapshotSerializers: ["enzyme-to-json/serializer"]
};