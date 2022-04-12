
// Interview question 1 - minesweeper
const mineSweeper = (bombs,num_rows,num_cols) => {
    let field = []
    
    for (let i = 0; i < num_rows; i++) {
        field.push([])
        for(let j = 0; j < num_cols; j++){
            field[i].push(0);
        }
    }

    for (b in bombs){
        let [bomb_row, bomb_col] = bombs[b];
        field[bomb_row][bomb_col] = -1
    
        for(let i = bomb_row - 1; i < bomb_row + 2; i++){
            for(let j = bomb_col - 1; j < bomb_col + 2; j++){
                let conditionOne = 0 <= i && i < num_rows;
                let conditionTwo = 0 <= j && j < num_cols;
                if(conditionOne && conditionTwo){
                    if(field[i][j] !== -1){
                        field[i][j] += 1;
                    }
                }
            }
        }
    }
    return field;
}

// console.log(`Interview Question 1 Answer: ${mineSweeper([[0,0],[1,2]],3,3)}`)

// Interview question 2 - depth and breadth algos
const graph = {
    a:['b','c'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
}

const depthFirstPrint = (graph, source) => {
    const stack = [ source ];

    while (stack.length > 0) {
        const current = stack.pop();
        console.log(current);

        for (let neighbor of graph[current]){
            stack.push(neighbor);
        }
    }
}
// depthFirstPrint(graph,'a'); // abdfce

const depthFirstPrintRecursive = (graph,source) => {
    console.log(source);
    for (let neighbor of graph[source]){
        depthFirstPrintRecursive(graph,neighbor)
    }
}
// depthFirstPrintRecursive(graph,'a'); // abdfce


const breadthFirstPrint = (graph, source) => {
    const queue = [ source ];

    while (queue.length > 0){
        const current = queue.shift();
        console.log(current);

        for (let neighbor of graph[current]){
            queue.push(neighbor);
        }
    }
}

// breadthFirstPrint(graph, 'a'); // abcdef


// Interview question 3 - is there a path?
const graph2 = {
    f:['g','i'],
    g:['h'],
    h:[],
    i:['g','k'],
    j:['i'],
    k:[],
}

const hasPath = (graph, src, dst) => {
    if (src === dst) return true;

    for (let neighbor of graph[src]){
        if (hasPath(graph,neighbor,dst)){
            return true;
        }
    }

    return false;
}
// console.log(hasPath(graph2,'f','k')) // true

const hasPathBreadth = (graph, src, dst) => {
    const queue = [ src ];

    while (queue.length > 0) {
        const current = queue.shift();
        if (current === dst) return true;
        
        for (let neighbor of graph[current]) {
            queue.push(neighbor);
        }
    }

    return false;
}
// console.log(hasPathBreadth(graph2,'f','k')) // true


// Interview question 4- is there a path checking for cyclical?
const edgesArray = [
    ['i','j'],
    ['k','i'],
    ['m','k'],
    ['k','l'],
    ['o','n'],
];

const graph3 = {
    i:['j','k'],
    j:['i'],
    k:['i','m','l'],
    m:['k'],
    l:['k'],
    o:['n'],
    n:['o']
};

const unidirectedPath = (edges, nodeA, nodeB) => {
    const graphPath = buildGraph(edges);
    return hasUndirectedPath(graphPath, nodeA, nodeB, new Set());
}

const hasUnidirectedPath = (graph, src, dst, visited) => {
    if(src === dst) return true;
    if(visited.has(src)) return false;

    visited.add(src);

    for (let neighbor of graph[src]) {
        if(hasUnidirectedPath(graph,neighbor,dst,visited)) return true;
    }
    return false;
}

// building a graph from different format into an object
const buildGraph = (edges) => {
    const graphObject = {};
    for(let edge of edges) {
        const [a,b] = edge;
        if(!(a in graphObject)) graphObject[a] = [];
        if(!(b in graphObject)) graphObject[b] = [];
        graphObject[a].push(b);
        graphObject[b].push(a);
    }
    return graphObject;
}

// console.log(unidirectedPath(edgesArray,'j','m')); // true


// Interview question 5- connected components count
const connectedComponentsCount = (graph) => {
    const visited = new Set();
    let count = 0;

    for(let node in graph){
        if(explore(graph,node,visited)){
            count += 1;
        }
    }
    return count;
};

const explore = (graph,current,visited) => {
    if(visited.has(String(current))) return false;

    visited.add(String(current));

    for(let neighbor of graph[current]){
        explore(graph,neighbor,visited);
    }

    return true;
}

// console.log(connectedComponentsCount({
//     0:[8,1,5],
//     1:[0],
//     5:[0,8],
//     8:[0,5],
//     2:[3,4],
//     3:[2,4],
//     4:[3,2]
// })) // 2

// Interview question 6- find the largest component
const largestComponent = (graph) => {
    const visited = new Set();
    let largest = 0;

    for(let node in graph){
        const size = explore2(graph,node,visited);
        if(size > largest){
            largest = size;
        }
    }
    return largest;
}

const explore2 = (graph,current,visited) => {
    if(visited.has(String(current))) return 0;
    visited.add(String(current));
    let runningTotal = 1;

    for(let neighbor of graph[current]){
        runningTotal += explore2(graph,neighbor,visited);
    }
    return runningTotal;
}

// console.log(largestComponent({
//     0:[8,1,5],
//     1:[0],
//     5:[0,8],
//     8:[0,5],
//     2:[3,4],
//     3:[2,4],
//     4:[3,2]
// })) // 4


// Interview question 7- what is the shortest path?
const shortestPath = (edges, nodeA, nodeB) => {
    const graphPath = buildGraph(edges);
    const visited = new Set([nodeA]);
    const queue = [[nodeA, 0]];

    while(queue.length > 0){
        const [node,distance] = queue.shift();
        if(node === nodeB) return distance;
        for(let neighbor of graphPath[node]){
            if(!visited.has(neighbor)){
                visited.add(neighbor);
                queue.push([neighbor, distance + 1]);
            }
        }
    }

    return -1;
};

// console.log(shortestPath([
//     ['w','x'],
//     ['x','y'],
//     ['z','y'],
//     ['z','v'],
//     ['w','v']
// ],'w','z')) // 2


// Interview question 8- island count
const grid = [
    ['W','W','W','W','W'],
    ['W','W','W','W','W'],
    ['W','W','W','L','W'],
    ['W','W','L','L','W'],
    ['L','W','W','L','L'],
    ['L','L','L','W','W']
];

const islandCount = (grid) => {
    let count = 0;
    const visited = new Set();
    const {numRows, numCols} = {numRows:grid.length,numCols:grid[0].length};

    for(let r = 0; r < numRows; r += 1){
        for(let c = 0; c < numCols; c += 1){
            if(findLand(grid,r,c,visited,numRows,numCols)){
                count += 1;
            }
        }
    }
    return count;
}

const findLand = (grid, row, col, visited,numRows,numCols) => {
    // check whether item is in the grid area
    const rowInbounds = 0 <= row && row < numRows;
    const colInbounds = 0 <= col && col < numCols;
    if(!rowInbounds || !colInbounds) return false;

    // check for water
    if(grid[row][col] === "W") return false;

    // cyclical check
    const position = `${row},${col}`;
    if(visited.has(position)) return false;
    visited.add(position);

    findLand(grid,row - 1, col, visited, numRows, numCols);
    findLand(grid,row + 1, col, visited, numRows, numCols);
    findLand(grid,row, col - 1, visited, numRows, numCols);
    findLand(grid,row, col + 1, visited, numRows, numCols);

    return true;
};

// console.log(islandCount(grid)) // 3

// Interview question 9- minimum island
const minimumIsland = (grid) => {
    const visited = new Set();
    const [numRows, numCols] = [grid.length,grid[0].length];
    let minimumIslandSize = numRows * numCols;

    for(let r = 0; r < numRows; r += 1){
        for(let c = 0; c < numCols; c += 1){
            const islandTotalSize = findLandSize(grid,r,c,visited,numRows,numCols);
            if(islandTotalSize != 0 && islandTotalSize < minimumIslandSize){
                minimumIslandSize = islandTotalSize;
            }
        }
    }
    return minimumIslandSize;
};

const findLandSize = (grid,row,col,visited,numRows,numCols) => {
    // check if inbounds
    if(!(0 <= row && row < numRows) || !(0 <= col && col < numCols)) return 0;

    // check if water
    if(grid[row][col] === "W") return 0;

    // cyclical check
    const position = `${row},${col}`;
    if(visited.has(position)) return 0;
    visited.add(position);

    let islandSize = 1;
    islandSize += findLandSize(grid,row - 1, col, visited, numRows, numCols);
    islandSize += findLandSize(grid,row + 1, col, visited, numRows, numCols);
    islandSize += findLandSize(grid,row, col - 1, visited, numRows, numCols);
    islandSize += findLandSize(grid,row, col + 1, visited, numRows, numCols);

    return islandSize;
}

console.log(minimumIsland(grid)) // 2
