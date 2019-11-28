<template>
    <div class="container">
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
    </div>
</template>

<script>
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
        },
        end: {
            type: String
        }
    },
    methods: {
        calculateDates(start, end){
            // eslint-disable-next-line no-console
            console.log(start, end);
        }
    },

    created(){
        var i
        for(i = 0; i < 15; i++){
            
            var starting = this.$props.start.split('/');
            starting[1] = starting[1] - 1; 
            var s = new Date(starting[2], starting[1], starting[0]);

            var ending = this.$props.end.split('/');
            ending[1] = ending[1] - 1;
            var e = new Date(ending[2], ending[1], ending[0]);


            for(i = s; i <= e; i.setDate(i.getDate() + 7)){
                this.dates.push(i.getDate() + "/" + (i.getMonth()+1) + "/" + i.getFullYear());
                // eslint-disable-next-line no-console
                console.log(this.dates);
            }

            



        }
    }
    
}
</script>

<style>

</style>