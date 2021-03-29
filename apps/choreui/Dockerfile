FROM node:12.2.0 as build
RUN npm install -g @angular/cli
COPY package.json package-lock.json ./app/
WORKDIR /app
RUN npm install
COPY . /app
RUN npm run build

FROM nginx:1.19.8-alpine as dist
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/choreui /usr/share/nginx/html
