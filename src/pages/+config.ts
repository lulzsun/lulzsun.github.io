import type { Config } from "vike/types";
import vikeReact from "vike-react/config";

// Default config (can be overridden by pages)
// https://vike.dev/config

const config: Config = {
  prerender: true,
  passToClient: ["exports", "urlPathname"],
  extends: [vikeReact],
};

export default config;
