// See all configuration options: https://remotion.dev/docs/config
// Each option also is available as a CLI flag: https://remotion.dev/docs/cli

// Note: When using the Node.JS APIs, the config file doesn't apply. Instead, pass options directly to the APIs

import { Config } from "@remotion/cli/config";
import { enableTailwind } from '@remotion/tailwind-v4';

Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);
Config.overrideWebpackConfig(enableTailwind);

// Config.setBrowserExecutable("~/AppData/Local/Google/Chrome/Application/chrome.exe");
// Config.setBrowserExecutable("~/AppData/Local/Google/Chrome/Application/chrome");
// Config.setBrowserExecutable("C:\\Users\\liuchuanzong\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe");
// Config.setBrowserExecutable("C:\\Users\\liuchuanzong\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe");


// F:\workspace\github\article-to-video-remotion\node_modules\.remotion\chrome-headless-shell\win64\chrome-headless-shell-win64\chrome-headless-shell.exe
