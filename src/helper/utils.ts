export function log(message?: any, ...optionalParams: any[]): void {
  const ENVIROMENT = process.env.NODE_ENV;
  if (ENVIROMENT === 'development') {
    // eslint-disable-next-line no-console
    console.log(message, ...optionalParams);
  }
}
