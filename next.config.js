module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true,
      },
    ];
  },
  env: {
    API_PATH: "https://kg5l0w8x6i.execute-api.us-west-1.amazonaws.com/api/admin/",
    WEB_PATH: "https://canary-mu.vercel.app",
  },
  images: {
    //domains: ['localhost'],
    domains: ['canary-mu.vercel.app'],
    loader: 'imgix',
    //path: 'http://localhost:3000/',
    path: 'https://canary-mu.vercel.app/',
  },
}