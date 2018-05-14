$(function () {
    //需求1
    $.ajax({
        url: '/user/queryUser',
        data: {
            page: 1,
            pageSize: 5
        },
        success: function (backData) {
            console.log(backData);
            $('tbody').html(template('user', backData))
        }
    })
})