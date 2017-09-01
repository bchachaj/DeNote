export const createTagging = (tagging) => {
  return $.ajax({
    method: 'POST',
    url: '/api/taggings',
    data: { tagging }
  });
};

// export const deleteTagging = (tagId) => {
//
// };
