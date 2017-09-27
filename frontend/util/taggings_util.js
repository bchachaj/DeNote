export const createTagging = (tagging) => {
  return $.ajax({
    method: 'POST',
    url: '/api/taggings',
    data: { tagging }
  });
};


export const fetchAllTaggings = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/taggings'
  });
};

export const deleteTagging = (tagId) => {
  return $.ajax({
    method: 'POST',
    url: `/api/taggings/${tagId}`
  });
};
