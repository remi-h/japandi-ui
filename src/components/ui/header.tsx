import type * as React from "react"
import { Link } from "@tanstack/react-router"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const headerVariants = cva(
  "w-full border-b",
  {
    variants: {
      size: {
        sm: "h-12",
        md: "h-14",
        lg: "h-16",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

const headerContentVariants = cva(
  "flex items-center justify-between w-full mx-auto px-4 h-full",
  {
    variants: {
      containerSize: {
        sm: "max-w-screen-sm",
        md: "max-w-screen-md",
        lg: "max-w-screen-lg",
        xl: "max-w-screen-xl",
        "2xl": "max-w-screen-2xl",
        full: "max-w-full",
      },
    },
    defaultVariants: {
      containerSize: "xl",
    },
  }
)

function Header({
  className,
  size,
  containerSize,
  children,
  ...props
}: React.ComponentProps<"header"> & VariantProps<typeof headerVariants> & VariantProps<typeof headerContentVariants>) {
  return (
    <header
      data-slot="header"
      className={cn(headerVariants({ size }), className)}
      {...props}
    >
      <div className={cn(headerContentVariants({ containerSize }))}>
        {children}
      </div>
    </header>
  )
}

const headerTitleVariants = cva(
  "text-lg font-semibold tracking-tight",
  {
    variants: {
      asLink: {
        true: "hover:opacity-80 transition-opacity cursor-pointer",
        false: "",
      },
    },
    defaultVariants: {
      asLink: false,
    },
  }
)

type HeaderTitleProps = React.ComponentProps<"div"> & {
  link?: never
}

type HeaderTitleLinkProps = Omit<React.ComponentProps<typeof Link>, "to"> & {
  link: string
}

function HeaderTitle({
  className,
  link,
  ...props
}: HeaderTitleProps | HeaderTitleLinkProps) {
  if (link) {
    return (
      <Link
        data-slot="header-title"
        to={link}
        className={cn(
          headerTitleVariants({ asLink: true }),
          className
        )}
        {...(props as Omit<React.ComponentProps<typeof Link>, "to">)}
      />
    )
  }

  return (
    <div
      data-slot="header-title"
      className={cn(
        headerTitleVariants({ asLink: false }),
        className
      )}
      {...(props as React.ComponentProps<"div">)}
    />
  )
}

function HeaderActions({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="header-actions"
      className={cn(
        "flex items-center gap-1",
        className
      )}
      {...props}
    />
  )
}

export { Header, HeaderTitle, HeaderActions, headerVariants, headerTitleVariants }

