import { createFileRoute } from '@tanstack/react-router'
import { Button, Alert, AlertTitle, AlertDescription, Container, Grid, GridItem, Header, HeaderTitle, HeaderActions } from '@/components/ui'
export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <>
      <Header>
        <HeaderTitle>Japandi UI</HeaderTitle>
        <HeaderActions>
          <Button variant="ghost">Menu</Button>
          <Button variant="ghost">Settings</Button>
          <Button>Sign In</Button>
        </HeaderActions>
      </Header>
      <Container>
        <Grid cols={3} gap="lg">
          <GridItem>Welcome to the Japandi UI!</GridItem>
          <GridItem>
            <Button>Click me</Button>
          </GridItem>
          <GridItem span={2}>
            <Alert variant="destructive">
              <AlertTitle>This is an alert title</AlertTitle>
              <AlertDescription>This is an alert description.</AlertDescription>
            </Alert>
          </GridItem>
        </Grid>
      </Container>
    </>
  )
}
