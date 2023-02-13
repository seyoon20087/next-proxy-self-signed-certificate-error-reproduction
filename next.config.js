module.exports = {
  async rewrites() {
    return [
      {
        source: "/c",
        destination: "https://localhost:9443/",
      },
    ];
  },
};
