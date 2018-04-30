
var data=[];
var ID=[];

for(var i in d_maps){
data.push(d_maps[i]);
}

for(var j in gloID){
ID.push(gloID[j]);
}

window.onload=function(){
    //默认获取当前日期
    var today = new Date();
    var nowdate = (today.getFullYear()) + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    //对日期格式进行处理
    var date = new Date(nowdate);
    var mon = date.getMonth() + 1;
    var day = date.getDate();
    var mydate = date.getFullYear() + "-" + (mon < 10 ? "0" + mon : mon) + "-" + (day < 10 ? "0" + day : day);
    $(".nowdate").val(mydate);
    showList();
};
function showList(){
    var resultTab = $("#resultTab");
    var pubText="";
    var downText="";
    data.forEach(function(item){
        if(item.isPublish)
          pubText="取消发布";
        else
          pubText="发布";
        if($.inArray(item.GlobeID,ID)>=0)
          downText="删除";
        else
          downText="下载";
        $(
            '<tr/>', {
                'style' : 'font-size:18px'
            }).append($('<td/>', {
                text : item.id
            }))
            .append($('<td/>',{
                text : item.name
            }))
            .append($('<td/>',{
                text : item.gen_data
            }))
            .append($('<td/>',{
                text : item.SatelliteID
            }))
            .append($('<td/>',{
                text : item.type
            }))
            .append($('<td/>',{
                text : item.download
            }))
            .append($('<td/>')
            .append($('<p/>')
            .append($('<button/>',{
                'class' : 'operate',
                'id' : 'look' + item.id,
                text : '查看'
            }))
            .append($('<button/>',{
                'class' : 'operate',
                'id' : 'download' + item.id,
                text : downText
            }))
            .append($('<button/>',{
                'class' : 'publish',
                'id' : 'release' + item.id,
                'type':'submit',
                text: pubText
            }))
            ))
            .appendTo(resultTab);

    button=$("#release"+ item.id);
    button.on("click",{"num":item.id},changeStatus);
    button2=$("#download"+item.id);
    button2.on("click",{"num":item.id},downloadStatus);
    });
};

function changeStatus(data){
    var id=data.data.num
    var button=$("#release"+id);
    var isPublish=button.text();
    if(isPublish=="发布"){
        button.text("正在发布");
        button.attr("disabled",true);
        $.ajax({
              type: 'POST',
              url: '/uploadImage/',
              data: {ImageID:id},
              success:function(message){
                    if(message=="发布成功！"){
                       alert("请先下载图片！");
                       button.removeAttr("disabled");
                       button.text("取消发布");
                    }
                    else if(message.match("[Errno 2]")){
                      alert("请先下载图片！");
                      button.removeAttr("disabled");
                      button.text("发布");
                    }
                    else{
                      alert(message);
                      button.removeAttr("disabled");
                      button.text("发布");
                    }
              },
              error:function(error){
                   alert(error);
                   button.removeAttr("disabled");
                   button.text("发布");
              }
    });}
    else if(isPublish=="取消发布"){
        button.text("正在取消");
        button.attr("disabled",true);
        $.ajax({
              type:'post',
              url: '/cancelPublish/',
              data: {ImageID:id},
              success:function(message){
              alert(message);
              button.removeAttr("disabled");
              if(message=="发布已取消！")
                 button.text("发布");
              else
                 button.text("取消发布");
                                      },
              error:function(error){
                 alert(error);
                 button.removeAttr("disabled");
                 button.text("取消发布");
              }
    });}
}
function downloadStatus(data){
    var id=data.data.num
    var button=$("#download"+id);
    var isDownload=button.text();
    if(isDownload=="下载"){
        button.text("正在下载");
        button.attr("disabled",true);
    $.ajax({
          type: 'POST',
          url: '/downloadImage/',
          data: {ImageID:id},
          success:function(message){
               alert(message);
               button.removeAttr("disabled");
               if(message=="下载成功！")
                  button.text("删除");
               else
                  button.text("下载");
          },
          error:function(error){
               alert(error);
               button.removeAttr("disabled");
               button.text("下载");

          }
    });}
    else if(isDownload=="删除"){
        button.text("正在删除");
        button.attr("disabled",true);
    $.ajax({
          type:'post',
          url: '/deleteImage/',
          data: {ImageID:id},
          success:function(message){
             alert(message);
             button.removeAttr("disabled");
             if(message=="图片已删除！")
                button.text("下载");
             else
                button.text("删除");
          },
          error:function(error){
             alert(error);
             button.removeAttr("disabled");
             button.text("删除");
          }
    });}
}
