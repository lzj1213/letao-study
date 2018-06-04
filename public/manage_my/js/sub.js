$(function () {
    $.ajax({
        url: '/category/queryTopCategoryPaging',
        type: 'get',
        data:{
            page:1,
            pageSize:100
        },
        success:function (backData) {
            console.log(backData);
            $('ul.dropdown-menu').html(template('top-category',backData))
        }
    })
    $('ul.dropdown-menu').on('click','a',function () {
        var clickName=$(this).html();
        console.log(clickName);
        $('span.checkedName').html(clickName)
    })
    var pageNum = 1;
    var pageSize = 5;

    function getData() {
        $.ajax({
            type: 'get',
            url: '/category/querySecondCategoryPaging',
            data: {
                page: pageNum,
                pageSize: pageSize
            },
            success: function (backData) {
                $('tbody').html(template('subClass', backData))
            }
        })
    }
    getData();
    $("#fileUpload").fileupload({
        dataType: "json",
        //e：事件对象
        //data：图片上传后的对象，通过e.result.picAddr可以获取上传后的图片地址
        done: function (e, data) {
            $('img.uploadPic').prop('src', data.result.picAddr)
        }
    });
    $('button#append').click(function () {
        $('#sub').modal('show');
    })

    // var xhr=new XMLHttpRequest;
    // xhr.open('post','xxx.php');
    // xhr.setRequestHeader;
    // xhr.onload=function () {
    //     console.log(xhr.responseText);
    // }
    // // 自动获取数据 有name属性
    // xhr.sendData=new FormData(document.querySelector('form'));
    // sendData.append(document.querySelector('input[type=file]').files[0]);
    // xhr.send();
    // url.creatObjectUrl
})