# Worpress plugins - Block development

## Introduction
Create Block is an officially supported tool for scaffolding a WordPress plugin that registers a block. It generates PHP, JS, CSS code, and everything you need to start the project. It also integrates a modern build setup with no configuration.

## Installation
```sh
npm install @wordpress/components --save
```

## Generate a block
Install create-block.
```sh
npx @wordpress/create-block@latest todo-list
cd todo-list
npm start
```

## Run in dev mode
Use **wp-env** for development mode. Go to root dir of the plugin, and run:
```sh
wp-env start
```


## Reference
1. [Wordpress block editor](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/)
2. [wp-env](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/)
3. [Wordpress components](https://developer.wordpress.org/block-editor/reference-guides/components/)
