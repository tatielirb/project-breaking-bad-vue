import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  AxiosRequestConfig,
} from 'axios';

export class BaseCharacter {
  private http: AxiosInstance;

  constructor(baseURL: string, setHeaders?: any) {
    this.http = axios.create({
      baseURL,
      timeout: 30000,
      responseType: 'json',
    });
    if (setHeaders) this.setHeaders = setHeaders;

    this.updateInterceptors();
  }

  public get<T>(url: string, options?: AxiosRequestConfig): Promise<T> {
    return this.http.get<T>(url, options).then(this.getData);
  }

  public post<T>(
    url: string,
    data?: any,
    options?: AxiosRequestConfig
  ): Promise<T> {
    return this.http.post(url, data, options).then(this.getData);
  }

  public put<T>(
    url: string,
    data?: any,
    options?: AxiosRequestConfig
  ): Promise<T> {
    return this.http.put(url, data, options).then(this.getData);
  }

  public upload<T>(
    url: string,
    data?: any,
    options?: AxiosRequestConfig
  ): Promise<T> {
    return this.http.put(url, data.file, options).then(this.getData);
  }

  public patch<T>(
    url: string,
    data?: any,
    options?: AxiosRequestConfig
  ): Promise<T> {
    return this.http.patch(url, data, options).then(this.getData);
  }

  public delete<T>(url: string, data?: any): Promise<T> {
    return this.http.delete(url, data).then(this.getData);
  }

  private updateInterceptors() {
    this.http.interceptors.request.use(this.setHeaders);
    this.http.interceptors.response.use(this.handleSuccess, this.handleError);
  }

  private setHeaders = (config: AxiosRequestConfig): AxiosRequestConfig => {
    config.headers = {
      'Content-Type': 'application/json',
    };

    return config;
  };

  private getData<T>(response: AxiosResponse<T>): T {
    return response.data;
  }

  private handleSuccess(response: AxiosResponse): AxiosResponse {
    return response;
  }

  private handleError = (error: AxiosError): Promise<AxiosError> => {
    if (axios.isCancel(error)) {
      return Promise.reject(error);
    }

    if (error && error.response) {
      const { data } = error.response;
      if (data) return Promise.reject(data);
    }

    return Promise.reject(error);
  };
}