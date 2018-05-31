$(function () {
    var pageNum = 1;
    var myPageSize = 10;

    function getPageData() {
        $.ajax({
            url: '/category/queryTopCategoryPaging',
            type: 'get',
            data: {
                page: pageNum,
                pageSize: myPageSize,
            },
            success: function (backData) {
                console.log(backData);
                $('tbody').html(template('first', backData));
                $("#pagintor").bootstrapPaginator({
                    bootstrapMajorVersion: 3, //默认是2，如果是bootstrap3版本，这个参数必填
                    currentPage: pageNum, //当前页
                    totalPages: Math.ceil(backData.total / backData.size), //总页数 
                    size: "small", //设置控件的大小，mini, small, normal,large
                    onPageClicked: function (event, originalEvent, type, page) {
                        //为按钮绑定点击事件 page:当前点击的按钮值
                        // getPageData(page, pageSize)
                        pageNum = page
                        getPageData()
                    }
                });
            }

        })
    }
    getPageData();
    $('button.append').click(function () {
        $('#append').modal('show')
    });
    $('button.cancle').click(function () {
        $('#append').modal('hide')
        
    })
    // $('.modal-category button[type="submit"]').click(function () {
        $('form').bootstrapValidator({
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            //3. 指定校验字段
            fields: {
                //校验用户名，对应name表单的name属性
                categoryName: {
                    validators: {
                        //不能为空
                        notEmpty: {
                            message: '分类名不能为空'
                        },
                    }
                },

            }

        }).on('success.form.bv', function () {
            $.ajax({
                type: 'post',
                url: '/category/addTopCategory',
                data: $('form').serialize(),
                success: function () {
                    $('#append').modal('hide');
                    $('input[name="categoryName"]').val('')
                    getPageData()
                }
            })
        });
    // })




})