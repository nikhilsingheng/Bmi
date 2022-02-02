
  function cal() {
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
            ( function(){
                var chart = new CanvasJS.Chart("myChart", {
                    animationEnabled: true,
                    title: {
                        text: `Your BMI Score is ${newbmivalue} and you're ${myChartValue} !!!`
                    },
                    	legend:{
                        cursor: "pointer"
                    },
                    data : [{
                        type: "pie",
                        showInLegend: true,
                        startAngle: 240,
                        // yValueFormatString: "##0.00\"%\"",
                        indexLabel: "{label}, {y}",
                        dataPoints: Mydata
                    }]
                });
                chart.render();

                })();
            
}


function clear(){
    document.getElementById('bmivalue').innerHTML="";
}
        
//         function cal(){
//    var h = document.getElementById("weight").value;
//    var w =  document.getElementById("height").value;
//    var age = document.getElementById("age").value;
//    var  cal = (10* w/1+6.25 * h/1 * age/1+5);
//    document.getElementById()

// }