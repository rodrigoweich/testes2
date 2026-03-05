export interface BaseResponse {
  success: boolean;
  message: string;
}

export interface ErrorResponse extends BaseResponse {
  success: false;
  error: {
    code: string;
    details?: string;
    fields?: Record<string, string>;
  };
}

export interface MultiErrorResponse extends BaseResponse {
  success: false;
  errors: {
    code: string;
    message: string;
    field?: string;
  }[];
}

export interface SuccessResponse<T> extends BaseResponse {
  success: true;
  data: T;
}
