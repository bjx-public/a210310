function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(){function t(){var t,e=/bjx:nonce=([^;]+)/.exec(document.cookie);e&&e[1]&&(e=(t=Date.now())+ +e[1],$.ajax({url:"/api/get_rand",type:"POST",data:{t:t,r:e},cache:!1}).done(function(t){}))}function e(t,e,a){t&&e&&(this.loading=0,this.xpath=t||"",this.api=e||"",this.opts=a||"",this.init())}t(),setInterval(t,18e4);var i=new(e.prototype.init=function(){this.$dom=$(this.xpath);var t=this.$dom.data()||{},e=this.opts||{};this.paging=this.$dom.find(".js-paging").data("paging")||"",this.ldimg=e.ldimg||t.ldimg||"",this.type=e.type||t.type||"POST",this.data={},this.data_extend="",t.data&&("object"===_typeof(t.data)?$.extend(this.data,t.data):"string"==typeof t.data&&(this.data_extend=t.data)),e.data&&("object"===_typeof(e.data)?$.extend(this.data,e.data):"string"==typeof e.data&&(this.data_extend=e.data))},e.prototype.setLoading=function(t){this.loading=t||0,this.$dom.find(".more").remove(),t&&this.$dom.append('<div class="more"><img src="'+this.ldimg+'"></div>')},e.prototype.setEnded=function(t){this.$dom.find(".more").remove(),t&&this.$dom.append('<div class="more"><p>暂无更多数据</p></div>')},e.prototype.getMore=function(o,i){if(!this.loading&&(this.loading=1,o||!this.$dom.has(".empty").length)){var t=1;if(!o&&this.paging){if(!(this.paging.PageIndex+1<=this.paging.TotalPage))return void this.setEnded(1);t=this.paging.PageIndex=this.paging.PageIndex+1}this.setLoading(1);var d=this,e=$.extend({},this.data);$.extend(e,window[this.data_extend]),$.extend(e,{index:t}),$.ajax({url:this.api,type:this.type,data:e,cache:!1}).done(function(t,e,a){if(/html/.test(a.getResponseHeader("content-type"))){var i=$(t);0<i.children().length?(d.paging=i.filter(".js-paging").data("paging")||"",o?d.$dom.html(i):d.$dom.append(i),d.setLoading(0)):d.setEnded(1)}else if(/json/.test(a.getResponseHeader("content-type")))try{var n;600===(t=JSON.parse(t)).status?msg_confirm("登录后才能进行相关操作",{btn1_txt:"马上登录",btn1_fun:function(){location.href="/oidc/login/"}}):601===t.status?location.href=t.data:(n=t.data&&t.data.Error?t.data.Error:t.message,msg_alert(n))}catch(t){}}).always(function(t,e,a){if(i)try{i(t,e,a)}catch(t){}})}},e)(".bjx-ztList .body","./",{type:"GET",data:{ajax:1}});$(function(){$(window).on("resize scroll",function(){var t=$(window).height(),e=$(window).scrollTop();$(document).height()-50<=e+t&&i&&i.getMore()})}),$(".bjx-ztList .head b").on("click",function(t){var e,a;$(this).hasClass("check")||($(this).addClass("check").siblings("b").removeClass("check"),e=net_loading(),a=$(this).data("args"),i.data.industry=+a.IndustryID,i.data.depth=+a.Depth,history.pushState(null,null,"?industry="+a.IndustryID+"&depth="+a.Depth),i.getMore(1,function(){e.remove()}))})}();