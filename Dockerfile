FROM nginx:latest

COPY site /usr/share/nginx/html

WORKDIR /usr/share/nginx/html
