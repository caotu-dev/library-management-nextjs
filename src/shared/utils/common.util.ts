const CommonUtils = {
  updateUrlParams: (url: string) => {
    window.history.replaceState({}, '', url);
  },

  toSlug: (string: string) => {
    if (!string) return '';

    return string.toLowerCase()
      .replace(/[^\w]+/g, "-") // Replace non-word characters with hyphens
      .replace(/-+/g, "-");  // Replace multiple hyphens with a single hyphen
  },

  slugToID: (slug: string) => {
    const arr = slug.split('-');
    if (arr.length === 0) return '';

    const id = arr[arr.length - 1];
    return id;
  },

  splitArrayIntoChunks(array: any[], size: number) {
    if (size <= 0) {
      throw new Error('Size must be a positive number.');
    }

    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  },

  getRandomArrValue(array: any[]) {
    if (array.length === 0) {
      return undefined;
    }
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
}

export default CommonUtils;