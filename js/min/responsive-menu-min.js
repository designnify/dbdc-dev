jQuery(function($){function e(){window.innerWidth<=768&&($("ul.menu-secondary > li").addClass("moved-item"),$("ul.menu-secondary > li").appendTo("ul.menu-primary"),$(".nav-secondary").hide()),window.innerWidth>768&&($(".nav-primary .genesis-nav-menu, nav .sub-menu").removeAttr("style"),$(".responsive-menu > .menu-item").removeClass("menu-open"),$(".nav-secondary").show(),$("ul.menu-primary > li.moved-item").appendTo("ul.menu-secondary"))}$(".nav-primary .genesis-nav-menu").addClass("responsive-menu").before('<div class="responsive-menu-icon"></div>'),$(".responsive-menu-icon").click(function(){$(this).next(".nav-primary .genesis-nav-menu").slideToggle()}),$(".responsive-menu").on("click",".menu-item",function(e){e.target===this&&$(this).find(".sub-menu:first").slideToggle(function(){$(this).parent().toggleClass("menu-open")})}),e(),$(window).resize(function(){e()})});