fetch("data/files.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("files");

    data.forEach(file => {
      const div = document.createElement("div");
      div.className = "file";

      div.innerHTML = `
        <h2>${file.title}</h2>
        <p><strong>Class:</strong> ${file.class}</p>
        <p>${file.description}</p>
      `;

      container.appendChild(div);
    });
  });
