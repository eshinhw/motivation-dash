const headerLinkIcon = document.querySelector("#link-icon");
const searchIcon = document.getElementById("search-icon");

const linkModal = document.getElementById("link-modal");
const searchBar = document.getElementById("search-bar");
const searchForm = document.getElementById("search-form");

function handleHeaderLinkIconClick(e) {
  if (linkModal.classList.contains("hidden")) {
    // if hidden, remove hidden
    linkModal.classList.remove("hidden");
  } else {
    // if shown, add hidden
    linkModal.classList.add("hidden");
  }
}

function handleSearchIconClick(e) {
  if (searchBar.classList.contains("hidden")) {
    // if hidden, remove hidden
    searchBar.classList.remove("hidden");
  } else {
    // if shown, add hidden
    searchBar.classList.add("hidden");
  }
}

function handleSettingIconClick() {
  if (settingModal.classList.contains("hidden")) {
    // if hidden, remove hidden
    settingModal.classList.remove("hidden");
  } else {
    // if shown, add hidden
    settingModal.classList.add("hidden");
  }
}

function handleSearchFormSubmit(e) {
  e.preventDefault();
  const currVal = e.target[0].value;
  e.target[0].value = "";
  window.open(`https://www.google.com/search?query=${currVal}`);
}

headerLinkIcon.addEventListener("click", handleHeaderLinkIconClick);
searchIcon.addEventListener("click", handleSearchIconClick);
searchForm.addEventListener("submit", handleSearchFormSubmit);

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   console.log(event.target);
//   console.log(linkModal);
//   if (event.target !== linkModal) {
//     linkModal.style.display = "none";
//   }
// };
