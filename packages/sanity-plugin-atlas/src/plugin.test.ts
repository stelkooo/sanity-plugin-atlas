import { describe, expect, it } from 'vitest';
import { AtlasPlugin } from './plugin';

describe('AtlasPlugin', () => {
  it('exports the plugin as a function', () => {
    expect(typeof AtlasPlugin).toBe('function');
  });
});
