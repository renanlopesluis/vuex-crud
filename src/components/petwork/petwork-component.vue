<template>
  <div class="form-group">
      <label for="type">Type</label>
      <select class="form-control" v-model="selected" @change="emitEventChanged">
        <option disabled value="">Choose..</option>
        <option v-for="option in works" v-bind:value="option.code">
          {{ option.description }}
        </option>
      </select>
      <pet-work-options v-if="selected" :workCode="selected" @EventInputChanged="getBasicCaringOption"></pet-work-options>
      <button color="primary" @click="execute($event)">Execute</button>
  </div>
</template>

<script>
  import PetWorkOptions from '../petworkoptions/petworkoptions-component.vue';
  import BasicCaringService from '../../services/basiccaring-service.js'
  const service = new BasicCaringService();
  export default{
    props: {
      petId: {
        type: Number,
        required: true
      }
    },
    data(){
      return{
        works: this.loadWorks(),
        selected: 0,
        basicCaringOption: {}
      }
    },
    components:{
      'pet-work-options': PetWorkOptions
    },
    methods:{
      loadWorks(){
        return service.getWorkOptions()
      },
      emitEventChanged(){
        this.$emit('EventInputChanged', this.selected)
      },
      getBasicCaringOption(basicCaringOption){
        this.basicCaringOption = basicCaringOption;
      },
      execute($event){
        $event.preventDefault();
        service.executeWork(this.selected, this.petId, this.basicCaringOption).then(
          response =>{
            alert(response.data.message);
          }
        )
      }
    }
  }
</script>
