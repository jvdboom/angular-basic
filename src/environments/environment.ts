// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  debug:true,
  urlDbstoredprocedure:"http://172.28.88.12:8088/cosmos-ccm/dbstoredprocedure/",
  urlDbstandard: "http://172.28.88.12:8088/cosmos-ccm/dbstandard/",
  
  baseUrl: 'https://newsapi.org',
  newsApiKey:"05fc46d3d62948458978732d73c4c320",
  newsDomain: 'https://newsapi.org'
};
