<template>
  <div id="app">
    <h1>EMSB Scheduler</h1>
    <Form />
  </div>
</template>

<script>
import Form from './components/Form'

export default {
  name: 'app',
  components: {
    Form
    
  }
}
</script>

// Global Styles 
<style>
h1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
