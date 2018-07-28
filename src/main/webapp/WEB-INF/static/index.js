var option = {
    title: {
        subtext: 'Water Level Monitoring Chart',
        // text: 'Smart Edge Computing Service Platform Monitoring System',
        left: 'center'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['water level']
    },
    grid: {
        left: '5%',
        right: '5%',
        bottom: '30%',
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
        data: [],
        name: 'Time'
    },
    yAxis: {
        type: 'value', min: 0,
        name: 'Water Level(m)',
        nameLocation: 'middle',
        nameGap: 50
    },
    series: [{
        data: [],
        type: 'line',
        name: "Water Level",
        symbolSize: 8,
        smooth: true
    }]
};

$(function () {

    loadData("lutaizi", "level", false);

});

var handleData = function (data, minus, chartId) {
    var timeArray = [];
    var valueArray = [];
    var min = 0;
    $.each(data, function (index, o) {
        timeArray.push(index);
        valueArray.push(o);
        var floatO = parseFloat(o);
        if (min == 0 || floatO < min) {
            min = floatO;
        }
    });
    option.xAxis.data = timeArray;
    option.yAxis.min = parseInt(min);
    option.series[0].data = valueArray;
    var dom = $("#" + chartId)[0];
    var myChart = echarts.init(dom);
    myChart.setOption(option, true);
};

function loadData(stationName, property, isNeedReload) {
    $.ajax({
        type: "get",
        url: "/service/dataLastDay",
        data: {
            stationName: stationName,
            property: property,
            isNeedReload: isNeedReload
        },
        dataType: "json",
        success: function (res) {
            handleData(res, 0.5, "container");
        }
    });
}

setInterval(function () {
    console.log(111);
    loadData("lutaizi", "level", false)
}, 30000);