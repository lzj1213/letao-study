$(function () {
    var pageNum=1;
    var myPageSize=10;
    function getPageData() {
        //获取用户数据
        $.ajax({
            url: '/user/queryUser',
            data: {
                page: pageNum,
                pageSize: myPageSize
            },
            success: function (backData) {
                console.log(backData);
                $('tbody').html(template('user', backData));
                //分页插件
                $("#pagintor").bootstrapPaginator({
                    bootstrapMajorVersion: 3,//默认是2，如果是bootstrap3版本，这个参数必填
                    currentPage: pageNum,//当前页
                    totalPages: Math.ceil(backData.total / backData.size),//总页数 
                    size: "small",//设置控件的大小，mini, small, normal,large
                    onPageClicked: function (event, originalEvent, type, page) {
                        //为按钮绑定点击事件 page:当前点击的按钮值
                        // getPageData(page, pageSize)
                        pageNum=page
                        getPageData()
                    }
                });
            }
        })
    }
    getPageData();

    //启用禁用按钮
    $('tbody').on('click','button',function () {
        var isDelete;
        if($(this).html()=='启用'){
            isDelete=0
        }else{
            isDelete =1
        }
        $.ajax({
            type:'post',
            url:'/user/updateUser',
            data:{
                id: $(this).parent().attr('data-id'),
                isDelete: isDelete
            },
            success:function (backData) {
                if (backData.success){
                    getPageData()
                }
               
            }
        })
    })
   
})