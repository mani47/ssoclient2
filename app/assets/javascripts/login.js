$(function () {
    var textfield = $("input[name=user]");
    var output = $('#output');
    var signin= $('.signin');
    var signout= $('.signout');
    var avatar = $(".avatar");
    var input = $('input');

    signin.click(function (e) {
        e.preventDefault();
        //little validation just to check username
        if (textfield.val() != "") {
            //$("body").scrollTo("#output");
            output.show();
            output.addClass("alert alert-success animated fadeInUp").html("Welcome back " + "<span style='text-transform:uppercase'>" + textfield.val() + "</span>");
            output.removeClass(' alert-danger');
            $(this).hide();
            signout.show();
            input.css({
                "height": "0",
                "padding": "0",
                "margin": "0",
                "opacity": "0"
            });
            //show avatar
            avatar.css({
                "background-image": "url('http://api.randomuser.me/0.3.2/portraits/men/10.jpg')"
            });
        } else {
            //remove success mesage replaced with error message
            output.removeClass(' alert alert-success');
            output.show();
            output.addClass("alert alert-danger animated fadeInUp").html("sorry enter a username ");
        }
    });

    signout.click(function () {
        $(this).hide();
        signin.show();
        avatar.css('background-image', 'none');
        output.hide();
        input.css({
            "height": "auto",
            "padding": "10px",
            "opacity": "1"
        }).val("");
    });


});
/**
 * Created by hosseinrabizadeh on 6/15/14.
 */
