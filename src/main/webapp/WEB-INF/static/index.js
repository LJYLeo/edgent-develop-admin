var option = {
    title: {
        text: '折线图堆叠'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['邮件营销', '联盟广告', '视频广告']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
        }
    ]
};

$(function () {

    $.ajaxSetup({
        async: false
    });

    var data;
    $.get("/service/dataLastDay", {
        stationName: "lutaizi",
        property: "level",
        isNeedReload: true
    }, function (resp) {
        data = resp;
    }, "json");

    var timeArray = [];
    var valueArray = [];
    $.each(data, function (index, o) {
        timeArray.push(index);
        valueArray.push(o);
    });

    option.xAxis.data = timeArray;
    option.series = {
        name: "蒸发量",
        type: 'line',
        stack: '总量',
        data: valueArray
    };

    var dom = $("#container")[0];
    var myChart = echarts.init(dom);
    myChart.setOption(option, true);
});