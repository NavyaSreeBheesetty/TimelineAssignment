let event_array = [];
let tasklist = document.getElementById("task-list");
console.log(tasklist);
function show() {
    tasklist.innerHTML=""
  event_array.forEach((ele) => {
    tasklist.innerHTML += `<dt id="time">${ele.time}</dt>
    <dd id="time">${ele.task}</dd>    `;
  });
}

function myFunction() {
  let test = {};
  var form_ele = document.querySelector("form");
  var formData = new FormData(form_ele);
  formData.forEach((label, key) => {
    test[key] = label;
  });
  event_array.push(test);
  event_array.sort(function (a, b) {
    return a.time.localeCompare(b.time);
  });
  show();

}
