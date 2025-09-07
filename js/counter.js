document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id);
    let current = start;
    let range = end - start;
    let increment = range > 0 ? 1 : -1;
    let step = Math.abs(Math.floor(duration / range));

    let timer = setInterval(() => {
      current += increment;
      obj.textContent = current;

      if (
        (increment > 0 && current >= end) ||
        (increment < 0 && current <= end)
      ) {
        clearInterval(timer);
        obj.textContent = end;
      }
    }, step);
  }

  let started = false;

  window.addEventListener("scroll", () => {
    if (!started && window.scrollY >= 200) {
      counter("count-1", 0, 500, 10000);
      counter("count-2", 100, 120, 10000);
      counter("count-3", 0, 30, 10000);
      started = true;
    }
  });
});
