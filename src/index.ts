import {
  AssistantPackage,
  RuleDefinition,
} from '@sketch-hq/sketch-assistant-types'

const textNoLoremIpsum: RuleDefinition = {
  rule: async (context) => {
    const { utils } = context
  // Iterate
  for (const layer of utils.objects.text) {
    const value = layer.attributedString.string
    // Test
    if (value.toLowerCase().includes('lorem ipsum')) {
      // Report
      utils.report(`Layer “${layer.name}” contains “lorem ipsum”`, layer)
    }
  }
  },
  name: 'sketch-assistant-template/text-no-lorem-ipsum',
  title: 'Text should not contain lorem ipsum',
  description:
    'Reports a violation when text layers contain lorem ipsum placeholder',
}

const assistant: AssistantPackage = async () => {
  return {
    name: 'sketch-assistant-template',
    rules: [textNoLoremIpsum],
    config: {
      rules: {
        'sketch-assistant-template/text-no-lorem-ipsum': {
          active: true,
        },
      },
    },
  }
}

export default assistant