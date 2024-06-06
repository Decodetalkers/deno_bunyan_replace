import { EventEmitter } from "https://deno.land/std@0.110.0/node/events.ts";

import * as bunyan from "./bunyan.ts";

import type { LoggerOptions, Serializers } from "./options.ts";

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

export class Logger extends EventEmitter {
  constructor(_options: LoggerOptions) {
    super();
  }
}

export function createLogger(options: LoggerOptions): Logger {
  return new Logger(options);
}

export type { LoggerOptions, Serializers };
