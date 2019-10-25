const images = [...Array(6).keys()]
  .map((wkey, widx) => {
    const w = `${-(widx * 114 + 55)}px`;

    const h = [...Array(4).keys()].map((hkey, hidx) => {
      return `${w} ${-hidx * 114 - 1}px`;
    });

    return h.join();
  })
  .join()
  .split(",");

export default images;
