import type * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const gridVariants = cva(
  "grid w-full",
  {
    variants: {
      cols: {
        1: "grid-cols-1",
        2: "grid-cols-1 md:grid-cols-2",
        3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
        5: "grid-cols-1 md:grid-cols-2 lg:grid-cols-5",
        6: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
      },
      gap: {
        none: "gap-0",
        sm: "gap-2",
        md: "gap-4",
        lg: "gap-6",
        xl: "gap-8",
      },
    },
    defaultVariants: {
      cols: 3,
      gap: "md",
    },
  }
)

const gridItemVariants = cva(
  "",
  {
    variants: {
      span: {
        full: "col-span-full",
        1: "col-span-1",
        2: "col-span-1 md:col-span-2",
        3: "col-span-1 md:col-span-2 lg:col-span-3",
        4: "col-span-1 md:col-span-2 lg:col-span-4",
      },
    },
    defaultVariants: {
      span: 1,
    },
  }
)

function Grid({
  className,
  cols,
  gap,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof gridVariants>) {
  return (
    <div
      className={cn(gridVariants({ cols, gap }), className)}
      {...props}
    />
  )
}

function GridItem({
  className,
  span,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof gridItemVariants>) {
  return (
    <div
      className={cn(gridItemVariants({ span }), className)}
      {...props}
    />
  )
}

export { Grid, GridItem, gridVariants, gridItemVariants }

