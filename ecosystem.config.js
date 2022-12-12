module.exports = {
  apps: [
    {
      name: "dvgames-front",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
      port: 3100,
    },
  ],
};
