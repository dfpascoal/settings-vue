// desafio-settings-vue/src/components/settings/SettingsSidebar.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3'
import SettingsSidebar from './SettingsSidebar.vue'

const meta: Meta<typeof SettingsSidebar> = {
  title: 'Settings/SettingsSidebar',
  component: SettingsSidebar,
  tags: ['autodocs'],
  decorators: [
    (story) => ({
      components: { story },
      template: '<div style="height: 600px;"><story /></div>',
    }),
  ],
}

export default meta
type Story = StoryObj<typeof SettingsSidebar>

export const Default: Story = {
  render: () => ({
    components: { SettingsSidebar },
    template: '<SettingsSidebar />',
  }),
}

export const DarkMode: Story = {
  render: () => ({
    components: { SettingsSidebar },
    template: '<div class="dark-mode"><SettingsSidebar /></div>',
  }),
}

export const Mobile: Story = {
  render: () => ({
    components: { SettingsSidebar },
    template: '<SettingsSidebar />',
  }),
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}
