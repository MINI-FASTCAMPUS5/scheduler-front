interface ImportMetaEnv {
  readonly VITE_BACK_URL: string
  readonly VITE_EXCEL_DOWNLOAD_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
