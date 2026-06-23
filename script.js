let toastBox = document.getElementById("toastBox");
let errorMsg =
  '<i class="fa-solid fa-circle-xmark"></i> <span class="errMsg">Please fixe the error massage</span>';
let invaildMsg =
  '<i class="fa-solid fa-exclamation"></i> <span class="invMsg">Invaild massage</span>';
let successMsg =
  '<i class="fa-solid fa-circle-check"></i> <span class="success-text">Successfully submitted</span>';
  

function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if (msg.includes("error")) {
    toast.classList.add("error");
  }
  if (msg.includes("Invaild")) {
    toast.classList.add("Invaild");
  }

  setTimeout(() => {
    toast.remove();
  }, 6000);
}




