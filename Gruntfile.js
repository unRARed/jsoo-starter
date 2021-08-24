module.exports = function(grunt) {
  // Do grunt-related things in here
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    run: {
      options: {
        // Task-specific options go here.
      },
      your_target: {
        cmd: './compile.sh',
        args: []
      }
    },
    // jsofocamlbuild: {
    //   main: {
    //     files: [
    //       {
    //         // expand: true,     // Enable dynamic expansion.
    //         // src: ['lib/**/*.ml'], // Actual pattern(s) to match.
    //         // dest: 'build/',   // Destination path prefix.
    //         // ext: '.min.js',   // Dest filepaths will have this extension.
    //         // extDot: 'first'   // Extensions in filenames begin after the first dot
    //         'build/': ['lib/**/*.ml.js']
    //       }
    //     ],
    //     options: {
    //       ocamlbuild: [],
    //       js_of_ocaml: ["source-map"]
    //     }
    //   }
    // },
    watch: {
      scripts: {
        files: ['lib/**/*.ml'],
        tasks: ['run'],
        options: {
          spawn: false,
        },
      },
    },
  });

  //grunt.loadNpmTasks("grunt-of-ocamlbuild");
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-run');

  grunt.registerTask("default", ["watch"]);
};
