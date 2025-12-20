import type * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const containerVariants = cva(
  "w-full mx-auto",
  {
    variants: {
      size: {
        sm: "max-w-screen-sm px-4",
        md: "max-w-screen-md px-4",
        lg: "max-w-screen-lg px-4",
        xl: "max-w-screen-xl px-4",
        "2xl": "max-w-screen-2xl px-4",
        full: "max-w-full px-4",
      },
      padding: {
        none: "py-0",
        sm: "py-4",
        md: "py-6",
        lg: "py-8",
        xl: "py-12",
      },
    },
    defaultVariants: {
      size: "xl",
      padding: "md",
    },
  }
)

function Container({
  className,
  size,
  padding,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof containerVariants>) {
  return (
    <div
      className={cn(containerVariants({ size, padding }), className)}
      {...props}
    />
  )
}

export { Container, containerVariants }

