(function () {
    'use strict';

    var tasker = {
        init: function () {
            this.cacheDom();
            this.bindEvents();
            this.evalTaskList();
        },

        cacheDom: function () {
            this.taskInput = document.getElementById("input-task");
            this.addBtn = document.getElementById("add-task-btn");
            this.taskList = document.getElementById("tasks");
            this.taskListChildren = this.taskList.children;
            this.errorMsg = document.getElementById("error");
        },

        bindEvents: function () {
            this.addBtn.onclick = this.addTask.bind(this);
            this.taskInput.onkeypress = this.enterKey.bind(this);
        },

        evalTaskList: function () {
            var chkBox, dltBtn;
            for (let i = 0; i < this.taskListChildren.length; i ++) {
                chkBox = this.taskListChildren[i].getElementByTagName("input")[0];
                chkBox.onclick = this.completeTask.bind(this, this.taskListChildren[i], chkBox);

                dltBtn = this.taskListChildren[i].getElementByTagName("button")[0];
                dltBtn.onclick = this.dltTask.bind(this, i);
            }

        },
        render: function () {
            var taskLi, taskChkbx, taskVal, taskBtn, taskTrsh;

            taskLi = document.createElement("li");
            taskLi.setAttribute("class", "task");

            taskChkbx = document.createElement("input");
            taskChkbx.setAttribute("type", "checkbox");

            taskVal = document.createTextNode(this.taskInput.value);

            taskBtn = document.createElement("button");

            taskTrsh = document.createElement("i");
            taskTrsh.setAttribute("class", "fa-sharp fa-solid fa-trash");

            //append Elements
            taskBtn.appendChild(taskTrsh);

            taskLi.appendChild(taskChkbx);
            taskLi.appendChild(taskVal);
            taskLi.appendChild(taskBtn);

            this.taskList.appendChild(taskLi);

        },
        completeTask: function (i, chkBox) {

            if (chkBox.checked) {
                i.className = "task completed";
            }
            else {
                this.incompleteTask(i);
            }
        },
        incompleteTask: function (i) {
            i.className = "task";
        },
        enterKey: function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                this.addTask();
            }
        },
        addTask: function () {
            var value = this.taskInput.value;
            this.errorMsg.style.display = "none";

            if (value === "") {
                this.error();
            }
            else {
                this.render();
                this.taskInput.value = "";
                this.evalTaskList();

            }
        },
        dltTask: function (i) {
            this.taskList.children[i].remove();
            this.evalTaskList();

        },

        error: function () {
            this.errorMsg.style.display = "block";
        }
    };

    tasker.init();

}());