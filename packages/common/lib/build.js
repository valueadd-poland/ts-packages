#!/usr/bin/env node

const { exec } = require('child_process');
const { paramCase, pascalCase } = require('change-case');

function execPromise(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
}

const build = async libName => {
  await execPromise('rm -rf ./dist');
  await execPromise(
    'tsc -p tsconfig.lib.json --emitDeclarationOnly --declaration --declarationDir dist/lib'
  );
  await execPromise(
    'tsc -p tsconfig.lib.json --module es2015 --target es2015 --outDir dist/esm2015'
  );
  await execPromise('tsc -p tsconfig.lib.json --module es2015 --target es5 --outDir dist/esm5');
  await execPromise('tsc -p tsconfig.lib.json --module commonjs --target es2015 --outDir dist/cjs');
  await execPromise(
    `rollup dist/esm5/index.js --format umd --name ${pascalCase(
      libName
    )} --file dist/umd/${paramCase(libName)}.js`
  );
  const libFileName = paramCase(libName);
  await execPromise(
    `cd dist/umd && uglifyjs --compress --mangle --comments -o ${libFileName}.min.js -- ${libFileName}.js && gzip ${libFileName}.min.js -c > ${libFileName}.min.js.gz`
  );
};

build(process.argv[2]).catch(e => {
  console.error(e);
  process.exit(1);
});
