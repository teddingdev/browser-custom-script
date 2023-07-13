// https://www.zhihu.com/tardis/*
Array.prototype.filter
  .call(document.getElementsByTagName("img"), (x: HTMLImageElement) => {
    return x.className.includes("origin_image zh-lightbox-thumb");
  })
  .forEach((x: HTMLImageElement) => {
    const dataOriginal = x
      .getAttribute("data-original")
      ?.replace("jpg", "webp");
    if (dataOriginal) {
      x.setAttribute("src", dataOriginal);
    }
  });
