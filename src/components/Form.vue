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
            <label for="address" class="col-sm-2 col-form-label">Address</label>
            <input class="col-sm-10" type="text" v-model="addressName" name="address" placeholder="Address">
            <br>
            <label for="groupCode" class="col-sm-2 col-form-label">Group Code</label>
            <input class="col-sm-10" type="text" v-model="groupCode" name="groupCode" placeholder="Group Code">
            <br>

            <div class="col text-center">
                <input type="submit" value="Submit" class="btn-info col-sm-3">    
            </div>
        </form>
        <br>
        <Schedule v-if="hasBeenClicked" v-bind:teacher="teacherName" v-bind:start="startDate" v-bind:school="schoolName" v-bind:address="addressName" v-bind:code="groupCode"/>
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
            address: '',
            code: '',
            hasBeenClicked: false
        }
    },

    methods: {
        handleSubmit() {
            // basically useless since I dont emit the object i bind it in the vars above 
            const newClass = {
                startDate: this.startDate,
                teacher: this.teacherName,
                school: this.schoolName, 
                address: this.addressName,
                code: this.groupCode
            }
            this.hasBeenClicked = true //only useful part of this method
            this.$emit('generateSchedule', newClass); //useless statement
        }
    }
    
}
</script>


<style scoped>

</style>