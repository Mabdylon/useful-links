module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-recess');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-html2js');

    //grunt.registerTask('default', ['jshint','build','karma:unit']);
    grunt.registerTask('build', ['clean','html2js','concat','copy:assets']);

    // Print a timestamp (useful for when watching)
    grunt.registerTask('timestamp', function() {
        grunt.log.subhead(Date());
    });

    // Project configuration.
    grunt.initConfig({
        distdir: 'dist',
        pkg: grunt.file.readJSON('package.json'),
        banner:
            '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n',
        src: {
            js: ['src/**/*.js'],
            jsTpl: ['<%= distdir %>/templates/**/*.js'],
            html: ['src/**/*.html'],
            tpl: {
                app: ['src/app/**/*.tpl.html']
            },
            less: ['src/css/style.less'],
            lessWatch: ['src/css/**/*.less']
        },
        clean: ['<%= distdir %>/*'],
        copy: {
            assets: {
                files: [{dest: '<%= distdir %>', src: '**', expand:true, cwd: 'src/assets'}]
            }
        },
        html2js: {
            app: {
                options: {
                    base: 'src/app'
                },
                src: '<%= src.tpl.app %>',
                dest: '<%= distdir %>/templates/app.js',
                module: 'templates.app'
            }
        },
        concat: {
            dist: {
                options: {
                    banner: '<%= grunt.template.today("yyyy-mm-dd") %> By Mabdylon \n'
                },
                src: '<%= src.js %>, <%= src.tpl.app %>',
                dest:'<%= distdir %>/<%= pkg.name %>.js'
            }
        },
        index: {
            src: ['src/index.html'],
            dest: '<%= distdir %>/index.html',
            options: {
                process: true
            }
        }
    });

};