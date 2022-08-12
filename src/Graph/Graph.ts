class Graph {
  // defining vertex array and
  // adjacent list
  noOfVertices: number;
  AdjList: Map<string[], string[]>;
  constructor(noOfVertices: number) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
  }

  // functions to be implemented

  // add vertex to the graph
  addVertex(v: string[]) {
    // initialize the adjacent list with a
    // null array
    this.AdjList.set(v, []);
  }
  // addEdge(v, w)
  // printGraph()

  // bfs(v)
  // dfs(v)
}
