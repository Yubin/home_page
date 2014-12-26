eval("//# sourceURL=vendor/ember-cli/loader.js");

;eval("define(\"home-page/app\", \n  [\"ember\",\"ember/resolver\",\"ember/load-initializers\",\"home-page/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Resolver = __dependency2__[\"default\"];\n    var loadInitializers = __dependency3__[\"default\"];\n    var config = __dependency4__[\"default\"];\n\n    Ember.MODEL_FACTORY_INJECTIONS = true;\n\n    var App = Ember.Application.extend({\n      modulePrefix: config.modulePrefix,\n      podModulePrefix: config.podModulePrefix,\n      Resolver: Resolver\n    });\n\n    loadInitializers(App, config.modulePrefix);\n\n    __exports__[\"default\"] = App;\n  });//# sourceURL=home-page/app.js");

;eval("define(\"home-page/initializers/export-application-global\", \n  [\"ember\",\"home-page/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    function initialize(container, application) {\n      var classifiedName = Ember.String.classify(config.modulePrefix);\n\n      if (config.exportApplicationGlobal) {\n        window[classifiedName] = application;\n      }\n    };\n    __exports__.initialize = initialize;\n    __exports__[\"default\"] = {\n      name: \'export-application-global\',\n\n      initialize: initialize\n    };\n  });//# sourceURL=home-page/initializers/export-application-global.js");

;eval("define(\"home-page/router\", \n  [\"ember\",\"home-page/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    var Router = Ember.Router.extend({\n      location: config.locationType\n    });\n\n    Router.map(function() {\n      this.resource(\'home\', function () {\n        this.route(\'index\');\n      });\n    });\n\n    __exports__[\"default\"] = Router;\n  });//# sourceURL=home-page/router.js");

;eval("define(\"home-page/routes/home/index\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = Ember.Route.extend({\n\n    });\n  });//# sourceURL=home-page/routes/home/index.js");

;eval("define(\"home-page/routes/index\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = Ember.Route.extend({\n      redirect: function () {\n        this.replaceWith(\'home.index\');\n      }\n    });\n  });//# sourceURL=home-page/routes/index.js");

;eval("define(\"home-page/templates/application\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1;\n\n\n      stack1 = helpers._triageMustache.call(depth0, \"outlet\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=home-page/templates/application.js");

;eval("define(\"home-page/templates/home/content\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      \n\n\n      data.buffer.push(\"<h1>\\n  Experience\\n</h1>\\n<h4>\\n  Gausian APP Desktop\\n</h4>\\n\");\n      \n    });\n  });//# sourceURL=home-page/templates/home/content.js");

;eval("define(\"home-page/templates/home/index\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', escapeExpression=this.escapeExpression;\n\n\n      data.buffer.push(\"  <div class=\\\"full col-md-10\\\">\\n    <dl>\\n      <dd class=\'others-color\'><h4><a>Others</a></h4></dt>\\n      <dd class=\'developers-color\'><h4><a>Deverlopers</a></h4></dt>\\n      <dd class=\'desktop-color\'><h4><a>Desktop</a></h4></dt>\\n      <dd class=\'apps-color\'t><h4><a>APPs</a></h4></dt>\\n      <dd class=\'home-color current\'>\\n        <h4><a>Home</a></h4>\\n        \");\n      data.buffer.push(escapeExpression(helpers.view.call(depth0, \"home/content\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"STRING\"],data:data})));\n      data.buffer.push(\"\\n      </dd>\\n    </dl>\\n  </div>\\n\\n  <div class=\\\"full col-md-2 black\\\">\\n      <div class=\\\"search-bar input-group input-group-sm\\\">\\n        <input type=\\\"text\\\" class=\\\"form-control\\\" placeholder=\\\"Search\\\">\\n        <span class=\\\"btn btn-default\\\">\\n          <span class=\\\"glyphicon glyphicon-search\\\"></span>\\n        </span>\\n      </div>\\n  </div>\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=home-page/templates/home/index.js");

;eval("define(\"home-page/tests/app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - .\');\n    test(\'app.js should pass jshint\', function() { \n      ok(true, \'app.js should pass jshint.\'); \n    });\n  });//# sourceURL=home-page/tests/app.jshint.js");

;eval("define(\"home-page/tests/helpers/resolver\", \n  [\"ember/resolver\",\"home-page/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Resolver = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    var resolver = Resolver.create();\n\n    resolver.namespace = {\n      modulePrefix: config.modulePrefix,\n      podModulePrefix: config.podModulePrefix\n    };\n\n    __exports__[\"default\"] = resolver;\n  });//# sourceURL=home-page/tests/helpers/resolver.js");

;eval("define(\"home-page/tests/helpers/start-app\", \n  [\"ember\",\"home-page/app\",\"home-page/router\",\"home-page/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Application = __dependency2__[\"default\"];\n    var Router = __dependency3__[\"default\"];\n    var config = __dependency4__[\"default\"];\n\n    __exports__[\"default\"] = function startApp(attrs) {\n      var App;\n\n      var attributes = Ember.merge({}, config.APP);\n      attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;\n\n      Ember.run(function() {\n        App = Application.create(attributes);\n        App.setupForTesting();\n        App.injectTestHelpers();\n      });\n\n      return App;\n    }\n  });//# sourceURL=home-page/tests/helpers/start-app.js");

;eval("define(\"home-page/tests/home-page/tests/helpers/resolver.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - home-page/tests/helpers\');\n    test(\'home-page/tests/helpers/resolver.js should pass jshint\', function() { \n      ok(true, \'home-page/tests/helpers/resolver.js should pass jshint.\'); \n    });\n  });//# sourceURL=home-page/tests/home-page/tests/helpers/resolver.jshint.js");

;eval("define(\"home-page/tests/home-page/tests/helpers/start-app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - home-page/tests/helpers\');\n    test(\'home-page/tests/helpers/start-app.js should pass jshint\', function() { \n      ok(true, \'home-page/tests/helpers/start-app.js should pass jshint.\'); \n    });\n  });//# sourceURL=home-page/tests/home-page/tests/helpers/start-app.jshint.js");

;eval("define(\"home-page/tests/home-page/tests/test-helper.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - home-page/tests\');\n    test(\'home-page/tests/test-helper.js should pass jshint\', function() { \n      ok(true, \'home-page/tests/test-helper.js should pass jshint.\'); \n    });\n  });//# sourceURL=home-page/tests/home-page/tests/test-helper.jshint.js");

;eval("define(\"home-page/tests/router.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - .\');\n    test(\'router.js should pass jshint\', function() { \n      ok(true, \'router.js should pass jshint.\'); \n    });\n  });//# sourceURL=home-page/tests/router.jshint.js");

;eval("define(\"home-page/tests/routes/home/index.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - routes/home\');\n    test(\'routes/home/index.js should pass jshint\', function() { \n      ok(true, \'routes/home/index.js should pass jshint.\'); \n    });\n  });//# sourceURL=home-page/tests/routes/home/index.jshint.js");

;eval("define(\"home-page/tests/routes/index.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - routes\');\n    test(\'routes/index.js should pass jshint\', function() { \n      ok(true, \'routes/index.js should pass jshint.\'); \n    });\n  });//# sourceURL=home-page/tests/routes/index.jshint.js");

;eval("define(\"home-page/tests/test-helper\", \n  [\"home-page/tests/helpers/resolver\",\"ember-qunit\"],\n  function(__dependency1__, __dependency2__) {\n    \"use strict\";\n    var resolver = __dependency1__[\"default\"];\n    var setResolver = __dependency2__.setResolver;\n\n    setResolver(resolver);\n\n    document.write(\'<div id=\"ember-testing-container\"><div id=\"ember-testing\"></div></div>\');\n\n    QUnit.config.urlConfig.push({ id: \'nocontainer\', label: \'Hide container\'});\n    var containerVisibility = QUnit.urlParams.nocontainer ? \'hidden\' : \'visible\';\n    document.getElementById(\'ember-testing-container\').style.visibility = containerVisibility;\n  });//# sourceURL=home-page/tests/test-helper.js");

;eval("define(\"home-page/tests/views/home/content.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - views/home\');\n    test(\'views/home/content.js should pass jshint\', function() { \n      ok(true, \'views/home/content.js should pass jshint.\'); \n    });\n  });//# sourceURL=home-page/tests/views/home/content.jshint.js");

;eval("define(\"home-page/tests/views/home/index.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - views/home\');\n    test(\'views/home/index.js should pass jshint\', function() { \n      ok(false, \'views/home/index.js should pass jshint.\\nviews/home/index.js: line 37, col 19, \\\'i\\\' is already defined.\\n\\n1 error\'); \n    });\n  });//# sourceURL=home-page/tests/views/home/index.jshint.js");

;eval("define(\"home-page/views/home/content\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = Ember.View.extend({\n      classNames: [\'experience-button\'],\n      templateName: \'home/content\'\n    });\n  });//# sourceURL=home-page/views/home/content.js");

;eval("define(\"home-page/views/home/index\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = Ember.View.extend({\n      classNames: [\'full\'],\n\n      getContentWidth: function () {\n        return this.$(\'> div.col-md-10\').width() - 120;\n      },\n\n      didInsertElement: function () {\n        var width = this.getContentWidth();\n        //this.$(\'.current\').width(width + \'%\');\n        var array = this.$(\'dd\');\n        for(var i = 0; i < array.length; i++) {\n          var dd = this.$(array[i]);\n          dd.css({\n            width: width,\n            left: 30 * i\n          });\n        }\n\n        this.$(\'dd > h4\').click(function(evt) {\n          var node = this.$(evt.currentTarget).parent(\'dd\');\n          var index = node.index();\n          var left = node.offset().left;\n          var array = this.$(\'dd\');\n          var dd;\n\n          if (left > 120) { // go left\n            for(var i = index; i > 0; i--) {\n              dd = this.$(array[i]);\n              if (dd.offset().left > 120) {\n                dd.animate({\'left\': 30 * i});\n              }\n            }\n          } else { // go right\n            for(var i = index + 1; i < array.length; i++) {\n              dd = this.$(array[i]);\n              if (dd.offset().left < 121) {\n                dd.animate({\'left\': this.getContentWidth() + 30 * (i - 1)});\n              }\n            }\n          }\n          //\n          // Ember.$(\'dd\').removeClass(\'current\').width(0);\n          // Ember.$(this).next(\'dd\').addClass(\'current\').width(width + \'%\');\n        }.bind(this));\n      }\n\n    });\n  });//# sourceURL=home-page/views/home/index.js");

/* jshint ignore:start */

define('home-page/config/environment', ['ember'], function(Ember) {
  var prefix = 'home-page';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */



});

if (runningTests) {
  require("home-page/tests/test-helper");
} else {
  require("home-page/app")["default"].create({"LOG_ACTIVE_GENERATION":true,"LOG_VIEW_LOOKUPS":true});
}



/* jshint ignore:end */
