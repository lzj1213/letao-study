$(function () {
    $('button[type=submit]').click(function (event) {
        event.preventDefault();
        $.ajax({
            type: "post",
            url: "/employee/employeeLogin",
            data: $('form').serialize(),
            success: function (backDate) {
                console.log(backData);
            },


        })
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
                    //正则校验
                    regexp: {
                        regexp: /^[a-zA-Z0-9_\.]+$/,
                        message: '用户名由数字字母下划线和.组成'
                    }
                }
            },
            password: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '请输入密码'
                    },

                }
            },
        }

    });
})