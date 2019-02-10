FROM node:10.7
ARG API_URL

ENV APP_ROOT /src

RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN npm install
RUN apiUrl=$API_URL npm run build

ENV HOST 0.0.0.0
ENTRYPOINT apiURL=$API_URL npm run start
EXPOSE 3000
