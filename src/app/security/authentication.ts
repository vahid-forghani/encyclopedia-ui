export interface Authentication {

  authorities: {authority: string}[],
  details: any,
  authenticated: boolean,
  credentials: string,
  name: string

}
