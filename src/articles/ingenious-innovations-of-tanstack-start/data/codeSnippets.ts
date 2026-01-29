export const CODE_SNIPPETS = {
  viteConfig: `// vite.config.ts
import { devtools } from "@tanstack/devtools-vite"

export default defineConfig({
  plugins: [devtools()]
})`,

  envVar: `LAUNCH_EDITOR=trae`,

  dataAttribute: `data-tsd-source="/src/components/Header.tsx:23:7"`,

  headerComponent: `// src/components/Header.tsx
export function Header() {
  return (
    <nav className="flex items-center justify-between">
      <Logo />
      <Navigation />
    </nav>
  )
}`,

  aboutRoute: `// src/routes/about.tsx
export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to our app!</p>
    </div>
  )
}`,

  linkComponent: `import { Link } from "@tanstack/react-router"

<Link to="/about">About</Link>`,

  navigateFunction: `import { useNavigate } from "@tanstack/react-router"

const navigate = useNavigate()
navigate({ to: "/about" })`,
} as const
