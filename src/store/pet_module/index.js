import {Action, Mutation} from '../pet_module';
import {service} from '../../services/pet-service'

service = new PetService();

export default {
  [Action.SAVE]({commit}, pet) {
    return new Promise((resolve, reject) => {
      service.save(pet).then(
        response =>{
          alert('Pet '+this.pet.name+' has been saved');
        }
      )
    })
  },
  [Action.LIST]({commit}) {
    return new Promise((resolve, reject) => {
      service.list().then((response)=>response.json())
      .then((pets) => {
        pets;
      });
    });
  },
  [Action.GET]({commit}, id) {
    return new Promise((resolve, reject) => {
      service.get(id).then(
        pet =>{
        }
      )
    })
  }
}
