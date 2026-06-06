// https://vike.dev/Head

import { usePageContext } from "vike-react/usePageContext";
import { PageMetadata } from "../types";

export function Head() {
  const pageContext = usePageContext();
  const { metadata } = pageContext.exports as { metadata?: PageMetadata };

  if (!metadata) return null;

  return <>{metadata.redirectUrl && <meta http-equiv="Refresh" content={`0; url='${metadata.redirectUrl}'`} />}</>;
}
