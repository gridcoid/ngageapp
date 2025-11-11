FROM nginx:alpine
COPY static.nginx.conf /etc/nginx/conf.d/default.conf
COPY dist /usr/share/nginx/html
