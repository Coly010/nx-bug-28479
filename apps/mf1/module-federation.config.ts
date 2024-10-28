import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'mf1',
  exposes: {
    './Routes': 'apps/mf1/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
