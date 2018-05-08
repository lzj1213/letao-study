$(function () {
    $('button[type=submit]').click(function (event) {
        event.preventDefault();
        $.ajax({
            type: "post",
            url: "/employee/employeeLogin",
            data: $('form').serialize(),
            success: function (backData) {
                console.log(backData);
                if (backData.success == true) {
                    window.location = "./index.html"
                }else{
                    var validator = $("form").data('bootstrapValidator');
                    if(backData.error==1000){
                        validator.updateStatus('username', 'INVALID', 'callback')
                    }else if(backData.error==1001){
                        validator.updateStatus('password', 'INVALID', 'callback')
                    }
                }
            },


        })
         //进度条
         NProgress.start();
         NProgress.done();
    })
    //初始化表单验证
    $('form').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        //3. 指定校验字段
        fields: {
            //校验用户名，对应name表单的name属性
            username: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    //长度校验
                    stringLength: {
                        min: 4,
                        max: 15,
                        message: '用户名长度必须在4到15之间'
                    },
                    callback:{
                        message:'用户名不存在'
                    }
                }
            },
            password: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '请输入密码'
                    },
                    callback: {
                        message: '密码错误'
                    }
                }
            },
        }

    });

})