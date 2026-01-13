import { createFileRoute } from "@tanstack/react-router"

import { Container } from "@/components/ui"
import { Header } from "@/demo"

export const Route = createFileRoute("/$")({
  component: NotFound,
})

function NotFound() {
  return (
    <>
      <Header />
      <Container size="xl" padding="lg">
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold">Page not found</h1>
          <p className="text-sm text-muted-foreground">
            The page you are looking for does not exist.
          </p>
        </div>
      </Container>
    </>
  )
}
