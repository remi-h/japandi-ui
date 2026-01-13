import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { 
  Button, 
  Container, 
  Grid, 
  GridItem,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Input,
  Label,
  Textarea,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Checkbox,
  RadioGroup,
  RadioGroupItem,
  Switch,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Badge,
  Separator,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Progress,
  Skeleton,
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/components/ui'
import { Header } from '@/demo'

export const Route = createFileRoute('/components')({
  component: Components,
})

function Components() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [progress, setProgress] = useState(33)

  return (
    <>
      <Header />
      <Container>
        <div className="space-y-12 py-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Components</h1>
            <p className="text-muted-foreground">
              Browse all available components in the Japandi UI design system.
            </p>
          </div>

          {/* Buttons Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Buttons</h2>
            <Grid cols={3} gap="md">
              <GridItem>
                <Button>Default</Button>
              </GridItem>
              <GridItem>
                <Button variant="secondary">Secondary</Button>
              </GridItem>
              <GridItem>
                <Button variant="outline">Outline</Button>
              </GridItem>
              <GridItem>
                <Button variant="ghost">Ghost</Button>
              </GridItem>
              <GridItem>
                <Button variant="destructive">Destructive</Button>
              </GridItem>
              <GridItem>
                <Button size="sm">Small</Button>
              </GridItem>
              <GridItem>
                <Button size="lg">Large</Button>
              </GridItem>
              <GridItem>
                <Button link="/">As Link</Button>
              </GridItem>
              <GridItem>
                <Button disabled>Disabled</Button>
              </GridItem>
            </Grid>
          </section>

          {/* Cards Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Cards</h2>
            <Grid cols={3} gap="md">
              <GridItem>
                <Card>
                  <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card description goes here</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Card content area</p>
                  </CardContent>
                  <CardFooter>
                    <Button size="sm">Action</Button>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem>
                <Card>
                  <CardHeader>
                    <CardTitle>Another Card</CardTitle>
                    <CardDescription>With different content</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>More content here</p>
                  </CardContent>
                </Card>
              </GridItem>
            </Grid>
          </section>

          {/* Form Elements Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Form Elements</h2>
            <Grid cols={2} gap="md">
              <GridItem>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
              </GridItem>
              <GridItem>
                <div className="space-y-2">
                  <Label htmlFor="select">Select</Label>
                  <Select>
                    <SelectTrigger id="select">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                      <SelectItem value="option3">Option 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </GridItem>
              <GridItem>
                <div className="space-y-2">
                  <Label htmlFor="textarea">Textarea</Label>
                  <Textarea id="textarea" placeholder="Enter your message" />
                </div>
              </GridItem>
              <GridItem>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">Accept terms and conditions</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="notifications" />
                    <Label htmlFor="notifications">Enable notifications</Label>
                  </div>
                </div>
              </GridItem>
              <GridItem>
                <div className="space-y-2">
                  <Label>Radio Group</Label>
                  <RadioGroup defaultValue="option1">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option1" id="r1" />
                      <Label htmlFor="r1">Option 1</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option2" id="r2" />
                      <Label htmlFor="r2">Option 2</Label>
                    </div>
                  </RadioGroup>
                </div>
              </GridItem>
            </Grid>
          </section>

          {/* Badges & Avatars Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Badges & Avatars</h2>
            <Grid cols={3} gap="md">
              <GridItem>
                <div className="flex gap-2 flex-wrap">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
              </GridItem>
              <GridItem>
                <div className="flex gap-2 items-center">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                </div>
              </GridItem>
            </Grid>
          </section>

          {/* Alerts Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Alerts</h2>
            <Grid cols={2} gap="md">
              <GridItem>
                <Alert>
                  <AlertTitle>Default Alert</AlertTitle>
                  <AlertDescription>
                    This is a default alert message.
                  </AlertDescription>
                </Alert>
              </GridItem>
              <GridItem>
                <Alert variant="destructive">
                  <AlertTitle>Destructive Alert</AlertTitle>
                  <AlertDescription>
                    This is a destructive alert for errors.
                  </AlertDescription>
                </Alert>
              </GridItem>
            </Grid>
          </section>

          {/* Interactive Components Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Interactive Components</h2>
            <Grid cols={3} gap="md">
              <GridItem>
                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                  <DialogTrigger asChild>
                    <Button>Open Dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Dialog Title</DialogTitle>
                      <DialogDescription>
                        This is a dialog component example.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
                      <Button onClick={() => setDialogOpen(false)}>Confirm</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </GridItem>
              <GridItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">Dropdown Menu</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </GridItem>
              <GridItem>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">Open Popover</Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="space-y-2">
                      <h4 className="font-medium">Popover Title</h4>
                      <p className="text-sm text-muted-foreground">
                        This is a popover component.
                      </p>
                    </div>
                  </PopoverContent>
                </Popover>
              </GridItem>
              <GridItem>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">Hover me</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>This is a tooltip</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </GridItem>
            </Grid>
          </section>

          {/* Tabs Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Tabs</h2>
            <Tabs defaultValue="account" className="w-full">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                <Card>
                  <CardHeader>
                    <CardTitle>Account</CardTitle>
                    <CardDescription>
                      Make changes to your account here.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Account content goes here.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="password">
                <Card>
                  <CardHeader>
                    <CardTitle>Password</CardTitle>
                    <CardDescription>
                      Change your password here.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Password content goes here.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="settings">
                <Card>
                  <CardHeader>
                    <CardTitle>Settings</CardTitle>
                    <CardDescription>
                      Manage your settings here.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Settings content goes here.</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </section>

          {/* Accordion Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Accordion</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that match the other components.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if needed.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Progress & Skeleton Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Progress & Skeleton</h2>
            <Grid cols={2} gap="md">
              <GridItem>
                <div className="space-y-2">
                  <Label>Progress: {progress}%</Label>
                  <Progress value={progress} />
                  <div className="flex gap-2">
                    <Button size="sm" onClick={() => setProgress(Math.max(0, progress - 10))}>-</Button>
                    <Button size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>+</Button>
                  </div>
                </div>
              </GridItem>
              <GridItem>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-20 w-full" />
                </div>
              </GridItem>
            </Grid>
          </section>

          {/* Separator Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Separator</h2>
            <div>
              <div className="space-y-1">
                <h4 className="text-sm font-medium">Section 1</h4>
                <p className="text-sm text-muted-foreground">Content for section 1</p>
              </div>
              <Separator className="my-4" />
              <div className="space-y-1">
                <h4 className="text-sm font-medium">Section 2</h4>
                <p className="text-sm text-muted-foreground">Content for section 2</p>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </>
  )
}
