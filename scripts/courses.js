const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
    ],
    enrollStudent: function (sectionNum) {
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum 
        );  
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled++;
            setSectionDetails(this.sections);
        }
    },
    dropStudent: function (sectionNum) {
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum 
        );  
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled--;
            setSectionDetails(this.sections);
        }
    },
  };



function setTitleDetails(aCourse) {
    const courseCode = document.getElementById("courseCode");
    courseCode.innerText = `${aCourse.code}`;
    const courseName = document.getElementById("courseName");
    courseName.innerText = `${aCourse.name}`;
}

function setSectionDetails(sections) {
    const html = sections.map(
        (section) => `<tr>
        <th>${section.sectionNum}</th>
        <th>${section.roomNum}</th>
        <th>${section.enrolled}</th>
        <th>${section.days}</th>
        <th>${section.instructor}</th></tr>`
    );
    document.querySelector("#sections").innerHTML = html.join("");
}

setTitleDetails(aCourse);
setSectionDetails(aCourse.sections);