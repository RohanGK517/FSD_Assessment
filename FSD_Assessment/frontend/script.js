const form = document.getElementById('userForm');
const userTable = document.getElementById('userTable');
const api = 'http://127.0.0.1:8000/api/users/';

async function loadUsers() {
    const res = await fetch(api);
    const users = await res.json();
    userTable.innerHTML = '';
    users.forEach(user => {
        userTable.innerHTML += `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.date_of_birth}</td>
                <td>
                    <button onclick="editUser(${user.id}, '${user.name}', '${user.email}', '${user.date_of_birth}')">Edit</button>
                    <button onclick="deleteUser(${user.id})">Delete</button>
                </td>
            </tr>`;
    });
}

form.onsubmit = async e => {
    e.preventDefault();
    const id = document.getElementById('userId').value;
    const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        date_of_birth: document.getElementById('dob').value,
    };
    if (id) {
        await fetch(api + id + '/', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
    } else {
        await fetch(api, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
    }
    form.reset();
    loadUsers();
};

function editUser(id, name, email, dob) {
    document.getElementById('userId').value = id;
    document.getElementById('name').value = name;
    document.getElementById('email').value = email;
    document.getElementById('dob').value = dob;
}

async function deleteUser(id) {
    await fetch(api + id + '/', { method: 'DELETE' });
    loadUsers();
}

loadUsers();
