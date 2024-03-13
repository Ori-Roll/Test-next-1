export const makeSlug = (slugs: (string | number)[]) => {
  return slugs.join('/');
};
