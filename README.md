# Kastellix

A modern, accessible, and highly customizable Vue 3 UI component library built with TypeScript and Tailwind CSS. Kastellix provides a set of high-quality components designed to build consistent and beautiful user interfaces with ease.

## Features

- **Vue 3 & TypeScript**: Built from the ground up for the modern Vue ecosystem.
- **Tailwind CSS**: Leverages the power of Tailwind for easy styling and customization.
- **Accessible**: Focuses on accessibility to ensure your apps are usable by everyone.
- **Tree-shakable**: Import only the components you need to keep your bundle size small.
- **Developer Friendly**: Clean API and comprehensive TypeScript definitions.

## Installation

```bash
npm install kastellix
```

## Usage

### Global Registration

In your `main.ts` or `main.js`:

```typescript
import { createApp } from 'vue'
import Kastellix from 'kastellix'
import 'kastellix/dist/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(Kastellix)
app.mount('#app')
```

### Individual Component Import

You can import components individually to benefit from tree-shaking:

```vue
<script setup>
import { Button, Input } from 'kastellix'
// Style must be imported once
import 'kastellix/dist/style.css'
</script>

<template>
  <Button>Click Me</Button>
  <Input placeholder="Type something..." />
</template>
```

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build the library for production
- `npm run lint`: Run ESLint
- `npm run format`: Format code with Prettier

## Available Components

### Form & Input
- `Button`, `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `RadioGroup`, `Switch`, `FormField`, `DatePicker`, `NumberInput`, `Combobox`

### Feedback & Status
- `Badge`, `Alert`, `Spinner`, `Skeleton`, `Toaster`, `Progress`, `Tooltip`

### Layout & Structure
- `Card`, `Divider`, `Stack`, `Grid`, `Container`, `Spacer`

### Navigation & Disclosure
- `Tabs`, `TabList`, `Tab`, `TabPanel`, `Accordion`, `AccordionItem`, `Breadcrumb`, `BreadcrumbItem`, `Pagination`, `Dropdown`, `DropdownItem`

### Overlay & Modal
- `Modal`, `Drawer`, `Popover`

### Data Display
- `Avatar`, `Tag`, `Table`, `EmptyState`, `Kbd`, `Code`

## Documentation & Developer Experience

- Component quick-start overview: `docs/components-overview.md`
- AI change guidelines for future agents: `AGENTS.md`

Recommended onboarding path (under 10 minutes):
1. Read `docs/components-overview.md`
2. Open `src/pages/Showcase.vue` to see components together
3. Copy the provided state examples (`default`, `focus`, `disabled`, `error`, `loading`) into your feature page

## Development

### Project setup
```bash
npm install
```

### Development Scripts
```bash
npm run dev     # Compiles and hot-reloads
npm run build   # Compiles and minifies for production
npm run lint    # Lints files
npm run format  # Formats files with Prettier
```

## License

[MIT](LICENSE)
