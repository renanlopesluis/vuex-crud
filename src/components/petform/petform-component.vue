<template>
  <div class="container">
      <h2 class="main">Pet Register</h2>
      <section>
          <div class="container">
              <form name="petForm" method="post" >
                  <div class="form-group">
                      <label for="name">Name</label>
                      <input type="text" id="name" name="name" v-model="pet.name"
                          class="form-control" placeholder="name" required/>
                  </div>
                  <pet-type @EventInputChanged="getType"></pet-type>
                    <div class="form-group">
                      <label for="name">Age</label>
                      <input type="number" id="age" class="form-control"
                          placeholder="age" required v-model="pet.age"/>
                  </div>
                  <button color="primary" @click="save($event)">Save</button>
              </form>
          </div>
      </section>
  </div>
</template>
<script>
  import PetType from '../pettype/pettype-component.vue';
  import PetService from '../../services/pet-service.js'
  export default{
    data(){
      return {
        pet: {}
      }
    },
    components: {
      'pet-type': PetType
    },
    methods: {
      getType(petType){
        this.pet.type = petType;
      },
      save($event){
        $event.preventDefault();
        new PetService().save(this.pet).then(
          response =>{
            alert('Pet '+this.pet.name+' has been saved');
          }
        )
      }
    }
  }
</script>
