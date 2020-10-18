/// <reference types="es4x" />
// @ts-check

const {TemplateHandler, Router} = require("@vertx/web");
const TemplateEngine = require("@vertx/web-templ-handlebars").HandlebarsTemplateEngine

const router = Router.router(vertx);

const engine = TemplateEngine.create(vertx);
const templateHandler = TemplateHandler.create(engine, "templates", "text/html").setIndexTemplate('index.hbs');

function buildSimpleHandler(path, templatePath = null) {
    templatePath = templatePath ?? path

    return function(context) {
        context.put("path", path);

        const data = context.data()
        console.log(data)

        engine.render({path}, "templates" + templatePath + ".hbs", res => {
            const s = res.succeeded()
            console.log(s)
            if (s) {
                console.log("*-")

                context.response()
                    .putHeader("Content-Type", "text/html; charset=UTF-8")
                    .end(res.result());
                console.log("-*")
            } else {
                console.log(res.succeeded(), res.cause())
                context.fail(res.cause());
            }
        });

    }
}

function setUserRoute(path, parameters = "", templatePath = null) {
    router.get(path + parameters).handler(buildSimpleHandler(path, templatePath))
}

setUserRoute("/", "", "/index")

vertx
  .createHttpServer()
  .requestHandler(router.handle)
  .listen(3000);

console.log('Server started on port 3000');
