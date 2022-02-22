FROM harbor-registry.inner.youdao.com/devops/nginx:latest
ARG homeworkRoot=/usr/share/nginx/html
COPY dist/ $homeworkRoot/
