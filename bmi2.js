    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    height = height * 12
    height = height * 0.025;

    var newbmivalue = weight / (height * height);
    newbmivalue = Math.round(newbmivalue)
    document.getElementById('bmivalue').value = newbmivalue;

    const Underweight = newbmivalue<18;
    const  Normal = newbmivalue>=18.5 && newbmivalue<24.9
    const Overweight = newbmivalue>=25 && newbmivalue<29.9
    const obese  = newbmivalue >=30
    const ctx = document.getElementById('myChart');

    if (Underweight){
        myChartValue = 'Underweight'
        var Mydata = [
                    {y:newbmivalue, label: 'Underweight',exploded: true},
                    {y:20, label: 'Normal'},
                    {y:30, label: 'Obese'},
                ]
    }
    else if (Normal){
        myChartValue = 'Normal'
        var Mydata = [
                    {y:18, label: 'Underweight'},
                    {y:newbmivalue, label: 'Normal',exploded: true},
                    {y:30, label: 'Obese'},
                ]
    }
    else if (Normal){
        myChartValue = 'Normal'
        var Mydata = [
                    {y:18, label: 'Underweight'},
                    {y:29, label: 'Normal'},
                    {y:newbmivalue, label: 'Normal',exploded: true},
                    {y:30, label: 'Obese'},
                ]
    }
    else{
        myChartValue = 'obese'
        var Mydata = [
                    {y:18, label: 'Underweight'},
                    {y:20, label: 'Normal'},
                    {y:newbmivalue, label: 'Obese',exploded: true},
                ]
    }


   
   
   var randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
    };

    var ConstantData = function () {
    return [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor()
    ];
    };

    var MyValue = function (data) {
    return Math.max.apply(null, data) * Math.random();
    };

    var data = ConstantData;
    var value = MyValue(data);

    var config = {
    type: 'gauge',
    data: {
        labels: ['Underweight', 'Normal', 'Overweight', 'Obese'],
        datasets: [{
        data: data,
        value: value,
        backgroundColor: ['yellow', 'green', 'orange', 'red'],
        borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        title: {
        display: true,
        text: 'Gauge chart with datalabels plugin displaying labels'
        },
        layout: {
        padding: {
            bottom: 30
        }
        },
        needle: {
        // Needle circle radius as the percentage of the chart area width
        radiusPercentage: 2,
        // Needle width as the percentage of the chart area width
        widthPercentage: 3.2,
        // Needle length as the percentage of the interval between inner radius (0%) and outer radius (100%) of the arc
        lengthPercentage: 80,
        // The color of the needle
        color: 'rgba(0, 0, 0, 1)'
        },
        valueLabel: {
        display: false
        },
        plugins: {
        datalabels: {
            display: true,
            formatter:  function (value, context) {
            return context.chart.data.labels[context.dataIndex];
            },
            //color: function (context) {
            //  return context.dataset.backgroundColor;
            //},
            color: 'rgba(0, 0, 0, 1.0)',
            //color: 'rgba(255, 255, 255, 1.0)',
            backgroundColor: null,
            font: {
            size: 20,
            weight: 'bold'
            }
        }
        }
    }
    };

    var cal = ()=> {
    var ctx = document.getElementById('myChart').getContext('2d');
    window.myGauge = new Chart(ctx, config);
    };

    // document.getElementById('').addEventListener('click', function() {
    // config.data.datasets.forEach(function(dataset) {
    //     dataset.data = randomData();
    //     dataset.value = randomValue(dataset.data);
    // });

    // window.myGauge.update();
    // });
