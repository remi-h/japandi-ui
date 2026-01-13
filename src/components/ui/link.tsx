import type * as React from "react"
import { Link as RouterLink } from "@tanstack/react-router"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const linkVariants = cva(
  "text-primary underline-offset-4 hover:underline transition-colors",
  {
    variants: {
      variant: {
        default: "",
        muted: "text-muted-foreground hover:text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Link({
  className,
  variant,
  to,
  ...props
}: React.ComponentProps<typeof RouterLink> & VariantProps<typeof linkVariants>) {
  return (
    <RouterLink
      data-slot="link"
      to={to}
      className={cn(linkVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Link, linkVariants }