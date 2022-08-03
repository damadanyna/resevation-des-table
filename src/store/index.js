import { createStore } from 'vuex'


export default createStore({
  state: {
    data:{
      user:{
          nom:'admin',
          pwd:'admin',
          logged:false
      },
      clients:[
          {
            nom:"Rock",
            prenom:"Lee",
            sexe:"M",
            addresse :"Talatamy",
            numTel :"0349459128",
            
            anne:"",
            moi:"",
            jours:"",
            heure:"",
            type_client:"",
            nombre:"",
            type_reservation:"",
            etat:true,
          },
      ],
    },
    params:null,
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
