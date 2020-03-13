console.log("script cargando");

/** document.querySelector('.nav-item').scrollIntoView({
    behavior: 'smooth'
}); **/

function traducirAlIngles(e) {
    var elems = document.querySelectorAll("#nav1en, #nav2en, #nav3en, #trab1en, #trab2en, #trab3en, #trab4en, #trab5en, #trab6en, #tec1en, #con1en, #con2en, #con3en, #mod1en, #mod2en, #mod3en, #mod4en, #mod5en, #mod6en, #mod7en, #mod8en, #mod9en, #mod10en, #mod11en, #mod12en, #mod13en, #mod14en, #mod15en, #mod16en");
    [].forEach.call(elems, function(el) {
        el.classList.remove("d-none");
        console.log("sacando dnone");
    });
    var elemsEs = document.querySelectorAll("#nav1es, #nav2es, #nav3es, #trab1es, #trab2es, #trab3es, #trab4es, #trab5es, #trab6es, #tec1es, #con1es, #con2es, #con3es, #mod1es, #mod2es, #mod3es, #mod4es, #mod5es, #mod6es, #mod7es, #mod8es, #mod9es, #mod10es, #mod11es, #mod12es, #mod13es, #mod14es, #mod15es, #mod16es");
    [].forEach.call(elemsEs, function(el) {
        el.classList.add("d-none");
        console.log("ingresado dnone");
    });
}

function translateToSpanish(e) {
    var elems = document.querySelectorAll("#nav1es, #nav2es, #nav3es, #trab1es, #trab2es, #trab3es, #trab4es, #trab5es, #trab6es, #tec1es, #con1es, #con2es, #con3es, #mod1es, #mod2es, #mod3es, #mod4es, #mod5es, #mod6es, #mod7es, #mod8es, #mod9es, #mod10es, #mod11es, #mod12es, #mod13es, #mod14es, #mod15es, #mod16es");
    [].forEach.call(elems, function(el) {
        el.classList.remove("d-none");
        console.log("sacando dnone");
    });
    var elemsEs = document.querySelectorAll("#nav1en, #nav2en, #nav3en, #trab1en, #trab2en, #trab3en, #trab4en, #trab5en, #trab6en, #tec1en, #con1en, #con2en, #con3en, #mod1en, #mod2en, #mod3en, #mod4en, #mod5en, #mod6en, #mod7en, #mod8en, #mod9en, #mod10en, #mod11en, #mod12en, #mod13en, #mod14en, #mod15en, #mod16en");
    [].forEach.call(elemsEs, function(el) {
        el.classList.add("d-none");
        console.log("ingresado dnone");
    });
}