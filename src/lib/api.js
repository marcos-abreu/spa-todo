export const saveProfile = function(profile) {
  return fetch('http://localhost:3000/profile', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(profile)
  })
  .then(function(res) {
    return res.json();
  });
}

export const fetchProfile = function() {
  return fetch('http://localhost:3000/profile')
  .then(function(res) {
    return res.json();
  });
}

export const fetchTasks = function() {
  return fetch('http://localhost:3000/todos')
  .then(function(res) {
    return res.json();
  });
}

export const addTask = function(description) {
  return fetch('http://localhost:3000/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({description: description})
  })
  .then(function(res) {
    return res.json();
  });
}

export const removeTask = function(id) {
  return fetch(`http://localhost:3000/todos/${id}`, {
    method: 'DELETE'
  })
  .then(function(res) {
    // in real apps you would have to check errors returned by the server
    // as well as requests that werent able to reach the server

    // a delete request won't return anything in case of success. And since
    // we are being 'optimist' and only account for success we will only return
    // the id of the deleted task
    return id;
  });
}
