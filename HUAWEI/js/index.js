/**
 * Created by cms on 2016/7/2.
 */
$ (function () {
    //导航栏
    var mark = true;
    var enter = 0
    $ (".navwrap_top ul li").each (function (i) {
        $ (this).on ('mouseenter', function () {
                console.log (enter);
                console.log (i);
                $ (".col-" + enter).stop (true, false).slideUp (400)
                enter = i + 1
                $ (".col-" + (i + 1)).slideDown (400);
            }
        )
    })
    $ (".navwrap_top ul li").each (function (i) {
        $ (this).on ('mouseleave', function () {
            console.log ($ (this).css ("display"));
            if ($ (this).css ("display") == "inline-block") {
                $ (".col-" + (i + 1)).stop (true, false).slideDown (400)
            }
        })
    })
    $ ("#slide").on ('mouseenter', function () {
        for (var i = 1 ; i < 7 ; i++) {
            $ (".navwrap_bottom .col-" + i).slideUp (500);
        }
    })
    $ (".short_cutBlf").on ('mouseenter', function () {
        for (var i = 1 ; i < 7 ; i++) {
            $ (".navwrap_bottom .col-" + i).slideUp (500);
        }
    })
    //轮播图代码
    var i = 0;
    $ ("#arr").on ('click', 'input:eq(1)', function () {
        //alert (i);
        var flag = i;
        i++
        if (i == 4) {
            i = 0;
        }
        $ ("#slide ul li:eq(" + flag + ")").hide ();
        $ ("#slide ul li:eq(" + i + ")").fadeIn (1000,function () {
            $ ("#slide ul li:eq(" + (i - 1) + ") .centerimg").hide ();
            $ ("#slide ul li:eq(" + i + ") .centerimg").fadeIn (300);
        });
        $ ("#slide_list li:eq(" + i + ")").addClass ('active');
        $ ("#slide_list li:eq(" + (i - 1) + ")").removeClass ('active');

    })
    $ ("#arr").on ('click', 'input:eq(0)', function () {
        $ ("#slide ul li:eq(" + i + ")").hide ();
        var flag = i;
        i--;
        if (i == -1) {
            i = 3;
        }
        $ ("#slide ul li:eq(" + i + ")").fadeIn (function () {
            $ ("#slide ul li:eq(" + flag + ") .centerimg").hide ();
            $ ("#slide ul li:eq(" + i + ") .centerimg").fadeIn (1500);
        });
        $ ("#slide_list li:eq(" + i + ")").addClass ('active');
        $ ("#slide_list li:eq(" + flag + ")").removeClass ('active');
    })
});


