#!/usr/bin/env sh

set -e
npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com-chok8356:chok8356/store-of-medical-education-programs.git master:gh-pages

cd -
