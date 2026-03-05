# AGENTS.md - Development Guide for Agentic Coding

## Project Overview

This is a Remotion video project that creates programmatic videos using React. The project uses TypeScript, Tailwind CSS v4, and follows Remotion's composition-based architecture for creating animated video content.

## Code Style Guidelines

### TypeScript & React Patterns

#### Component Definitions

- NOT Use `React.FC` for functional components
- Define props `type` instead of `interface` with `readonly` properties
- Use React.CSSProperties for style objects
- Export components using named exports

```typescript
type IComponentNameProps = {
  readonly propName: string;
  readonly optionalProp?: number;
}

export const ComponentName = ({ propName, optionalProp }: IComponentNameProps) => {
  // Component logic
};
```

#### Imports

- Use default imports for React: `import React from "react";`
- Import Remotion hooks and utilities: `import { spring, useCurrentFrame } from "remotion";`
- Use named imports for utility functions and constants
- Type imports for type-only imports: `import type React from "react"`

#### Remotion Specific Patterns

- Use `useCurrentFrame()` and `useVideoConfig()` hooks for animations
- Use `spring()` for smooth animations with configurable damping
- Structure videos using `Composition` and `Sequence` components
- Define video configuration in separate constants files

#### Naming Conventions

- Components: PascalCase (e.g., `Title`, `PainPointScene`)
- Files: PascalCase for components (e.g., `Title.tsx`)
- Hooks: camelCase with `use` prefix (e.g., `useSpringAnimation`)
- Constants: UPPER_SNAKE_CASE (e.g., `VIDEO_CONFIG`, `SCENE_TIMINGS`)
- CSS Properties: camelCase React.CSSProperties

### Formatting & Linting

#### Formatting Rules (Biome + Prettier)

- Use spaces, 2 spaces for indentation
- Double quotes for strings and JSX attributes
- No semicolons (Biome rule: "asNeeded")
- Trim trailing whitespace
- LF line endings
- Insert final newline

### Animation & Timing Patterns

#### Hook Creation

- Create reusable animation hooks in `utils/animations.ts`
- Common hooks: `useSpringAnimation`, `useTypewriter`, `useSequence`, `usePulse`
- Animation hooks should accept delay and configuration parameters

#### Timing Management

- Store scene timings in constants: `SCENE_TIMINGS`
- Use Sequence components with calculated durations
- Frame-based calculations using `fps` from `useVideoConfig()`

### Error Handling & Validation

#### Type Safety

- Use Zod for runtime type validation when needed
- Leverage TypeScript's strict mode
- Use readonly properties for immutable data

#### Performance

- Use React.memo for expensive components if needed
- Optimize frame calculations to avoid re-renders
- Cache expensive calculations outside render cycles

## Project-Specific Notes

- This project uses Tailwind CSS v4 with Remotion integration
- Video format is set to JPEG with overwrite enabled
- No test framework is configured - rely on type checking and manual testing
- The project includes example TanStack Start video implementation
- Scene-based architecture with sequential composition
