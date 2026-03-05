export interface AbstractDomainError {
  message: string;
  code: number;
  details?: Record<string, unknown>;
}
