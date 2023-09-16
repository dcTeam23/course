/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images:{unoptimized: true}
};

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  
})

module.exports = withNextra(nextConfig);
