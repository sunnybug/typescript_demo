/// <reference path="PageX.ts"/>

class TaskRow {
	public id: number
	public name: string
	public progress: number
	public max_progress: number
}
function createTasks(taskRows: Array<TaskRow>) {
	var ul = document.createElement('ul')
	for (var i = 0; i < 5; i++) {
		var chkBox = document.createElement('input')
		chkBox.setAttribute("type", "checkbox")
		chkBox.setAttribute("id", String(i))
		chkBox.setAttribute("name", String(i))

		var li = document.createElement('li')
		li.appendChild(chkBox)
		li.appendChild(window.document.createTextNode("chkBox" + String(i)))

		ul.appendChild(li)
	}
	var $divTasks: JQuery = $("#divTasks")
	$divTasks.empty()
	$divTasks.append(ul)
}


function LoadTasks() {
	$.when($.get("/dist/test/my_all_task.json"), $.get("/dist/test/task_progress.json")).done(function (a1, a2) {
		// console.info(JSON.stringify(a1[0]))
		// console.info(JSON.stringify(a2[0]))

	});
}

function onLoadTasks() {
	$("#btnAddCheckBox").click(() => LoadTasks())
}
onLoadTasks()

