import { createFileRoute } from '@tanstack/react-router'

import { Container } from '@/components/ui'
import { Header } from '@/demo'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <>
      <Header />
      <Container size="xl" padding="lg">
        <h1 className="text-3xl mb-2 font-semibold">Welcome to Japandi UI</h1>
        <p className="text-sm text-muted-foreground">
          Visit the components page to explore the palette controls and UI
          previews.
        </p>
      </Container>
    </>
  )
}
