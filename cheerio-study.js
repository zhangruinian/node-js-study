let $ = require('cheerio')

let html = "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head>\n" +
    "    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\n" +
    "<title>厦门轮渡有限公司互联网购票系统-旅行社中心</title>\n" +
    "<link href=\"/resources/images/css.css\" rel=\"stylesheet\" type=\"text/css\">\n" +
    "<link href=\"/resources/images/contact.css\" rel=\"stylesheet\" type=\"text/css\">\n" +
    "<link href=\"/resources/css/pagination.css\" rel=\"stylesheet\" type=\"text/css\">\n" +
    "<link href=\"/resources/css/dialog.css\" rel=\"stylesheet\" type=\"text/css\">\n" +
    "<script type=\"text/javascript\" src=\"/resources/js/My97DatePicker/WdatePicker.js\"></script><link href=\"/resources/js/My97DatePicker/skin/WdatePicker.css\" rel=\"stylesheet\" type=\"text/css\">\n" +
    "<script type=\"text/javascript\" src=\"/resources/js/82/jquery.js\"></script>\n" +
    "<script type=\"text/javascript\" src=\"/resources/js/jquery.pagination.js\"></script>\n" +
    "<script type=\"text/javascript\" src=\"/resources/js/dialog.js\"></script>\n" +
    "    <script type=\"text/javascript\">\n" +
    "    \tfunction showMessage(){\n" +
    "    \t\talert(\"账户未激活，请联系客服人员！\");\n" +
    "    \t}\n" +
    "    </script>\n" +
    "</head>\n" +
    "<body data-ext-version=\"1.4.2\"><div style=\"display: none; position: absolute;\" class=\"\"><div class=\"aui_outer\"><table class=\"aui_border\"><tbody><tr><td class=\"aui_nw\"></td><td class=\"aui_n\"></td><td class=\"aui_ne\"></td></tr><tr><td class=\"aui_w\"></td><td class=\"aui_c\"><div class=\"aui_inner\"><table class=\"aui_dialog\"><tbody><tr><td colspan=\"2\" class=\"aui_header\"><div class=\"aui_titleBar\"><div class=\"aui_title\" style=\"cursor: move; display: block;\"></div><a class=\"aui_close\" href=\"javascript:/*artDialog*/;\" style=\"display: block;\">×</a></div></td></tr><tr><td class=\"aui_icon\" style=\"display: none;\"><div class=\"aui_iconBg\" style=\"background: none;\"></div></td><td class=\"aui_main\" style=\"width: auto; height: auto;\"><div class=\"aui_content\" style=\"padding: 20px 25px;\"></div></td></tr><tr><td colspan=\"2\" class=\"aui_footer\"><div class=\"aui_buttons\" style=\"display: none;\"></div></td></tr></tbody></table></div></td><td class=\"aui_e\"></td></tr><tr><td class=\"aui_sw\"></td><td class=\"aui_s\"></td><td class=\"aui_se\" style=\"cursor: se-resize;\"></td></tr></tbody></table></div></div>\n" +
    "    <table width=\"1000\" border=\"0\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" style=\"background-image: url(/resources/images/topbg.jpg);\">\n" +
    "    <tbody>\n" +
    "        <tr>\n" +
    "            <td>\n" +
    "                <table width=\"100%\" height=\"40\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"p12\">\n" +
    "                    <tbody>\n" +
    "                        <tr>\n" +
    "                            <td align=\"right\" width=\"80px\">\n" +
    "                                <a class=\"orange\" href=\"http://www.gly.cn\" target=\"_blank\">鼓浪屿门户</a>\n" +
    "                            </td>\n" +
    "                            <td align=\"right\" width=\"80px\">\n" +
    "                                <a class=\"orange\" href=\"http://www.xmferry.com/\" target=\"_blank\">轮渡公司</a>\n" +
    "                            </td>\n" +
    "                            <td width=\"150px\">\n" +
    "                                <div align=\"right\">\n" +
    "                                    <span class=\"style1\">\n" +
    "                                        <script language=\"javascript\" type=\"text/javascript\">\n" +
    "                                            function Year_Month() {\n" +
    "                                                var now = new Date();\n" +
    "                                                var yy = (now.getYear() < 1900) ? (1900 + now.getYear()) : now.getYear();\n" +
    "                                                var mm = now.getMonth() + 1;\n" +
    "                                                var cl = '<font color=\"#000000\">';\n" +
    "                                                if (now.getDay() == 0) cl = '<font color=\"#000000\">';\n" +
    "                                                if (now.getDay() == 6) cl = '<font color=\"#000000\">';\n" +
    "                                                return (cl + yy + '年' + mm + '月</font>');\n" +
    "                                            } function Date_of_Today() {\n" +
    "                                                var now = new Date();\n" +
    "                                                var cl = '<font color=\"#000000\">';\n" +
    "                                                if (now.getDay() == 0) cl = '<font color=\"#000000\">';\n" +
    "                                                if (now.getDay() == 6) cl = '<font color=\"#000000\">';\n" +
    "                                                return (cl + now.getDate() + '日</font>');\n" +
    "                                            } function Day_of_Today() {\n" +
    "                                                var day = new Array();\n" +
    "                                                day[0] = \"星期日\";\n" +
    "                                                day[1] = \"星期一\";\n" +
    "                                                day[2] = \"星期二\";\n" +
    "                                                day[3] = \"星期三\";\n" +
    "                                                day[4] = \"星期四\";\n" +
    "                                                day[5] = \"星期五\";\n" +
    "                                                day[6] = \"星期六\";\n" +
    "                                                var now = new Date();\n" +
    "                                                var cl = '<font color=\"#000000\">';\n" +
    "                                                if (now.getDay() == 0) cl = '<font color=\"#000000\">';\n" +
    "                                                if (now.getDay() == 6) cl = '<font color=\"#000000\">';\n" +
    "                                                return (cl + day[now.getDay()] + '</font>');\n" +
    "                                            } function CurentTime() {\n" +
    "                                                var now = new Date();\n" +
    "                                                var hh = now.getHours();\n" +
    "                                                var mm = now.getMinutes();\n" +
    "                                                var ss = now.getTime() % 60000;\n" +
    "                                                ss = (ss - (ss % 1000)) / 1000;\n" +
    "                                                var clock = hh + ':';\n" +
    "                                                if (mm < 10) clock += '0';\n" +
    "                                                clock += mm + ':';\n" +
    "                                                if (ss < 10) clock += '0';\n" +
    "                                                clock += ss;\n" +
    "                                                return (clock);\n" +
    "                                            } function refreshCalendarClock() {\n" +
    "                                                document.all.calendarClock1.innerHTML = Year_Month();\n" +
    "                                                document.all.calendarClock2.innerHTML = Date_of_Today();\n" +
    "                                                document.all.calendarClock3.innerHTML = Day_of_Today();\n" +
    "\n" +
    "                                            }\n" +
    "\n" +
    "                                            document.write('<font id=\"calendarClock1\" style=\"font-family:宋体;font-size:12px;line-height:120%\"> </font>');\n" +
    "                                            document.write('<font id=\"calendarClock2\" style=\"font-family:宋体;font-size:12px;line-height:120%\"> </font><font style=\"font-family:宋体;font-size:12px;line-height:120%\" color=\"#000000\"></font> ');\n" +
    "                                            document.write('<font id=\"calendarClock3\" style=\"font-family:宋体;font-size:12px;line-height:120%\"> </font> ');\n" +
    "\n" +
    "                                            setInterval('refreshCalendarClock()', 1000);\n" +
    "                                                            \n" +
    "                                                            \n" +
    "                                        </script><font id=\"calendarClock1\" style=\"font-family:宋体;font-size:12px;line-height:120%\"><font color=\"#000000\">2018年5月</font></font><font id=\"calendarClock2\" style=\"font-family:宋体;font-size:12px;line-height:120%\"><font color=\"#000000\">8日</font></font><font style=\"font-family:宋体;font-size:12px;line-height:120%\" color=\"#000000\"></font> <font id=\"calendarClock3\" style=\"font-family:宋体;font-size:12px;line-height:120%\"><font color=\"#000000\">星期二</font></font> \n" +
    "                                    </span>\n" +
    "                                </div>\n" +
    "                            </td>\n" +
    "                            <td align=\"right\" width=\"70%\">\n" +
    "                                <table>\n" +
    "                                    <tbody><tr>\n" +
    "                                                                                <td>\n" +
    "                                            <a title=\"用户中心\" href=\"/guide/guideIndex.do\" class=\"orange\">\n" +
    "                                                jiuzhoujunhao_07 ,欢迎您！</a>\n" +
    "                                        </td>\n" +
    "                                        <td>\n" +
    "                                            <div style=\"margin-bottom: 5px\">\n" +
    "                                                <img alt=\"\" src=\"/resources/images/line.gif\" height=\"18\"></div>\n" +
    "                                        </td>\n" +
    "                                        <td>\n" +
    "                                            <a title=\"用户中心\" href=\"/guide/guideIndex.do\" class=\"black\">\n" +
    "                                                用户中心</a>\n" +
    "                                        </td>\n" +
    "                                        <td>\n" +
    "                                            <div style=\"margin-bottom: 5px\">\n" +
    "                                                <img alt=\"\" src=\"/resources/images/line.gif\" height=\"18\"></div>\n" +
    "                                        </td>\n" +
    "                                        <td>\n" +
    "                                            <a title=\"系统消息\" href=\"/guide/guideMessage.do\" class=\"black\">\n" +
    "                                                <span id=\"msgcount\"></span>\n" +
    "                                                <script language=\"javascript\" type=\"text/javascript\">\n" +
    "                                                    getcount();\n" +
    "                                                    function getcount() {\n" +
    "                                                        $.ajax({\n" +
    "                                                            url: '/guideSysmessageCount.do',\n" +
    "                                                            type: 'POST',\n" +
    "                                                            success: function (xml) {\n" +
    "                                                                $(\"#msgcount\").html(xml);\n" +
    "\n" +
    "                                                            },\n" +
    "                                                            error: function () { \n" +
    "                                                            \t $(\"#msgcount\").html(\"系统消息\");\n" +
    "                                                            }\n" +
    "                                                        });\n" +
    "                                                    }\n" +
    "                                                    function logout(){\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t    \t$.ajax({\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t        url: '/guide/guideLogout.do',\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t        type: 'POST',\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t        success: function () { },\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t        error: function () { }\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t    \t}); \n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t    \twindow.location = \"http://www.xmferry.com\";\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t    }\n" +
    "                                                    //setInterval('getcount()', 60000); \n" +
    "                                                </script>\n" +
    "                                            </a>\n" +
    "                                        </td>\n" +
    "                                        <td>\n" +
    "                                            <div style=\"margin-bottom: 5px\">\n" +
    "                                                <img alt=\"\" src=\"/resources/images/line.gif\" height=\"18\"></div>\n" +
    "                                        </td>\n" +
    "                                        <td>\n" +
    "                                            <a href=\"#\" onclick=\"logout()\" class=\"black\">退出</a>\n" +
    "                                        </td>\n" +
    "                                                                            </tr>\n" +
    "                                </tbody></table>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                    </tbody>\n" +
    "                </table>\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "    </tbody>\n" +
    "</table>\n" +
    "<table width=\"1000\" border=\"0\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#EBEBEB\">\n" +
    "    <tbody>\n" +
    "        <tr>\n" +
    "            <td>\n" +
    "                <table width=\"100%\" border=\"0\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" class=\"p12\">\n" +
    "                    <tbody>\n" +
    "                        <tr>\n" +
    "                            <td align=\"center\">\n" +
    "                                <!-- <img src=\"/resources/images/top.jpg\" width=\"1000\"\n" +
    "                                    height=\"180\" alt=\"\" /> -->\n" +
    "                                    <div id=\"main\"><div class=\"box\"><a href=\"http://www.xmferry.com/\" style=\"display: inline-block;\"><img src=\"/templates/upload/7c42ed20-f6ae-4c59-bb8c-0c365d9904e6.jpg\"></a></div><div class=\"page\" style=\"width:undefined;\"><a class=\"active\" href=\"javascript:void(0);\">1</a></div></div>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                        <tr style=\"height: 30px;\">\n" +
    "                            <td>\n" +
    "                                <marquee behavior=\"scroll\" scrollamount=\"2\"><span id=\"prompt\">网上不出售当日船票，请关注“厦门轮渡有限公司”微信公众号或支付宝生活号预订当日船票。2018年春节期间游客航线全部船票在官方网络平台销售。每日上午9：00开放购买15日后船票。23点至5点为系统维护时间，给您带来不便请谅解！&nbsp;</span></marquee>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                    </tbody>\n" +
    "                </table>\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "    </tbody>\n" +
    "</table>\n" +
    "<div id=\"lxwm\" style=\"border-right: 3px double #000000; border-top: 3px double #000000;\n" +
    "    background: #ffffff; border-left: 3px double #000000; border-bottom: 3px double #000000;\n" +
    "    position: absolute; width: 400; height: 300; top: 300px; left: 400px; background-color: #FFFFFF;\n" +
    "    text-align: center; display: none;\">\n" +
    "    <br>\n" +
    "    <br>\n" +
    "    <div style=\"text-align: left; margin-left: 100\">\n" +
    "        <b>厦门轮渡有限公司 </b>\n" +
    "        <br>\n" +
    "        <br>\n" +
    "        地址： 厦门市大中路85号嘉年华1204<br>\n" +
    "        邮编： 361001\n" +
    "        <br>\n" +
    "        传真： 0592-2054873\n" +
    "        <br>\n" +
    "        <br>\n" +
    "        电子邮件：b2c@xmferry.com\n" +
    "        <br>\n" +
    "        咨询电话：0592-2023518, 0592-2054253\n" +
    "        <br>\n" +
    "        (电话咨询服务时间为：周一至周五（节假日除外）上午7:30—11:30 ，下午14:30—17:30（6—9月为15:00—18:00）。)\n" +
    "        <br>\n" +
    "    </div>\n" +
    "    <button onclick=\"show('none');\">\n" +
    "        关闭</button>\n" +
    "</div>\n" +
    "<style type=\"text/css\">\n" +
    "\t\t/* main */\n" +
    "\t\t#main{width:1000px;height:250px;overflow:hidden;position:relative;margin: auto;}\n" +
    "\t\t#main .box{width:1000px;height:250px;box-shadow:0px 0px 5px #ddd;margin:0px auto;overflow:hidden;position:relative;}\n" +
    "\t\t#main .box img{width:1000px;height:250px;position:absolute;left:0px;top:0px;opacity:0;filter:alpha(opacity=0);opacity:1;}\n" +
    "\t\t#main .page{height:22px;position:absolute;bottom:15px;right:50px;}\n" +
    "\t\t#main .page a{display:inline-block;width:22px;height:22px;background:url(/resources/images/num_grey.png) no-repeat 0px 0px;margin:0px 11px;float:left;color:#FFF;text-decoration:none;text-align:center;}\n" +
    "\t\t#main  .page a.active{background:url(/resources/images/num_red.png) no-repeat 0px 0px;}\n" +
    "\t\t#main .box a{display:none;}\n" +
    "</style>\n" +
    "<script type=\"text/javascript\">\n" +
    "//<!--\n" +
    "\tvar time = new Array();\n" +
    "    var msg = '0';\n" +
    "    if (msg != '0') {\n" +
    "        alert(msg);\n" +
    "    }\n" +
    "    //-->\n" +
    "    function show(arg) {\n" +
    "        var lxwm = document.getElementById('lxwm');\n" +
    "        if (lxwm) {\n" +
    "            lxwm.style.display = arg;\n" +
    "        }\n" +
    "    }\n" +
    "    $.ajax({\n" +
    "        url: '/prompt.do',\n" +
    "        type: 'POST',\n" +
    "        success: function (xml) {\n" +
    "            $(\"#prompt\").html(xml);\n" +
    "        },\n" +
    "        error: function () { }\n" +
    "    }); \n" +
    "    \n" +
    "    \n" +
    "    $(function(){\n" +
    "    \t\n" +
    "      \tconsole.log(time);\n" +
    "    \tvar main;\n" +
    "    \tvar url  = new Array();\n" +
    "    \tvar line = new Array();\n" +
    "    \tvar num = new Array();\n" +
    "\t\tconsole.log(\"1\")\n" +
    "\t\tjQuery.ajax({\n" +
    "\t\t\tasync:false,\n" +
    "\t\t\turl: '/picture.do?mode=' + \"购票广告\" ,\n" +
    "\t\t\ttype: 'POST',\n" +
    "\t\t\tasync:false,\n" +
    "\t\t\tsuccess: function (dataObject) {\n" +
    "\t\t\t\tvar json = eval(dataObject);\n" +
    "\t\t\t\tdata = json.content;\n" +
    "\t\t\t\tif(json.code == '0'){\n" +
    "\t\t\t\t\treturn false;\n" +
    "\t\t\t\t}else if(json.code == '1'){\n" +
    "\t\t\t\t\tfor(var i=0;i<data.length;i++){\n" +
    "\t\t\t\t\t\turl[i] = data[i].url;\n" +
    "\t\t\t\t\t}\n" +
    "\t\t\t\t\tfor(var i=0;i<data.length;i++){\n" +
    "\t\t\t\t\t\tline[i] = data[i].line;\n" +
    "\t\t\t\t\t}\n" +
    "\t\t\t\t\tfor(var i=0;i<data.length;i++){\n" +
    "\t\t\t\t\t\tnum[i] = data[i].num;\n" +
    "\t\t\t\t\t}\n" +
    "\t\t\t\t\tfor(var i=0;i<data.length;i++){\n" +
    "\t\t\t\t\t\ttime[i] = data[i].time;\n" +
    "\t\t\t\t\t}\n" +
    "\t\t\t\t\tmain = \"<div class='box'><a href='\" + line[0] +\"' style='display:inline;'>\"+\"<img  src='/\"+url[0]+\"'/></a>\";\n" +
    "\t\t\t\t\tfor(var i=1;i<data.length;i++){\n" +
    "\t\t\t\t\t\tmain += \"<a href= '\"+ line[i] +\"' '><img  src='/\"+ url[i] +\"' /></a>\";\n" +
    "\t\t\t\t\t}\n" +
    "\t\t\t\t\tmain += \"</div><div class='page' style=width:\"+ num[1] +\"; />\"\n" +
    "\t\t\t\t\tmain += \"<a  class='active' href='javascript:void(0);'>\"+1+\"</a>\";\n" +
    "\t\t\t\t\tfor(var i=1;i<data.length;i++){\n" +
    "\t\t\t\t\t\tmain += \"<a href='javascript:void(0);'>\"+(i + 1)+\"</a>\";\n" +
    "\t\t\t\t\t}\n" +
    "\t\t\t\t\tmain += \"</div>\";\n" +
    "\t\t\t\t\tdocument.getElementById('main').innerHTML = main;\n" +
    "\t\t\t\t\treturn true;\n" +
    "\t\t\t\t\tconsole.log(\"success\")\n" +
    "\t\t\t\t}\n" +
    "\t\t\t},\n" +
    "\t\t\terror: function(XMLHttpRequest, textStatus, errorThrown) {\n" +
    "\t\t\t\t //alert(XMLHttpRequest.status);\n" +
    "\t\t\t\t //alert(XMLHttpRequest.readyState);\n" +
    "\t\t\t\t //alert(textStatus);\n" +
    "\t\t\t\t }\n" +
    "\t\t});\n" +
    "\t\tconsole.log(316);\n" +
    "\t\tconsole.log(time);\n" +
    "    \tvar aPage = $('#main .page a');\t\t//分页按钮\n" +
    "    \tvar aImg = $('#main .box a');\t\t//图像集合\n" +
    "    \tvar iSize = aImg.size();\t\t//图像个数\n" +
    "    \tvar index = 0;\t\t//切换索引\n" +
    "    \tvar t;\n" +
    "    \t//分页按钮点击\n" +
    "    \taPage.click(function(){\n" +
    "    \t\tindex = $(this).index();\n" +
    "    \t\tchange(index)\n" +
    "    \t});\n" +
    "    \t//切换过程\n" +
    "    \tfunction change(index){\n" +
    "    \t\taPage.removeClass('active');\n" +
    "    \t\taPage.eq(index).addClass('active');\n" +
    "    \t\taImg.stop();\n" +
    "    \t\t//显示当前图像\n" +
    "    \t\taImg.eq(index).show(500);\n" +
    "    \t\t//隐藏除了当前元素，所以图像\n" +
    "    \t\taImg.eq(index).siblings().hide(500);\n" +
    "    \t\t\n" +
    "    \t}\n" +
    "\n" +
    "    \t \n" +
    "    \tfunction autoshow() {\n" +
    "    \t\tindex=index+1;\n" +
    "    \t\tif(index<=iSize-1){\n" +
    "    \t\t   change(index);\n" +
    "    \t\t}else{\n" +
    "    \t\t\tindex=0;\n" +
    "    \t\t\tchange(index);\n" +
    "    \t\t}\n" +
    "    \t\t\t\n" +
    "    \t}\n" +
    "    \tif(time[0]==null){\n" +
    "    \t\ttime[0]=3000;\n" +
    "    \t}\n" +
    "    \t//console.log(time[0]);\n" +
    "    \tint=setInterval(autoshow,time[0]);\n" +
    "    \tfunction clearInt() {\n" +
    "    \t\t$('.page a').mouseover(function() {\n" +
    "    \t\t\tclearInterval(int);\n" +
    "    \t\t})\n" +
    "    \t\n" +
    "    \t}\n" +
    "    \tfunction setInt() {\n" +
    "    \t\t$('.page a').mouseout(function() {\n" +
    "    \t\t\tint=setInterval(autoshow,3000);\n" +
    "    \t\t})\n" +
    "    \t}\n" +
    "    \tclearInt();\n" +
    "    \tsetInt();\n" +
    "    })\n" +
    "</script>\n" +
    "    <div id=\"content1\" style=\"border-right: 3px outset #ffffff; border-top: 3px outset #ffffff;\n" +
    "        background: #ffffff; border-left: 3px outset #ffffff; border-bottom: 3px outset #ffffff;\n" +
    "        position: absolute; width: 600; heigth: 250; top: 400px; left: 400px; background-color: #0099FF;\n" +
    "        display: none\">\n" +
    "        <div id=\"content\" style=\"margin-top: 10; margin-left: 60;\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <table width=\"1000\" border=\"0\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#FFFFFF\" class=\"p12\">\n" +
    "        <tbody>\n" +
    "            <tr>\n" +
    "                <td width=\"1000\" valign=\"top\">\n" +
    "                    <div class=\"containerWrap_left\">\n" +
    "                    \t<!-- \n" +
    "                        <div>\n" +
    "                            <a href=\"/index.do\" title=\"我要购票\">\n" +
    "                                <img src=\"/resources/images/usercert1.gif\" /></a>\n" +
    "                        </div>\n" +
    "                         -->\n" +
    "                        <div class=\"left_bao\">\n" +
    "                            <div class=\"left_down_z\" id=\"left_down_z\">\n" +
    "                                <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\">\n" +
    "                                    <tbody><tr>\n" +
    "                                        <td class=\"left_12306\">\n" +
    "                                            <img src=\"/resources/images/left_xiao.jpg\">\n" +
    "                                          \t\t  订单中心\n" +
    "                                        </td>\n" +
    "                                    </tr>\n" +
    "                                    \t                                    \t\t                                    <tr>\n" +
    "\t\t                                        <td class=\"text3\">\n" +
    "\t\t                                            <a href=\"/guide/guideQuery.do\" class=\"black\">船票预约</a>\n" +
    "\t\t                                        </td>\n" +
    "\t\t                                    </tr>\n" +
    "\t                                   \t                                    <tr>\n" +
    "                                        <td class=\"text3\">\n" +
    "                                        \t\n" +
    "                                            <a href=\"/guide/queryGuideReserve.do\" class=\"black\">我的预约</a>\n" +
    "                                        </td>\n" +
    "                                    </tr>\n" +
    "                                    <tr>\n" +
    "                                        <td class=\"text3\">\n" +
    "                                            <a href=\"/guide/guideSelect.do\" class=\"black\">我的订单</a>\n" +
    "                                        </td>\n" +
    "                                    </tr>\n" +
    "                                    <tr>\n" +
    "                                        <td class=\"text3\">\n" +
    "                                            <a href=\"queryOrder.do\" class=\"black\">订单总汇</a>\n" +
    "                                        </td>\n" +
    "                                    </tr>\n" +
    "                                  <!-- \n" +
    "                                    <tr>\n" +
    "                                        <td class=\"text3\">\n" +
    "                                            <a href=\"payorder.do\" class=\"black\">已支付订单</a>\n" +
    "                                        </td>\n" +
    "                                    </tr>-->\n" +
    "                                    <tr>\n" +
    "                                        <td class=\"text3\">\n" +
    "                                            <a href=\"/guide/guideReturn.do\" class=\"black\">退票查询</a>\n" +
    "                                        </td>\n" +
    "                                    </tr>\n" +
    "\t\t\t\t\t\t\t\t\t<tr>\n" +
    "                                        <td class=\"text3\">\n" +
    "                                            <a href=\"/test/importbarcodeTest.do\" class=\"black\">导入验证</a>\n" +
    "                                        </td>\n" +
    "                                    </tr>\n" +
    "                                                                        <!-- \n" +
    "\t\t\t\t\t\t\t\t\t\t<tr>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<td class=\"text3\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"change.do\">改签</a>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
    "\t\t\t\t\t\t\t\t\t\t</tr> -->\n" +
    "                                    <tr>\n" +
    "                                        <td class=\"left_12306\">\n" +
    "                                            <img src=\"/resources/images/left_xiao.jpg\">\n" +
    "                                            \t我的信息\n" +
    "                                        </td>\n" +
    "                                    </tr>\n" +
    "                              \n" +
    "                              \t\t<tr>\n" +
    "                                        <td class=\"text3\">\n" +
    "                                            <a href=\"/guide/guideContact.do\" class=\"black\">导游信息</a>\n" +
    "                                        </td>\n" +
    "                                    </tr>\n" +
    "                                \n" +
    "                                    <tr>\n" +
    "                                        <td class=\"text3\">\n" +
    "                                            <a href=\"/guide/guideInfo.do\" class=\"black\">账户资料</a>\n" +
    "                                        </td>\n" +
    "                                    </tr>\n" +
    "                                    <tr>\n" +
    "                                        <td class=\"text3\">\n" +
    "                                            <a href=\"/guide/guideMessage.do\" class=\"black\">系统消息</a>\n" +
    "                                        </td>\n" +
    "                                    </tr>\n" +
    "                                    <tr>\n" +
    "                                        <td class=\"text3\">\n" +
    "                                            <a href=\"/guide/changeGuidePwd.do\" class=\"black\">密码修改</a>\n" +
    "                                        </td>\n" +
    "                                    </tr>\n" +
    "                                    <tr>\n" +
    "                                        <td class=\"text3\">\n" +
    "                                            <a href=\"/guide/guideLogout.do\" class=\"black\">退出登录</a>\n" +
    "                                        </td>\n" +
    "                                    </tr>\n" +
    "                                </tbody></table>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"pim_right\">\n" +
    "\t<table width=\"100%\" border=\"0\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#FFFFFF\" class=\"p12\">\n" +
    "\t\t<tbody>\n" +
    "\t\t\t<tr>\n" +
    "\t\t\t\t<td width=\"100%\" align=\"top\">\n" +
    "\t\t\t\t\t<div class=\"conWrap\">\n" +
    "\t\t\t\t\t\t<div class=\"enter_w\">\n" +
    "\t\t\t\t\t\t\t<!--title -->\n" +
    "\t\t\t\t\t\t\t<div class=\"wc_titlew\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"wc_titleleft\">\n" +
    "\t\t\t\t\t\t\t\t\t<img src=\"/resources/images/10.gif\">\n" +
    "\t\t\t\t\t\t\t\t\t<span class=\"blue\" style=\"font-size: 22px\">船票预定</span>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"wc_titler\"></div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t\t\t\t<!--title end-->\n" +
    "\t\t\t\t\t\t\t<form name=\"save_passenger_single\" id=\"confirmPassenger\" method=\"post\" action=\"submiteOrder.do\">\n" +
    "\t\t\t\t\t\t\t\n" +
    "\n" +
    "\t\t\t\t\t\t\t\t<table width=\"79%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" class=\"table_qr\">\n" +
    "\t\t\t\t\t\t\t\t\t<tbody><tr style=\"font-size: 20px;\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\" align=\"center\" style=\"font-size: 20px;\" class=\"pim_titlef2\">航班信息</td>\n" +
    "\t\t\t\t\t\t\t\t\t</tr>\n" +
    "\t\t\t\t\t\t\t\t\t<tr style=\"background-color: #F3F8FC; font-size: 14px;\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<td class=\"bluetext\" align=\"center\">航线</td>\n" +
    "\t\t\t\t\t\t\t\t\t\t<td class=\"bluetext\" align=\"center\"><font color=\"black\">邮轮中心厦鼓码头-三丘田码头</font></td>\n" +
    "\t\t\t\t\t\t\t\t\t\t<td align=\"center\" class=\"bluetext\">航班号</td>\n" +
    "\t\t\t\t\t\t\t\t\t\t<td class=\"bluetext\" align=\"center\" colspan=\"1\"><input type=\"text\" value=\"DS1130\" readonly=\"readonly\" style=\"text-align: center; background-color: #F3F8FC\"></td>\n" +
    "\t\t\t\t\t\t\t\t\t</tr>\n" +
    "\t\t\t\t\t\t\t\t\t<tr style=\"background-color: #F3F8FC; font-size: 14px;\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<td class=\"bluetext\" align=\"center\">开航时间</td>\n" +
    "\t\t\t\t\t\t\t\t\t\t<td class=\"bluetext\" align=\"center\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<font color=\"black\" id=\"departTimeStr\">2018-05-11  11:30</font>\n" +
    "\t\t\t\t\t\t\t\t\t\t</td>\n" +
    "\t\t\t\t\t\t\t\t\t\t<td align=\"center\" class=\"bluetext\">剩余票数</td>\n" +
    "\t\t\t\t\t\t\t\t\t\t<td class=\"bluetext\" align=\"center\"><input type=\"text\" value=\"233\" readonly=\"readonly\" style=\"text-align: center; background-color: #F3F8FC\"></td>\n" +
    "\t\t\t\t\t\t\t\t\t</tr>\n" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t<tr style=\"font-size: 20px;\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\" align=\"center\" style=\"font-size: 20px;\" class=\"pim_titlef2\">选择船票</td>\n" +
    "\t\t\t\t\t\t\t\t\t</tr>\n" +
    "\t\t\t\t\t\t\t\t\t<tr style=\"background-color: #F3F8FC; font-size: 14px;\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<th class=\"bluetext\" style=\"text-align: center\">门票</th>\n" +
    "\t\t\t\t\t\t\t\t\t\t<th class=\"bluetext\" style=\"text-align: center\">单价</th>\n" +
    "\t\t\t\t\t\t\t\t\t\t<th style=\"text-align: center\" class=\"bluetext\">票数</th>\n" +
    "\t\t\t\t\t\t\t\t\t\t<th class=\"bluetext\" style=\"text-align: center\">金额</th>\n" +
    "\t\t\t\t\t\t\t\t\t</tr>\n" +
    "\t\t\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t\t<tr>\n" +
    "\t\t\t\t\t\t\t\t\t\t<td class=\"bluetext\" align=\"center\">全价票35 <input type=\"hidden\" name=\"ticketName_1\" class=\"input_20txt\" id=\"ticketName_1\" value=\"全价票35\"> <input type=\"hidden\" name=\"ticketId_1\" id=\"ticketId_1\" value=\"9652EE647B814F9A8F79B4061E1FDB2B\"></td>\n" +
    "\t\t\t\t\t\t\t\t\t\t<td class=\"bluetext\" align=\"center\"><input type=\"text\" name=\"price_1\" value=\"35.0\" id=\"price_1\" readonly=\"readonly\" style=\"text-align: center; background-color: #F3F8FC\"></td>\n" +
    "\t\t\t\t\t\t\t\t\t\t<td align=\"center\"><input type=\"text\" name=\"count_1\" value=\"0\" class=\"input_20txt\" id=\"count_1\" oninput=\"ticketCountChange(this,1,false)\" onpropertychange=\"ticketCountChange(this,1,false)\" style=\"text-align: center\"></td> \n" +
    "\t\t\t\t\t\t\t\t\t\t<td class=\"bluetext\" align=\"center\"><input type=\"text\" name=\"totalAmt_1\" id=\"totalAmt_1\" value=\"0\" readonly=\"readonly\" style=\"text-align: center; background-color: #F3F8FC\"></td>\n" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t</tr>\n" +
    "\t\t\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t\t<tr>\n" +
    "\t\t\t\t\t\t\t\t\t\t<td class=\"bluetext\" align=\"center\">儿童半价票18 <input type=\"hidden\" name=\"ticketName_2\" class=\"input_20txt\" id=\"ticketName_2\" value=\"儿童半价票18\"> <input type=\"hidden\" name=\"ticketId_2\" id=\"ticketId_2\" value=\"6FC8D66EC58649DBA31ECC925D15F55F\"></td>\n" +
    "\t\t\t\t\t\t\t\t\t\t<td class=\"bluetext\" align=\"center\"><input type=\"text\" name=\"price_2\" value=\"18.0\" id=\"price_2\" readonly=\"readonly\" style=\"text-align: center; background-color: #F3F8FC\"></td>\n" +
    "\t\t\t\t\t\t\t\t\t\t<td align=\"center\"><input type=\"text\" name=\"count_2\" value=\"0\" class=\"input_20txt\" id=\"count_2\" oninput=\"ticketCountChange(this,2,false)\" onpropertychange=\"ticketCountChange(this,2,false)\" style=\"text-align: center\"></td> \n" +
    "\t\t\t\t\t\t\t\t\t\t<td class=\"bluetext\" align=\"center\"><input type=\"text\" name=\"totalAmt_2\" id=\"totalAmt_2\" value=\"0\" readonly=\"readonly\" style=\"text-align: center; background-color: #F3F8FC\"></td>\n" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t</tr>\n" +
    "\t\t\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t\t<tr>\n" +
    "\t\t\t\t\t\t\t\t\t\t<td class=\"bluetext\" align=\"center\">残军半价票18 <input type=\"hidden\" name=\"ticketName_3\" class=\"input_20txt\" id=\"ticketName_3\" value=\"残军半价票18\"> <input type=\"hidden\" name=\"ticketId_3\" id=\"ticketId_3\" value=\"0CBDC2B874FC4C3FB5F301B033700B79\"></td>\n" +
    "\t\t\t\t\t\t\t\t\t\t<td class=\"bluetext\" align=\"center\"><input type=\"text\" name=\"price_3\" value=\"18.0\" id=\"price_3\" readonly=\"readonly\" style=\"text-align: center; background-color: #F3F8FC\"></td>\n" +
    "\t\t\t\t\t\t\t\t\t\t<td align=\"center\"><input type=\"text\" name=\"count_3\" value=\"0\" class=\"input_20txt\" id=\"count_3\" oninput=\"ticketCountChange(this,3,false)\" onpropertychange=\"ticketCountChange(this,3,false)\" style=\"text-align: center\"></td> \n" +
    "\t\t\t\t\t\t\t\t\t\t<td class=\"bluetext\" align=\"center\"><input type=\"text\" name=\"totalAmt_3\" id=\"totalAmt_3\" value=\"0\" readonly=\"readonly\" style=\"text-align: center; background-color: #F3F8FC\"></td>\n" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t</tr>\n" +
    "\t\t\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t\t<tr>\n" +
    "\t\t\t\t\t\t\t\t\t\t<td class=\"bluetext\" align=\"center\">儿童免费票0 <input type=\"hidden\" name=\"ticketName_4\" class=\"input_20txt\" id=\"ticketName_4\" value=\"儿童免费票0\"> <input type=\"hidden\" name=\"ticketId_4\" id=\"ticketId_4\" value=\"85F0AF3A6C8643DF8D050E41C6CB4B2A\"></td>\n" +
    "\t\t\t\t\t\t\t\t\t\t<td class=\"bluetext\" align=\"center\"><input type=\"text\" name=\"price_4\" value=\"0.0\" id=\"price_4\" readonly=\"readonly\" style=\"text-align: center; background-color: #F3F8FC\"></td>\n" +
    "\t\t\t\t\t\t\t\t\t\t<td align=\"center\"><input type=\"text\" name=\"count_4\" value=\"0\" class=\"input_20txt\" id=\"count_4\" oninput=\"ticketCountChange(this,4,false)\" onpropertychange=\"ticketCountChange(this,4,false)\" style=\"text-align: center\"></td> \n" +
    "\t\t\t\t\t\t\t\t\t\t<td class=\"bluetext\" align=\"center\"><input type=\"text\" name=\"totalAmt_4\" id=\"totalAmt_4\" value=\"0\" readonly=\"readonly\" style=\"text-align: center; background-color: #F3F8FC\"></td>\n" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t</tr>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n" +
    "\t\t\t\t\t\t\t\t\t\t<td class=\"bluetext\" align=\"center\">合计</td>\n" +
    "\t\t\t\t\t\t\t\t\t\t<td class=\"bluetext\" align=\"center\"></td>\n" +
    "\t\t\t\t\t\t\t\t\t\t<td align=\"center\"><input type=\"text\" name=\"ticketCounts\" value=\"0\" id=\"ticketCounts\" readonly=\"readonly\" style=\"text-align: center; background-color: #F3F8FC\"></td>\n" +
    "\n" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<td class=\"bluetext\" align=\"center\"><input type=\"text\" name=\"ticketAmts\" value=\"0\" id=\"ticketAmts\" readonly=\"readonly\" style=\"text-align: center; background-color: #F3F8FC\"></td>\n" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t</tr>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\t\t\t\t\t\t\t\t</tbody></table>\n" +
    "\t\t\t\t\t\t\t\t<div style=\"height: 1px\"></div>\n" +
    "\t\t\t\t\t\t\t\t<table width=\"1000\" border=\"0\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#FFFFFF\" class=\"p12\">\n" +
    "\t\t\t\t\t\t\t\t\t<tbody><tr>\n" +
    "\t\t\t\t\t\t\t\t\t\t<td colspan=\"10\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<div style=\"float: left; width: 200px;\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<font color=\"#FF0000\">*</font>&nbsp;验证码： <input type=\"text\" name=\"randCode\" maxlength=\"4\" tabindex=\"101\" value=\"\" id=\"rand\" style=\"width: 100px;\" class=\"input_20txt\" oninput=\"javascript:checkCode();\" onpropertychange=\"javascript:checkCode();\"> &nbsp;\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<div style=\"float: left; width: 200px; margin-top: 3px;\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/checkCode/generateCode.do\" alt=\"点击刷新\" id=\"checkImage\" style=\"vertical-align: text-bottom; cursor: hand;\" onclick=\"javascript:getCode();\" title=\"单击刷新验证码\"> <a href=\"#\" onclick=\"javascript:getCode();\" class=\"bluetext\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t<u>看不清，换一张</u>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t</a>\n" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<div style=\"float: left; width: 200px; margin-top: 3px;\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<img href=\"#\" id=\"resultCode\" style=\"vertical-align: text-bottom; cursor: hand;\" width=\"0\" height=\"0\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</div></td>\n" +
    "\t\t\t\t\t\t\t\t\t</tr>\n" +
    "\t\t\t\t\t\t\t\t</tbody></table>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"pim_titlef2\" style=\"height: 1px;\"></div>\n" +
    "\t\t\t\t\t\t\t\t<input type=\"hidden\" name=\"token\" value=\"3B0417417D854EC980FED649340F443F\" id=\"token\" readonly=\"readonly\">\n" +
    "\t\t\t\t\t\t\t\t<input type=\"hidden\" name=\"dailyFlightId\" value=\"239738\" id=\"dailyFlightId\" readonly=\"readonly\"> <input type=\"hidden\" value=\"4\" id=\"ticketCount\" name=\"ticketCount\">\n" +
    "\t\t\t\t\t\t\t\t<input type=\"hidden\" value=\"233\" id=\"onLineFreeCount\"> <input type=\"hidden\" value=\"2018-05-11\" id=\"flightDate\"> <input type=\"hidden\" value=\"${ticketMessage}\" id=\"ticketMessage\" name=\"ticketMessage\"> <input type=\"hidden\" value=\"邮轮中心厦鼓码头-三丘田码头\" id=\"flightName\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"tj_btn\" style=\"width: 79%\">\n" +
    "\t\t\t\t\t\t\t\t\t<button type=\"button\" onmouseout=\"this.className='long_button_u'\" class=\"long_button_u\" onclick=\"return confirmSelect('reChooseButton')\" id=\"reChooseButton\" tabindex=\"104\">重新选择</button>\n" +
    "\t\t\t\t\t\t\t\t\t&nbsp;&nbsp;\n" +
    "\t\t\t\t\t\t\t\t\t<button type=\"button\" id=\"btChooseButton\" class=\"long_button_x\" onclick=\"return confirmSubmit(1)\" tabindex=\"102\" disabled=\"true\">支付定金</button>\n" +
    "\t\t\t\t\t\t\t\t\t&nbsp;&nbsp;\n" +
    "\t\t\t\t\t\t\t\t\t<button type=\"button\" id=\"btChooseButton2\" class=\"long_button_x\" onclick=\"return confirmSubmit(2)\" tabindex=\"102\" style=\"width:72px\" disabled=\"true\">支付全款</button>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div style=\"width: 90%;color:red;\">\n" +
    "\t\t\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t\t<ul>\n" +
    "\t\t\t\t\t\t\t\t\t<li>注：</li>\n" +
    "\t\t\t\t\t\t\t\t\t<li>1、若只需先支付预约定金，请填写购票数量后，点击支付定金。</li>\n" +
    "\t\t\t\t\t\t\t\t\t<li>2、若需全额支付订单票款，请点击支付全款。</li>\n" +
    "\t\t\t\t\t\t\t\t\t<li>3、若要选择其他航班，请点击重新选择。</li>\n" +
    "\t\t\t\t\t\t\t\t\t</ul>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</form>\n" +
    "\t\t\t\t\t\t\t<div>\n" +
    "\t\t\t\t\t\t\t\t<script type=\"text/javascript\" src=\"/resources/js/idcard.js\"></script>\n" +
    "\t\t\t\t\t\t\t\t<link rel=\"stylesheet\" href=\"http://e.xmferry.com/resources/js/artDialog/skins/blue.css?4.1.4\"><script type=\"text/javascript\" src=\"/resources/js/artDialog/artDialog.js?skin=blue\"></script>\n" +
    "\t\t\t\t\t\t\t\t<script language=\"javascript\" type=\"text/javascript\">\n" +
    "\tfunction ticketCountChange(obj, $velocityCount,flag) {\n" +
    "\t\tvar o = $(obj).val();\n" +
    "\t\tvar ticketCount = $(\"#ticketCount\").val();\n" +
    "\t\tvar ticketCounts = parseInt(ticketCount);\n" +
    "\t\tif (flag) {\n" +
    "\t\t\tvar count = parseInt(o);\n" +
    "\t\t\tif (count > 1) {\n" +
    "\t\t\t\tshowAlert(\"优惠票只可预订1张\");\n" +
    "\t\t\t\t$(obj).val(1);\n" +
    "\t\t\t\to = \"1\";\n" +
    "\t\t\t}\n" +
    "\t\t}\n" +
    "\t\tif (!isNaN(o)) {\n" +
    "\t\t\tvar ticketcount = parseInt(o);\n" +
    "\t\t\tif (ticketcount >= 0) {\n" +
    "\t\t\t\t$(obj).val(ticketcount);\n" +
    "\t\t\t\t$(\"#totalAmt_\" + $velocityCount).val(ticketcount * $(\"#price_\" + $velocityCount).val());\n" +
    "\t\t\t\tvar ticketTotalCount = 0;\n" +
    "\t\t\t\tvar amt = 0;\n" +
    "\t\t\t\tfor ( var i = 1; i <= ticketCounts; i++) {\n" +
    "\t\t\t\t\tticketTotalCount += parseInt($(\"#count_\" + i).val());\n" +
    "\t\t\t\t\tamt += parseInt($(\"#totalAmt_\" + i).val());\n" +
    "\t\t\t\t}\n" +
    "\t\t\t\t$(\"#ticketCounts\").val(ticketTotalCount);\n" +
    "\t\t\t\t$(\"#ticketAmts\").val(amt);\n" +
    "\t\t\t} else {\n" +
    "\t\t\t\t$(\"#count_\"+$velocityCount).val(0);\n" +
    "\t\t\t\tvar ticketTotalCount = 0;\n" +
    "\t\t\t\tvar amt = 0;\n" +
    "\t\t\t\tfor ( var i = 1; i <= ticketCounts; i++) {\n" +
    "\t\t\t\t\tticketTotalCount += parseInt($(\"#count_\" + i).val());\n" +
    "\t\t\t\t\tamt += parseInt($(\"#totalAmt_\" + i).val());\n" +
    "\t\t\t\t}\n" +
    "\t\t\t\t$(\"#ticketCounts\").val(ticketTotalCount);\n" +
    "\t\t\t\t$(\"#ticketAmts\").val(amt);\n" +
    "\t\t\t\treturn;\n" +
    "\t\t\t}\n" +
    "\t\t} else {\n" +
    "\t\t\t$(\"#count_\"+$velocityCount).val(0);\n" +
    "\t\t\tvar ticketTotalCount = 0;\n" +
    "\t\t\t\tvar amt = 0;\n" +
    "\t\t\t\tfor ( var i = 1; i <= ticketCounts; i++) {\n" +
    "\t\t\t\t\tticketTotalCount += parseInt($(\"#count_\" + i).val());\n" +
    "\t\t\t\t\tamt += parseInt($(\"#totalAmt_\" + i).val());\n" +
    "\t\t\t\t}\n" +
    "\t\t\t\t$(\"#ticketCounts\").val(ticketTotalCount);\n" +
    "\t\t\t\t$(\"#ticketAmts\").val(amt);\n" +
    "\t\t\t\n" +
    "\t\t\treturn;\n" +
    "\t\t}\n" +
    "\n" +
    "\t}\n" +
    "\t\n" +
    "\t\n" +
    "\tfunction getCode() {\n" +
    "\t\tdocument.getElementById('checkImage').src = '/checkCode/generateCode.do?time=' + new Date();\n" +
    "\t}\n" +
    "\tfunction checkCode() {\n" +
    "\t\t\t\t var code=jQuery(\"#rand\").val();\n" +
    "\t\t\t   if(code.length!=4){\n" +
    "\t\t\t   \tjQuery(\"#resultCode\").attr(\"width\", \"20px\");\n" +
    "\t\t\t\t\t\t\tjQuery(\"#resultCode\").attr(\"height\", \"20px\");\n" +
    "\t\t\t\t\t\t\tjQuery(\"#resultCode\")\n" +
    "\t\t\t\t\t\t\t\t\t.attr(\"src\",\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\"/resources/images/tools_ico2.gif\");\n" +
    "\t\t\t\t\t\t\t$(\"#btChooseButton\").attr(\"disabled\", true);\n" +
    "\t\t\t\t\t\t\t$(\"#btChooseButton\").attr(\"class\", \"long_button_x\");\n" +
    "\t\t\t\t\t\t\t$(\"#btChooseButton2\").attr(\"disabled\", true);\n" +
    "\t\t\t\t\t\t\t$(\"#btChooseButton2\").attr(\"class\", \"long_button_x\");\n" +
    "\t\t\t     return;\n" +
    "\t\t\t   }\n" +
    "\t\t$.ajax( {\n" +
    "\t\t\t\t\turl : 'checkCode.do?randCheckCode=' + jQuery(\"#rand\").val(),\n" +
    "\t\t\t\t\ttype : 'POST',\n" +
    "\t\t\t\t\tsuccess : function(xml) {\n" +
    "\t\t\t\t\t\tif (xml == \"1\") {\n" +
    "\t\t\t\t\t\t\tjQuery(\"#resultCode\").attr(\"width\", \"20px\");\n" +
    "\t\t\t\t\t\t\tjQuery(\"#resultCode\").attr(\"height\", \"20px\");\n" +
    "\t\t\t\t\t\t\tjQuery(\"#resultCode\")\n" +
    "\t\t\t\t\t\t\t\t\t.attr(\"src\",\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\"/resources/images/succde_pic.jpg\");\n" +
    "\t\t\t\t\t\t\t$(\"#btChooseButton\").attr(\"disabled\", false);\n" +
    "\t\t\t\t\t\t\t$(\"#btChooseButton\").attr(\"class\", \"long_button_u\");\n" +
    "\t\t\t\t\t\t\t$(\"#btChooseButton2\").attr(\"disabled\", false);\n" +
    "\t\t\t\t\t\t\t$(\"#btChooseButton2\").attr(\"class\", \"long_button_u\");\n" +
    "\n" +
    "\t\t\t\t\t\t}\n" +
    "\t\t\t\t\t\tif (xml == \"0\") {\n" +
    "\t\t\t\t\t\t\tjQuery(\"#resultCode\").attr(\"width\", \"20px\");\n" +
    "\t\t\t\t\t\t\tjQuery(\"#resultCode\").attr(\"height\", \"20px\");\n" +
    "\t\t\t\t\t\t\tjQuery(\"#resultCode\")\n" +
    "\t\t\t\t\t\t\t\t\t.attr(\"src\",\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\"/resources/images/tools_ico2.gif\");\n" +
    "\t\t\t\t\t\t\t$(\"#btChooseButton\").attr(\"disabled\", true);\n" +
    "\t\t\t\t\t\t\t$(\"#btChooseButton\").attr(\"class\", \"long_button_x\");\n" +
    "\t\t\t\t\t\t\t$(\"#btChooseButton2\").attr(\"disabled\", true);\n" +
    "\t\t\t\t\t\t\t$(\"#btChooseButton2\").attr(\"class\", \"long_button_x\");\n" +
    "\n" +
    "\t\t\t\t\t\t}\n" +
    "\t\t\t\t\t}\n" +
    "\t\t\t\t});\n" +
    "\t}\n" +
    "\t//重新选择\n" +
    "\tfunction cancelToQuery() {\n" +
    "\t\tvar form = document.getElementById(\"confirmPassenger\");\n" +
    "\t\tform.action = \"/guide/guideQuery.do\";\n" +
    "\t\tform.submit();\n" +
    "\t}\n" +
    "\t//确认是否重新选择\n" +
    "\tfunction confirmSelect(formId) {\n" +
    "\t\tart.dialog({\n" +
    "\t\t\topacity : 0.87, // 透明度\n" +
    "\t\t\tlock : true,\n" +
    "\t\t\tbackground : '#cccccc',\n" +
    "\t\t\ttitle : '消息',\n" +
    "\t\t\tcontent : \"<div style='font-size:25px'>重新选择将取消您的订单，是否继续?</div>\",\n" +
    "\t\t\tok : function() {\n" +
    "\t\t\t\t$(\":button\").attr(\"disabled\", true);\n" +
    "\t\t\t\t$(\":button\").addClass(\"long_button_x\");\n" +
    "\t\t\t\tcancelToQuery();\n" +
    "\t\t\t\treturn false;\n" +
    "\t\t\t},\n" +
    "\t\t\tcancel : true\n" +
    "\t\t});\n" +
    "\t\t\n" +
    "\t}\n" +
    "\n" +
    "\t// 提交订单\n" +
    "\tfunction sumitOrder() {\n" +
    "\t\t$(\":button\").attr(\"disabled\", true);\n" +
    "\t\t$(\":button\").attr(\"class\", \"long_button_x\");\n" +
    "\t\tvar form = document.getElementById(\"confirmPassenger\");\n" +
    "\t\tform.action = \"submiteGuideOrder.do\";\n" +
    "\t\tform.submit();\n" +
    "\t}\n" +
    "\n" +
    "\tfunction confirmSubmit(obj) {\n" +
    "\t\tvar date = new Date();\n" +
    "\t\tvar hour = date.getHours();\n" +
    "\t\t\tvar idNumbers = \"\";\n" +
    "\t\tvar dailyFlightId = $(\"#dailyFlightId\").val();\n" +
    "\t\tvar flightDate = $(\"#flightDate\").val();\n" +
    "\t\tvar ticketCount = $(\"#ticketCount\").val();\n" +
    "\t\tvar ticketCounts = parseInt(ticketCount);\n" +
    "\t\tvar ticketTotalCount = $(\"#ticketCounts\").val();\n" +
    "\t\tvar childTotalCount = 0;\n" +
    "\t\tvar totalAmt = $(\"#ticketAmts\").val();\n" +
    "\t\tvar onLineFreeCount = $(\"#onLineFreeCount\").val();\n" +
    "\t\tif ((parseInt(ticketTotalCount)) < 1) {\n" +
    "\t\t\tshowAlert(\"预约至少选择1张票\");\n" +
    "\t\t\treturn;\n" +
    "\t\t}\n" +
    "\t\tif (parseInt(onLineFreeCount) < (parseInt(ticketTotalCount))) {\n" +
    "\t\t\tshowAlert(\"剩余票数不足\");\n" +
    "\t\t\treturn;\n" +
    "\t\t}\n" +
    "\t\tvar ticketCount = $(\"#ticketCount\").val();\n" +
    "\t\tvar ticketCounts = parseInt(ticketCount);\n" +
    "\t\tvar tourTotalCount = 0;\n" +
    "\t\tvar discountCount=0;\n" +
    "\t\t\n" +
    "\t\tfor ( var i = 1; i <= ticketCounts; i++) {\n" +
    "\t\t if($(\"#ticketName_\" + i).val().indexOf(\"免费\")>=0){\n" +
    "\t\t\t discountCount+=parseInt($(\"#count_\" + i).val());\n" +
    "\t\t }else{\n" +
    "\t\t\t tourTotalCount += parseInt($(\"#count_\" + i).val());\n" +
    "\t\t }\n" +
    "\t\t}\n" +
    "\t\tif (discountCount > tourTotalCount) {\n" +
    "\t\t\tshowAlert(\"免费儿童数量不能大于成人数量\");\n" +
    "\t\t\treturn;\n" +
    "\t\t}\n" +
    "\t\t\n" +
    "\t\tvar ticketMessage = \"\";\n" +
    "\t\tfor ( var i = 1; i <= ticketCounts; i++) {\n" +
    "\t\t\tif (parseInt($(\"#count_\" + i).val()) > 0) {\n" +
    "\t\t\t\tticketMessage += $(\"#ticketId_\" + i).val();\n" +
    "\t\t\t\tticketMessage += \";\";\n" +
    "\t\t\t\tticketMessage += $(\"#count_\" + i).val();\n" +
    "\t\t\t\tticketMessage += \"=\";\n" +
    "\t\t\t}\n" +
    "\t\t}\n" +
    "\t\t$(\"#ticketMessage\").val(ticketMessage);\n" +
    "\t\tart.dialog( {\n" +
    "\t\t\t\t\t\topacity : 0.87, // 透明度\n" +
    "\t\t\t\t\t\tlock : true,\n" +
    "\t\t\t\t\t\tbackground : '#cccccc',\n" +
    "\t\t\t\t\t\ttitle : '确定提交预约订单?',\n" +
    "\t\t\t\t\t\tcontent : \"<div style='font-size:25px'>订单信息：<br/><br/>航线：邮轮中心厦鼓码头-三丘田码头<br/><br/>开航时间:2018-05-11  11:30<br/><br/>航班号：DS1130<br/><br/>购票总人数：\"+ticketTotalCount+\"人<br/><br/>金额：\"+totalAmt+\"元</div>\",\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\ticon : 'succeed',\n" +
    "\t\t\t\t\t\tok : function() {\n" +
    "\t\t\t\t\t\t\tvar form = document.getElementById(\"confirmPassenger\");\n" +
    "\t\t\t\t\t\t\tif (obj == 1) {\n" +
    "\t\t\t\t\t\t\t\tform.action = \"submitGuideReserve.do\";\n" +
    "\t\t\t\t\t\t\t} else {\n" +
    "\t\t\t\t\t\t\t\tform.action = \"submitAndbuy.do\";\n" +
    "\t\t\t\t\t\t\t}\n" +
    "\t\t\t\t\t\t\tform.submit();\n" +
    "\t\t\t\t\t\t\treturn false;\n" +
    "\t\t\t\t\t\t},\n" +
    "\t\t\t\t\t\tcancel : true\n" +
    "\t\t\t\t\t});\n" +
    "\t\n" +
    "\t}\n" +
    "\t\n" +
    "function showAlert(msg){\n" +
    "\tart.dialog({\n" +
    "\t\topacity : 0.87, // 透明度\n" +
    "\t\tlock : true,\n" +
    "\t\tbackground : '#cccccc',\n" +
    "\t\ttitle : '消息',\n" +
    "\t\ticon: 'error', \n" +
    "\t\tcontent : \"<div style='font-size:25px'>\"+msg + \"</div>\",\n" +
    "\t\tok : function() {\n" +
    "\t\t\treturn true;\n" +
    "\t\t}\n" +
    "\t});\n" +
    "}\n" +
    "\n" +
    "//页面加载后执行\n" +
    "window.onload=function(){\n" +
    "\tvar time = $(\"#departTimeStr\").text();//获取当前航班开航时间\n" +
    "\tvar date = new Date();\n" +
    "\tvar year=date.getFullYear(); //获取当前年份\n" +
    "    var mon=date.getMonth()+1; //获取当前月份\n" +
    "\tvar da=date.getDate(); //获取当前日\n" +
    "\tvar h=date.getHours(); //获取小时\n" +
    "\tvar m=date.getMinutes(); //获取分钟\n" +
    "\tdate = year+'-0'+mon+'-0'+da+'  '+h+':'+m;\n" +
    "\n" +
    "\tvar date1 = new Date(time);\n" +
    "\tvar date2 = new Date(date);\n" +
    "    //console.log(time);\n" +
    "    //console.log(date);\n" +
    "    //console.log(date1);\n" +
    "    //console.log(date2);\n" +
    "    var a =Math.abs(date1-date2);//计算当前时间与开航时间的毫秒数相差值\n" +
    "    //console.log(a);\n" +
    "    var b = 1000*24*60*60;//一天的毫秒数\n" +
    "    //console.log(b);\n" +
    "    if(a>b){\n" +
    "    \tconsole.log(1);//正常\n" +
    "    }else{\n" +
    "    \tconsole.log(2);//小于24小时 定金支付按钮隐藏\n" +
    "    \t$(\"#btChooseButton\").hide();\n" +
    "    }\n" +
    "}\n" +
    "\n" +
    "</script>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div></td>\n" +
    "\t\t\t</tr>\n" +
    "\t\t</tbody>\n" +
    "\t</table>\n" +
    "</div>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <style>\n" +
    "#footDiv {\n" +
    "\theight: 146px;\n" +
    "\twidth: 100%;\n" +
    "\ttext-align: center;\n" +
    "\tfont-size:14px;\n" +
    "}\n" +
    "#footDiv div:first-child {\n" +
    "\tmargin-top: 30px;\n" +
    "\tmargin-bottom: 10px;\n" +
    "}\n" +
    "\n" +
    "#footDiv div:first-child a {\n" +
    "\tcolor: black;\n" +
    "}\n" +
    "\n" +
    "#footDiv div:first-child span {\n" +
    "\tmargin-left: 15px;\n" +
    "\tmargin-right: 15px;\n" +
    "}\n" +
    "</style>\n" +
    "<table width=\"84%\" border=\"0\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" style=\"background-image: url(/resources/images/line_bg.jpg)\">\n" +
    "    <tbody><tr>\n" +
    "        <td style=\"height: 8px;\">\n" +
    "        </td>\n" +
    "    </tr>\n" +
    "</tbody></table>\n" +
    "<div id=\"footDiv\">\n" +
    "\t<div>\n" +
    "\t\t<a href=\"http://www.xmferry.com/\" target=\"_blank\">轮渡公司</a><span>|</span>\n" +
    "\t\t<a href=\"http://www.xmferry.com/wshgp/wshgpxzh/\" target=\"_blank\">网上购票流程</a><span>|</span>\n" +
    "\t\t<a href=\"http://www.xmferry.com/wybm/wshlk/xchgpp/index.htm\" target=\"_blank\">常见问题</a><span>|</span>\n" +
    "\t\t<a href=\"http://www.xmferry.com/hxjpj/yk/gd/\" target=\"_blank\">相关规定</a><span>|</span>\n" +
    "\t\t<a href=\"http://www.xmferry.com/lxwm/lxfsh/index.htm\" target=\"_blank\">联系我们</a>\n" +
    "\t</div>\n" +
    "\t<div>\n" +
    "\t\t\n" +
    "\t\t<a href=\"http://www.miibeian.gov.cn/publish/query/indexFirst.action\" style=\"color: black; margin-left: 5px;\" target=\"_bank\">闽ICP备11023887号-2</a>\n" +
    "\t\t&nbsp;&nbsp;\n" +
    "\t\t<a target=\"_blank\" href=\"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=35020602000832\" style=\"display:inline;text-decoration:none;height:20px;line-height:20px;\">\n" +
    "\t\t \t\t<img src=\"/resources/images/ba.png\">\n" +
    "\t\t \t\t闽公网安备 35020602000832号</a>\n" +
    "\t</div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "</body></html>"

let trs = $('.table_qr tr', html)
console.log($('#ticketName_1', html).attr('value'))
// console.log($(trs[5]).find('input[id="ticketName_1"]').attr('id'))
console.log($('#token', html).attr('value'))