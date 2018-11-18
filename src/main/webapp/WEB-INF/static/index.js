$(function () {

    loadData("lutaizi", "level", false, levelOption);
    loadData("lutaizi", "evaporation", false, evOption);
    loadData("lutaizi", "rainfall", false, rainFallOption);
    loadData("lutaizi", "flow", false, flowOption);
    loadData("runheji", "rainfall", false, runheRainFallOption);
    loadData("zhaopingtai", "flow", false, zhaoFlowOption);
    loadData("hongzehu", "level", false, hongzehuLevelOption);
    loadData("hongzehu", "area", false, hongzehuAreaOption);
    loadData("hongzehu", "volume", false, hongzehuVolumeOption);

    $("#runheji-rainfall").hide();
    $("#zhaopingtai-flow").hide();
    $("#hongzehu-level").hide();
    $("#hongzehu-area").hide();
    $("#hongzehu-volume").hide();

    $("#stationSelect").change(function () {
        var stationName = $(this).val();
        $(".charts").not("div[id^='" + stationName + "']").hide();
        $("div[id^='" + stationName + "']").each(function () {
            $(this).children().first().show();

        });
        $("div[id^='" + stationName + "']").show();
    });

});

var handleData = function (data, chartId, option) {
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

function loadData(stationName, property, isNeedReload, option) {
    $.ajax({
        type: "get",
        url: "/service/dataLastDay",
        async:false,
        data: {
            stationName: stationName,
            property: property,
            isNeedReload: isNeedReload
        },
        dataType: "json",
        success: function (res) {
            handleData(res, stationName + "-" + property, option);
        }
    });
}

setInterval(function () {
    loadData("lutaizi", "level", false, levelOption);
    loadData("lutaizi", "evaporation", false, evOption);
    loadData("lutaizi", "rainfall", false, rainFallOption);
    loadData("lutaizi", "flow", false, flowOption);
    loadData("runheji", "rainfall", false, runheRainFallOption);
    loadData("zhaopingtai", "flow", false, zhaoFlowOption);
    loadData("hongzehu", "level", false, hongzehuLevelOption);
    loadData("hongzehu", "area", false, hongzehuAreaOption);
    loadData("hongzehu", "volume", false, hongzehuVolumeOption);
}, 30000);