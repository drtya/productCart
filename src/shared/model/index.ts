interface HttpResponse<T> {
  message: string;
  data: null | T;
}

export type { HttpResponse };
