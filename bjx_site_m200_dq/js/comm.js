(/debug=bjx_cc_369/.test(location.search)||/Show-Debug=bjx_cc_369/.test(document.cookie))&&$.getScript("https://cdn.jsdelivr.net/npm/vconsole/dist/vconsole.min.js",function(){new VConsole}),function(){function e(t,n){n=n||{};var e={title:"",msg:"",btn1_txt:"确定",btn1_fun:function(){},btn2_txt:"取消",btn2_fun:function(){}};function i(t){if("string"!=typeof t)return"";var n=Object.keys||function(t){var n,e=[];for(n in t=Object(t))e.push(n);return e},e={"&":"&amp;",'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;"},n=new RegExp("["+n(e).join("")+"]","g");return t.replace(n,function(t){return e[t]})}$.extend(e,n);var o,s,c=$('<div class="cc-msg-popup"></div>'),a=$('<div class="box"></div>'),r=$('<div class="close">×</div>'),d=$('<div class="title">'+i(e.title)+"</div>"),u=$('<div class="msg">'+i(e.msg)+"</div>"),p=$('<button class="confirm">'+i(e.btn1_txt)+"</button>"),n=$('<button class="cancel">'+i(e.btn2_txt)+"</button>"),l=function(){$(o).remove()};return(o=c).dblclick(function(){l(),e.btn2_fun()}),a.dblclick(function(t){t.stopPropagation()}),r.click(function(){l(),e.btn2_fun()}),p.click(function(){l(),e.btn1_fun()}),n.click(function(){l(),e.btn2_fun()}),1===t?s=$('<div class="btn"></div>').append(p):2===t&&(s=$('<div class="btn"></div>').append(n).append(p)),a.append(r).append(d).append(u).append(s).appendTo(c),$("html").append(c),c}window.net_loading=function(){var t=$("<div class='cc-loading'><div><img src='https://static.bjx.com.cn/public/a210310/bjx_site_m200_dq/img/loading.gif?v=2'><p>努力加载中</p></div>");return $("html").append(t),t},window.msg_alert=function(t,n){if(t)return(n=n||{}).msg=t,e(1,n)},window.msg_confirm=function(t,n){if(t)return(n=n||{}).msg=t,e(2,n)},window.msg_hint=function(t,n){if(n=n||{},t=t||""){var e={type:"",duration:3e3};$.extend(e,n);var i=$('<div class="cc-msg-hint slideInDown"></div>');return("success"===e.type?$('<div class="box success"><div class="msg"><i class="iconfont icon-success"></i><p>'+o(t)+"</p></div></div>"):"warning"===e.type?$('<div class="box warning"><div class="msg"><i class="iconfont icon-warning"></i><p>'+o(t)+"</p></div></div>"):"error"===e.type?$('<div class="box error"><div class="msg"><i class="iconfont icon-error"></i><p>'+o(t)+"</p></div></div>"):$('<div class="box info"><div class="msg"><i class="iconfont icon-info"></i><p>'+o(t)+"</p></div></div>")).appendTo(i),$("html").append(i),e.duration&&setTimeout(function(){i.removeClass("slideInDown").addClass("slideOutUp"),setTimeout(function(){i.remove()},600)},e.duration),i}function o(t){if("string"!=typeof t)return"";var n=Object.keys||function(t){var n,e=[];for(n in t=Object(t))e.push(n);return e},e={"&":"&amp;",'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;"},n=new RegExp("["+n(e).join("")+"]","g");return t.replace(n,function(t){return e[t]})}},window.msg_tips=function(t,n){if(n=n||{},t=t||""){var e={duration:3e3};$.extend(e,n);var i=$('<div class="cc-msg-tips"></div>');return $('<div class="box"><div class="msg"><p>'+function(t){if("string"!=typeof t)return"";var n=Object.keys||function(t){var n,e=[];for(n in t=Object(t))e.push(n);return e},e={"&":"&amp;",'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;"},n=new RegExp("["+n(e).join("")+"]","g");return t.replace(n,function(t){return e[t]})}(t)+"</p></div></div>").appendTo(i),$("html").append(i),e.duration&&setTimeout(function(){setTimeout(function(){i.remove()},600)},e.duration),i}}}(),window.addEventListener("storage",function(t){if("bjx_user_info"===t.key&&t.newValue){var n={};try{n=JSON.parse(t.newValue)}catch(t){}n.UId?(o=$(".bjx-header .js-login")).length&&$.get("/api/get_login_info",function(t,n,e){/text\/html/.test(e.getResponseHeader("content-type"))&&o.replaceWith(t)}):(i=$(".bjx-header .js-logined")).length&&$.get("/api/get_login_info",function(t,n,e){/text\/html/.test(e.getResponseHeader("content-type"))&&i.replaceWith(t)}),$(".js-op-login-ifr").remove(),$(".js-op-logout-ifr").remove()}var i,o}),$.ajaxSetup({success:function(t,n,e){/application\/json/.test(e.getResponseHeader("content-type"))&&(window.set_op_logout||!t.set_op_logout&&"set_op_logout"!==t.extra||((t=window.document.createElement("script")).src="/oidc/set_op_logout",window.document.body.appendChild(t)))}}),$(document).on("click","a",function(t){var n=$(this).data("url")||"";"nofollow"===$(this).attr("rel")&&n&&(t.preventDefault(),"_blank"===$(this).attr("target")?window.open(n):location.href=n)}),$(function(){$(document).on("click",".js-logined > p",function(t){t.stopPropagation();t=$(this).siblings("div");t.is(":visible")?t.hide():t.show()}),$(document).on("click",function(){$(".js-logined > div").hide()})}),$(document).on("mousedown",".js-track a",function(t){var n=$(this).parents(".js-track"),e=n.data("ba")||"",i=$(this).data("bp")||n.data("bp")||"",o=$(this).attr("href"),n=/notrack/.test(this.rel)||this.hasAttribute("notrack");e&&!n&&!/ba=(.*)|bp=(.*)/.test(o)&&/\/vip\/|\/companys\/\d+\.html|\/jobs\/\d+\.html/.test(o)&&(i=o+(/\?/.test(o)?"&":"?")+"ba="+e+(i?"&bp="+i:""),$(this).attr("href",i))}),function(){function n(t){t?$("body").css({overflow:"auto"}):$("body").css({overflow:"hidden"})}var e=null;$(".bjx-header .menu > span").on("click",function(){clearTimeout(e),$(this).siblings(".sites").removeClass("fadeOutLeft").addClass("fadeInLeft").show(),n()}),$(".bjx-header .menu .sites .cap .icon-guanbi").on("click",function(){clearTimeout(e);var t=$(this).parents(".sites");t.removeClass("fadeInLeft").addClass("fadeOutLeft"),e=setTimeout(function(){t.hide()},500),n(1)})}(),function(){var i;/bjx:uid=\d+/.test(document.cookie)?(i=$(".bjx-header .js-login")).length&&$.get("/api/get_login_info",function(t,n,e){/text\/html/.test(e.getResponseHeader("content-type"))&&i.replaceWith(t)}):($(function(){var t;window.set_op_logout||window.check_op_login||((t=window.document.createElement("script")).src="/oidc/check_op_login",window.document.body.appendChild(t))}),$(".bjx-cover").show())}(),function(){var n;/MicroMessenger/i.test(navigator.userAgent)&&(n=/debug=bjx_cc_369/.test(location.search)||/Show-Debug=bjx_cc_369/.test(document.cookie),$.getScript("https://res.wx.qq.com/open/js/jweixin-1.6.0.js",function(){$.getJSON("https://hr.bjx.com.cn/api/weixin_info/?callback=?",{url:encodeURIComponent(location.href.split("#")[0])},function(t){n&&console.log(t),1==t.status&&(wx.config({debug:n,appId:t.data.appId,timestamp:t.data.timestamp,nonceStr:t.data.nonceStr,signature:t.data.signature,jsApiList:["updateAppMessageShareData","updateTimelineShareData"]}),wx.ready(function(){var t,n,e,i;t=document.title,n=$("meta[name=Description]").attr("content"),e=location.href,i=$(".share2app img")[0].src.replace("app_logo","app_logo_300"),wx.updateAppMessageShareData({title:t,desc:n,link:e,imgUrl:i,success:function(){}}),wx.updateTimelineShareData({title:t,desc:n,link:e,imgUrl:i,success:function(){}})}),wx.error(function(t){n&&console.error(t),$.getJSON("https://hr.bjx.com.cn/api/weixin_info_clear/?callback=?")}))})}))}();