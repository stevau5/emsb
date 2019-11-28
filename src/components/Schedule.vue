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
                    <td>{{start}}</td>
                    <td>946452</td>
                    <td>Business Proposal & Training process</td>
                    <td>{{teacher}}</td>
                    <td>2020/2021</td>
                </tr>

                <tr>
                <th scope="row">2</th>
                    <td>6</td>
                    <td></td>
                    <td>946452</td>
                    <td>Business Proposal & Training process</td>
                    <td>{{teacher}}</td>
                    <td>2020/2021</td>
                    
                </tr>

                <tr>
                <th scope="row">3</th>
                    <td>6</td>
                    <td></td>
                    <td>946452</td>
                    <td>Business Proposal & Training process</td>
                    <td>{{teacher}}</td>
                    <td>2020/2021</td>
                </tr>

                <tr>
                <th scope="row">4</th>
                    <td>6</td>
                    <td></td>
                    <td>946462 / 946472</td>
                    <td>Computer Tools / Business Plan Outline</td>
                    <td>{{teacher}}</td>
                    <td>2020/2021</td>
                </tr>

                <tr>
                <th scope="row">5</th>
                    <td>6</td>
                    <td></td>
                    <td>946462 / 946472</td>
                    <td>Computer Tools / Business Plan Outline</td>
                    <td>{{teacher}}</td>
                    <td>2020/2021</td>
                </tr>

                <tr>
                    <th scope="row">6</th>
                    <td>6</td>
                    <td></td>
                    <td>946462 / 946472</td>
                    <td>Computer Tools / Business Plan Outline</td>
                    <td>{{teacher}}</td>
                    <td>2020/2021</td>
                </tr>

                <tr>
                    <th scope="row">7</th>
                    <td>6</td>
                    <td></td>
                    <td>946487</td>
                    <td>Marketing And Sales</td>
                    <td>{{teacher}}</td>
                    <td>2020/2021</td>
                </tr>

                <tr>
                    <th scope="row">8</th>
                    <td>6</td>
                    <td></td>
                    <td>946487</td>
                    <td>Marketing And Sales</td>
                    <td>{{teacher}}</td>
                    <td>2020/2021</td>
                </tr>

                <tr>
                    <th scope="row">9</th>
                    <td>6</td>
                    <td></td>
                    <td>946487</td>
                    <td>Marketing And Sales</td>
                    <td>{{teacher}}</td>
                    <td>2020/2021</td>
                </tr>

                <tr>
                    <th scope="row">10</th>
                    <td>6</td>
                    <td></td>
                    <td>946487</td>
                    <td>Marketing And Sales</td>
                    <td>{{teacher}}</td>
                    <td>2020/2021</td>
                </tr>

                <tr>
                    <th scope="row">11</th>
                    <td>6</td>
                    <td></td>
                    <td>946494</td>
                    <td>Planning Resources</td>
                    <td>{{teacher}}</td>
                    <td>2020/2021</td>
                </tr>

                <tr>
                    <th scope="row">12</th>
                    <td>6</td>
                    <td></td>
                    <td>946494</td>
                    <td>Planning Resources</td>
                    <td>{{teacher}}</td>
                    <td>2020/2021</td>
                </tr>

                <tr>
                    <th scope="row">13</th>
                    <td>6</td>
                    <td></td>
                    <td>946505</td>
                    <td>Financial Plan</td>
                    <td>{{teacher}}</td>
                    <td>2020/2021</td>
                </tr>

                <tr>
                    <th scope="row">14</th>
                    <td>6</td>
                    <td></td>
                    <td>946505</td>
                    <td>Financial Plan</td>
                    <td>{{teacher}}</td>
                    <td>2020/2021</td>
                </tr>

                <tr>
                    <th scope="row">15</th>
                    <td>6</td>
                    <td>{{end}}</td>
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
    
}
</script>

<style>

</style>