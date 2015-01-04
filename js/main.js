requirejs.config({
  paths:{
    "run": "./src/run",
    "util": "./src/util",
  }
})


requirejs(["run"])
