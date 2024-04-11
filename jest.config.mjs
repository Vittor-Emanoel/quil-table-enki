/**
 * For a detailed explanation regarding each configuration property, visit:
 */

/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  coverageProvider: "babel",
  transform: {
    "\\.[jt]s?$": "babel-jest",
    "quill": "babel-jest"
    
  },
};

export default config;
