$(function () {
    $('button[type=submit]').click(function (event) {
        event.preventDefault();
        $.ajax({
            type:"post",
            url: "/employee/employeeLogin",
            data:$('form').serialize(),
            success:function (backdate) {
                console.log(backdata);
            },       
           
            
        })
    })
})