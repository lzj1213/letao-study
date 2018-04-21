$(function(){
    $.ajax({
        ulr: /category/queryTopCategory,
        success:function (backData) {
            console.log(backData);
          }
    })
})