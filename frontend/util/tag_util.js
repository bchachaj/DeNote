export const fetchAllTags = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/tags'
  });
};

export const fetchSingleTag = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/tags/${id}`
  });
};

export const createTag = (tag) => {
  return $.ajax({
    method:'POST',
    url:'/api/tags',
    data: {tag}
  });
};

export const deleteTag = id => {
  return $.ajax({
    method: 'DELETE',
    url:`/api/tags/${id}`
  });
};

export const fetchTagNotes = (tag) => {
  return $.ajax({
    method: 'GET',
    url: `/api/tags/${tag.tag_name}/notes`
  });
};
