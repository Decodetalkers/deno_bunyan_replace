import { EventEmitter } from "https://deno.land/std@0.110.0/node/events.ts";

import * as bunyan from "./bunyan.ts";

export type { LoggerOptions, Serializers } from "./options.ts";

export const levelFromName = {
  "trace": bunyan.TRACE,
  "debug": bunyan.DEBUG,
  "info": bunyan.INFO,
  "warn": bunyan.WARN,
  "error": bunyan.ERROR,
  "fatal": bunyan.FATAL,
};

export const nameFromLevel = {
  10: "trace",
  20: "debug",
  30: "info",
  40: "warn",
  50: "error",
  60: "fatal",
};

export default bunyan;
