import { useEffect } from "react";

export function usePageMeta(title, description) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    let meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta?.getAttribute("content");
    if (description && meta) {
      meta.setAttribute("content", description);
    } else if (description) {
      meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    return () => {
      document.title = previousTitle;
      if (meta && previousDescription !== undefined) {
        meta.setAttribute("content", previousDescription);
      }
    };
  }, [title, description]);
}