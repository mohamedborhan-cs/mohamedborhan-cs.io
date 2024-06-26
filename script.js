document.addEventListener('DOMContentLoaded', function () {
    const citBtn = document.getElementById('citBtn');
    const busBtn = document.getElementById('busBtn');
    const template = Handlebars.compile(document.getElementById('student-template').innerHTML);
    
    function displayStudents(major) {
        fetch('cit5students.json')
            .then(response => response.json())
            .then(data => {
                const filteredStudents = data.filter(student => student.major === major);
                const html = template({ students: filteredStudents });
                document.body.innerHTML = html;
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    citBtn.addEventListener('click', function () {
        displayStudents('CIT');
    });

    busBtn.addEventListener('click', function () {
        displayStudents('BUS');
    });
});
