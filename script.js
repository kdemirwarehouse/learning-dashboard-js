document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript dosyası çalışıyor.");

  // HTML'deki elemanları JS tarafına alıyoruz
  const topicInput = document.getElementById("topicInput");
  const addBtn = document.getElementById("addBtn");
  const topicList = document.getElementById("topicList");
  const message = document.getElementById("message");
  const counter = document.getElementById("counter");
  const clearBtn = document.getElementById("clearBtn");

  let topics = [];

  loadTopics();
  renderTopics();

  addBtn.addEventListener("click", addTopic);

  //Enter a basinca calisacak
  topicInput.addEventListener("keydown", function(event){
    if(event.key === "Enter") {
      addTopic();
    }
  });

  clearBtn.addEventListener("click", clearTopics);

  function addTopic() {
    const topicName = topicInput.value.trim();

    console.log("Input değeri:", topicName);

    if (topicName === "") {
      message.textContent = "Lütfen bir konu yaz.";
      return;
    }

    if (
      topics.some(function (topic) {
        return topic.name === topicName;
    })
  ) {
    message.textContent = "Bu konu zaten listede var.";
    return;
  }

    topics.push({
      name: topicName,
      completed: false
    });

    console.log("Konular listesi:", topics);

    saveTopics();

    // Input'u temizleme
    topicInput.value = "";

    message.textContent = "Konu başarıyla eklendi.";

    // Listeyi yeniden çizme
    renderTopics();
  }

  function deleteTopic(index){
    topics.splice(index,1);

    console.log("Silme işleminden sonra liste:", topics);

    saveTopics();

    message.textContent = "Konu silindi.";

    renderTopics();
  }

  function toggleTopic(index){
    topics[index].completed = !topics[index].completed;

    saveTopics();

    message.textContent = topics[index].completed
      ? "Konu ogrenildi olarak isaretlendi."
      : "Konu tekrar ogrenilecek olarak isaretlendi.";
    renderTopics();
  }

  function clearTopics() {
    topics = [];

    saveTopics();

    message.textContent = "Tüm konular silindi.";

    renderTopics();//listeyi ve counter i yeniden gunceller
  }

  function saveTopics(){
    localStorage.setItem("topics", JSON.stringify(topics));
  }

  function loadTopics(){
    const savedTopics = localStorage.getItem("topics");

    if(savedTopics){
      topics = JSON.parse(savedTopics);
    }
  }

  function renderTopics() {
    topicList.innerHTML = "";

    topics.forEach(function (topic, index) {
      const li = document.createElement("li");

      if (topic.completed) {
        li.classList.add("completed");
      }

      const leftArea = document.createElement("div");
      leftArea.classList.add("topic-left");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = topic.completed;

      checkbox.addEventListener("change", function () {
        toggleTopic(index);
      });

      const span = document.createElement("span");
      span.textContent = topic.name;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("delete-btn");

      deleteBtn.addEventListener("click", function () {
        deleteTopic(index);
      });

      leftArea.appendChild(checkbox);
      leftArea.appendChild(span);

      li.appendChild(leftArea);
      li.appendChild(deleteBtn);

      topicList.appendChild(li);
      });

      updateCounter();
  }

  function updateCounter() {
    counter.textContent = "Toplam konu: " + topics.length;
  }

  
});