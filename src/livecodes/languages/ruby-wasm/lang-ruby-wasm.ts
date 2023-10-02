import type { LanguageSpecs } from '../../models';
import { rubyWasmScriptUrl } from '../../vendors';

export const rubyWasm: LanguageSpecs = {
  name: 'ruby-wasm',
  title: 'Ruby (Wasm)',
  compiler: {
    factory: () => async (code) => code,
    scripts: ({ baseUrl }) => [
      rubyWasmScriptUrl,
      baseUrl + '{{hash:lang-ruby-wasm-script-esm.js}}',
    ],
    inlineScript: `
      livecodes.rubyWasm = livecodes.rubyWasm || { stdlibLoaded: false };
      addEventListener('load', () => livecodes.rubyWasm.run?.());
    `,
    liveReload: true,
    scriptType: 'text/ruby-wasm',
    compiledCodeLanguage: 'ruby',
  },
  extensions: ['wasm.rb'],
  editor: 'script',
  editorLanguage: 'ruby',
  largeDownload: true,
};
