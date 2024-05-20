var app = new Vue({
    el: '#app',
    data: {
      message: 'Registro de citas',
      tareas: [],
      nuevaTarea: ''
    },

    methods:{
        agregarTarea: function(){
            // console.log('diste click' , this.nuevaTarea);
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            })

            this.nuevaTarea = '';
            localStorage.setItem('citas-vue' , JSON.stringify(this.tareas));
        },

        editarTarea: function(index){
            this.tareas[index].estado = "Atendido";
            localStorage.setItem('citas-vue' , JSON.stringify(this.tareas));
        },

        eliminar: function(index){
            this.tareas.splice(index, 1);
            localStorage.setItem('citas-vue' , JSON.stringify(this.tareas));
        }
    },

    created: function(){
        let datosDB = JSON.parse(localStorage.getItem('citas-vue'));

        if(datosDB === null){
            this.tareas = [];
        }else{
            this.tareas = datosDB;
        }
    }
  })