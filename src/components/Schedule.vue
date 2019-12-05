<template>
    <div class="container">
        <div id="schedule">
            <div class="col text-center">
                <h2><img id="logo" src="../assets/emsb.png" alt=""> Schedule for {{teacher}} <img id="logo" src="../assets/emsb.png" alt=""></h2>
            </div>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Class</th>
                    <th scope="col">Hours</th>
                    <th scope="col">Date</th>
                    <th scope="col">Module #</th>
                    <th scope="col">Module Name</th>
                    <th scope="col">Teacher</th>
                    <th scope="col">Year</th>
                    
                    
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                        <td>6</td>
                        <td>{{dates[0]}}</td>
                        <td>946452</td>
                        <td>Business Proposal & Training process</td>
                        <td>{{teacher}}</td>
                        <td>2020/2021</td>
                    </tr>

                    <tr>
                    <th scope="row">2</th>
                        <td>6</td>
                        <td>{{dates[1]}}</td>
                        <td>946452</td>
                        <td>Business Proposal & Training process</td>
                        <td>{{teacher}}</td>
                        <td>2020/2021</td>
                        
                    </tr>

                    <tr>
                    <th scope="row">3</th>
                        <td>6</td>
                        <td>{{dates[2]}}</td>
                        <td>946452</td>
                        <td>Business Proposal & Training process</td>
                        <td>{{teacher}}</td>
                        <td>2020/2021</td>
                    </tr>

                    <tr>
                    <th scope="row">4</th>
                        <td>6</td>
                        <td>{{dates[3]}}</td>
                        <td>946462 / 946472</td>
                        <td>Computer Tools / Business Plan Outline</td>
                        <td>{{teacher}}</td>
                        <td>2020/2021</td>
                    </tr>

                    <tr>
                    <th scope="row">5</th>
                        <td>6</td>
                        <td>{{dates[4]}}</td>
                        <td>946462 / 946472</td>
                        <td>Computer Tools / Business Plan Outline</td>
                        <td>{{teacher}}</td>
                        <td>2020/2021</td>
                    </tr>

                    <tr>
                        <th scope="row">6</th>
                        <td>6</td>
                        <td>{{dates[5]}}</td>
                        <td>946462 / 946472</td>
                        <td>Computer Tools / Business Plan Outline</td>
                        <td>{{teacher}}</td>
                        <td>2020/2021</td>
                    </tr>

                    <tr>
                        <th scope="row">7</th>
                        <td>6</td>
                        <td>{{dates[6]}}</td>
                        <td>946487</td>
                        <td>Marketing And Sales</td>
                        <td>{{teacher}}</td>
                        <td>2020/2021</td>
                    </tr>

                    <tr>
                        <th scope="row">8</th>
                        <td>6</td>
                        <td>{{dates[7]}}</td>
                        <td>946487</td>
                        <td>Marketing And Sales</td>
                        <td>{{teacher}}</td>
                        <td>2020/2021</td>
                    </tr>

                    <tr>
                        <th scope="row">9</th>
                        <td>6</td>
                        <td>{{dates[8]}}</td>
                        <td>946487</td>
                        <td>Marketing And Sales</td>
                        <td>{{teacher}}</td>
                        <td>2020/2021</td>
                    </tr>

                    <tr>
                        <th scope="row">10</th>
                        <td>6</td>
                        <td>{{dates[9]}}</td>
                        <td>946487</td>
                        <td>Marketing And Sales</td>
                        <td>{{teacher}}</td>
                        <td>2020/2021</td>
                    </tr>

                    <tr>
                        <th scope="row">11</th>
                        <td>6</td>
                        <td>{{dates[10]}}</td>
                        <td>946494</td>
                        <td>Planning Resources</td>
                        <td>{{teacher}}</td>
                        <td>2020/2021</td>
                    </tr>

                    <tr>
                        <th scope="row">12</th>
                        <td>6</td>
                        <td>{{dates[11]}}</td>
                        <td>946494</td>
                        <td>Planning Resources</td>
                        <td>{{teacher}}</td>
                        <td>2020/2021</td>
                    </tr>

                    <tr>
                        <th scope="row">13</th>
                        <td>6</td>
                        <td>{{dates[12]}}</td>
                        <td>946505</td>
                        <td>Financial Plan</td>
                        <td>{{teacher}}</td>
                        <td>2020/2021</td>
                    </tr>

                    <tr>
                        <th scope="row">14</th>
                        <td>6</td>
                        <td>{{dates[13]}}</td>
                        <td>946505</td>
                        <td>Financial Plan</td>
                        <td>{{teacher}}</td>
                        <td>2020/2021</td>
                    </tr>

                    <tr>
                        <th scope="row">15</th>
                        <td>6</td>
                        <td>{{dates[14]}}</td>
                        <td>946505</td>
                        <td>Business Plan</td>
                        <td>{{teacher}}</td>
                        <td>2020/2021</td>
                    </tr>
                </tbody>
            </table>
            <div class="col text-center">
                Total Teaching Hours: 90
                <br>
                Total Mentoring Hours: 90
                <br>
                Total Hours: 180 
            </div>
        </div>
        <div class="col text-center">
            <form @submit.prevent="generatePDF">
                <input type="submit" value="Generate PDF" class="btn-info col-md-6">    
            </form>
        </div>
        <br>
    </div>
</template>

<script>

// import html2pdf from 'html2pdf.js';

export default {
    data() {
        return {
            dates: []
        }
    },
    props: {
        teacher: {
            type: String
        },
        start: {
            type: String
        }
    },
    methods: {
        generatePDF(){
            const html2pdf = require('html2pdf.js');
            var element = document.getElementById("schedule");
            var opt = {
                margin:       0.4,
                filename:     'schedule.pdf',    
                html2canvas:  { scale: 2 },
                jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().set(opt).from(element).save();
        }
    },

    created(){
    
        // Start Date
        var starting = this.$props.start.split('/');
        starting[1] = starting[1] - 1; 
        var s = new Date(starting[2], starting[1], starting[0]);


        // This is commented out because if you don't actually know the end date, so i calculate it for you. 
        // var ending = this.$props.end.split('/');
        // ending[1] = ending[1] - 1;
        
        // Calculate End Date from Start Date * 15 weeks. 
        var tempDate = new Date(s); 
        var e = new Date(tempDate.setDate(tempDate.getDate() + 7*15));



        var i;
        for(i = s; i <= e; i.setDate(i.getDate() + 7)){
            // I need to check if the date is part of
            // some dates that are non teaching days.


            // Christmas
            var christmasStart = new Date(2019, 11, 23);
            var christmasEnd = new Date(2020, 0, 3);
            if(i >= christmasStart && i <= christmasEnd) {
                // eslint-disable-next-line no-console
                console.log("Skipping: " + i)
                continue;
            }

            // // Summer Break
            // var summerStart;
            // var summerEnd; 

            // Easter Break
            var easterStart = new Date(2020, 3, 10);
            var easterEnd = new Date(2020, 3, 13);
            if(i >= easterStart && i <= easterEnd) {
                // eslint-disable-next-line no-console
                console.log("Skipping: " + i);
                continue; 
            }


            // March Break
            var marchbreakStart = new Date(2020, 2, 2);
            var marchbreakEnd = new Date(2020, 2, 6);
            if(i >= marchbreakStart && i <= marchbreakEnd) {
                // eslint-disable-next-line no-console
                console.log("Skipping: " + i);
                continue; 
            }

            


            this.dates.push(i.getDate() + "/" + (i.getMonth()+1) + "/" + i.getFullYear());
            //console.log(this.dates);
        }

        



    
    }
    
}
</script>

<style>
    #logo {
        width: 10%;
        height: 10%;
    }


</style>