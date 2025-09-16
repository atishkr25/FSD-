document.getElementById("Add-student").addEventListener("click", function () {
    const name = document.getElementById("name-input").value.trim();
    const marks = document.getElementById("marks-input").value.trim();

    if (name === "" || marks === "") {
        alert("Naam aur marks dono bharna zaroori hai.");
        return;
    }

    const marksNum = Number(marks);

    const table = document.getElementById("marksTable");

    // Nayi row insert karo
    const newRow = table.insertRow();

    // Cells insert karo
    const nameCell = newRow.insertCell(0);
    const marksCell = newRow.insertCell(1);

    nameCell.innerText = name;
    marksCell.innerText = marksNum;

    // Input fields clear kar do
    document.getElementById("name-input").value = "";
    document.getElementById("marks-input").value = "";
});
