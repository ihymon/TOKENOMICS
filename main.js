  const labels = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
        ];

        const data = {
            labels: [],
            datasets: [{
                label: 'My First Dataset',
                data: [500, 300, 600],
                backgroundColor: [
                    '#EFB01C',
                    '#EF8C32',
                    '#F1655D'
                ],
                hoverOffset: 10,
                borderRadius: 20
                
            }]
        };

console.log(data);
        const config = {
            type: 'doughnut',
            data: data,
        };

        const myChart = new Chart(
            document.getElementById('myChart'),
            config
        );