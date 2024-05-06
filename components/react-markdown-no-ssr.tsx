import dynamic from "next/dynamic";
import remarkGfm from "remark-gfm";
import { FC } from "react";
import ReactMarkdown from "react-markdown";

const DynamicReactMarkdown: FC<any> = (props) => (
  <div className="prose">
    <ReactMarkdown {...props} remarkPlugins={[remarkGfm]} />
  </div>
);

DynamicReactMarkdown.displayName = "DynamicReactMarkdown";

export const ReactMarkdownNoSSr = dynamic(
  () => Promise.resolve(DynamicReactMarkdown),
  { ssr: false }
);
