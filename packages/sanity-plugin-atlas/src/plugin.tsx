import { definePlugin } from 'sanity';
import { AtlasView } from './components/atlas-view';

// biome-ignore lint/suspicious/noEmptyInterface: will be populated with config options
export interface AtlasPluginConfig {}

const _factory = definePlugin<AtlasPluginConfig>(() => ({
  name: 'sanity-plugin-atlas',
  tools: [
    {
      name: 'atlas',
      title: 'Atlas',
      component: AtlasView,
    },
  ],
}));

export const AtlasPlugin = (config: AtlasPluginConfig = {}) => _factory(config);
