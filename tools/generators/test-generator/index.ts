import {
  formatFiles,
  generateFiles,
  joinPathFragments,
  names,
  Tree,
} from '@nrwl/devkit';


export default async function (host: Tree, schema: any) {
  generateFiles(
    host,

    joinPathFragments(__dirname, './files'),

    './_generated',

    {
      name: schema.name,
      nameTitle: names(schema.name).className,
      // https://github.com/nrwl/nx/issues/11332
      tmpl: ""
    }
  );

  await formatFiles(host);
}
