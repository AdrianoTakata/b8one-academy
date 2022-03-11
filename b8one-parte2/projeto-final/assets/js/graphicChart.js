function renderGraphic(data) {

    const dataSets = createDataSet(data);
    createGraphic(dataSets, data[0].date)

}

function createDataSet(dataset) {
    const datasetStruct = dataset.reduce( (acc, element) => {
        const dataInfo = {
            label: element.name,
            data: element.values,
            borderColor: element.color,
            backgroundColor: element.color,
        }
        acc = [...acc, dataInfo];
        return acc
    }, [])

    return datasetStruct;
}

function createGraphic(data, dataLabel) {

    const generalReportContainer = document.querySelector(".general-report");
    const heightContainer = generalReportContainer.offsetHeight;
    const numberDate = data[0].data.length
    let arrayLabel = [];
    if (numberDate > 30){
        arrayLabel = ["Jan", "Fev", "Mar", "Abr", "May", "Jun", "Jul", "Aug", "Sep", "Out", "Nov", "Dez"]
    } else {
        console.log(heightContainer)
        arrayLabel = dataLabel.map( (element) => {
            const label = (heightContainer >= 501 && heightContainer <= 503) ? element : element.slice(0, 5);
            return label
        })
    }
    

    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: arrayLabel,
            datasets: data
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            elements: {
                line: {
                    borderWidth:2
                },
                point:{
                    radius: 0
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    min: 0,
                    max: 200,
                    ticks: {
                        stepSize: 50,
                        align: 'end',
                    },
                    grid: {
                        drawBorder: false
                    }
                },
                x: {
                    grid: {
                        display: false,
                    },
                    ticks: {
                        align: 'end',
                    }
                },
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    align: 'start',
                    labels: {
                        boxWidth: 6,
                        pointStyle: 'circle',
                        usePointStyle: true,
                    },
                    title: {
                        padding: 4,
                    }
                }
            }
        }
    });
}

export default renderGraphic;