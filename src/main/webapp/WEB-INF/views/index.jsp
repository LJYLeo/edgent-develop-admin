<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<html style="height: 100%">

    <head>
        <meta charset="utf-8">
        <title>动态监控</title>

        <script type="application/javascript" src="/static/jquery/jquery-3.3.1.min.js"></script>
        <script type="application/javascript" src="/static/echarts/echarts.min.js"></script>
        <!--
        <script type="text/javascript" src="http://echarts.baidu.com/gallery/vendors/echarts/map/js/china.js"></script>
        -->
        <script type="application/javascript" src="/static/index.js"></script>
        <script type="application/javascript" src="/static/config.js"></script>

    </head>

    <body style="height: 100%">
        <h1 style="text-align: center">Smart Edge Computing Service Platform Monitoring System</h1>
        <div style="text-align: center">
            <label>Please choose station : </label>
            <select style="width:100px;height:30px;font-size:15px;" id="stationSelect">
                <option value="lutaizi">lutaizi</option>
                <option value="runheji">runheji</option>
                <option value="zhaopingtai">zhaopingtai</option>
            </select>
        </div>
        <div id="lutaizi-level" class="charts" style="height: 500px"></div>
        <div id="lutaizi-evaporation" class="charts" style="height: 500px"></div>
        <div id="lutaizi-rainfall" class="charts" style="height: 500px"></div>
        <div id="lutaizi-flow" class="charts" style="height: 500px"></div>
        <div id="runheji-rainfall" class="charts" style="height: 500px"></div>
        <div id="zhaopingtai-flow" class="charts" style="height: 500px"></div>
    </body>

</html>