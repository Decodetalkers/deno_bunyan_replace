interface WriteFn {
  write: (object: unknown) => void;
}

// deno-lint-ignore no-explicit-any
type Serializer = (input: any) => any;

export interface Serializers {
  [key: string]: Serializer;
}

type LogLevelString = "trace" | "debug" | "info" | "warn" | "error" | "fatal";
type LogLevel = LogLevelString | number;

interface Stream {
  type?: string | undefined;
  level?: LogLevel | undefined;
  path?: string | undefined;
  stream?: WritableStream | WriteFn | undefined;
  closeOnExit?: boolean | undefined;
  period?: string | undefined;
  count?: number | undefined;
  name?: string | undefined;
  reemitErrorEvents?: boolean | undefined;
}

export interface LoggerOptions {
  name: string;
  streams?: Stream[] | undefined;
  level?: LogLevel | undefined;
  stream?: WritableStream | undefined;
  serializers?: Serializer | undefined;
  src?: boolean | undefined;
  // deno-lint-ignore no-explicit-any
  [custom: string]: any;
}
