import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import classNames from "classnames";

type Props = {
  content: string;
  className?: string;
};

export default function MarkdownRenderer({ content, className }: Props) {
  return (
    <div className={classNames("markdown", className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSanitize]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
