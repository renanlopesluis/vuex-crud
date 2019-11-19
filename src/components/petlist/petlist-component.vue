<template>
  <div class="container">
    <table class="table">
     <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Type</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pet in pets">
          <td>{{pet.id}}</td>
          <td>{{pet.name}}</td>
          <td>{{pet.age}}</td>
          <td>{{pet.type}}</td>
          <td>
            <router-link  class="btn btn-success" to="/pet/1">Profile</router-link>
            <button class="btn btn-danger" @click="remove(pet.id)">Remove</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import PetService from '../../services/pet-service.js'
  const service = new PetService();
  export default{
    data(){
      return {
        pet: {},
        pets:  this.list()
      }
    },
    methods: {
      list(){
        service.list().then((response)=>response.json())
        .then((pets) => {
           this.pets = pets;
        });
      },
      remove(id){
        service.remove(id).then(
          response=>{
            this.list();
          }
        )
      }
    },
  }
</script>
