function renderGraphic(data) {

    const dataSets = data.reduce( (acc, element) => {
        const dataInfo = {
            label: element.name,
            data: element.values,
            borderColor: element.color,
            backgroundColor: element.color,
        }
        acc = [...acc, dataInfo];
        return acc
    }, [])

    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data[0].date,
            datasets: dataSets
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