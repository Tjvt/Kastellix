<script setup lang="ts">
import { ref } from 'vue';
import {
  Button,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  FormField,
  Badge,
  Alert,
  Spinner,
  Skeleton,
  Toaster,
  Progress,
  Tooltip,
  Card,
  Divider,
  Stack,
  Grid,
  Container,
  Spacer,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  Accordion,
  AccordionItem,
  Breadcrumb,
  BreadcrumbItem,
  Pagination,
  Dropdown,
  DropdownItem,
  Modal,
  Drawer,
  Popover,
  Avatar,
  Tag,
  Table,
  EmptyState,
  Kbd,
  Code,
  useToast
} from '../components';

const { toast } = useToast();

// State for interactive components
const inputText = ref('');
const textareaText = ref('');
const selectValue = ref('');
const checkboxValue = ref(false);
const radioValue = ref('one');
const switchValue = ref(false);
const currentPage = ref(1);
const isModalOpen = ref(false);
const isDrawerOpen = ref(false);

const tableColumns = [
  { key: 'id', label: 'ID', sortable: true },
  { key: 'name', label: 'Name', sortable: true },
  { key: 'role', label: 'Role' }
];

const tableData = [
  { id: 1, name: 'John Doe', role: 'Admin' },
  { id: 2, name: 'Jane Smith', role: 'User' },
  { id: 3, name: 'Bob Johnson', role: 'Editor' }
];

const breadcrumbItems = [
  { label: 'Home', href: '#' },
  { label: 'Components', href: '#' },
  { label: 'Showcase', active: true }
];

const showToast = (variant: 'success' | 'error' | 'info' | 'warning') => {
  toast({
    title: `${variant.charAt(0).toUpperCase() + variant.slice(1)} Notification`,
    description: `This is a ${variant} toast message.`,
    variant
  });
};
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
    <Container>
      <Stack direction="column" gap="8">
        <header>
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2">Component Showcase</h1>
          <p class="text-gray-600 dark:text-gray-400 text-lg">Every component used once for demonstration.</p>
          <Divider class="mt-4" />
        </header>

        <!-- Form & Input -->
        <section>
          <h2 class="text-2xl font-semibold mb-4 dark:text-white">Form & Input</h2>
          <Card>
            <Stack direction="column" gap="6">
              <Grid :cols="2" gap="4">
                <FormField label="Standard Button" hint="Different variants of buttons">
                  <Stack direction="row" gap="2">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="destructive">Delete</Button>
                  </Stack>
                </FormField>

                <FormField label="Button States">
                  <Stack direction="row" gap="2">
                    <Button loading>Loading</Button>
                    <Button disabled>Disabled</Button>
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                  </Stack>
                </FormField>
              </Grid>

              <Grid :cols="2" gap="4">
                <Input
                  v-model="inputText"
                  label="Text Input"
                  placeholder="Type something..."
                  helper-text="This is helper text"
                />
                <Select
                  v-model="selectValue"
                  label="Select Dropdown"
                  placeholder="Select an option"
                  :options="[
                    { label: 'Option 1', value: '1' },
                    { label: 'Option 2', value: '2' }
                  ]"
                />
              </Grid>

              <Textarea
                v-model="textareaText"
                label="Textarea"
                placeholder="Write a bio..."
                auto-resize
              />

              <Stack direction="row" gap="8" align="center">
                <Checkbox v-model="checkboxValue" label="Accept Terms" />
                <Switch v-model="switchValue" label="Enable Notifications" />
                <RadioGroup v-model="radioValue" label="Choose one">
                  <Stack direction="row" gap="4">
                    <Radio value="one" label="One" />
                    <Radio value="two" label="Two" />
                  </Stack>
                </RadioGroup>
              </Stack>
            </Stack>
          </Card>
        </section>

        <!-- Feedback & Status -->
        <section>
          <h2 class="text-2xl font-semibold mb-4 dark:text-white">Feedback & Status</h2>
          <Card>
            <Stack direction="column" gap="6">
              <Stack direction="row" gap="2" wrap>
                <Badge variant="default">Default</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="error">Error</Badge>
                <Badge variant="info">Info</Badge>
              </Stack>

              <Alert title="Success Alert" variant="success" dismissable>
                Your changes have been saved successfully!
              </Alert>

              <Grid :cols="2" gap="4">
                <Stack direction="column" gap="4">
                  <div class="flex items-center gap-4">
                    <Spinner size="md" />
                    <span class="dark:text-white">Loading...</span>
                  </div>
                  <Progress :model-value="65" animated />
                </Stack>
                <div class="space-y-4">
                  <Tooltip content="This is a tooltip" placement="top">
                    <Button variant="secondary">Hover me for Tooltip</Button>
                  </Tooltip>
                  <Stack direction="row" gap="2">
                    <Button size="sm" @click="showToast('success')">Toast Success</Button>
                    <Button size="sm" @click="showToast('error')">Toast Error</Button>
                  </Stack>
                </div>
              </Grid>

              <div class="space-y-2">
                <Skeleton variant="text" class="w-1/2" />
                <div class="flex gap-4">
                  <Skeleton variant="avatar" />
                  <Skeleton variant="card" class="flex-1" />
                </div>
              </div>
            </Stack>
          </Card>
        </section>

        <!-- Navigation -->
        <section>
          <h2 class="text-2xl font-semibold mb-4 dark:text-white">Navigation & Disclosure</h2>
          <Card>
            <Stack direction="column" gap="6">
              <Breadcrumb :items="breadcrumbItems" />

              <Tabs>
                <TabList>
                  <Tab>Overview</Tab>
                  <Tab>Settings</Tab>
                </TabList>
                <TabPanel>
                  <p class="p-4 dark:text-gray-300">Tab Content: Overview</p>
                </TabPanel>
                <TabPanel>
                  <p class="p-4 dark:text-gray-300">Tab Content: Settings</p>
                </TabPanel>
              </Tabs>

              <Accordion>
                <AccordionItem title="What is this?">
                  This is a custom built Vue 3 component library.
                </AccordionItem>
                <AccordionItem title="Can I use it?">
                  Yes, it's open source!
                </AccordionItem>
              </Accordion>

              <div class="flex justify-between items-center">
                <Pagination
                  v-model:current-page="currentPage"
                  :total-pages="10"
                />
                <Dropdown label="Menu Actions">
                  <DropdownItem>Edit Profile</DropdownItem>
                  <DropdownItem>Account Settings</DropdownItem>
                  <Divider />
                  <DropdownItem class="text-red-500">Logout</DropdownItem>
                </Dropdown>
              </div>
            </Stack>
          </Card>
        </section>

        <!-- Overlays -->
        <section>
          <h2 class="text-2xl font-semibold mb-4 dark:text-white">Overlays</h2>
          <Card>
            <Stack direction="row" gap="4">
              <Button @click="isModalOpen = true">Open Modal</Button>
              <Button variant="secondary" @click="isDrawerOpen = true">Open Drawer</Button>
              <Popover>
                <template #trigger>
                  <Button variant="ghost">Open Popover</Button>
                </template>
                <div class="p-4 w-64">
                  <h3 class="font-bold mb-2 dark:text-white">Popover Content</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400">This is a floating popover anchored to the button.</p>
                </div>
              </Popover>
            </Stack>

            <Modal v-model="isModalOpen" title="Sample Modal">
              <p class="dark:text-gray-300">This is a modal dialog with a backdrop and focus trap.</p>
              <template #footer>
                <Button variant="secondary" @click="isModalOpen = false">Close</Button>
                <Button @click="isModalOpen = false">Confirm</Button>
              </template>
            </Modal>

            <Drawer v-model="isDrawerOpen" title="Settings Drawer" position="right">
              <div class="p-4 space-y-4">
                <p class="dark:text-gray-300">Slide-in panel for extra content or settings.</p>
                <Divider />
                <Button class="w-full" @click="isDrawerOpen = false">Close</Button>
              </div>
            </Drawer>
          </Card>
        </section>

        <!-- Data Display -->
        <section>
          <h2 class="text-2xl font-semibold mb-4 dark:text-white">Data Display</h2>
          <Card>
            <Stack direction="column" gap="6">
              <div class="flex items-center gap-4">
                <Avatar name="John Doe" size="lg" status="online" />
                <Avatar initials="JD" size="lg" status="busy" />
                <Avatar src="https://i.pravatar.cc/150?u=1" size="lg" />
              </div>

              <div class="flex gap-2">
                <Tag>Vue.js</Tag>
                <Tag color="blue" closable>Tailwind</Tag>
                <Tag color="green">TypeScript</Tag>
              </div>

              <Table :columns="tableColumns" :data="tableData" />

              <div class="flex items-center gap-4">
                <span class="dark:text-white">Press <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd> to search</span>
                <Code code="npm install kastellix" />
              </div>

              <EmptyState
                title="No items found"
                description="Try adjusting your search filters."
              >
                <template #action>
                  <Button size="sm">Clear Filters</Button>
                </template>
              </EmptyState>
            </Stack>
          </Card>
        </section>

        <!-- Layout Helpers -->
        <section>
          <h2 class="text-2xl font-semibold mb-4 dark:text-white">Layout Helpers</h2>
          <Card class="bg-gray-100 dark:bg-gray-800 border-dashed border-2">
            <Stack direction="column" gap="4">
              <div class="p-4 bg-white dark:bg-gray-700 rounded shadow">Stack Item 1</div>
              <Spacer size="8" />
              <div class="p-4 bg-white dark:bg-gray-700 rounded shadow">Stack Item 2 (after Spacer)</div>
              <Grid :cols="3" gap="4">
                <div class="p-4 bg-blue-100 dark:bg-blue-900 rounded">Grid 1</div>
                <div class="p-4 bg-blue-100 dark:bg-blue-900 rounded">Grid 2</div>
                <div class="p-4 bg-blue-100 dark:bg-blue-900 rounded">Grid 3</div>
              </Grid>
            </Stack>
          </Card>
        </section>
      </Stack>
    </Container>

    <!-- Global Toaster -->
    <Toaster />
  </div>
</template>
