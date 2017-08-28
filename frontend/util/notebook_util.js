
export const fetchAllNotebooks = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/notebooks'
  });
};

export const fetchOneNotebook = (notebook) => {
  return $.ajax({
    method: 'POST',
    url: `/api/notebooks/${notebook.id}`,
  });
};

export const deleteNotebook = (notebook) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/notebooks/${notebook.id}`
  });
};

export const createNotebook = (notebook) => {
  return $.ajax({
    method: 'POST',
    url: '/api/notebooks',
    data: {
      notebook
    }
  });
};
