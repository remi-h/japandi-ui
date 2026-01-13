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
      <Container size="xl" padding="lg">
        <h1 className="text-3xl font-semibold">About</h1>
        <p className='mt-2'>
          I started this JapandiUI project to explore building a design system
          that blends Japanese and Scandinavian aesthetics. My goal is to create
          a calm, minimal, and functional UI library that emphasizes simplicity,
          natural materials, and thoughtful details.
        </p>
        <p className='mt-2'>I'll keep developing this project and adding more components.
          It's not quite finished yet but I'm excited to see where it goes!</p>
      </Container>
    </>
  )
}
