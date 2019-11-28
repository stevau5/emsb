<template>
    <div class="container">
    <br>

      <form id="DateForm"> 
        <div class="form-group row">

          <label for="sd" class="col-sm-2 col-form-label">Start Date</label>
          <div class="col-sm-10">
            <input type="date" class="form-control" id="sd" />
          </div>
          
          <label for="ed" class="col-sm-2 col-form-label">End Date</label>
          <div class="col-sm-10">
            <input type="date" class="form-control" id="ed" />
          </div>

          <label for="tn" class="col-sm-2 col-form-label">Teacher Name</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="tn" />
          </div>
        </div>
        <br />
        <button type="submit" class="btn btn-info">
          Generate Schedule
        </button>
      </form>
    </div>
</template>


<script>
export default {
    
}
</script>


<style scoped>

</style>