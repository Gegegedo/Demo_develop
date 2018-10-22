$(function(){
            var chart = Highcharts.chart('container', {
    chart: {
        spacing : [20, 0 , 20, 0]
    },
    title: {
        align:'left',
        x:20,
        y:50,
        verticalAlign:'top',
        floating:true,
        text: '',
        useHTML:true,
        style: {
        fontSize: '.18rem'
  }

    },
    exporting: {
            enabled:false
},
//不显示导出按钮
credits: {
          enabled:false
},
//不显示右下角版权信息
    tooltip: {
        headerFormat:'<p style="font-size:20px">{point.key}</p> <br> ',
        pointFormat: ' <p>{series.name}: <b>{point.percentage:.1f}%</b></p> '
        ,style:{
				fontSize:'20px',
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            showInLegend: true,
            dataLabels: {
                enabled: true,
                format: '{point.y}平方公里 ',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                    fontSize:'.12rem'
                }
            },
            point: {
                events: {
                    mouseOver: function(e) {  // 鼠标滑过时动态更新标题
                        // 标题更新函数，API 地址：https://api.hcharts.cn/highcharts#Chart.setTitle
                        chart.setTitle({
                            text: '总面积：1000平方公里'+'<br>'+e.target.name+'\t'+ e.target.y+'平方公里'+'<br>'+ '\t'+ '区域占地：'+e.target.percentage + ' %',
                        }
                        );
                    }
                    ,
                     click: function(e) { // 同样的可以在点击事件里处理
                         chart.setTitle({
                             text: e.point.name+ '\t'+ e.point.percentage + ' %'
                         });
                     }
                }
            },
        }
    },
    legend:{
        itemStyle:{
            fontSize:"15px"
        },
        align:'right',
        x:-50,
        y:50,
        verticalAlign:'top',
        floating:true,
        layout: 'vertical',
        symbolWidth:40,
    },
    series: [{
        type: 'pie',
        innerSize: '80%',
        name: '区域占地',
        style: {
    fontWeight: 'bold',
    fontSize: '.12rem'
  },
        data: [
            {name:'农田',   y: 500, url : 'http://bbs.hcharts.cn'},
            ['其他',       50],
            {
                name: '大棚',
                y: 100,
                sliced: true,
                selected: true,
                url: 'http://www.hcharts.cn'
            },
            ['森林',    100],
            ['道路',     50],
            ['水域',   100],
            ['房屋',   100],
        ]
    }]
}, function(c) { // 图表初始化完毕后的会掉函数
    // 环形图圆心
    var centerY = c.series[0].center[1],
        titleHeight = parseInt(c.title.styles.fontSize);
    // 动态设置标题位置
    c.setTitle({
        y:centerY + titleHeight/2
    });
});
    $(".yy-sure").click(function(){
       $("#container").css("display","block")
    })
    //实时监听浏览器大小
    $(window).resize(function(){
    var Height = $(window).height();
    var Width = $(window).width();
    console.log(Width);
    setSize(Width,Height*.8)
})

    function setSize(width,height) {
	    chart.setSize(width,height);
    }
//    $.ajax({
//            type:'get',
//            url:'/pie_data/',
//            success:function(result){
//
//                var area=result['area'];
//
//                chart.series[0].update({
//                  data: [
//            {name:'农田',   y: area[0], url : 'http://bbs.hcharts.cn'},
//            ['其他',       area[1]],
//            {
//                name: '大棚',
//                y: area[2],
//                sliced: true,
//                selected: true,
//                url: 'http://www.hcharts.cn'
//            },
//            ['森林',    area[3]],
//            ['道路',     area[4]],
//            ['水域',   area[5]],
//            ['房屋',   area[6]],
//        ]
//
//                });
//
//            },
//            error:function(){
//                alert('查询失败');
//            }
//         });
});