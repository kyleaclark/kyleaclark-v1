{spawn,exec} = require "child_process"
fs = require "fs"
path = require "path"

module.exports = (BasePlugin) ->

  # Define Plugin
  class Concatenation extends BasePlugin
    
    # Plugin name
    name: "concatenation"


    constructor: ->
      super

    contatenateJS: (callback)->

      #JS contactenation
      proc = spawn __dirname + "/node_modules/.bin/r.js", [
        '-o',
        'mainConfigFile=out/js/require.config.js',
        'include=requireLib',
        'paths.requireLib=' + __dirname + '/require',
        'out=out/js/app.js',
        'wrap.start=(function(){',
        'wrap.end= require(["js/main"]); })();',
        'baseUrl=out',
        'name=js/main'
      ]
      proc.stdout.on 'data', (data) -> console.log data.toString()
      proc.stderr.on 'data', (data) -> process.stderr.write(data)
      proc.on 'exit', (status) ->
        callback?()


    concatenateCSS: (callback)->

      {spawn} = require 'child_process'

      proc = spawn __dirname + "/node_modules/.bin/r.js", [
        '-o',
        'cssIn=out/css/all.css',
        'out=out/css/app.css'
      ]
      proc.stdout.on 'data', (data) -> console.log data.toString()
      proc.stderr.on 'data', (data) -> process.stderr.write(data)
      proc.on 'exit', (status) ->
        callback?()


    populateCollections: (opts, next)->

      docpad = @docpad
      scripts = docpad.getBlock "scripts"
      styles = docpad.getBlock "styles"

      if docpad.getEnvironment() is "production"
        scripts.add "/js/app.js"
        styles.add "/css/app.css"
      else
        scripts
          .add( "/js/require.config.js", defer: false )
          .add( "//cdnjs.cloudflare.com/ajax/libs/require.js/2.1.1/require.min.js", defer: false )
          .add """
                (function(){
                  require(['js/main']);
                })();
               """,
               defer: false

        styles.add "/css/all.css"

      next()


    generateAfter: (opts, next) ->

      docpad = @docpad
      return next() if docpad.getEnvironment() isnt "production"

      _this = @
      @contatenateJS ->
        _this.concatenateCSS ->
          next()

    cleanOutFolder: (callback) ->
      console.log "Clearning up unnecessary js/css files..."
      {spawn} = require "child_process"

      proc = spawn "node", [
        __dirname + "/cleanup.js"
      ]
      proc.stdout.on 'data', (data) -> console.log data.toString()
      proc.stderr.on 'data', (data) -> process.stderr.write(data)
      proc.on 'exit', (status) ->
        console.log "Done clearning up"
        callback?()
