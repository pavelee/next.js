import type { Meta, StoryObj } from '@storybook/react'
import { RootLayoutMissingTagsError } from './RootLayoutMissingTagsError'
import { withShadowPortal } from '../storybook/with-shadow-portal'

const meta: Meta<typeof RootLayoutMissingTagsError> = {
  title: 'RootLayoutMissingTagsError',
  component: RootLayoutMissingTagsError,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [withShadowPortal],
}

export default meta
type Story = StoryObj<typeof RootLayoutMissingTagsError>

export const Default: Story = {
  args: {
    missingTags: ['html', 'body'],
    versionInfo: {
      installed: '15.0.0',
      staleness: 'fresh',
    },
  },
}

export const SingleTag: Story = {
  args: {
    missingTags: ['html'],
    versionInfo: {
      installed: '15.0.0',
      staleness: 'fresh',
    },
  },
}
