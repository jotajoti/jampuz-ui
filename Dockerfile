FROM nginx:stable-alpine

RUN rm -rf /usr/share/nginx/html/50x.html
RUN rm -rf /etc/nginx/conf.d/default.conf

COPY .env /opt
COPY docker/env.sh /docker-entrypoint.d/99-env.sh
COPY docker/nginx.conf /etc/nginx/conf.d
COPY dist /usr/share/nginx/html
