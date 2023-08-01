function btnEvent(subTask) {
  function deleteSubTask(e) {
    e.currentTarget.parentNode.remove();
  }

  // CLICK EVENT ON EDIT BUTTON
  function finishEdit() {
    if (!subTaskText.contenteditable) {
      subTaskText.setAttribute(`contenteditable`, true);
      subTaskText.focus();
    } else {
      subTaskText.removeAttribute(`contenteditable`);
    }
  }

  let editBtn = subTask.querySelector(`.editBtn`);
  let subTaskText = subTask.querySelector(`.subTaskText`);
  let deleteBtn = subTask.querySelector(`.deleteBtn`);
  let checkmarkBtn = subTask.querySelector(`.checkmarkBtn`);

  deleteBtn.addEventListener(`click`, (e) => {
    deleteSubTask(e);
  });

  editBtn.addEventListener(`click`, () => {
    finishEdit();
  });

  // LISTENING FOR ENTER KEY
  subTaskText.addEventListener("keypress", (e) => {
    if (e.key === `Enter`) {
      e.preventDefault();
      subTaskText.removeAttribute(`contenteditable`);
    }
  });
  let deleteTaskBtn =
    subTask.parentNode.parentNode.querySelector(`.deleteBigTaskBtn`);
  deleteTaskBtn.addEventListener("click", (e) => {
    bigTaskDel(e);
  });
}

function bigTaskDel(e) {
  e.currentTarget.closest(`.task-wrapper`).remove();
}
getTask();
// function showCompletedTasks() {
//   const completedTaskList = document.querySelector(".completed-task-list");
//   const randId = Math.floor(Math.random() * 10000);
//   getTask()

// }
