
let app = Vue.createApp ({
    data: function () {
        return{
            title: 'to do list',
            tasks: [
            ],
            selected: [],
            active: [],
        }
    },
    computed: {
        totalItems(tasks) {
            return this.tasks.length
        }
    },
    methods: {
        newItem: function() {
            if (!this.tasks.name) {return}
            this.tasks.push ({
                name: this.tasks.name,
                select: false,
                del: ''
            });
            this.task.name = "";
        },
        delItem: function(task) {
            this.tasks.splice(this.tasks.indexOf(task), 1)
        },
        selectOne(task) {
           task.select = !task.select 
        },
        clearItem: function(tasks) {
            cleared = this.tasks.filter(t => t.select === true)
            for (let i = cleared.length; i >= 0; i--) {
                this.tasks.splice(cleared, i);
            }
            
            console.log(cleared)
            
        },
        activeTasks: function(tasks){
            active = this.tasks.filter(t => t.select === false)
            console.log(complete)
            return this.active
            
            
        },
        completedTasks: function() {
            complete = this.tasks.filter(t => t.select === true)
            console.log(complete)
        },
        allTasks: function() {
            console.log(this.tasks)
        }
        
        
    }
})
app.mount('#taskapp')