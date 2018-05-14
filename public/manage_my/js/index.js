$(
    function () {
        
        $('.lt_aside .content li').click(function () {
            $(this).toggleClass('now')
        });
        $('.lt_main .header a').first().click(function () {
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
                success:function (backData) {
                    window.location.href="./login.html"
                }
            })
        })    
        
      }
)