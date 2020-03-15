const Path = require("path");
const merge = require("lodash/merge");

// Webpack module aliases:
// - @components/* -> ./components/*
// - @settings/*   -> ./settings/*
const aliasConfig = {
  resolve: {
    alias: {
      "@components": Path.resolve(__dirname, "components/"),
      "@settings": Path.resolve(__dirname, "settings/")
    }
  }
};

module.exports = {
  // Export `aliasConfig` for use in .eslintrc.js
  aliasConfig,

  // Merge with `aliasConfig`
  webpack: config => merge(config, aliasConfig)
};
