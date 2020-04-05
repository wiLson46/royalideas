function translateToSpanish(e) {
    var elemsEn = document.querySelectorAll("#nav1es, #nav2es, #nav3es, #trab1es, #trab2es, #trab3es, #trab4es, #trab5es, #trab6es, #tec1es, #con1es, #con2es, #con3es, #mod1es, #mod2es, #mod3es, #mod4es, #mod5es, #mod6es, #mod7es, #mod8es, #mod9es, #mod10es, #mod11es, #mod12es, #mod13es, #mod14es, #mod15es, #mod16es, #mod17es, #mod18es, #mod19es");
    [].forEach.call(elemsEn, function (el) {
        el.classList.remove("d-none");
    });
    var elemsEs = document.querySelectorAll("#nav1en, #nav2en, #nav3en, #trab1en, #trab2en, #trab3en, #trab4en, #trab5en, #trab6en, #tec1en, #con1en, #con2en, #con3en, #mod1en, #mod2en, #mod3en, #mod4en, #mod5en, #mod6en, #mod7en, #mod8en, #mod9en, #mod10en, #mod11en, #mod12en, #mod13en, #mod14en, #mod15en, #mod16en, #mod17en, #mod18en, #mod19en");
    [].forEach.call(elemsEs, function (el) {
        el.classList.add("d-none");
    });
}

function traducirAlIngles(e) {
    var elemsEn = document.querySelectorAll("#nav1en, #nav2en, #nav3en, #trab1en, #trab2en, #trab3en, #trab4en, #trab5en, #trab6en, #tec1en, #con1en, #con2en, #con3en, #mod1en, #mod2en, #mod3en, #mod4en, #mod5en, #mod6en, #mod7en, #mod8en, #mod9en, #mod10en, #mod11en, #mod12en, #mod13en, #mod14en, #mod15en, #mod16en, #mod17en, #mod18en, #mod19en");
    [].forEach.call(elemsEn, function (el) {
        el.classList.remove("d-none");
    });
    var elemsEs = document.querySelectorAll("#nav1es, #nav2es, #nav3es, #trab1es, #trab2es, #trab3es, #trab4es, #trab5es, #trab6es, #tec1es, #con1es, #con2es, #con3es, #mod1es, #mod2es, #mod3es, #mod4es, #mod5es, #mod6es, #mod7es, #mod8es, #mod9es, #mod10es, #mod11es, #mod12es, #mod13es, #mod14es, #mod15es, #mod16es, #mod17es, #mod18es, #mod19es");
    [].forEach.call(elemsEs, function (el) {
        el.classList.add("d-none");
    });
}

function showContent() {
    element = document.getElementById("datosTelefono");
    check = document.getElementById("defaultCheck1");
    if (check.checked) {
        element.classList.remove("d-none");
    }
    else {
        element.classList.add("d-none");
    }
}

function clearForm() {
    document.getElementById("validationCustom01").value = ""; 
    document.getElementById("validationCustom02").value = ""; 
    document.getElementById("exampleInputEmail1").value = ""; 
    document.getElementById("Textarea1").value = "";
    document.getElementById("defaultCheck1").checked = false;
    document.getElementById("datosTelefono").classList.add("d-none"); 
}