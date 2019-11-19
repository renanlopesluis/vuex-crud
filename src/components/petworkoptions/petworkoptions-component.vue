<template>
  <div v-if="works" class="form-group">
      <label for="type">Basic Caring</label>
      <select class="form-control" v-model="selected" @change="emitEventChanged">
        <option disabled value="">Choose..</option>
        <option v-for="option in works" v-bind:value="option.code">
          {{ option.description }}
        </option>
      </select>
  </div>
</template>

<script>
  import BasicCaringService from '../../services/basiccaring-service.js'
  const service = new BasicCaringService();
  export default{
    props: {
      workCode: {
        type: Number,
        required: true,
      }
    },
    data(){
      return{
        works: this.getWorks(),
        selected: {}
      }
    },
    watch: {
      workCode: function(newValue, oldValue){
        this.works = this.getWorks()
      }
    },
    methods:{
      emitEventChanged(){
        this.$emit('EventInputChanged', this.selected)
      },
      getWorks(){
        return service.getWorks(this.workCode);
      }
    }
  }
</script>
