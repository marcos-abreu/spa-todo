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
