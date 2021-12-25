const arguments = process.argv.slice(1);
function findCircumference(radius)
{
    let circumference = 2 * Math.PI * radius;
    return `Radius: ${radius} | Circumference: ${circumference}`;
}

console.log(findCircumference(arguments[1]));