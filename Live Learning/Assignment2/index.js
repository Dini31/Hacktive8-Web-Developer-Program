function submitForm() {
    event.preventDefault();

    const name = document.getElementById("input-name").value;
    document.getElementById("name").innerText = name;

    const role = document.getElementById("input-role").value;
    document.getElementById("role").innerText = role;

    const availbility = document.getElementById("input-availbility").value;
    document.getElementById("availbility").innerText = availbility;

    const usia = document.getElementById("input-usia").value;
    document.getElementById("usia").innerText = usia;

    const lokasi = document.getElementById("input-lokasi").value;
    document.getElementById("lokasi").innerText = lokasi;

    const pengalaman = document.getElementById("input-pengalaman").value;
    document.getElementById("pengalaman").innerText = pengalaman;

    const email = document.getElementById("input-email").value;
    document.getElementById("email").innerText = email;
  }