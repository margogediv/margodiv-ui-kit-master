# margodiv-ui-kit

A lightweight, accessible React component library and design system built with TypeScript and styled-components.

[![CI](https://github.com/margogediv/margodiv-ui-kit-master/actions/workflows/ci.yml/badge.svg)](https://github.com/margogediv/margodiv-ui-kit-master/actions/workflows/ci.yml)
[![Storybook](https://img.shields.io/badge/Storybook-live-ff4785)](https://6a15d09a7a27f6b681439731-hyrlargfac.chromatic.com)

**[Live Storybook →](https://6a15d09a7a27f6b681439731-hyrlargfac.chromatic.com)**

## Features

- **TypeScript-first** — full type definitions included
- **Accessible** — ARIA attributes, keyboard navigation, screen-reader support (WCAG 2.1)
- **Design tokens** — consistent color palette, spacing, and sizing scale with light/dark variants
- **Storybook** — interactive documentation, controls, and accessibility auditing via `addon-a11y`

## Installation

```bash
npm install margodiv-ui-kit
```

### Peer dependencies

```bash
npm install react react-dom
```

## Usage

```tsx
import { components, icons, variables } from "margodiv-ui-kit";

const { Button, Switch, Rate } = components;
const { Star, Loading } = icons;
```

## Components

### Button

```tsx
<Button type="primary" size="large" onClick={handleClick}>
  Save changes
</Button>

<Button type="primary" loading>Saving…</Button>
<Button danger>Delete</Button>
<Button ghost type="primary">Ghost</Button>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `"primary" \| "default" \| "dashed" \| "text" \| "link"` | `"default"` | Visual variant |
| `size` | `"large" \| "default" \| "small"` | `"default"` | Button size |
| `shape` | `"default" \| "round" \| "circle"` | `"default"` | Border shape |
| `danger` | `boolean` | `false` | Error/danger color scheme |
| `ghost` | `boolean` | `false` | Transparent background |
| `loading` | `boolean` | `false` | Shows spinner; sets `aria-busy` and disables the button |
| `block` | `boolean` | `false` | Full-width |
| `disabled` | `boolean` | `false` | Disables interaction |
| `htmlType` | `"button" \| "submit" \| "reset"` | `"button"` | Native button `type` attribute |

### Switch

```tsx
<Switch size="default" label="Dark mode" />
<Switch size="small" defaultChecked />
<Switch size="default" disabled />
<Switch size="default" loading />
<Switch size="default" aria-label="Toggle notifications" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `"default" \| "small"` | — | **Required.** Toggle size |
| `checked` | `boolean` | — | Controlled checked state |
| `defaultChecked` | `boolean` | — | Initial uncontrolled state |
| `disabled` | `boolean` | — | Disables interaction |
| `loading` | `boolean` | — | Shows spinner |
| `label` | `string` | — | Visible text label |
| `aria-label` | `string` | — | Accessible label for screen readers (use when no visible `label`) |

### Rate

```tsx
<Rate defaultValue={3} />
<Rate defaultValue={2.5} allowHalf />
<Rate count={10} onChange={(value) => console.log(value)} />
<Rate disabled defaultValue={4} />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `count` | `number` | `5` | Number of stars |
| `value` | `number` | — | Controlled rating value |
| `defaultValue` | `number` | `0` | Initial uncontrolled value |
| `allowHalf` | `boolean` | `false` | Enable half-star ratings |
| `allowClear` | `boolean` | `true` | Clear rating on re-click |
| `disabled` | `boolean` | `false` | Disables interaction and keyboard navigation |
| `onChange` | `(value: number) => void` | — | Rating change callback |
| `onHoverChange` | `(value: number \| undefined) => void` | — | Hover state callback |

#### Accessibility

The `Rate` component renders as `role="radiogroup"` with each star as `role="radio"`. Stars support keyboard interaction (`Enter` / `Space` to select) and are not focusable when `disabled`.

## Design Tokens

```ts
import { variables } from "margodiv-ui-kit";

const { colors, size } = variables;

// Brand colors (light / dark variants available)
colors.brand.primary.colorPrimary.light      // #1677FF
colors.brand.primary.colorPrimaryHover.light // #4096FF

// Semantic colors
colors.error.colorError.light               // #ff4d4f
colors.neutral.text.colorText.light         // rgba(0,0,0,0.88)

// Spacing scale (px values)
size.size.xxs  // 4
size.size.xs   // 8
size.size.sm   // 12
size.size.size // 16
size.size.md   // 20
size.size.lg   // 28

// Component heights
size.height.sm     // 22
size.height.height // 32  (default)
size.height.lg     // 40  (large)

// Border radius
size.radius.sm     // 4
size.radius.normal // 6
size.radius.lg     // 8
```

## Development

```bash
npm install
npm run storybook    # interactive docs on :6006
npm test             # run component tests
npm run build        # build library to /dist
```

## Testing

Tests use [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/):

```bash
npm test             # single run (CI mode)
npm run test:watch   # watch mode for development
```

## Storybook

All components are documented in Storybook with:
- **Controls** — interactive prop editor
- **Autodocs** — generated API tables
- **a11y addon** — per-story accessibility audit (WCAG violations highlighted)
- **Interactions** — event-driven story testing

```bash
npm run storybook
```
