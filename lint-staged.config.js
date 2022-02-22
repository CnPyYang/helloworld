const config = {
  '*.js': ['eslint', 'prettier --write', 'git add'],
  '*.ts': ['eslint', 'prettier --write', 'git add'],
  'src/**/*.json': [
    'jsonlint',
    'prettier --write',
    'fixjson --write',
    'git add',
  ],
  '*.vue': ['eslint', 'git add'],
  'src/**/*.{css,scss}': ['stylelint', 'prettier --write', 'git add'],
  '*.md': ['prettier --write', 'git add'],
  '*.jsx?': ['eslint', 'prettier --write', 'git add'],
  '*.tsx?': ['eslint', 'prettier --write', 'git add'],
}

module.exports = config
