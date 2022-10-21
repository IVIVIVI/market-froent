export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://grab-market-server.herokuapp.com"
    : "http://43.200.175.233:8088";
