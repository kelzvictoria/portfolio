const updateActiveTab = (id) => {
  document.querySelector('[tabindex = "0"]').setAttribute("tabindex", "-1");
  document.querySelector(".tab__Active").classList.remove("tab__Active");

  document.getElementById(id).tabIndex = "0";
  document.querySelector("#" + id).classList.add("tab__Active");
};

const updateActiveTabContent = (id) => {
  document
    .querySelector(".activeTab__Content")
    .classList.remove("activeTab__Content");
  document.querySelector("#" + id).classList.add("activeTab__Content");
};

document.querySelector("#tab-0").addEventListener("click", () => {
  updateActiveTab("tab-0");
  updateActiveTabContent("panel-0");
  document
    .querySelector(".jobs__StyledHighlight")
    .setAttribute("id", "tab-0-active");
});

document.querySelector("#tab-1").addEventListener("click", () => {
  updateActiveTab("tab-1");
  updateActiveTabContent("panel-1");
  document
    .querySelector(".jobs__StyledHighlight")
    .setAttribute("id", "tab-1-active");
});

document.querySelector("#tab-2").addEventListener("click", () => {
  updateActiveTab("tab-2");
  updateActiveTabContent("panel-2");
  document
    .querySelector(".jobs__StyledHighlight")
    .setAttribute("id", "tab-2-active");
});

document.querySelector("#tab-3").addEventListener("click", () => {
  updateActiveTab("tab-3");
  updateActiveTabContent("panel-3");
  document
    .querySelector(".jobs__StyledHighlight")
    .setAttribute("id", "tab-3-active");
});
