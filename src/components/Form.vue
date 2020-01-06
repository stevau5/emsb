<template>
    <div class="container">
        <h1>EMSB Scheduler</h1>
        <br>
        <form @submit.prevent="handleSubmit">
                
            <label for="startDate" class="col-sm-2 col-form-label">Start Date</label>
            <input class="col-sm-10" type="text" v-model="startDate" name="startDate" placeholder="DD/MM/YYYY">
            <br>
            <label for="teacherName" class="col-sm-2 col-form-label">Teacher</label>
            <input class="col-sm-10" type="text" v-model="teacherName" name="teacherName" placeholder="Teacher Name">
            <br>
            <label for="school" class="col-sm-2 col-form-label">School</label>
            <input class="col-sm-10" type="text" v-model="schoolName" name="school" placeholder="School Name">
            <br>
            <label for="time" class="col-sm-2 col-form-label">Time</label>
            <input class="col-sm-10" type="text" v-model="time" name="time" placeholder="Start Time - End Time Ex: 9:00 - 2:30">
            <br>
            <label for="day" class="col-sm-2 col-form-label">Weekday</label>
            <input class="col-sm-10" type="text" v-model="day" name="day" placeholder="Day of the Week">
            <br>
            <label for="groupCode" class="col-sm-2 col-form-label">Group Code</label>
            <input class="col-sm-10" type="text" v-model="groupCode" name="groupCode" placeholder="Group Code">
            <br>
            <div class="col text-center">
                <input type="submit" value="Submit" class="btn-info col-sm-3">    
            </div>
        </form>
        <br>
        <Schedule v-if="hasBeenClicked" v-bind:teacher="teacherName" v-bind:start="startDate" v-bind:school="schoolName" v-bind:time="time" v-bind:code="groupCode" v-bind:day="day"/>
    </div>
</template>
<script>

import Schedule from './Schedule';

export default {
    name: 'Form',
    components: {
        Schedule
    },

    data() {
        return {
            startDate: '',
            teacherName: '',
            school: '', 
            time: '',
            code: '',
            day: '',
            hasBeenClicked: false
        }
    },

    methods: {
        handleSubmit() {
            this.hasBeenClicked = true //only useful part of this method
        }
    }
    
}
</script>


<style scoped>

</style>