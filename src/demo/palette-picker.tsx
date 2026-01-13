import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Button,
  Grid,
  GridItem,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui"

export type PaletteColor = {
  id: string
  name: string
  hex: string
  note: string
}

export type PaletteSelection = {
  accentId: string
  secondaryId: string
  backgroundId: string
  surfaceId: string
}

export const paletteColors: PaletteColor[] = [
  {
    id: "tokyo-tower-orange",
    name: "Tokyo Tower Orange",
    hex: "#D86A3B",
    note: "earthy terracotta accent",
  },
  {
    id: "stockholm-snow-white",
    name: "Stockholm Snow White",
    hex: "#F7F4EF",
    note: "warm winter white",
  },
  {
    id: "tokyo-night-blue",
    name: "Tokyo Night Blue",
    hex: "#1E2D3A",
    note: "inked skyline depth",
  },
  {
    id: "stockholm-summer-light-blue",
    name: "Stockholm Summer Light Blue",
    hex: "#B9D3E6",
    note: "washed sky highlight",
  },
  {
    id: "kyoto-cedar-brown",
    name: "Kyoto Cedar Brown",
    hex: "#7A5A43",
    note: "cedar wood warmth",
  },
  {
    id: "oslo-fjord-teal",
    name: "Oslo Fjord Teal",
    hex: "#2F6F6A",
    note: "cool coastal green",
  },
  {
    id: "copenhagen-sand",
    name: "Copenhagen Sand",
    hex: "#D9CBB5",
    note: "soft sand neutral",
  },
  {
    id: "helsinki-pine-green",
    name: "Helsinki Pine Green",
    hex: "#3E5E4B",
    note: "forest restraint",
  },
  {
    id: "sapporo-frost-gray",
    name: "Sapporo Frost Gray",
    hex: "#C9D0D2",
    note: "cool stone mist",
  },
  {
    id: "aarhus-slate",
    name: "Aarhus Slate",
    hex: "#4E5A62",
    note: "architectural slate",
  },
  {
    id: "nara-moss",
    name: "Nara Moss",
    hex: "#6C7A58",
    note: "quiet garden green",
  },
  {
    id: "hakone-mist-gray",
    name: "Hakone Mist Gray",
    hex: "#E6E1D8",
    note: "foggy linen haze",
  },
]

export function getPaletteColor(id: string) {
  return paletteColors.find((color) => color.id === id) ?? paletteColors[0]
}

type PalettePickerProps = {
  selection: PaletteSelection
  onChange: (selection: PaletteSelection) => void
  onReset?: () => void
}

export function PalettePicker({ selection, onChange, onReset }: PalettePickerProps) {
  const accent = getPaletteColor(selection.accentId)
  const secondary = getPaletteColor(selection.secondaryId)
  const background = getPaletteColor(selection.backgroundId)
  const surface = getPaletteColor(selection.surfaceId)

  const handleChange = (role: keyof PaletteSelection, id: string) => {
    onChange({ ...selection, [role]: id })
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between gap-3">
          <div>
            <CardTitle>Palette picker</CardTitle>
            <CardDescription>Choose colors you like!</CardDescription>
          </div>
          <Button variant="default" size="sm" onClick={onReset}>
            Reset
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Grid cols={4} gap="md">
          <GridItem>
            <div className="space-y-2 text-sm">
              <Label>Accent color</Label>
              <div className="flex items-center gap-2">
                <span
                  className="h-6 w-7 rounded-full border border-black/10"
                  style={{ backgroundColor: accent.hex }}
                />
                <Select
                  value={selection.accentId}
                  onValueChange={(value) => handleChange("accentId", value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select accent" />
                  </SelectTrigger>
                  <SelectContent>
                    {paletteColors.map((color) => (
                      <SelectItem key={color.id} value={color.id}>
                        {color.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="text-xs text-muted-foreground">
                {accent.hex} · {accent.note}
              </div>
            </div>
          </GridItem>

          <GridItem>
            <div className="space-y-2 text-sm">
              <Label>Secondary color</Label>
              <div className="flex items-center gap-2">
                <span
                  className="h-6 w-7 rounded-full border border-black/10"
                  style={{ backgroundColor: secondary.hex }}
                />
                <Select
                  value={selection.secondaryId}
                  onValueChange={(value) => handleChange("secondaryId", value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select secondary" />
                  </SelectTrigger>
                  <SelectContent>
                    {paletteColors.map((color) => (
                      <SelectItem key={color.id} value={color.id}>
                        {color.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="text-xs text-muted-foreground">
                {secondary.hex} · {secondary.note}
              </div>
            </div>
          </GridItem>

          <GridItem>
            <div className="space-y-2 text-sm">
              <Label>Background color</Label>
              <div className="flex items-center gap-2">
                <span
                  className="h-6 w-7 rounded-full border border-black/10"
                  style={{ backgroundColor: background.hex }}
                />
                <Select
                  value={selection.backgroundId}
                  onValueChange={(value) => handleChange("backgroundId", value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select background" />
                  </SelectTrigger>
                  <SelectContent>
                    {paletteColors.map((color) => (
                      <SelectItem key={color.id} value={color.id}>
                        {color.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="text-xs text-muted-foreground">
                {background.hex} · {background.note}
              </div>
            </div>
          </GridItem>

          <GridItem>
            <div className="space-y-2 text-sm">
              <Label>Surface color</Label>
              <div className="flex items-center gap-2">
                <span
                  className="h-6 w-7 rounded-full border border-black/10"
                  style={{ backgroundColor: surface.hex }}
                />
                <Select
                  value={selection.surfaceId}
                  onValueChange={(value) => handleChange("surfaceId", value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select surface" />
                  </SelectTrigger>
                  <SelectContent>
                    {paletteColors.map((color) => (
                      <SelectItem key={color.id} value={color.id}>
                        {color.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="text-xs text-muted-foreground">
                {surface.hex} · {surface.note}
              </div>
            </div>
          </GridItem>
        </Grid>
      </CardContent>
    </Card>
  )
}
