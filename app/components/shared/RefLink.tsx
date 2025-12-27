import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { HTMLAttributeAnchorTarget } from "react";

function appendRefParam(href: Url, refValue: string): Url {
  if (typeof href !== "string") return href;

  const hasQuery = href.includes("?");
  const connector = hasQuery ? "&" : "?";

  return `${href}${connector}ref=${encodeURIComponent(refValue)}`;
}

export default function RefLink({
  href,
  children,
  className,
  target = "_blank",
}: {
  href: Url;
  children?: React.ReactNode;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
}) {
  return (
    <Link
      href={appendRefParam(href, "mohamed-khaled")}
      rel="noopener"
      target={target}
      className={className}
    >
      {children}
    </Link>
  );
}
