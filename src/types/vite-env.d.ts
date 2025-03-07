/// <reference types="vite/client" />

interface ImportMeta {
  readonly env: {
    readonly VITE_WEBHOOK_URL: string;
    [key: string]: any;
  };
}
