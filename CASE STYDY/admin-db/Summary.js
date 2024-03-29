const jsonData ={
    "summary": [
        {
            "title": "Impressions",
            "value": "1563",
            "duration": "May 23 - Jun 01",
            "year": 2023
        },
        {
            "title": "Goal",
            "value": "30564",
            "duration": "May 23 - Jun 01",
            "year": 2023
        },
        {
            "title": "Impact",
            "value": "42.6%",
            "duration": "Jul 01 - Dec 10",
            "year": 2023
        }
    ]
};

const app = Vue.createApp({
    data() {
        return {
            summary: jsonData.summary
        };
    }
});

app.component('summary-card', {
    props: ['title', 'value', 'duration'],
    template: `    
        <div class="card comp-card">
            <div class="card-body">
                <div class="row align-items-center">
                    <div class="col">
                        <h6 class="m-b-25">{{ title }}</h6>
                        <h3 class="f-w-700 text-c-blue">{{ value }}</h3>
                        <p class="m-b-0">{{ duration }}</p>
                    </div>
                    <div class="col-auto">
                    <i class="fas fa-eye bg-c-blue"></i>
                </div>
                </div>
            </div>
        </div>
    `
});

app.mount('#summary')
