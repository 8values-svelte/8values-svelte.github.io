import preprocess from 'svelte-preprocess';
import staticAdapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: staticAdapter({}),
    paths: {
      base: '',
    },
    /*
    paths: {
      base: dev ? '' : '/8values-svelte' //TODO: this doesn't work...for some reason
    },
     */
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte'
  }
};

export default config;
