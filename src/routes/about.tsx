import { Container } from '@/components/ui'
import { createFileRoute } from '@tanstack/react-router'
import { Header } from '@/demo'

export const Route = createFileRoute('/about')({
  component: Components,
})

function Components() {
  return (
    <>
      <Header />
      <Container>
        <h1>About</h1>
        <p>This is the about page.</p>
      </Container>
    </>
  )
}

