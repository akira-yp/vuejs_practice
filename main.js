new Vue({
  el: '#app',
  data: {
    name: '',
    course: '',
    acceptancePeriod: '',
    defaultLastId: 0,
    students: []
  },

  methods: {
    addStudent: function() {
      this.students.push({
        name: this.name,
        course: this.course,
        acceptancePeriod: this.acceptancePeriod,
        id: this.defaultLastId + 1
      });
      this.defaultLastId = this.students.slice(-1)[0].id;
      this.name = '';
      this.course = '';
      this.acceptancePeriod = '';
    }
  }
})
