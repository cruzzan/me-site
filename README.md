This is a site, all about how my life got flipped-turned upside down...
====

Install
----

**Requirements**

* [Docker 19.03+](https://github.com/docker/docker-ce/releases/tag/v19.03.3-beta1)
* [Docker compose](https://docs.docker.com/compose/install)
* [Node.js and npm](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/en/docs/install)
* [Make](https://en.wikipedia.org/wiki/Make_(software))

**Build and run**

```
# Install JS dependencies
$ yarn install

# Build assets and copy things to dist folder
$ npm run build

# Log into docker registry
$ docker login

# Build the docker image
$ make build

# Start the image using compose
$ make compose-dev
```

**Dev**

Running this project in dev mode will expose port 8080 
and also creates a volume connecting the host directory
to the web directory in the container
