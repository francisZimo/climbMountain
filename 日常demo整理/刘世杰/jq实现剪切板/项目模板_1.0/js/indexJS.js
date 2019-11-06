// $(document).ready(function(){
//     $("#copy_button").zclip({
//         path: "./js/ZeroClipboard.swf",
//         copy: function(){
//         return $("#copy_text").val();
//         },
//         afterCopy:function(){/* 复制成功后的操作 */
//             var $code=$("#copy_text").val();
//             var fade_node="<div class='copy-tips'><div class='copy-tips-wrap'>"+'code: ' + $code + ' has been copied'+"</div></div>";
//             var $copysuc = $(fade_node);
//             $("body").find(".copy-tips").remove().end().append($copysuc);
//             $(".copy-tips").fadeOut(2500);
//         }
//     });
// });

$(function () {
	$('#copy_button').zclip({
		path:'./js/ZeroClipboard.swf',
		copy:function () {
			return $('#copy_text').val();
		},
		afterCopy:function () {
			alert('您已复制"'+$('#copy_text').val()+'"到剪切板');
		}
	})
})

// 配置说明
// path:swf的路径(复制主要是用flash解决不同浏览器的复制)
// copy:待复制的内容, 可以是静态内容, 也可以 return 动态内容
// beforeCopy:复制之前要做的function;
// afterCopy:复制之后要做的function;
// 提供了3个方法
// show:$(selected).zclip('show');//复制功能有效
// hide:$(selected).zclip('hide');//复制功能无效
// remove:$(selected).zclip('remove');//完全移除复制功能


兼容：
// 我自己测试发现，opera和safari需要flash插件才能生效，火狐直接就没提示要下flash插件也不能用，手机还没测试