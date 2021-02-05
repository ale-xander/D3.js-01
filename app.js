console.log("hahahah")

//refereance to canvas element
const canvas = d3.select(".canvas")

// create svg container
const svg = canvas.append("svg")
    .attr("height", 600)
    .attr("width", 600)// add an attribute

const group = svg.append('g')
    .attr("transform", "translate(0,100)")

//append shapes to svg container
group.append("rect")
    .attr("height", 100)
    .attr("width", 200)
    .attr("fill", "#0339fc")
    .attr("x", 20)
    .attr("y", 20)

group.append("circle")
    .attr("r", 50)
    .attr("cx", 300)
    .attr("cy", 70)
    .attr("fill", "#7b03fc")

group.append("line")
    .attr("x1", 370)
    .attr("x2", 400)
    .attr("y1", 20)
    .attr("y2", 320)
    .attr("stroke", "#d13b04")

svg.append("text")
    .attr("x", 20)
    .attr("y", 200)
    .attr("fill", "goldenrod")
    .text("what's up")
    .style("font-family", "helvetica")