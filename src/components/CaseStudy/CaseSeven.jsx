import CaseStudy from "./structure"

export default function CaseOne() {
  const caseStudyData = {
    caseStudyTitle: "7: Driver–Order Matching",

    businessChallenge: (
      <div>
        <p className="mb-4">
          A bipartite graph example (green/gray sets). To assign delivery partners to orders, Zomato faces a classic 
          bipartite matching problem. One side is the set of available riders and the other is incoming orders; 
          edges connect riders to orders they can serve (e.g. within a feasible travel time). The goal is to match 
          each rider to at most one order, minimizing overall wait or travel cost.
        </p>
      </div>
    ),

    dataStructuresAndAlgorithms: {
      content: (
        <div>
          <p className="mb-4">
            One algorithmic solution is to construct a bipartite graph and compute a maximum matching. For instance, 
            using a DFS-based augmenting-path algorithm (a form of Hopcroft–Karp), we can find the largest matching. 
            In Python, this can be implemented by building an adjacency list and performing augmenting-path searches:
          </p>
          <p className="mb-4">
            For more complex cost-weighted matching, one can use the Hungarian algorithm. Indeed, studies note that 
            “the Hungarian algorithm is used to solve [taxi–passenger] assignment every time we book an Uber or Ola”, 
            and similar methods apply to Zomato’s rider-order matching.
            <a href="https://medium.com/data-science/optimum-assignment-and-the-hungarian-algorithm-8b1027628028#:~:text=minimized,book%20a%20Uber%20or%20Ola" target="_blank">Ref: Medium</a>
          </p>
        </div>
      ),
      code: `def max_bipartite_matching(graph, M, N):
    matchR = [-1]*N  # matched driver index for each order (or -1)
    def bpm(u, seen):
        for v in graph[u]:
            if not seen[v]:
                seen[v] = True
                if matchR[v] < 0 or bpm(matchR[v], seen):
                    matchR[v] = u
                    return True
        return False

    result = 0
    for u in range(M):
        seen = [False]*N
        if bpm(u, seen):
            result += 1
    return result, matchR

# Example usage:
# 3 drivers (0-2) and 4 orders (0-3); edges list possible matches.
graph = {0:[0,1], 1:[2], 2:[1,3]}
M, N = 3, 4
adj = [graph.get(i, []) for i in range(M)]
matches, pairing = max_bipartite_matching(adj, M, N)
print(matches, pairing)  # e.g. 3 matched orders, with pairing[v]=driver
`,
    },

    efficiencyAnalysis: {
      timeComplexity: (
        <div>
          <p className="mb-3">
            The above DFS-based matching runs in about O(V·E) time (where V is vertices and E edges). 
            In practice, that is O((M+N)·E).
          </p>
          <p className="mb-3">
            If K orders are batched to one rider, we perform up to K+1 Dijkstra runs (connecting K+1 nodes). In
            contrast, exact VRP solvers are NP-hard; Zomato uses heuristics to keep computation near real-time (under 1
            minute).
          </p>
        </div>
      ),
      spaceComplexity: (
        <div>
          <p className="mb-3">
            Space complexity is O(V+E) for the graph and matching array.
          </p>
          <p className="mb-3">
            The Hungarian algorithm (for weighted matching) runs in roughly O(n³) for n×n cost matrices.
          </p>
        </div>
      ),
    },

    overallImpactAndReferences: (
      <div>
        <p className="mb-4">
          Optimally matching orders to riders minimizes delivery delays. As ride-sharing platforms have demonstrated, 
          efficient matching directly reduces wait times and costs. For Zomato, this means faster deliveries, 
          higher on-time performance, and better driver utilization. Faster order fulfillment improves customer 
          satisfaction and allows handling more orders per hour, thus increasing revenue. Inference: even a small 
          improvement in match quality can yield significant cost savings and throughput gains.
          <a href="https://medium.com/data-science/optimum-assignment-and-the-hungarian-algorithm-8b1027628028#:~:text=minimized,book%20a%20Uber%20or%20Ola" target="_blank">Ref: Medium</a>
        </p>
      </div>
    ),
  }

  return (
    <div className="min-h-scree py-8">
      <CaseStudy {...caseStudyData} />
    </div>
  )
}
