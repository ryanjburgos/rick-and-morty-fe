export interface IBaseResponse<T> {
  info: IInfo;
  results: Array<T>;
}

export interface IInfo {
  count: number;
  pages: number;
  next: string;
  prev?: any;
}
