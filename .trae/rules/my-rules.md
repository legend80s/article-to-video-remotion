## Code Style Guidelines

- 新代码或修改代码应该使用 tailwind css v4 className，而不是使用内联样式类
- Keep files under ~700 LOC - extract helpers when larger
- Package manager: pnpm (pnpm install)

### Component Definitions

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
