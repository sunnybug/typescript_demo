/// <reference path="PageX.ts"/>

// task_target.json
const TARGET_JSON_TYPE_ID = 0
const TARGET_JSON_TYPE_NAME = 1
// task_progress.json
const TASK_PROGRESS_JSON_TYPE_ID = 0
const TASK_PROGRESS_JSON_TYPE_DONE = 1

class TaskRow {
	public id: number
	public name: string
	public progress: number
	constructor(_id: number) {
		this.id = _id
	}
	is_done() {
		return this.progress == 1
	}
}

class CTasks {
	public m_taskRows: Array<TaskRow>
	constructor() {
		this.m_taskRows = new Array<TaskRow>()
	}
	createTask(id: number) {
		console.info(this.m_taskRows)
		// 这种方法不行
		// let x = this.m_taskRows.hasOwnProperty(id)
		for (let o of this.m_taskRows) {
			console.info(o)
			if (o.id == id) {
				return o
			}
		}
		let o = new TaskRow(id)
		this.m_taskRows[id] = o
		return o
	}
	// 管理目标
	createTasksByJson(myTarget: any, myProgress: any) {
		let targets = myTarget['target']
		for (let oneTarget of targets) {
			let o = this.createTask(oneTarget[TARGET_JSON_TYPE_ID])
			o.name = myTarget[TARGET_JSON_TYPE_NAME]
		}
		let progresses = myProgress['task_progress']
		for (let oneProgress of progresses) {
			let o = this.createTask(oneProgress[TASK_PROGRESS_JSON_TYPE_ID])
			o.progress = oneProgress[TASK_PROGRESS_JSON_TYPE_DONE]
		}
		this.createTasks(this.m_taskRows)
	}

	createTasks(taskRows: Array<TaskRow>) {
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

}


function LoadTasks() {
	$.when($.get("/dist/test/task_target.json"), $.get("/dist/test/task_progress.json")).done(function (a1, a2) {
		let myTasks = new CTasks();
		myTasks.createTasksByJson(a1[0], a2[0]);
		// console.info(JSON.stringify(a1[0]))

	});
}

function onLoadTasks() {
	$("#btnAddCheckBox").click(() => LoadTasks())
}
onLoadTasks()

