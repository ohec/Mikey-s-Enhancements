/**
 * Mikey's Enhancements:
 */




BBLog.handle("add.plugin", {
    id:   "mikeys-enhancements",
    name: "Mikey's Enhancements",

    configFlags: [

        ["option.remove-cookies-preference", 1], ["option.remove-app-promotion", 1],

    ],

    translations: {
        "en": {

            "option.remove-cookies-preference": "Remove the cookies preferences",
            "option.remove-app-promotion":      "Remove the app promotion",

        }
    },

    init: function (instance) {
        if (BBLog.cache("mode") == "bf4") {
            instance.AddEnhancements(instance);
        }
    },

    domchange: function (instance) {
        if (BBLog.cache("mode") == "bf4") {
            instance.AddEnhancements(instance);
        }
    },

    AddEnhancements: function (instance) {
        var url = window.location.href;
        var id = $(".base-section-menu .soldier a").attr("href").match(/\/\d+\//g);
        var username = $(".soldierstats-box header .name a").html();
        var platform = $(".base-section-menu .soldier .icon-platform").clone().removeClass("icon-platform inverted").attr("class");
        var lang = BBLog.cache("battlelog.language");

        if (instance.storage("option.remove-cookies-preference")) {
            $("#cookie-preferences").remove();
        }

        if (instance.storage("option.remove-app-promotion")) {
            $("#app-promotion").parent().remove();
        }

    }
});