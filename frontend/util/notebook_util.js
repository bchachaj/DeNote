
export const fetchAllNotebooks = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/notebooks'
  });
};

export const fetchOneNotebook = (notebookID) => {
  return $.ajax({
    method: 'GET',
    url: `/api/notebooks/${notebookID}`,
  });
};

export const deleteNotebook = (notebookID) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/notebooks/${notebookID}`
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
