import CoreAssistant from '@sketch-hq/sketch-core-assistant'
import { AssistantPackage } from '@sketch-hq/sketch-assistant-types'

const assistant: AssistantPackage = [
  CoreAssistant,
  async () => {
    return {
      name: 'mistica-libraries-maintenance',
      rules: [],
      config: {
        rules: {
          '@sketch-hq/sketch-core-assistant/library-symbols-allowed-libraries': {
            "active": true,
            "libraries": ["Android_Novum_Library", "iOS_Novum_Library", "Movistar_Brand_Library"]
          },
          '@sketch-hq/sketch-core-assistant/text-styles-no-dirty': {
            "active": true,
          },
          '@sketch-hq/sketch-core-assistant/fills-no-disabled': {
            "active": true,
          },
          '@sketch-hq/sketch-core-assistant/borders-no-disabled': {
            "active": true,
          },
          '@sketch-hq/sketch-core-assistant/inner-shadows-no-disabled': {
            "active": true,
          },
          '@sketch-hq/sketch-core-assistant/shadows-no-disabled': {
            "active": true,
          },
          '@sketch-hq/sketch-core-assistant/library-layer-styles-allowed-libraries': {
            "active": true,
            "libraries": ["Movistar_Brand_Library"]
          },
          '@sketch-hq/sketch-core-assistant/library-text-styles-allowed-libraries': {
            "active": true,
            "libraries": ["Movistar_Brand_Library"]
          },
          '@sketch-hq/sketch-core-assistant/layers-no-hidden': {
            "active": true,
          },
          '@sketch-hq/sketch-core-assistant/symbols-no-detached': {
            "active": true,
          },
        },
      },
    }
  },
]

export default assistant