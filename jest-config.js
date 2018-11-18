module.exports = {
    testURL: "http://localhost/",
    moduleNameMapper: {
        "\\.scss": "identity-obj-proxy"
    },
    moduleDirectories: ["node_modules", "src"],
    collectCoverage: true,
    roots: ["<rootDir>/src/"],
    setupFiles: ["<rootDir>/src/setupTests.js"],
    setupTestFrameworkScriptFile: "<rootDir>/src/setupTestFramework.js",
    snapshotSerializers: ["enzyme-to-json/serializer"],
    globals: {
        WEBPACK_PUBLIC_PATH: "/"
    }
};
