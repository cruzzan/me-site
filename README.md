This is a site, all about how my life got flipped-turned upside down...
====

Install
----

**Requirements**

* [Docker](https://www.docker.com/get-started)
* [Docker compose](https://docs.docker.com/compose/install)
* [Node.js and npm](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/en/docs/install)
* [Make](https://en.wikipedia.org/wiki/Make_(software))

**Build and run**

```
$ yarn install
$ make build
$ make compose
```

**Dev**

Running this project in dev mode will expose port 8080 
and also creates a volume connecting the host directory
to the web directory in the container
