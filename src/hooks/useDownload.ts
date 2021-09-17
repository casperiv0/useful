import * as React from "react";

interface Options {
  filename: string;
  /**
   * stringified data
   */
  data: string;
  /**
   * the content-type of the data
   * @default `application/json`
   */
  contentType?: string;
}

type DownloadFunction = (options: Options) => void;

/**
 * create a downloadable file
 * @param {Options} options Options
 */
export function useDownload() {
  const download: DownloadFunction = React.useCallback(
    ({ filename, data, contentType = "application/json" }) => {
      const element = document.createElement("a");
      element.setAttribute("href", `data:${contentType};charset=utf-8,${encodeURIComponent(data)}`);
      element.setAttribute("download", filename);

      element.style.display = "none";
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    },
    [],
  );

  return download;
}
