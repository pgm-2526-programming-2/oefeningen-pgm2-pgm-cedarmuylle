combineAllArrays([10, 12], [5, 4]);
combineAllArrays([10, 12], [5, 4], [6, 6, 6]);

function combineAllArrays(...arrs) {
    console.log(arrs.flat());
    return arrs.flat()
}