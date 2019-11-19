<template>
  <div class="form-group">
      <label for="type">Type</label>
      <select class="form-control" v-model="selected" @change="emitEventChanged">
        <option disabled value="">Choose..</option>
        <option v-for="option in types" v-bind:value="option">
          {{ option.description }}
        </option>
      </select>
  </div>
</template>

<script>
  import PetTypeService from '../../services/pettype-service.js'
  const service = new PetTypeService();
  export default{
    data(){
      return{
        types: this.list(),
        selected: {}
      }
    },
    methods:{
      emitEventChanged(){
        this.$emit('EventInputChanged', this.selected)
      },
      list(){
        service.list().then((response)=>response.json())
        .then((types) => {
           this.types = types;
        });
      }
    }
  }
</script>
