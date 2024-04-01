let group = {
    title: 'Java-56',
    students: ['Elena', 'Maria', 'Ekaterina', 'Olga'],
    showList: function () {
        const show = function (name) {
            console.log(`${this.title}: ${name}`);
        }
        //this.students.forEach(show.bind(this));   == 2 ==
        //this.students.forEach(show, this);        == 3 ==
        // == 4 ==
        this.students.forEach(function(student) {
            show.call(this, student);
        }, this);
    }
}

group.showList();
const newGroup = group;
group = null;
console.log('===================================');
newGroup.showList();

