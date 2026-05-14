# Kastellix

A modern, accessible Vue 3 UI component library built with TypeScript and Tailwind CSS.

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

### Individual Component Import (Planned)

Currently, the library supports global installation. Individual imports are being optimized.

## Available Components

- **Form & Input**: Button, Input, Textarea, Select, Checkbox, Radio, RadioGroup, Switch, FormField, DatePicker, NumberInput, Combobox
- **Feedback & Status**: Badge, Alert, Spinner, Skeleton, Toaster, Progress, Tooltip
- **Layout & Structure**: Card, Divider, Stack, Grid, Container, Spacer
- **Navigation & Disclosure**: Tabs, Accordion, Breadcrumb, Pagination, Dropdown
- **Overlay & Modal**: Modal, Drawer, Popover
- **Data Display**: Avatar, Tag, Table, EmptyState, Kbd, Code

## Development

### Project setup
```bash
npm install
```

### Compiles and hot-reloads for development
```bash
npm run dev
```

### Compiles and minifies for production
```bash
npm run build
```

### Lints and fixes files
```bash
npm run lint
```

## License
[MIT](LICENSE)
