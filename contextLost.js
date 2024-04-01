let group = {
    title: 'Java-56',
    students: ['Elena', 'Maria', 'Ekaterina', 'Olga'],
    showList: function () {
        const show = (name) => {
            console.log(`${this.title}: ${name}`);
        }
        this.students.forEach(show);
    }
}

group.showList();
const newGroup = group;
group = null;
console.log('===================================');
newGroup.showList();

