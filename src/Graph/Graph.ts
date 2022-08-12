export class Graph {
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
    // add edge to the graph
    addEdge(v: string[], w: string[]): void
    {
        if (this.AdjList && this.AdjList !== undefined) {
            // get the list for vertex v and put the
            // vertex w denoting edge between v and w
            this.AdjList.get(v).push(w);
        
            // Since graph is undirected,
            // add an edge from w to v also
            this.AdjList.get(w).push(v);
        }
    }
  // printGraph()

  // bfs(v)
  // dfs(v)
}
