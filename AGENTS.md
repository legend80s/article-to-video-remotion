# AGENTS.md - Development Guide for Agentic Coding

## Project Overview

This is a Remotion video project that creates programmatic videos using React. The project uses TypeScript, Tailwind CSS v4, and follows Remotion's composition-based architecture for creating animated video content.

## Essential Commands

### Development & Building

```bash
# Start Remotion Studio for preview and development
npm run dev

# Build the video for production
npm run build

# Upgrade Remotion dependencies
npm run upgrade
```

### Code Quality & Type Checking

```bash
# Run ESLint and TypeScript checking (no test suite exists)
npm run lint

# Type check only
npx tsc --noEmit

# Format code with Biome
npx @biomejs/biome format --write .

# Lint with Biome
npx @biomejs/biome lint .
```

**Note: No test framework is currently configured in this project.** All validation is done through ESLint and TypeScript checking.

## Code Style Guidelines

### TypeScript & React Patterns

#### Component Definitions

- Use `React.FC` with readonly props for functional components
- Define props interfaces with `readonly` properties
- Use React.CSSProperties for style objects
- Export components using named exports

```typescript
export const ComponentName: React.FC<{
  readonly propName: string;
  readonly optionalProp?: number;
}> = ({ propName, optionalProp }) => {
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

### File Organization

#### Directory Structure

- `src/` - Main source code
- `src/HelloWorld/` - Basic example components
- `src/articles/[article-name]/` - Article-specific video components
- `src/articles/[article-name]/scenes/` - Individual scene components
- `src/articles/[article-name]/components/` - Reusable components
- `src/articles/[article-name]/utils/` - Helper functions and hooks
- Constants files: `constants.ts` or `data/constants.ts`

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

#### ESLint Configuration

- Uses `@remotion/eslint-config-flat`
- Strict TypeScript checking enabled
- No unused locals allowed

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

## Development Workflow

1. Run `npm run dev` to start Remotion Studio
2. Make changes to components
3. Run `npm run lint` to check code quality
4. Use Biome for formatting: `npx @biomejs/biome format --write .`
5. Preview videos in Remotion Studio
6. Build with `npm run build` when complete

## Project-Specific Notes

- This project uses Tailwind CSS v4 with Remotion integration
- Video format is set to JPEG with overwrite enabled
- No test framework is configured - rely on type checking and manual testing
- The project includes example TanStack Start video implementation
- Scene-based architecture with sequential composition
