import { Button, Container } from '@/components/ui'
import { createFileRoute } from '@tanstack/react-router'
import { Header } from '@/demo'

export const Route = createFileRoute('/components')({
  component: Components,
})

function Components() {
  return (
    <>
      <Header />
      <Container>
        <h1>Components</h1>
        <Button variant="default">Button</Button>
      </Container>
    </>
  )
}

