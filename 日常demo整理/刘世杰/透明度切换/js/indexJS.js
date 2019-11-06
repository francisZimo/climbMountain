// 轮播图片封装函数-start
    $.fn.extend({
        tmdqh:function (){
            var x=0;
            var timer1=null;
            var $_this=$(this);//指向父级
            // 第1步：点击左边
            $_this.find('.left').click(function (){
                clearInterval(timer1);
                x--;
                if (x<0) {
                    x=$_this.find('ul li').length-1;
                };
                bian();
                autoMove();
            });
            // 第2步：点击右边
            $_this.find('.right').click(function (){
                clearInterval(timer1);
                x++;
                if (x>=$_this.find('ul li').length) {
                    x=0;
                };
                bian();
                autoMove();
            });
            // 第4步：自动轮播
            function autoMove(){
                timer1=setInterval(function (){
                    x++;
                    if (x>=$_this.find('ul li').length) {
                        x=0;
                    };
                    bian();
                },2000);
            }
            autoMove();//进入页面执行
            // 第5步：提取公用部分
            function bian(){
                // $_this.find('li').eq(x).fadeIn().siblings().hide();
                $_this.find('li').eq(x).addClass('show').siblings().removeClass('show');
            }
        }
    })
// 轮播图片封装函数-end
$(function () {
    // lunbo_1轮播实例化
    $('.lunbo_1').tmdqh();
    // lunbo_2轮播实例化
    $('.lunbo_2').tmdqh();
    // lunbo_3轮播实例化
    $('.lunbo_3').tmdqh();
})