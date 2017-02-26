## Bloc-Jams-Angular

Bloc Jams is main part of Bloc’s curriculum for teaching Front-end development. The application's main purpose is to allow users to search for albums in their library and play music. This is “pure" front-end application and it looks cool.

![bloc_jams_angular_home_page](https://cloud.githubusercontent.com/assets/13839425/23342945/9007b22c-fc63-11e6-8b1b-1b47325fed90.png)

![bloc_jams_angular_albums](https://cloud.githubusercontent.com/assets/13839425/23342950/9c4ed678-fc63-11e6-8b38-187d333e5553.png)

![bloc_jams_angular_player](https://cloud.githubusercontent.com/assets/13839425/23342953/a4940a10-fc63-11e6-8eb9-9360936c4933.png)


## Installation

Start by cloning the repository:

```
$ git clone https://github.com/Alexashooo/bloc-jams-angular.git
```

The project uses Grunt to run tasks in development.

Install the project dependencies by running:

```
$ npm install
```

## Run the Application

Run the application using the Gruntfile's `default` task:

```
$ grunt
```

The default task runs a simple server on port 3000. To view it in a any browser, go to [http://localhost:3000](http://localhost:3000).


## Grunt plugins

A list of the Grunt plugins in this application.

#### Watch

[Grunt watch](https://github.com/gruntjs/grunt-contrib-watch) watches for changes to file content and then executes Grunt tasks when a change is detected.

#### Copy

[Grunt copy](https://github.com/gruntjs/grunt-contrib-copy) copies files from our development folders and puts them in the folder that will be served with the frontend of your application.

#### Clean

[Grunt clean](https://github.com/gruntjs/grunt-contrib-clean) "cleans" or removes all files in your distribution folder (`dist`) so that logic in your stylesheets, templates, or scripts isn't accidentally overridden by previous code in the directory.

#### Hapi

[Grunt Hapi](https://github.com/athieriot/grunt-hapi) runs a server using [`HapiJS`](http://hapijs.com/). Happy is a Node web application framework with robust configuration options.
