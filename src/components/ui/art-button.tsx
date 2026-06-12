"use client";

import Link from "next/link";
import React, {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactElement,
  type ReactNode,
} from "react";

type Variant = "y" | "ghost" | "o" | "g";

type BaseProps = {
  variant?: Variant;
  size?: "md" | "sm" | "lg";
  className?: string;
  children: ReactNode;
};

type ArtButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ArtButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

export type ArtButtonProps = ArtButtonAsButton | ArtButtonAsLink;

function cn(...parts: (string | false | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

function isIconNode(node: ReactNode): node is ReactElement {
  if (!React.isValidElement(node)) return false;
  if (node.type === "svg") return true;
  const className = (node.props as { className?: string }).className;
  return typeof className === "string" && className.includes("ico-wa");
}

function wrapStringWithArrows(text: string): (string | ReactElement)[] {
  const startArrow = text.match(/^([←→])\s*(.+)$/);
  if (startArrow) {
    return [
      <span key="arrow" className="btn-arrow btn-arrow-start" aria-hidden="true">
        {startArrow[1]}
      </span>,
      startArrow[2],
    ];
  }

  const endArrow = text.match(/^(.+?)\s*([←→])$/);
  if (endArrow) {
    return [
      endArrow[1],
      <span key="arrow" className="btn-arrow btn-arrow-end" aria-hidden="true">
        {endArrow[2]}
      </span>,
    ];
  }

  return [text];
}

function ButtonContent({ children }: { children: ReactNode }) {
  return (
    <span className="btn-inner">
      {React.Children.toArray(children).flatMap((node, index) => {
        if (isIconNode(node)) {
          return (
            <span key={`icon-${index}`} className="btn-icon">
              {node}
            </span>
          );
        }

        if (typeof node === "string") {
          const parts = wrapStringWithArrows(node);
          return parts.map((part, partIndex) => {
            if (typeof part === "string") {
              return <React.Fragment key={`text-${index}-${partIndex}`}>{part}</React.Fragment>;
            }
            return React.cloneElement(part, { key: `arrow-${index}-${partIndex}` });
          });
        }

        if (React.isValidElement(node)) {
          return React.cloneElement(node, { key: `node-${index}` });
        }

        return null;
      })}
    </span>
  );
}

export const ArtButton = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ArtButtonProps
>(function ArtButton(
  { variant = "y", size = "md", className, children, ...props },
  ref
) {
  const classes = cn("btn", `btn-${variant}`, size !== "md" && `btn-${size}`, className);
  const content = (
    <>
      <span className="btn-waves" aria-hidden="true" />
      <ButtonContent>{children}</ButtonContent>
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
      return (
        <a ref={ref as React.Ref<HTMLAnchorElement>} href={href} className={classes} {...rest}>
          {content}
        </a>
      );
    }
    return (
      <Link ref={ref as React.Ref<HTMLAnchorElement>} href={href} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button ref={ref as React.Ref<HTMLButtonElement>} className={classes} {...buttonProps}>
      {content}
    </button>
  );
});
