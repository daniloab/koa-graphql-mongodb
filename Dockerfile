FROM node:11.12-alpine
LABEL maintainer="Danilo <daniloassis.ti@gmail.com>"

# Install now
RUN npm install -g now

RUN mkdir -p /usr/src/graphql-app
WORKDIR /usr/src/graphql-app
COPY src/. /usr/src/graphql-app/

EXPOSE 80 443

CMD ["now"]