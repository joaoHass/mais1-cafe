import { CountUp } from "./node_modules/countup.js/dist/countUp.min.js"

const plus = {
  prefix: "+",
}

const plus_percentage = {
  prefix: "+",
  suffix: "%",
}

const mil = {
  suffix: "mil",
}

const percentage = {
  suffix: "%",
}

const count_6 = {
  prefix: "12-",
  suffix: "m²",
}

let count1 = new CountUp("count-1", 480, mil),
  count2 = new CountUp("count-2", 18, percentage),
  count3 = new CountUp("count-3", 20, percentage),
  count4 = new CountUp("count-4", 60),
  count5 = new CountUp("count-5", 22, plus_percentage),
  count6 = new CountUp("count-6", 20, count_6),
  count7 = new CountUp("count-7", 240, plus)

const observer = new IntersectionObserver(
  function (entries) {
    if (entries[0]["isIntersecting"] === true) {
      count1.start()
      count2.start()
      count3.start()
      count4.start()
      count5.start()
      count6.start()
      count7.start()
    }
  },
  { threshold: [0.4] }
)

observer.observe(document.querySelector(".section-stats"))
