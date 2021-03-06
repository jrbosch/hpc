!function (a, b, c) {
    function d(b, c) {
        this.element = a(b), this.settings = a.extend({}, f, c), this._defaults = f, this._name = e, this.init()
    }

    var e = "application___website___leftside___nav", f = {toggle: !1, doubleTapToGo: !1};
    d.prototype = {
        init: function () {
            var b = this.element, d = this.settings.toggle, f = this;
            this.isIE() <= 9 ? (b.find("li.active").has("ul").children("ul").collapse("show"), b.find("li").not(".active").has("ul").children("ul").collapse("hide")) : (b.find("li.active").has("ul").children("ul").addClass("collapse in"), b.find("li").not(".active").has("ul").children("ul").addClass("collapse")), f.settings.doubleTapToGo && b.find("li.active").has("ul").children("a").addClass("doubleTapToGo"), b.find("li").has("ul").children("a").on("click." + e, function (b) {
                return b.preventDefault(), f.settings.doubleTapToGo && f.doubleTapToGo(a(this)) && "#" !== a(this).attr("href") && "" !== a(this).attr("href") ? (b.stopPropagation(), void(c.location = a(this).attr("href"))) : (a(this).parent("li").toggleClass("active").children("ul").collapse("toggle"), void(d && a(this).parent("li").siblings().removeClass("active").children("ul.in").collapse("hide")))
            })
        }, isIE: function () {
            for (var a, b = 3, d = c.createElement("div"), e = d.getElementsByTagName("i"); d.innerHTML = "<!--[if gt IE " + ++b + "]><i></i><![endif]-->", e[0];)return b > 4 ? b : a
        }, doubleTapToGo: function (a) {
            var b = this.element;
            return a.hasClass("doubleTapToGo") ? (a.removeClass("doubleTapToGo"), !0) : a.parent().children("ul").length ? (b.find(".doubleTapToGo").removeClass("doubleTapToGo"), a.addClass("doubleTapToGo"), !1) : void 0
        }, remove: function () {
            this.element.off("." + e), this.element.removeData(e)
        }
    }, a.fn[e] = function (b) {
        return this.each(function () {
            var c = a(this);
            c.data(e) && c.data(e).remove(), c.data(e, new d(this, b))
        }), this
    }
}(jQuery, window, document);
$(window).bind("load resize", function () {
    // Loads the correct sidebar on window load, collapses the sidebar on window resize.
    var intWidth = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
    if (intWidth < 768) {
        $("#application___website___leftside").addClass("collapse");
        $("#application___website___leftside.collapse").removeClass("in");
    } else {
        $("#application___website___leftside").removeClass("collapse");
    }
    // Sets the min-height of #application___website___content___center to window size
    var intTopOffSet = 50; // #application___website___header has width=50px
    if (intWidth < 768) {
        intTopOffSet = 100; // 2-row-menu
    }
    var intHeight = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
    intHeight = intHeight - intTopOffSet;
    if (intHeight < 1)
        intHeight = 1;
    if (intHeight > intTopOffSet) {
        $("#application___website___leftside").css("min-height", intHeight + "px");
        if (intTopOffSet == 50) {
            intHeight -= 12; //#application___website___content___center has margin-top=10px and margin-bottom=0px and border-top=1px and border-bottom=1px
            intHeight -= 10; //#application___website___content___footer has margin-top=10px
        }
        // (-62) #application___website___content___message has height=42px and margin-top=10px and margin-bottom=10px
        // (-100) #application___website___content___footer has min-height=100px
        $("#application___website___content___center").css("min-height", (intHeight - 62 - 100) + "px");
    }
});
/* */
/* */
/* */
var ___HTML___application___RELOAD___ = function () {
    var $link = $(this);
    window.location = $link.attr("data-url");
};
/* */
/* */
/* */
var ___HTML___application___website___leftside___SCROLL_DESTROY___ = function () {
    $("#application___website___leftside").mCustomScrollbar("destroy");
};
var ___HTML___application___website___leftside___SCROLL_CREATE___ = function () {
    $("#application___website___leftside").mCustomScrollbar({
        theme: "minimal-dark"
    });
};
var ___HTML___application___website___leftside___SCROLL_DISABLE___ = function () {
    $("#application___website___leftside").mCustomScrollbar("disable");
};
var ___HTML___application___website___leftside___SCROLL_ENABLE___ = function () {
    $("#application___website___leftside").mCustomScrollbar("update");
};
var ___HTML___application___website___content___SCROLL_DESTROY___ = function () {
    $("#application___website___content").mCustomScrollbar("destroy");
};
var ___HTML___application___website___content___SCROLL_CREATE___ = function () {
    $("#application___website___content").mCustomScrollbar({
        theme: "minimal-dark"
    });
};
var ___HTML___application___website___content___SCROLL_DISABLE___ = function () {
    $("#application___website___content").mCustomScrollbar("disable");
};
var ___HTML___application___website___content___SCROLL_ENABLE___ = function () {
    $("#application___website___content").mCustomScrollbar("update");
};
/* */
/* */
/* */
var ___HTML___application___website___load___RELOAD___ = function () {
    var identifier = "#application___website___load";
    $.ajax({
        url: $(identifier).attr("data-url"),
        type: "get",
        dataType: "json",
        beforeSend: function () {
        },
        success: function (data) {
            if (data.___BOOLEAN___ERROR___) {
                ___HTML___application___website___modal___SHOW_LOAD___();
                ___HTML___application___website___modal___SHOW_MESSAGE_ERROR___(data);
            }
            else {
                $(identifier).html(data.___HTML___APPLICATION___WEBSITE___LOAD___);
            }
        }
    });
};
/* */
/* */
/* */
var ___HTML___application___website___title___RELOAD___ = function () {
    var identifier = "title";
    $.ajax({
        url: $(identifier).attr("data-url"),
        type: "get",
        dataType: "json",
        beforeSend: function () {
            document.title = ___TEXT___APPLICATION___WEBSITE___LOAD___;
        },
        success: function (data) {
            if (data.___BOOLEAN___ERROR___) {
                ___HTML___application___website___modal___SHOW_LOAD___();
                ___HTML___application___website___modal___SHOW_MESSAGE_ERROR___(data);
            }
            else {
                document.title = data.___HTML___APPLICATION___WEBSITE___TITLE___;
            }
        }
    });
};
/* */
/* */
/* */
var ___HTML___application___website___header___RELOAD___ = function () {
    var identifier = "#application___website___header";
    $.ajax({
        url: $(identifier).attr("data-url"),
        type: "get",
        dataType: "json",
        beforeSend: function () {
            $(identifier).html(___HTML___APPLICATION___WEBSITE___LOAD___);
        },
        success: function (data) {
            if (data.___BOOLEAN___ERROR___) {
                ___HTML___application___website___modal___SHOW_LOAD___();
                ___HTML___application___website___modal___SHOW_MESSAGE_ERROR___(data);
            }
            else {
                $(identifier).html(data.___HTML___APPLICATION___WEBSITE___HEADER___);
                /* remove event */
                $(identifier).off("click", ".LINK___application___reload");
                $(identifier).off("click", ".LINK___application___website___modal___reload");
                $(identifier).off("click", ".LINK___application___website___modal___action_locale");
                /* add event */
                $(identifier).on("click", ".LINK___application___reload", ___HTML___application___RELOAD___);
                $(identifier).on("click", ".LINK___application___website___modal___reload", ___HTML___application___website___modal___RELOAD___);
                $(identifier).on("click", ".LINK___application___website___modal___action_locale", ___HTML___application___website___modal___ACTION_LOCALE___);
            }
        }
    });
};
/* */
/* */
/* */
var ___HTML___application___website___leftside___RELOAD___ = function (boolean___is_scroll_disable) {
    var identifier = "#application___website___leftside";
    $.ajax({
        url: $(identifier).attr("data-url"),
        type: "get",
        dataType: "json",
        beforeSend: function () {
            $(identifier).html(___HTML___APPLICATION___WEBSITE___LOAD___);
        },
        success: function (data) {
            if (data.___BOOLEAN___ERROR___) {
                ___HTML___application___website___modal___SHOW_LOAD___();
                ___HTML___application___website___modal___SHOW_MESSAGE_ERROR___(data);
            }
            else {
                $(identifier).html(data.___HTML___APPLICATION___WEBSITE___LEFTSIDE___);
                $(identifier).application___website___leftside___nav();
                ___HTML___application___website___leftside___SCROLL_DESTROY___();
                ___HTML___application___website___leftside___SCROLL_CREATE___();
                if (boolean___is_scroll_disable) {
                    ___HTML___application___website___leftside___SCROLL_DISABLE___();
                }
                /* remove event */
                $(identifier).off("click", ".LINK___application___website___content___center___reload");
                /* add event */
                $(identifier).on("click", ".LINK___application___website___content___center___reload", {"boolean___is_scroll_disable": boolean___is_scroll_disable}, ___HTML___application___website___content___center___RELOAD___);
                /* Refresh Automatic Click */
                if ($(".LINK___application___website___content___center___reload").hasClass("active")) {
                    var link___leftside___active = ".LINK___application___website___content___center___reload.active";
                    if ($(link___leftside___active).parent().parent().hasClass("nav___third_level")) {
                        $(link___leftside___active).parent().parent().addClass("in");
                        $(link___leftside___active).parent().parent().parent().addClass("active");
                        if ($(link___leftside___active).parent().parent().parent().parent().hasClass("nav___second_level")) {
                            $(link___leftside___active).parent().parent().parent().parent().addClass("in");
                            $(link___leftside___active).parent().parent().parent().parent().parent().addClass("active");
                        }
                    }
                    else {
                        if ($(link___leftside___active).parent().parent().hasClass("nav___second_level")) {
                            $(link___leftside___active).parent().parent().addClass("in");
                            $(link___leftside___active).parent().parent().parent().addClass("active");
                        }
                    }
                    $(link___leftside___active).trigger("click");
                }
                else {
                    var identifier_2 = "#application___website___content___center";
                    $.ajax({
                        url: $(identifier_2).attr("data-url"),
                        type: "get",
                        dataType: "json",
                        beforeSend: function () {
                            $(identifier_2).html(___HTML___APPLICATION___WEBSITE___LOAD___);
                        },
                        success: function (data) {
                            $(identifier_2).html(data.___HTML___APPLICATION___WEBSITE___CONTENT___CENTER___);
                            ___HTML___application___website___content___SCROLL_DESTROY___();
                            ___HTML___application___website___content___SCROLL_CREATE___();
                            if (boolean___is_scroll_disable) {
                                ___HTML___application___website___content___SCROLL_DISABLE___();
                            }
                        }
                    });
                }
                /* remove event */
                $(identifier).off("click", ".LINK___application___website___content___center___reload");
                /* add event */
                $(identifier).on("click", ".LINK___application___website___content___center___reload", {"boolean___is_scroll_disable": false}, ___HTML___application___website___content___center___RELOAD___);
            }
        }
    });
};
/* */
/* */
/* */
var ___HTML___application___website___content___center___RELOAD___ = function (event) {
    var $link = $(this);
    var boolean___is_scroll_disable = event.data.boolean___is_scroll_disable;
    $.ajax({
        url: $link.attr("data-url"),
        type: "get",
        dataType: "json",
        beforeSend: function () {
            $(".LINK___application___website___content___center___reload").removeClass("active");
            $link.addClass("active");
            $("#application___website___leftside.collapse").removeClass("in");
            $("#application___website___content___center").html(___HTML___APPLICATION___WEBSITE___LOAD___);
        },
        success: function (data) {
            if (data.___BOOLEAN___ERROR___) {
                ___HTML___application___website___modal___SHOW_LOAD___();
                ___HTML___application___website___modal___SHOW_MESSAGE_ERROR___(data);
                $("#application___website___content___center").html("");
            }
            else {
                $("#application___website___content___center").html(data.___HTML___APPLICATION___WEBSITE___CONTENT___CENTER___);
                ___HTML___application___website___content___SCROLL_DESTROY___();
                ___HTML___application___website___content___SCROLL_CREATE___();
                if (boolean___is_scroll_disable) {
                    ___HTML___application___website___content___SCROLL_DISABLE___();
                }
            }
        }
    });
};
/* */
/* */
/* */
var ___HTML___application___website___content___footer___RELOAD___ = function () {
    var identifier = "#application___website___content___footer";
    $.ajax({
        url: $(identifier).attr("data-url"),
        type: "get",
        dataType: "json",
        beforeSend: function () {
            $(identifier).html(___HTML___APPLICATION___WEBSITE___LOAD___);
        },
        success: function (data) {
            if (data.___BOOLEAN___ERROR___) {
                ___HTML___application___website___modal___SHOW_LOAD___();
                ___HTML___application___website___modal___SHOW_MESSAGE_ERROR___(data);
            }
            else {
                $(identifier).html(data.___HTML___APPLICATION___WEBSITE___CONTENT___FOOTER___);
            }
        }
    });
};
/* */
/* */
/* */
var ___HTML___application___website___modal___RELOAD___ = function () {
    var $link = $(this);
    $.ajax({
        url: $link.attr("data-url"),
        type: "get",
        dataType: "json",
        beforeSend: function () {
            ___HTML___application___website___modal___SHOW_LOAD___();
        },
        success: function (data) {
            if (data.___BOOLEAN___ERROR___) {
                ___HTML___application___website___modal___SHOW_MESSAGE_ERROR___(data);
            }
            else {
                var $application___website___modal = $("#application___website___modal");
                $application___website___modal.html(data.___HTML___APPLICATION___WEBSITE___MODAL___);
                $application___website___modal.find(".modal___message").html(data.___HTML___APPLICATION___WEBSITE___MODAL___MESSAGE___);
                /* */
                ___HTML___application___website___modal___EVENTS_ON___();
            }
        }
    });
};
var ___HTML___application___website___modal___ACTION_REFRESH___ = function () {
    var $link = $(this);
    $.ajax({
        url: $link.attr("data-url"),
        type: "get",
        dataType: "json",
        beforeSend: function () {
            ___HTML___application___website___modal___modal_content___modal_body___SHOW_LOAD___();
        },
        success: function (data) {
            if (data.___BOOLEAN___ERROR___) {
                ___HTML___application___website___modal___SHOW_MESSAGE_ERROR___(data);
            }
            else {
                var $application___website___modal = $("#application___website___modal");
                $application___website___modal.html(data.___HTML___APPLICATION___WEBSITE___MODAL___);
                $application___website___modal.find(".modal___message").html(data.___HTML___APPLICATION___WEBSITE___MODAL___MESSAGE___);
            }
        }
    });
};
var ___HTML___application___website___modal___ACTION_REFRESH___SECURITY___LOGIN___ = function () {
    var $link = $(this);
    $.ajax({
        url: $link.attr("data-url"),
        type: "get",
        dataType: "json",
        beforeSend: function () {
            ___HTML___application___website___modal___modal_content___modal_body___SHOW_LOAD___SECURITY___LOGIN___();
        },
        success: function (data) {
            if (data.___BOOLEAN___ERROR___) {
                ___HTML___application___website___modal___SHOW_MESSAGE_ERROR___(data);
            }
            else {
                $("#application___website___modal").html(data.___HTML___APPLICATION___WEBSITE___MODAL___);
            }
        }
    });
};
var ___HTML___application___website___modal___ACTION_CLOSE___ = function () {
    $("#application___website___modal").modal("hide").html("");
    /* */
    ___HTML___application___website___leftside___SCROLL_ENABLE___();
    ___HTML___application___website___content___SCROLL_ENABLE___();
};
var ___HTML___application___website___modal___ACTION_LOGIN___ = function () {
    var $form = $(this);
    $.ajax({
        url: $form.attr("action"),
        data: $form.serialize(),
        type: $form.attr("method"),
        dataType: "json",
        beforeSend: function () {
            ___HTML___application___website___modal___modal_content___modal_body___SHOW_LOAD___SECURITY___LOGIN___();
        },
        success: function (data) {
            if (data.___BOOLEAN___ERROR___) {
                ___HTML___application___website___modal___SHOW_MESSAGE_ERROR___(data);
            }
            else {
                var $application___website___modal = $("#application___website___modal");
                if (data.___BOOLEAN___IS_METHOD_POST___) {
                    if (data.___INT___IS_VALID_FORM___ == 1) {
                        ___HTML___application___website___load___RELOAD___();
                        ___HTML___application___website___title___RELOAD___();
                        ___HTML___application___website___header___RELOAD___();
                        ___HTML___application___website___leftside___SCROLL_DESTROY___();
                        ___HTML___application___website___content___SCROLL_DESTROY___();
                        ___HTML___application___website___leftside___RELOAD___(false); // scroll___disable = false
                        ___HTML___application___website___content___footer___RELOAD___();
                        /* */
                        ___HTML___application___website___modal___SHOW_MESSAGE_OK___(data);
                    }
                    else {
                        $application___website___modal.html(data.___HTML___APPLICATION___WEBSITE___MODAL___);
                        $application___website___modal.find(".tab-pane.active").find(".modal___message").html(data.___HTML___APPLICATION___WEBSITE___MODAL___MESSAGE___);
                    }
                }
                else {
                    $application___website___modal.html(data.___HTML___APPLICATION___WEBSITE___MODAL___);
                }
            }
        }
    });
    return false;
};
var ___HTML___application___website___modal___ACTION_LOGOUT___ = function () {
    var $form = $(this);
    $.ajax({
        url: $form.attr("action"),
        data: $form.serialize(),
        type: $form.attr("method"),
        dataType: "json",
        beforeSend: function () {
            ___HTML___application___website___modal___modal_content___modal_body___SHOW_LOAD___();
        },
        success: function (data) {
            if (data.___BOOLEAN___ERROR___) {
                ___HTML___application___website___modal___SHOW_MESSAGE_ERROR___(data);
            }
            else {
                if (data.___BOOLEAN___IS_METHOD_POST___) {
                    ___HTML___application___website___modal___SHOW_MESSAGE_OK___(data);
                }
                else {
                    $("#application___website___modal").html(data.___HTML___APPLICATION___WEBSITE___MODAL___);
                }
            }
        }
    });
    return false;
};
var ___HTML___application___website___modal___ACTION_PROFILE___ = function () {
    var $form = $(this);
    $.ajax({
        url: $form.attr("action"),
        data: new FormData(this),
        type: $form.attr("method"),
        dataType: "json",
        cache: false,
        processData: false,
        contentType: false,
        beforeSend: function () {
            ___HTML___application___website___modal___modal_content___modal_body___SHOW_LOAD___();
        },
        success: function (data) {
            if (data.___BOOLEAN___ERROR___) {
                ___HTML___application___website___modal___SHOW_MESSAGE_ERROR___(data);
            }
            else {
                var $application___website___modal = $("#application___website___modal");
                if (data.___BOOLEAN___IS_METHOD_POST___) {
                    if (data.___BOOLEAN___IS_VALID_FORM___) {
                        ___HTML___application___website___header___RELOAD___();
                        ___HTML___application___website___leftside___SCROLL_DESTROY___();
                        ___HTML___application___website___content___SCROLL_DESTROY___();
                        ___HTML___application___website___leftside___RELOAD___(true); // scroll___disable = true
                        /* */
                        $application___website___modal.html(data.___HTML___APPLICATION___WEBSITE___MODAL___);
                        $application___website___modal.find(".modal___message").html(data.___HTML___APPLICATION___WEBSITE___MODAL___MESSAGE___);
                    }
                    else {
                        $application___website___modal.html(data.___HTML___APPLICATION___WEBSITE___MODAL___);
                        $application___website___modal.find(".modal___message").html(data.___HTML___APPLICATION___WEBSITE___MODAL___MESSAGE___);
                    }
                }
                else {
                    $application___website___modal.html(data.___HTML___APPLICATION___WEBSITE___MODAL___);
                    $application___website___modal.find(".modal___message").html(data.___HTML___APPLICATION___WEBSITE___MODAL___MESSAGE___);
                }
            }
        }
    });
    return false;
};
var ___HTML___application___website___modal___ACTION_LOCALE___ = function () {
    var $link = $(this);
    $.ajax({
        url: $link.attr("data-url"),
        type: "get",
        dataType: "json",
        beforeSend: function () {
            ___HTML___application___website___modal___SHOW_LOAD___();
        },
        success: function (data) {
            if (data.___BOOLEAN___ERROR___) {
                ___HTML___application___website___modal___SHOW_MESSAGE_ERROR___(data);
            }
            else {
                ___HTML___application___website___leftside___SCROLL_DESTROY___();
                ___HTML___application___website___content___SCROLL_DESTROY___();
                /* */
                ___HTML___application___website___load___RELOAD___();
                ___HTML___application___website___title___RELOAD___();
                ___HTML___application___website___header___RELOAD___();
                ___HTML___application___website___leftside___RELOAD___(false); // scroll___disable = false
                ___HTML___application___website___content___footer___RELOAD___();
                /* */
                ___HTML___application___website___modal___SHOW_MESSAGE_OK___(data);
            }
        }
    });
};
/* */
var ___HTML___application___website___modal___SHOW_LOAD___ = function () {
    $("#application___website___leftside.collapse").removeClass("in");
    ___HTML___application___website___leftside___SCROLL_DISABLE___();
    ___HTML___application___website___content___SCROLL_DISABLE___();
    var $application___website___modal = $("#application___website___modal");
    if ($application___website___modal.hasClass("in")) {
        ___HTML___application___website___modal___modal_content___SHOW_LOAD___();
    }
    else {
        $application___website___modal.html("<div class='modal-dialog modal-sm'><div class='modal-content'>" + ___HTML___APPLICATION___WEBSITE___LOAD___ + "</div></div>");
    }
    $application___website___modal.modal("show");
};
var ___HTML___application___website___modal___modal_content___SHOW_LOAD___ = function () {
    var $identifier = $("#application___website___modal").find(".modal-content");
    var int___height___modal_content = $identifier.height();
    $identifier.html(___HTML___APPLICATION___WEBSITE___LOAD___);
    var int___height___application___website___load = $identifier.find(".application___website___load").height();
    int___height___application___website___load = (int___height___modal_content > int___height___application___website___load) ? int___height___modal_content : int___height___application___website___load;
    $identifier.find(".application___website___load").height(int___height___application___website___load);
};
var ___HTML___application___website___modal___modal_content___modal_body___SHOW_LOAD___ = function () {
    var $identifier = $("#application___website___modal").find(".modal-content").find(".modal-body");
    var int___height___modal_body = $identifier.height();
    $identifier.html(___HTML___APPLICATION___WEBSITE___LOAD___);
    var int___height___application___website___load = $identifier.find(".application___website___load").height();
    int___height___application___website___load = (int___height___modal_body > int___height___application___website___load) ? int___height___modal_body : int___height___application___website___load;
    $identifier.find(".application___website___load").height(int___height___application___website___load);
};
var ___HTML___application___website___modal___modal_content___modal_body___SHOW_LOAD___SECURITY___LOGIN___ = function () {
    var $identifier = $("#application___website___modal").find(".modal-content").find(".tab-pane.active").find(".modal-body");
    var int___height___tab_pane_active___modal_body = $identifier.height();
    $identifier.html(___HTML___APPLICATION___WEBSITE___LOAD___);
    var int___height___application___website___load = $identifier.find(".application___website___load").height();
    int___height___application___website___load = (int___height___tab_pane_active___modal_body > int___height___application___website___load) ? int___height___tab_pane_active___modal_body : int___height___application___website___load;
    $identifier.find(".application___website___load").height(int___height___application___website___load);
};
var ___HTML___application___website___modal___EVENTS_OFF___ = function () {
    $("#application___website___modal")
        .off("click", ".LINK___application___website___modal___action_refresh")
        .off("click", ".LINK___application___website___modal___action_refresh___security___login")
        .off("click", ".LINK___application___website___modal___action_close")
        .off("submit", ".LINK___application___website___modal___action_login")
        .off("submit", ".LINK___application___website___modal___action_logout")
        .off("submit", ".LINK___application___website___modal___action_profile")
        .off("click", ".LINK___application___website___modal___modal___reload");
};
var ___HTML___application___website___modal___EVENTS_ON___ = function () {
    ___HTML___application___website___modal___EVENTS_OFF___();
    $("#application___website___modal")
        .on("click", ".LINK___application___website___modal___action_refresh", ___HTML___application___website___modal___ACTION_REFRESH___)
        .on("click", ".LINK___application___website___modal___action_refresh___security___login", ___HTML___application___website___modal___ACTION_REFRESH___SECURITY___LOGIN___)
        .on("click", ".LINK___application___website___modal___action_close", ___HTML___application___website___modal___ACTION_CLOSE___)
        .on("submit", ".LINK___application___website___modal___action_login", ___HTML___application___website___modal___ACTION_LOGIN___)
        .on("submit", ".LINK___application___website___modal___action_logout", ___HTML___application___website___modal___ACTION_LOGOUT___)
        .on("submit", ".LINK___application___website___modal___action_profile", ___HTML___application___website___modal___ACTION_PROFILE___)
        .on("click", ".LINK___application___website___modal___modal___reload", ___HTML___application___website___modal___modal___RELOAD___);
};
var ___HTML___application___website___modal___SHOW_MESSAGE_ERROR___ = function (data) {
    var $application___website___modal = $("#application___website___modal");
    $application___website___modal.html(data.___HTML___APPLICATION___WEBSITE___MODAL___);
    $application___website___modal.find(".modal___message").html(data.___HTML___APPLICATION___WEBSITE___MODAL___MESSAGE___);
    /* */
    var int___message_state = 0;

    function ___JS___modal___message___close1___() {
        if ($application___website___modal.find(".modal___message").find(".alert").find("button.close").length <= 1) {
            ___JS___modal___message___close___();
        }
    }

    function ___JS___modal___message___close2___() {
        if (int___message_state == 0) {
            ___JS___modal___message___close___();
        }
    }

    function ___JS___modal___message___close___() {
        $application___website___modal.find(".modal___message").off("click", ".alert button.close");
        $application___website___modal.modal("hide").html("");
        ___HTML___application___website___leftside___SCROLL_ENABLE___();
        ___HTML___application___website___content___SCROLL_ENABLE___();
        int___message_state = 1;
        if (typeof(data.___APPLICATION___SECURITY___USER___WITHOUT_PERMISSION___) != "undefined" && data.___APPLICATION___SECURITY___USER___WITHOUT_PERMISSION___ == true) {
            window.location.replace(data.___APPLICATION___SECURITY___USER___URL_REDIRECT___);
        }
    }

    $application___website___modal.find(".modal___message")
        .off("click", ".alert button.close")
        .on("click", ".alert button.close", ___JS___modal___message___close1___);
    function ___JS___modal___message___alert___close___() {
        if (int___message_state == 0) {
            $application___website___modal.find(".modal___message").fadeOut("slow", function () {
                ___JS___modal___message___close2___();
            });
        }
    }

    setTimeout(___JS___modal___message___alert___close___, 3000);
};
var ___HTML___application___website___modal___SHOW_MESSAGE_OK___ = function (data) {
    var $application___website___modal = $("#application___website___modal");
    $application___website___modal.html(data.___HTML___APPLICATION___WEBSITE___MODAL___);
    $application___website___modal.find(".modal___message").html(data.___HTML___APPLICATION___WEBSITE___MODAL___MESSAGE___);
    /* */
    var int___message_state = 0;

    function ___JS___modal___message___close1___() {
        if ($application___website___modal.find(".modal___message").find(".alert").find("button.close").length <= 1) {
            ___JS___modal___message___close___();
        }
    }

    function ___JS___modal___message___close2___() {
        if (int___message_state == 0) {
            ___JS___modal___message___close___();
        }
    }

    function ___JS___modal___message___close___() {
        $application___website___modal.find(".modal___message").off("click", ".alert button.close");
        $application___website___modal.modal("hide").html("");
        ___HTML___application___website___leftside___SCROLL_ENABLE___();
        ___HTML___application___website___content___SCROLL_ENABLE___();
        int___message_state = 1;
        if (typeof(data.___APPLICATION___SECURITY___USER___WITHOUT_PERMISSION___) != "undefined" && data.___APPLICATION___SECURITY___USER___WITHOUT_PERMISSION___ == true) {
            window.location.replace(data.___APPLICATION___SECURITY___USER___URL_REDIRECT___);
        }
    }

    $application___website___modal.find(".modal___message")
        .off("click", ".alert button.close")
        .on("click", ".alert button.close", ___JS___modal___message___close1___);
    function ___JS___modal___message___alert___close___() {
        if (int___message_state == 0) {
            $application___website___modal.find(".modal___message").fadeOut("slow", function () {
                ___JS___modal___message___close2___();
            });
        }
    }

    setTimeout(___JS___modal___message___alert___close___, 3000);
};
/* */
/* */
/* */
var ___HTML___application___website___modal___modal___RELOAD___ = function () {
    var $link = $(this);
    $.ajax({
        url: $link.attr("data-url"),
        type: "get",
        dataType: "json",
        beforeSend: function () {
            $("#application___website___modal").addClass("application___website___invisible");
            ___HTML___application___website___modal___modal___SHOW_LOAD___();
        },
        success: function (data) {
            if (data.___BOOLEAN___ERROR___) {
                ___HTML___application___website___modal___modal___SHOW_MESSAGE_ERROR___(data);
            }
            else {
                $("#application___website___modal___modal").html(data.___HTML___APPLICATION___WEBSITE___MODAL___MODAL___);
                /* */
                ___HTML___application___website___modal___modal___EVENTS_ON___();
            }
        }
    });
};
var ___HTML___application___website___modal___modal___ACTION_REFRESH___ = function () {
    var $link = $(this);
    $.ajax({
        url: $link.attr("data-url"),
        type: "get",
        dataType: "json",
        beforeSend: function () {
            ___HTML___application___website___modal___modal___modal_content___modal_body___SHOW_LOAD___();
        },
        success: function (data) {
            if (data.___BOOLEAN___ERROR___) {
                ___HTML___application___website___modal___modal___SHOW_MESSAGE_ERROR___(data);
            }
            else {
                var $application___website___modal___modal = $("#application___website___modal___modal");
                $application___website___modal___modal.html(data.___HTML___APPLICATION___WEBSITE___MODAL___MODAL___);
                $application___website___modal___modal.find(".modal___message").html(data.___HTML___APPLICATION___WEBSITE___MODAL___MODAL___MESSAGE___);
            }
        }
    });
};
var ___HTML___application___website___modal___modal___ACTION_CLOSE___ = function () {
    $("#application___website___modal___modal").modal("hide").html("");
    $("#application___website___modal").removeClass("application___website___invisible");
};
var ___HTML___application___website___modal___modal___ACTION_SUBMIT_AND_KEEP_THE_MODAL_OPEN___ = function () {
    var $form = $(this);
    $.ajax({
        url: $form.attr("action"),
        data: $form.serialize(),
        type: $form.attr("method"),
        dataType: "json",
        beforeSend: function () {
            ___HTML___application___website___modal___modal___modal_content___modal_body___SHOW_LOAD___();
        },
        success: function (data) {
            if (data.___BOOLEAN___ERROR___) {
                ___HTML___application___website___modal___modal___SHOW_MESSAGE_ERROR___(data);
            }
            else {
                var $application___website___modal___modal = $("#application___website___modal___modal");
                if (data.___BOOLEAN___IS_METHOD_POST___) {
                    if (data.___BOOLEAN___IS_VALID_FORM___) {
                        $application___website___modal___modal.html(data.___HTML___APPLICATION___WEBSITE___MODAL___MODAL___);
                        $application___website___modal___modal.find(".modal___message").html(data.___HTML___APPLICATION___WEBSITE___MODAL___MODAL___MESSAGE___);
                    }
                    else {
                        $application___website___modal___modal.html(data.___HTML___APPLICATION___WEBSITE___MODAL___MODAL___);
                    }
                }
                else {
                    $application___website___modal___modal.html(data.___HTML___APPLICATION___WEBSITE___MODAL___MODAL___);
                }
            }
        }
    });
    return false;
};
var ___HTML___application___website___modal___modal___ACTION_SUBMIT_AND_CLOSE_THE_MODAL___ = function () {
    var $form = $(this);
    $.ajax({
        url: $form.attr("action"),
        data: $form.serialize(),
        type: $form.attr("method"),
        dataType: "json",
        beforeSend: function () {
            ___HTML___application___website___modal___modal___modal_content___modal_body___SHOW_LOAD___();
        },
        success: function (data) {
            if (data.___BOOLEAN___ERROR___) {
                ___HTML___application___website___modal___modal___SHOW_MESSAGE_ERROR___(data);
            }
            else {
                var $application___website___modal___modal = $("#application___website___modal___modal");
                if (data.___BOOLEAN___IS_METHOD_POST___) {
                    if (data.___BOOLEAN___IS_VALID_FORM___) {
                        ___HTML___application___website___modal___modal___SHOW_MESSAGE_OK___(data);
                    }
                    else {
                        $application___website___modal___modal.html(data.___HTML___APPLICATION___WEBSITE___MODAL___MODAL___);
                    }
                }
                else {
                    $application___website___modal___modal.html(data.___HTML___APPLICATION___WEBSITE___MODAL___MODAL___);
                }
            }
        }
    });
    return false;
};
var ___HTML___application___website___modal___modal___SHOW_LOAD___ = function () {
    var $application___website___modal___modal = $("#application___website___modal___modal");
    if ($application___website___modal___modal.hasClass("in")) {
        ___HTML___application___website___modal___modal___modal_content___SHOW_LOAD___();
    }
    else {
        $application___website___modal___modal.html("<div class='modal-dialog modal-sm'><div class='modal-content'>" + ___HTML___APPLICATION___WEBSITE___LOAD___ + "</div></div>");
    }
    $application___website___modal___modal.modal("show");
};
var ___HTML___application___website___modal___modal___modal_content___SHOW_LOAD___ = function () {
    var $identifier = $("#application___website___modal___modal").find(".modal-content");
    var int___height___modal_content = $identifier.height();
    $identifier.html(___HTML___APPLICATION___WEBSITE___LOAD___);
    var int___height___application___website___load = $identifier.find(".application___website___load").height();
    int___height___application___website___load = (int___height___modal_content > int___height___application___website___load) ? int___height___modal_content : int___height___application___website___load;
    $identifier.find(".application___website___load").height(int___height___application___website___load);
};
var ___HTML___application___website___modal___modal___modal_content___modal_body___SHOW_LOAD___ = function () {
    var $identifier = $("#application___website___modal___modal").find(".modal-content").find(".modal-body");
    var int___height___modal_body = $identifier.height();
    $identifier.html(___HTML___APPLICATION___WEBSITE___LOAD___);
    var int___height___application___website___load = $identifier.find(".application___website___load").height();
    int___height___application___website___load = (int___height___modal_body > int___height___application___website___load) ? int___height___modal_body : int___height___application___website___load;
    $identifier.find(".application___website___load").height(int___height___application___website___load);
};
var ___HTML___application___website___modal___modal___EVENTS_OFF___ = function () {
    $("#application___website___modal___modal")
        .off("click", ".LINK___application___website___modal___modal___action_refresh")
        .off("click", ".LINK___application___website___modal___modal___action_close")
        .off("submit", ".LINK___application___website___modal___modal___action_submit_and_keep_the_modal_open")
        .off("submit", ".LINK___application___website___modal___modal___action_submit_and_close_the_modal");
};
var ___HTML___application___website___modal___modal___EVENTS_ON___ = function () {
    ___HTML___application___website___modal___modal___EVENTS_OFF___();
    $("#application___website___modal___modal")
        .on("click", ".LINK___application___website___modal___modal___action_refresh", ___HTML___application___website___modal___modal___ACTION_REFRESH___)
        .on("click", ".LINK___application___website___modal___modal___action_close", ___HTML___application___website___modal___modal___ACTION_CLOSE___)
        .on("submit", ".LINK___application___website___modal___modal___action_submit_and_keep_the_modal_open", ___HTML___application___website___modal___modal___ACTION_SUBMIT_AND_KEEP_THE_MODAL_OPEN___)
        .on("submit", ".LINK___application___website___modal___modal___action_submit_and_close_the_modal", ___HTML___application___website___modal___modal___ACTION_SUBMIT_AND_CLOSE_THE_MODAL___);
};
var ___HTML___application___website___modal___modal___SHOW_MESSAGE_ERROR___ = function (data) {
    var $application___website___modal___modal = $("#application___website___modal___modal");
    $application___website___modal___modal.html(data.___HTML___APPLICATION___WEBSITE___MODAL___MODAL___);
    $application___website___modal___modal.find(".modal___message").html(data.___HTML___APPLICATION___WEBSITE___MODAL___MODAL___MESSAGE___);
    /* */
    var int___message_state = 0;

    function ___JS___modal___message___close1___() {
        if ($application___website___modal___modal.find(".modal___message").find(".alert").find("button.close").length <= 1) {
            ___JS___modal___message___close___();
        }
    }

    function ___JS___modal___message___close2___() {
        if (int___message_state == 0) {
            ___JS___modal___message___close___();
        }
    }

    function ___JS___modal___message___close___() {
        $application___website___modal___modal.find(".modal___message").off("click", ".alert button.close");
        ___HTML___application___website___modal___modal___ACTION_CLOSE___();
        int___message_state = 1;
        if (typeof(data.___APPLICATION___SECURITY___USER___WITHOUT_PERMISSION___) != "undefined" && data.___APPLICATION___SECURITY___USER___WITHOUT_PERMISSION___ == true) {
            window.location.replace(data.___APPLICATION___SECURITY___USER___URL_REDIRECT___);
        }
    }

    $application___website___modal___modal.find(".modal___message")
        .off("click", ".alert button.close")
        .on("click", ".alert button.close", ___JS___modal___message___close1___);
    function ___JS___modal___message___alert___close___() {
        if (int___message_state == 0) {
            $application___website___modal___modal.find(".modal___message").fadeOut("slow", function () {
                ___JS___modal___message___close2___();
            });
        }
    }

    setTimeout(___JS___modal___message___alert___close___, 3000);
};
var ___HTML___application___website___modal___modal___SHOW_MESSAGE_OK___ = function (data) {
    var $application___website___modal___modal = $("#application___website___modal___modal");
    $application___website___modal___modal.html(data.___HTML___APPLICATION___WEBSITE___MODAL___MODAL___);
    $application___website___modal___modal.find(".modal___message").html(data.___HTML___APPLICATION___WEBSITE___MODAL___MODAL___MESSAGE___);
    /* */
    var int___message_state = 0;

    function ___JS___modal___message___close1___() {
        if ($application___website___modal___modal.find(".modal___message").find(".alert").find("button.close").length <= 1) {
            ___JS___modal___message___close___();
        }
    }

    function ___JS___modal___message___close2___() {
        if (int___message_state == 0) {
            ___JS___modal___message___close___();
        }
    }

    function ___JS___modal___message___close___() {
        $application___website___modal___modal.find(".modal___message").off("click", ".alert button.close");
        ___HTML___application___website___modal___modal___ACTION_CLOSE___();
        int___message_state = 1;
        if (typeof(data.___APPLICATION___SECURITY___USER___WITHOUT_PERMISSION___) != "undefined" && data.___APPLICATION___SECURITY___USER___WITHOUT_PERMISSION___ == true) {
            window.location.replace(data.___APPLICATION___SECURITY___USER___URL_REDIRECT___);
        }
    }

    $application___website___modal___modal.find(".modal___message")
        .off("click", ".alert button.close")
        .on("click", ".alert button.close", ___JS___modal___message___close1___);
    function ___JS___modal___message___alert___close___() {
        if (int___message_state == 0) {
            $application___website___modal___modal.find(".modal___message").fadeOut("slow", function () {
                ___JS___modal___message___close2___();
            });
        }
    }

    setTimeout(___JS___modal___message___alert___close___, 10000);
};
/* */
/* */
/* */
/* Binding */
$(document).ready(function () {
    /* Instructions to excecute when end the load. */
    ___HTML___application___website___header___RELOAD___();
    ___HTML___application___website___leftside___RELOAD___(false);
    ___HTML___application___website___content___footer___RELOAD___();
});
