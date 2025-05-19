FROM node:14 as build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /urs/src/app/build /usr/share/nginx/html

COPY nginx.conf /ect/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]