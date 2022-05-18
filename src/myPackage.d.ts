interface Config {
  url: string;
}
declare module  "myPackage" { 
  function init(confiwg: Config): boolean;
  function exit(code: number): number;
}
