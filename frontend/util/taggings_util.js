export const createTagging = (tagging) => {
  debugger;
  console.log(tagging);
  return $.ajax({
    method: 'POST',
    url: '/api/taggings',
    data: { tagging }
  });
};


export const deleteTagging = (tagId) => {
  return $.ajax({
    method: 'POST',
    url: `/api/taggings/${tagId}`
  });
};
