import { useLocation } from '@tanstack/react-router'
import { Header as UIHeader, HeaderTitle, HeaderActions } from '@/components/ui'
import { Button } from '@/components/ui'
import { ThemeToggle } from './theme-toggle'

export function Header() {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <UIHeader>
      <HeaderTitle link="/">Japandi UI</HeaderTitle>
      <HeaderActions>
        <Button 
          variant="ghost" 
          link="/components"
          active={currentPath === '/components'}
        >
          Components
        </Button>
        <Button 
          variant="ghost" 
          link="/about"
          active={currentPath === '/about'}
        >
          About
        </Button>
        <ThemeToggle />
      </HeaderActions>
    </UIHeader>
  )
}
