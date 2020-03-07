FROM alpine
LABEL maintainer="extension@frp.utn.edu.ar"
RUN apk update
RUN apk upgrade
RUN apk add --update nginx nodejs nodejs-npm

RUN mkdir -p /tmp/nginx/app
RUN mkdir -p /var/log/nginx
RUN mkdir -p /var/www/html

RUN chown nginx:nginx /var/www/html

COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

WORKDIR /tmp/nginx/app

COPY package.json .
RUN npm install
COPY . .
RUN npm run build

RUN cp -r dist/* /var/www/html
CMD [ "nginx", "-g", "daemon off;" ]
EXPOSE 8080