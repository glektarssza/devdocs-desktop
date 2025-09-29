// @ts-check

//-- NPM Packages
import {defineConfig} from 'eslint/config';
import eslintJS from '@eslint/js';
import globals from 'globals';
import prettierConfig from 'eslint-config-prettier';

export default defineConfig([
    {
        languageOptions: {
            sourceType: 'commonjs',
            globals: {
                ...globals.browser,
                ...globals.node
            }
        }
    },
    eslintJS.configs.recommended,
    prettierConfig
]);
