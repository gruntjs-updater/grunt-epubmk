# grunt-epubmk

> The epub maker

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-epubmk --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-epubmk');
```

## The "epubmk" task

### Overview
In your project's Gruntfile, add a section named `epubmk` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({

    epubmk: {
      default: {
        options: {            
          src: 'epubsrc',
          textsrc: 'epubsrc/OEBPS',
          author: 'Author Name',
          title: 'Novel Title',
          identifier: 'isbn:000000100100100',
          language: 'it-IT'
        },
        files: [
            {
              src: [
                'epubsrc/OEBPS/chapter001.html',
                'epubsrc/OEBPS/chapter002.html',
                'epubsrc/OEBPS/chapter003.html'
                ...
              ]
            }
          ]
        } 
    },

});
```

### Options

#### options.src
Type: `String`
Default value: `epubsrc`

Main source folder containing all ebook files.

#### options.textsrc
Type: `String`
Default value: `epubsrc/OEBPS`

Subfolder containing xhtml files of chapters.

### Usage Examples
```js
grunt.initConfig({

    epubmk: {
      default: {
        options: {            
          src: 'epubsrc',
          textsrc: 'epubsrc/OEBPS',
          author: 'Author Name',
          title: 'Novel Title',
          identifier: 'isbn:000000100100100',
          language: 'it-IT'
        },
        files: [
            {
              src: [
                'epubsrc/OEBPS/chapter001.html',
                'epubsrc/OEBPS/chapter002.html',
                'epubsrc/OEBPS/chapter003.html'
                ...
              ]
            }
          ]
        } 
    },

    handlebars: {
        "templates/templates.js": ["templates/*.hbs"]
    },

    shell: {
        multiple: {
            command: [
                'cd epubsrc',
                'zip -0 myebook.epub mimetype',
                'zip -9 -r myebook.epub META-INF OEBPS'
            ].join('&&')
        }
    }

});
```

## Using epubcheck
Using epubcheck https://github.com/IDPF/epubcheck on Linux or OS X. 
Add those lines to Grunt config file:

```js
    shell: {
        multiple: {
            command: [
                'cd epubsrc',
                'zip -9 -rX myebook.epub mimetype META-INF OEBPS',
                'cd ..',
                'java -jar epubcheck-3.0.1.jar epubsrc/myebook.epub'
            ].join('&&')
        }
    },
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
