var sass = require('node-sass');
var fs = require('fs');

var destination = "assets/style/style.css";
var mapDestination = "assets/style/style.css.map";

sass.render({
  file: "assets/style/style.scss",
  outFile: "../assets/style/style.css",
  sourceMap: true,
  includePaths: [
      "assets/style/",
      "assets/style/bootstrap_override/", 
      "node_modules/bootstrap-sass/assets/stylesheets/",
      "node_modules/bootstrap-sass/assets/stylesheets/bootstrap/",
      "node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/",
    ]
}, function(err, result) {
    if (err)
        console.log(err);
    fs.writeFile(destination, result.css, function(err, result) {
        if (!err) {
            console.log('sass compiled');
        }
        else {
            console.log(err);
        }
    })
    fs.writeFile(mapDestination, result.map, function(err, result) {
        if (!err) {
            console.log('map file written');
        }
        else {
            console.log(err);
        }
    })
});