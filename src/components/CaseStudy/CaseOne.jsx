import CaseStudy from "./structure"

export default function CaseOne() {
  const caseStudyData = {
    caseStudyTitle: "1. Delivery Route Optimization for Zomato",

    businessChallenge: (
      <div>
        <p className="mb-4">
          Zomato must assign orders to riders and plan delivery routes quickly to meet tight customer deadlines. During
          peak hours, thousands of orders surge simultaneously, and delays can harm customer satisfaction. For example,
          similar platforms handle on the order of hundreds of thousands of orders per day: Swiggy processes "200K+
          Orders with 150K+ delivery executives and 100+ stores every day," making manual planning infeasible.
        </p>
        <p className="mb-4">
          Zomato faces analogous scale, requiring automated routing to minimize delivery time and cost. Key constraints
          include traffic patterns, preparation times, and rider availability. Inefficient routing leads to longer
          waits, lower throughput, and higher fuel expense, directly impacting Zomato's operational efficiency and
          customer experience.
        </p>
      </div>
    ),

    dataStructuresAndAlgorithms: {
      content: (
        <div>
          <p className="mb-4">
            This problem is modeled as a graph-based shortest-path or routing problem. <strong>Data Structure:</strong>{" "}
            Model the delivery network as a weighted graph G = (V, E), where nodes V represent locations (restaurants,
            handoff points, customer addresses) and edges E represent roads weighted by travel time or distance. We use
            an adjacency list to store the graph, enabling efficient traversal.
          </p>
          <p className="mb-4">
            <strong>Algorithm:</strong> The core is Dijkstra's algorithm (or A* for heuristics) to find the shortest
            path from a restaurant to a customer. Dijkstra's uses a min-heap (priority queue) to repeatedly extract the
            nearest unvisited node.
          </p>
          <p className="mb-4">
            We also incorporate real-time traffic data by updating edge weights dynamically. For multi-stop deliveries
            (batching several orders per rider), we treat each route as a sequence of shortest paths connecting stops.
            In practice, Zomato uses approximation/heuristic algorithms for vehicle routing problems (VRP) to batch
            orders efficiently.
          </p>
        </div>
      ),
      code: `import heapq

def dijkstra(graph, src):
# graph: {node: [(neighbor, weight), ...], ...}
dist = {node: float('inf') for node in graph}
dist[src] = 0
pq = [(0, src)]

while pq:
    (d, node) = heapq.heappop(pq)
    if d > dist[node]:
        continue
    for (nbr, wt) in graph[node]:
        nd = d + wt
        if nd < dist[nbr]:
            dist[nbr] = nd
            heapq.heappush(pq, (nd, nbr))

return dist  # shortest distances from src to all nodes`,
    },

    modelsAndFigures: {
      image: "https://www.maptive.com/wp-content/uploads/2021/03/route-planner-multiple-stops-routes-1024x501.jpg",
      description: (
        <div>
          <p className="mb-4">
            <strong>Figure:</strong> Example of an optimized multi-stop delivery route (color-coded) computed by an
            algorithm. Nodes (markers) are pickup or drop-off locations, and the colored path shows the route minimizing
            total travel time.
          </p>
          <p className="mb-4">
            The figure illustrates how orders are clustered and assigned to a rider. Algorithms like Dijkstra (or A*)
            traverse the graph of stops to find this path. In a real system, multiple such routes would be computed
            simultaneously for different riders. Zomato may first assign a batch of orders (via a clustering or
            assignment heuristic) and then compute each rider's path using shortest-path algorithms.
          </p>
        </div>
      ),
    },

    efficiencyAnalysis: {
      timeComplexity: (
        <div>
          <p className="mb-3">
            Dijkstra's algorithm on a graph of |V| nodes and |E| edges using a binary heap takes{" "}
            <strong>O((V + E) log V)</strong> time. In urban delivery contexts, V might include many street
            intersections, so practical implementations limit V/E by only including relevant stops and roads.
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
            The graph uses <strong>O(V + E)</strong> space. Distance and visited sets require O(V). If we precompute
            all-pairs, that's O(V²), but Zomato computes per-order on demand.
          </p>
          <p className="mb-3">
            Caching frequently used sub-paths reduces repeated computation. Given millions of orders per day, the system
            parallelizes route planning (sharding data, distributed compute) to handle load.
          </p>
        </div>
      ),
    },

    overallImpactAndReferences: (
      <div>
        <p className="mb-4">
          Efficient routing is mission-critical to Zomato's logistics. Poor routes increase delivery times and costs,
          hurting customer satisfaction and profits. Industry sources highlight that leading food-delivery companies
          (Zomato, Swiggy, UberEats) solve such routing at scale using graph algorithms and heuristics.
        </p>
        <p className="mb-4">
          For example, Swiggy splits the problem into last-mile (batching and routing) and first-mile (just-in-time
          rider assignment) to meet strict deadlines. Similarly, Zomato's own engineering blog notes they "process
          millions of food orders every day" and emphasize speed: only fast algorithms (or approximations) are
          practical.
        </p>
        <p className="mb-4">
          Thus, graph-based route planning is deeply embedded in Zomato's stack, alongside map enhancements (Zomato
          builds dense road maps from GPS data) to improve routing accuracy.
        </p>
      </div>
    ),

    inferencesAndImpact: (
      <div>
        <p className="mb-4">
          Implementing optimized routing drastically reduces delivery times and fuel usage. Simulations and field tests
          at delivery companies show that intelligent batching and routing cut per-order travel distances and idle time.
        </p>
        <p className="mb-4">
          We expect Zomato to see higher on-time delivery rates and rider utilization, boosting customer satisfaction.
          Faster, predictable deliveries can increase order throughput (serving more customers per hour) and reduce
          operational costs.
        </p>
        <p className="mb-4">
          In summary, applying graph algorithms (like Dijkstra's) with smart heuristics leads to measurable gains in
          efficiency and experience. Over time, this means more customers served with the same fleet size, aligning with
          Zomato's goals of scalability and reliability.
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
