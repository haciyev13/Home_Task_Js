const allUser = document.querySelector(".allUser");

async function dataUser() {
  allUser.innerHTML = "";

  try {
    const response = await axios.get("http://localhost:5700/data");
    const data = response.data;

    +
    data.forEach((supplier) => {
      allUser.innerHTML += `
          <div class="card col-5 m-3" >
            <div class="card-body">
              <div>
                <h5 class="card-title">${supplier.name}</h5>
                <p class="card-text">${supplier.email}</p>
              </div>
              <div class="icons">
                <a href="./editUser.html">
                  <i class="fa-solid fa-pen icon" onclick="editUser(${supplier.id})"></i>
                </a>
                <i class="fa-solid fa-trash-can icon" onclick="deleteUser(${supplier.id})"></i>
              </div>
            </div>
          </div>
        `;
    });
  } catch (error) {
    console.log(error);
  }
}
dataUser();

async function deleteUser(id) {
  try {
    await axios.delete(`http://localhost:5700/data/${id}`);
    dataUser();
  } catch (error) {
    console.log(error);
  }

  allUser.reset();
}