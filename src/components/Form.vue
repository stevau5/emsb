<template>
    <div class="container">
        <br>
        <form @submit.prevent="handleSubmit">
                
            <label for="startDate" class="col-sm-2 col-form-label">Start Date</label>
            <input class="col-sm-10" type="text" v-model="startDate" name="startDate" placeholder="DD/MM/YYYY">
            <br>
            <label for="endDate" class="col-sm-2 col-form-label">End Date</label>
            <input class="col-sm-10" type="text" v-model="endDate" name="endDate" placeholder="DD/MM/YYYY">
            <br>
            <label for="teacherName" class="col-sm-2 col-form-label">Teacher</label>
            <input class="col-sm-10" type="text" v-model="teacherName" name="teacherName" placeholder="Teacher Name">
            <br>
            <div class="col text-center">
                <input type="submit" value="Submit" class="btn-info col-sm-3">    
            </div>
        </form>
        <br>
        <Schedule v-if="hasBeenClicked" :teacher="teacherName" :start="startDate" :end="endDate"/>


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
            endDate: '',
            teacherName: '',
            hasBeenClicked: false
        }
    },

    methods: {
        handleSubmit() {
            const newClass = {
                startDate: this.startDate,
                endDate: this.endDate,
                teacher: this.teacherName
            }
            this.hasBeenClicked = true
            this.$emit('generateSchedule', newClass); //useless statement
        }
    }
    
}
</script>


<style scoped>

</style>