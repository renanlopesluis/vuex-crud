import axios from 'axios'
import WorkListFactory from '../factories/WorkListFactory';
import WorkOptionsList from '../models/WorkOptionsList.js';

export default class BasicCaringService {

  constructor() {
    this.baseUrl = 'http://localhost:8080/petstore/';
    this.bathUrl = "bath"
    this.hairCareUrl = "hair";
    this.workOptions = [];
    this.hairCareTypes = [];
    this.bathTypes = [];
    this.loadWorkOptions();
  }

  getWorkOptions(){
    return this.workOptions;
  }

  getWorks(codeService){
    return WorkListFactory.instance(codeService);
  }

  executeWork(basiceServiceCode, petId, serviceCode){
    if(basiceServiceCode === 1){
      return this.doBath(petId, serviceCode);
    }else if(basiceServiceCode === 2){
      return this.doHairCare(petId,serviceCode);
    }
  }

  doBath(petId, serviceCode){
    return axios.put(this.baseUrl.concat(this.bathUrl), {petId: petId, serviceCode: serviceCode });
  }

  doHairCare(petId, serviceCode){
    return axios.put(this.baseUrl.concat(this.hairCareUrl), {petId: petId, serviceCode: serviceCode });
  }

  loadWorkOptions(){
    this.workOptions = WorkOptionsList.getList();
  }
}
