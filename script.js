document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript dosyası çalışıyor.");

  const topicInput = document.getElementById("topicInput");
  const addBtn = document.getElementById("addBtn");
  const topicList = document.getElementById("topicList");
  const message = document.getElementById("message");

  let topics = [];

  addBtn.addEventListener("click", function () {
    const topicName = topicInput.value;

    console.log("Input değeri:", topicName);

    if (topicName === "") {
      message.textContent = "Lütfen bir konu yaz.";
      return;
    }

    topics.push(topicName);

    console.log("Konular listesi:", topics);

    topicInput.value = "";
    message.textContent = "Konu başarıyla eklendi.";

    renderTopics();
  });

  function renderTopics() {
    topicList.innerHTML = "";

    topics.forEach(function (topic, index) {
      const li = document.createElement("li");

      const span = document.createElement("span");
      span.textContent = topic;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("delete-btn");

      deleteBtn.addEventListener("click", function () {
        topics.splice(index, 1);

        console.log("Silme işleminden sonra liste:", topics);

        message.textContent = "Konu silindi.";

        renderTopics();
      });

      li.appendChild(span);
      li.appendChild(deleteBtn);

      topicList.appendChild(li);
    });
  }
});
