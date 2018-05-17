$(function () {
    //  判断是否登录
    $.ajax({
        url: '/employee/checkRootLogin',
        success: function (backData) {
            if (backData.error == 400) {
                window.location.href = './login.html'
            } else {
                //转义符号是关键
                // $('body').append('<script src="./js/index.js"><\/script>');
                // $.getScript('./js/base.js')
            }
        }
    })
     
    
    $('.lt_aside .content ul').children('.category').click(function () {
        $(this).siblings('ol').toggle(400)
    });
  
    $('.lt_main .header a').first().click(function () {
        // console.log('1');
        $('.lt_aside').toggle()
        $('.lt_main').toggleClass('full_screen')
    });
    // 弹出模态框
    $('a.glyphicon-log-out').click(function () {
        $('#myModal').modal('show')
    })
    //隐藏模态框
    $('.modal-comfirm .btn-primary').click(function () {

        $('#myModal').modal('hide');
        $.ajax({
            url: '/employee/employeeLogout',
            success: function (backData) {
                window.location.href = "./login.html"
            }
        })
    })    
})