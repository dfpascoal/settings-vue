import type { Meta, StoryObj } from '@storybook/vue3'
import SettingsSidebar from './SettingsSidebar.vue'

const meta = {
  title: 'Settings/SettingsSidebar',
  component: SettingsSidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => ({
      components: { Story },
      template: '<div style="height: 600px;"><Story /></div>',
    }),
  ],
  render: (args) => ({
    components: { SettingsSidebar },
    setup: () => ({ args }),
    template: '<SettingsSidebar v-bind="args" />',
  }),
} satisfies Meta<typeof SettingsSidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
  },
}

export const DarkMode: Story = {
  decorators: [
    (Story) => ({
      components: { Story },
      template: '<div class="dark" style="height: 600px;"><Story /></div>',
    }),
  ],
  args: {
  },
}

export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
  args: {
  },
}