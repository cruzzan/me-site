# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio/career site built as a static website. It uses Gulp for build automation, LESS for CSS preprocessing, and is deployed via Docker using nginx as the web server.

## Build System

The project uses **Gulp** for the build pipeline with the following workflow:

1. Compiles LESS files from `site/less/` to CSS in `site/dist/`
2. Minifies CSS and places in `site/dist/min/`
3. Copies FontAwesome assets from node_modules to `site/dist/font-awesome/`
4. Copies Materialize CSS framework to `site/dist/materializecss/`
5. Minifies JavaScript from `site/js/main.js` to `site/dist/min/`

### Key Commands

**Building assets:**
```bash
# Install dependencies first
yarn install

# Build all assets (runs Gulp default task)
npm run build
# or
yarn build
```

**Docker operations:**
```bash
# Build multi-platform Docker image and push to registry
# Requires docker login first
TAG=v1.0.0 make build

# Run development container with live volume mount
make compose-dev
```

**Creating release tarball:**
```bash
# Builds assets and creates me-site.tar.gz containing site files
make pack-tar-ball
```

## Project Structure

```
site/
├── index.html          # Main HTML file
├── less/               # LESS source files
│   └── main.less
├── js/                 # JavaScript source files
│   └── main.js
├── dist/               # Build output (generated)
│   ├── *.css           # Compiled LESS
│   ├── min/            # Minified CSS and JS
│   ├── font-awesome/   # FontAwesome assets
│   └── materializecss/ # Materialize framework
└── resources/          # Static assets
    ├── favicon/
    └── img/
```

## Development Workflow

1. Source files are in `site/less/` and `site/js/`
2. Run `npm run build` to compile and minify assets
3. Output goes to `site/dist/` and `site/dist/min/`
4. For local testing: `make compose-dev` runs nginx on http://localhost:8080
5. The dev container mounts `site/` directory for live changes

## Docker Architecture

- Base image: `nginx:latest`
- Copies entire `site/` directory to `/usr/share/nginx/html`
- Multi-platform build support: linux/arm/v7 and linux/amd64
- Docker Compose config in `compose/docker-compose.yml` mounts local `site/` for development

## CI/CD

GitHub Actions workflow (`.github/workflows/release.yml`):
- Triggers on version tags (v*)
- Runs `yarn install`, `yarn run build`, and `make pack-tar-ball`
- Creates GitHub release with `me-site.tar.gz` artifact

## Important Notes

- The `site/dist/` directory is generated - edit source files in `site/less/` and `site/js/` instead
- Docker builds use buildx for multi-platform support
- Always run `npm run build` before Docker operations to ensure assets are current
- Development environment exposes port 8080 (docker-compose maps to nginx port 80)
