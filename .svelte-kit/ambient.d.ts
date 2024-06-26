
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const NVM_INC: string;
	export const MANPATH: string;
	export const TERM_PROGRAM: string;
	export const JAVA_LD_LIBRARY_PATH: string;
	export const NODE: string;
	export const INIT_CWD: string;
	export const _P9K_TTY: string;
	export const NVM_CD_FLAGS: string;
	export const GEM_HOME: string;
	export const TERM: string;
	export const SHELL: string;
	export const TMPDIR: string;
	export const HOMEBREW_REPOSITORY: string;
	export const npm_config_global_prefix: string;
	export const CONDA_SHLVL: string;
	export const TERM_PROGRAM_VERSION: string;
	export const CONDA_PROMPT_MODIFIER: string;
	export const ZDOTDIR: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const MallocNanoZone: string;
	export const FIG_NEW_SESSION: string;
	export const COLOR: string;
	export const TERM_SESSION_ID: string;
	export const npm_config_noproxy: string;
	export const npm_config_local_prefix: string;
	export const ZSH: string;
	export const PNPM_HOME: string;
	export const USER: string;
	export const NVM_DIR: string;
	export const COMMAND_MODE: string;
	export const npm_config_globalconfig: string;
	export const CW_NEW_SESSION: string;
	export const CONDA_EXE: string;
	export const SSH_AUTH_SOCK: string;
	export const Q_SET_PARENT_CHECK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_execpath: string;
	export const DENO_INSTALL: string;
	export const PAGER: string;
	export const _CE_CONDA: string;
	export const LSCOLORS: string;
	export const PATH: string;
	export const npm_package_json: string;
	export const _: string;
	export const XML_CATALOG_FILES: string;
	export const npm_config_userconfig: string;
	export const npm_config_init_module: string;
	export const __CFBundleIdentifier: string;
	export const USER_ZDOTDIR: string;
	export const SHELL_PID: string;
	export const CONDA_PREFIX: string;
	export const npm_command: string;
	export const TTY: string;
	export const PWD: string;
	export const VSCODE_NONCE: string;
	export const JAVA_HOME: string;
	export const npm_lifecycle_event: string;
	export const P9K_SSH: string;
	export const EDITOR: string;
	export const npm_package_name: string;
	export const P9K_TTY: string;
	export const LANG: string;
	export const npm_config_npm_version: string;
	export const XPC_FLAGS: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const npm_config_node_gyp: string;
	export const npm_package_version: string;
	export const _CE_M: string;
	export const XPC_SERVICE_NAME: string;
	export const VSCODE_INJECTION: string;
	export const SHLVL: string;
	export const HOME: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const HOMEBREW_PREFIX: string;
	export const npm_config_cache: string;
	export const LOGNAME: string;
	export const LESS: string;
	export const CONDA_PYTHON_EXE: string;
	export const npm_lifecycle_script: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const JAVA_HOME_CONDA_BACKUP: string;
	export const PKG_CONFIG_PATH: string;
	export const NVM_BIN: string;
	export const CONDA_DEFAULT_ENV: string;
	export const BUN_INSTALL: string;
	export const npm_config_user_agent: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const INFOPATH: string;
	export const HOMEBREW_CELLAR: string;
	export const GIT_ASKPASS: string;
	export const _P9K_SSH_TTY: string;
	export const Q_TERM: string;
	export const QTERM_SESSION_ID: string;
	export const DISPLAY: string;
	export const JAVA_LD_LIBRARY_PATH_BACKUP: string;
	export const npm_node_execpath: string;
	export const npm_config_prefix: string;
	export const COLORTERM: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		NVM_INC: string;
		MANPATH: string;
		TERM_PROGRAM: string;
		JAVA_LD_LIBRARY_PATH: string;
		NODE: string;
		INIT_CWD: string;
		_P9K_TTY: string;
		NVM_CD_FLAGS: string;
		GEM_HOME: string;
		TERM: string;
		SHELL: string;
		TMPDIR: string;
		HOMEBREW_REPOSITORY: string;
		npm_config_global_prefix: string;
		CONDA_SHLVL: string;
		TERM_PROGRAM_VERSION: string;
		CONDA_PROMPT_MODIFIER: string;
		ZDOTDIR: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		MallocNanoZone: string;
		FIG_NEW_SESSION: string;
		COLOR: string;
		TERM_SESSION_ID: string;
		npm_config_noproxy: string;
		npm_config_local_prefix: string;
		ZSH: string;
		PNPM_HOME: string;
		USER: string;
		NVM_DIR: string;
		COMMAND_MODE: string;
		npm_config_globalconfig: string;
		CW_NEW_SESSION: string;
		CONDA_EXE: string;
		SSH_AUTH_SOCK: string;
		Q_SET_PARENT_CHECK: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_execpath: string;
		DENO_INSTALL: string;
		PAGER: string;
		_CE_CONDA: string;
		LSCOLORS: string;
		PATH: string;
		npm_package_json: string;
		_: string;
		XML_CATALOG_FILES: string;
		npm_config_userconfig: string;
		npm_config_init_module: string;
		__CFBundleIdentifier: string;
		USER_ZDOTDIR: string;
		SHELL_PID: string;
		CONDA_PREFIX: string;
		npm_command: string;
		TTY: string;
		PWD: string;
		VSCODE_NONCE: string;
		JAVA_HOME: string;
		npm_lifecycle_event: string;
		P9K_SSH: string;
		EDITOR: string;
		npm_package_name: string;
		P9K_TTY: string;
		LANG: string;
		npm_config_npm_version: string;
		XPC_FLAGS: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		npm_config_node_gyp: string;
		npm_package_version: string;
		_CE_M: string;
		XPC_SERVICE_NAME: string;
		VSCODE_INJECTION: string;
		SHLVL: string;
		HOME: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		HOMEBREW_PREFIX: string;
		npm_config_cache: string;
		LOGNAME: string;
		LESS: string;
		CONDA_PYTHON_EXE: string;
		npm_lifecycle_script: string;
		VSCODE_GIT_IPC_HANDLE: string;
		JAVA_HOME_CONDA_BACKUP: string;
		PKG_CONFIG_PATH: string;
		NVM_BIN: string;
		CONDA_DEFAULT_ENV: string;
		BUN_INSTALL: string;
		npm_config_user_agent: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		INFOPATH: string;
		HOMEBREW_CELLAR: string;
		GIT_ASKPASS: string;
		_P9K_SSH_TTY: string;
		Q_TERM: string;
		QTERM_SESSION_ID: string;
		DISPLAY: string;
		JAVA_LD_LIBRARY_PATH_BACKUP: string;
		npm_node_execpath: string;
		npm_config_prefix: string;
		COLORTERM: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
