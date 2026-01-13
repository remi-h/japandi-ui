import { createFileRoute } from '@tanstack/react-router'
import { PopcornIcon } from "lucide-react"

import { Button, Alert, AlertTitle, AlertDescription, Container, Grid, GridItem } from '@/components/ui'
import { Header } from '@/demo'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <>
      <Header />
      <Container>
        <h1>Welcome to the Japandi UI!</h1>
        <Grid cols={4} gap="lg">
          <GridItem span={1}>
            <Button>Click me</Button>
          </GridItem>
          <GridItem span={1}>
            <Alert variant="default">
              <PopcornIcon />
              <AlertTitle>This is an alert title</AlertTitle>
              <AlertDescription>This is an alert description.</AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <PopcornIcon />
              <AlertTitle>This is an alert title</AlertTitle>
              <AlertDescription>This is an alert description.</AlertDescription>
            </Alert>
          </GridItem>
        </Grid>
      </Container>
    </>
  )
}
