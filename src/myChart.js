import Chart from 'chart.js/auto'
import {getDataFromAPI} from "./server/server";

(async function() {
    const myData= await getDataFromAPI('/v2/ladd') .then(data => {
        return data;
    })

    const myChart=myData?.ac.slice(0,10).map(data=>{
        return { lat: data.lat.toString().substring(0,data.lat.toString().indexOf('.')), long: data.lon.toString().substring(0,data.lon.toString().indexOf('.')) };
    })
    new Chart(
        document.getElementById('lineChart'),
        {
            type: 'line',
            data: {
                labels: myChart.map(row => row.lat),
                datasets: [
                    {
                        label: 'Acquisitions by year',
                        data: myChart.map(row => row.long)
                    }
                ]
            }
        }
    );
    new Chart(
        document.getElementById('scatterChart'),
        {
            type: 'scatter',
            data: {
                labels: myChart.map(row => row.lat),
                datasets: [
                    {
                        label: 'Acquisitions by year',
                        data: myChart.map(row => row.long)
                    }
                ]
            }
        }
    );
    new Chart(
        document.getElementById('radarChart'),
        {
            type: 'radar',
            data: {
                labels: myChart.map(row => row.lat),
                datasets: [
                    {
                        label: 'Acquisitions by year',
                        data: myChart.map(row => row.long)
                    }
                ]
            }
        }
    );
})();