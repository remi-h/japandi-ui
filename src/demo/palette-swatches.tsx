import { Card, CardContent, CardHeader, CardTitle, Grid, GridItem } from "@/components/ui"

import { paletteColors } from "./palette-picker"

export function PaletteSwatches() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Available colors</CardTitle>
      </CardHeader>
      <CardContent>
        <Grid cols={4} gap="md">
          {paletteColors.map((color) => (
            <GridItem key={color.id}>
              <div className="flex items-center gap-3 rounded-lg border border-border px-3 py-2 text-sm">
                <span
                  className="h-7 w-7 rounded-full border border-black/10"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="min-w-0">
                  <div className="truncate font-medium">{color.name}</div>
                  <div className="text-xs text-muted-foreground">{color.hex}</div>
                </div>
              </div>
            </GridItem>
          ))}
        </Grid>
      </CardContent>
    </Card>
  )
}
