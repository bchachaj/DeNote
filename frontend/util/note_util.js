const fetchAllNotes = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/notes'
  });
};

const fetchSingleNote = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/notes/${id}`
  });
};


const createNote = (note) => {
  return $.ajax({
    method: 'POST',
    url: 'api/notes',
    data: { note }
  });
};

export const editNote = (note) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/notes/${note.id}`,
    data: { note }
  });
};

export const deleteNote = (note) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/notes/${note.id}`
  });
};
