function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

     logState: function(){
      console.log(`${this.title} has ${this.complete ? "" : "not" } been completed.`);

    },
      markCompleted: function(){
        this.complete= true;
      }
  };
  return task;
}

const task1 = newTask('kitty litter', 'you know');

task1.logState();