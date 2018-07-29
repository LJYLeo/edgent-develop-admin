var levelOption = {
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
        // bottom: '30%',
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

var evOption = {
    title: {
        subtext: 'Water Evaporation Monitoring Chart',
        // text: 'Smart Edge Computing Service Platform Monitoring System',
        left: 'center'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['water evaporation']
    },
    grid: {
        left: '5%',
        right: '5%',
        // bottom: '30%',
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
        name: 'Water Evaporation(mm)',
        nameLocation: 'middle',
        nameGap: 50
    },
    series: [{
        data: [],
        type: 'line',
        name: "Water Evaporation",
        symbolSize: 8,
        smooth: true
    }]
};

var rainFallOption = {
    title: {
        subtext: 'Water Rainfall Monitoring Chart',
        // text: 'Smart Edge Computing Service Platform Monitoring System',
        left: 'center'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['water rainfall']
    },
    grid: {
        left: '5%',
        right: '5%',
        // bottom: '30%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        data: [],
        name: 'Time'
    },
    yAxis: {
        type: 'value', min: 0,
        name: 'Water Rainfall(mm)',
        nameLocation: 'middle',
        nameGap: 50
    },
    series: [{
        data: [],
        type: 'bar',
        color: ['#3398DB'],
        name: "Water Rainfall",
        // symbolSize: 8,
        smooth: true
    }]
};

var flowOption = {
    title: {
        subtext: 'Water Flow Monitoring Chart',
        // text: 'Smart Edge Computing Service Platform Monitoring System',
        left: 'center'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['water flow']
    },
    grid: {
        left: '5%',
        right: '5%',
        // bottom: '30%',
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
        name: 'Water Flow(m^3/s)',
        nameLocation: 'middle',
        nameGap: 50
    },
    series: [{
        data: [],
        type: 'line',
        name: "Water Rainfall",
        symbolSize: 8,
        smooth: true
    }]
};

var runheRainFallOption = {
    title: {
        subtext: 'Water Rainfall Monitoring Chart',
        // text: 'Smart Edge Computing Service Platform Monitoring System',
        left: 'center'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['water rainfall']
    },
    grid: {
        left: '5%',
        right: '5%',
        // bottom: '30%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        data: [],
        name: 'Time'
    },
    yAxis: {
        type: 'value', min: 0,
        name: 'Water Rainfall(mm)',
        nameLocation: 'middle',
        nameGap: 50
    },
    series: [{
        data: [],
        type: 'bar',
        color: ['#3398DB'],
        name: "Water Rainfall",
        // symbolSize: 8,
        smooth: true
    }]
};

var zhaoFlowOption = {
    title: {
        subtext: 'Water Flow Monitoring Chart',
        // text: 'Smart Edge Computing Service Platform Monitoring System',
        left: 'center'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['water flow']
    },
    grid: {
        left: '5%',
        right: '5%',
        // bottom: '30%',
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
        name: 'Water Flow(m^3/s)',
        nameLocation: 'middle',
        nameGap: 50
    },
    series: [{
        data: [],
        type: 'line',
        name: "Water Rainfall",
        symbolSize: 8,
        smooth: true
    }]
};