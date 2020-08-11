#!/usr/bin/env sh

# abort on errors
set -e

# build 후 build 폴더로 이동
yarn build:gh-pages
cd build

# gh-pages의 git 이력 가져오기
git clone -b gh-pages https://github.com/est-react-study/postman-junil
cp -rf postman-junil/.git ./.git
rm -rf postman-junil

# 커밋
git add .
git commit -m "$*"

# gh-pages 브랜치를 푸쉬
git push origin gh-pages

# 작업 폴더로 돌아오기
cd -