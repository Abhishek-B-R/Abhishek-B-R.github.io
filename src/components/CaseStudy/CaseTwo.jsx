import { HardDrive, HardDriveUpload, ScaleIcon } from "lucide-react"
import CaseStudy from "./structure"

export default function CaseTwo() {
  const caseStudyData = {
    caseStudyTitle: "2. Personalized Restaurant Recommendations on Zomato",

    businessChallenge: (
      <div>
        <p className="mb-4">
            Zomato must help each user discover restaurants and dishes matching their tastes among tens of thousands 
            of listings. The challenge is to personalize the restaurant feed for millions of users, based on sparse 
            data like past orders, search behavior, and location. Poor recommendations hurt engagement: users may 
            see irrelevant options and churn to competitors.
        </p>
        <p className="mb-4">
          Zomato explicitly optimizes these rankings: their engineering blog describes “personalized homepage listings” 
          driven by a customer’s history and similar 
          customers in the area. The goal is to maximize order-through rate (OTR) and revenue per session by 
          showing likely choices first. This must be done in real time as the user scrolls, so fast algorithmic 
          ranking is required.
        </p>
      </div>
    ),

    dataStructuresAndAlgorithms: {
      content: (
        <div>
          <p className="mb-4">
            This is a recommendation (recommender) problem, solved via collaborative filtering or learning-to-rank approaches.
            Data Structures: We represent interactions with a user-item matrix or bipartite graph. For example, an 
            adjacency list mapping each user to restaurants they liked or ordered is used for neighborhood methods.
            We might also build inverted indices or trees for quick lookups of user preferences by category. A Trie
            can implement autocomplete suggestions from past searches (Zomato uses Trie for instant search in O(L)
            time), but ranking requires modeling preferences.
          </p>
          <p className="mb-4">
            <strong>Algorithm:</strong> Common techniques include user-based or item-based CF, matrix factorization 
            (e.g. SVD), and gradient-boosted ranking models (Zomato uses LambdaMART (LightGBM)). For a simple 
            illustrative approach, consider user-based CF: compute similarity between a target user and all other 
            users, then predict unseen ratings. Pseudocode example using cosine similarity:
          </p>
          <p className="mb-4">In practice, Zomato’s system uses a tree-based learning-to-rank model (LightGBM) with 
            features like order frequency and customer location. However, the above CF code shows key DSA concepts:
             using vectors/matrices and heap/sorting to find nearest neighbors. For large user/item sets (n users, 
             m items), naive CF is O(nm) to compute predictions. To optimize, one can use sparse data structures 
             (hash maps of user-{">"}items), approximate nearest neighbors, or trie/hashed prefixes to accelerate 
             matching in high dimensions.
          </p>
        </div>
      ),
      code: `import math
# ratings: list of lists, ratings[u][i] = rating (or 0 if none)
def cosine_sim(u, v):
    # compute cosine similarity between two rating vectors
    dot = sum(ux*vx for ux,vx in zip(u, v))
    norm_u = math.sqrt(sum(ux*ux for ux in u))
    norm_v = math.sqrt(sum(vx*vx for vx in v))
    return dot / (norm_u * norm_v) if norm_u and norm_v else 0

def recommend_for_user(user_idx, ratings, K=5):
    # Compute similarity of this user to all others
    sims = [cosine_sim(ratings[user_idx], ratings[j]) 
            for j in range(len(ratings))]
    # Pick top K similar users
    neighbors = sorted(range(len(sims)), key=lambda j: sims[j], reverse=True)[1:K+1]
    # Score unseen items by weighted sum of neighbors' ratings
    scores = {}
    for nbr in neighbors:
        for item, rating in enumerate(ratings[nbr]):
            if ratings[user_idx][item] == 0 and rating > 0:
                scores[item] = scores.get(item, 0) + sims[nbr]*rating
    # Return items ranked by score
    return sorted(scores, key=scores.get, reverse=True)
`,
    },

    modelsAndFigures: {
      image: "https://images.openai.com/thumbnails/3f19f6326bb7821a642ecd654fa80097.png",
      imgStyle: " scale-150 mb-16 mt-10",  
      description: (
        <div>
          <p className="mb-4">
            <strong>Figure:</strong> A typical recommendation pipeline involves: data collection (user ratings, clicks),
             feature engineering, model training (e.g. matrix factorization or tree ranker), and real-time scoring. 
          </p>
          <p className="mb-4">
            Figure 2 (hypothetical) would show user data flowing into a model that outputs ranked restaurants. Although
            we do not embed an image here, a useful analogy is a graph where users and restaurants are nodes and edges
            are interactions – traversing this graph finds related items (a concept used in graph-based methods). 
            Conceptually, search suggestions use a prefix trie (O(L) per query) for instant lookup, while ranking 
            uses a priority queue (heap) to sort candidates (O(n log n) as noted in Zomato’s description).
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

            User-based CF (above) takes <strong>O(n * m)</strong> to compute similarities and scores across all users and items
            . With millions of users/items, this is impractical directly. In production, Zomato uses more 
            scalable methods. For example, training a LightGBM ranker involves building decision trees: 
            if there are N training pairs and F features, training is roughly <strong>O(F * N log N)</strong>.
          </p>

          <p className="mb-3">
            Online inference (scoring a few hundred candidates) is O(F * K) per query. Collaborative algorithms like 
            approximate nearest neighbors or dimensionality reduction (e.g. SVD, O(min(n,m)^2 * max(n,m))) can be 
            accelerated by techniques like locality-sensitive hashing or matrix sketching.
          </p>
        </div>
      ),
      spaceComplexity: (
        <div>
          <p className="mb-3">toring the full user-item matrix is O(n*m), which is huge. Instead, we store sparse interaction lists or 
            low-dimensional embeddings. Zomato’s multi-armed bandit approach updates weights daily per user, storing per-user 
            stats (O(n) space)
          </p>
          <div className="p-6 bg-gradient-to-br mt-20 from-green-100 to-orange-100 rounded-xl border border-yellow-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-500 rounded-lg shadow-sm">
                <ScaleIcon className="h-5 w-5 text-white" />
              </div>
              <h4 className="font-bold text-gray-800 text-lg">Scalability: </h4>
            </div>
            <div className="text-gray-700 leading-relaxed text-lg font-medium pl-2">
              <p className="mb-3">
                Zomato processes features in real time via systems like Redis and Flink. For recommendations, precomputed vectors for each 
                user/restaurant allow fast dot-product lookups (O(k) for k latent factors). The system also caches frequent queries. As one 
                Zomato engineer notes, “cache frequently used data” and “use approximate algorithms” to serve results instantly
              </p>
            </div>
          </div>
        </div>
      ),
    },

    overallImpactAndReferences: (
      <div>
        <p className="mb-4">
          Personalized recommendations are central to Zomato’s engagement strategy. By tailoring restaurant feeds, 
          Zomato saw measurable gains: their engineered list ranking (using reinforcement learning/MAB) increased 
          average order value per session by several rupees. Likewise, Uber’s data scientists report that graph-
          based recommendation improved relevance of foods to each user
        </p>
        <p className="mb-4">
          The general approach – modeling user-restaurant preferences in a graph or matrix – is common across 
          tech giants (e.g. Amazon, Netflix). Zomato’s blog confirms they use customer history and neighborhood 
          signals in a LightGBM ranker to optimize “order-through rates” and GMV.
        </p>
        <p className="mb-4">
          In summary, robust data structures (matrices, tries, graphs) and algorithms (CF, tree-based ranking) 
          underpin Zomato’s personalization pipeline
        </p>
      </div>
    ),

    inferencesAndImpact: (
      <div>
        <p className="mb-4">
          A well-tuned recommendation engine increases customer satisfaction and retention. We expect that 
          using collaborative filtering and ranking will raise engagement metrics: more orders per user and 
          higher lifetime value. For example, ranking by personalized scores encourages users to explore 
          more restaurants aligned with their tastes
        </p>
        <p className="mb-4">
          Efficient algorithms mean pages load instantly (important as “speed is everything” when users are 
          hungry), so customers see tailored suggestions without delay. Overall, we anticipate higher 
          conversion rates and revenues, validating the investment in these algorithms. By continuously 
          learning from user feedback and leveraging scalable data structures, Zomato can keep recommendations
          relevant, directly contributing to improved user experience and business
        </p>
        <p className="mb-4">
          <strong>Sources:</strong> Zomato’s engineering blog and related tech articles were referenced for these case studies<br/>
          <a href="https://blog.zomato.com/elements-of-scalable-machine-learning#:~:text=Restaurant%20recommendations%20are%20powered%20through,implementation%20of%20LightGBMs%20called%20LGBMRanker" target="_blank">Ref: Zomato blogs, </a>
          <a href="https://bytes.swiggy.com/assignment-routing-optimization-for-swiggy-instamart-delivery-part-i-2e8fb3115463?gi=0ecedf65dd92#:~:text=So%2C%20we%20break%20the%20problem,obtain%20a%20good%20quality%20solution" target="_blank"> Swiggy blogs, </a>  
          <a href="https://medium.com/@bhavesh.chaudhari221/zomato-complexity-algorithms-a-taste-of-tech-behind-the-table-db26efda9ef3#:~:text=8" target="_blank"> Medium, </a>
          <a href="https://www.uber.com/blog/fraud-detection/#:~:text=Graph%20learning%20methods%20have%20been,A" target="_blank"> Uber, </a>
          <a href="https://medium.com/@bhavesh.chaudhari221/zomato-complexity-algorithms-a-taste-of-tech-behind-the-table-db26efda9ef3#:~:text=4,Matrix%20Factorization" target="_blank"> Medium, </a>
          . These include Zomato’s own ML infrastructure posts and external analyses (Swiggy/Uber blogs, Medium summaries). Each case study’s models and conclusions are grounded in these published insights and algorithmic principles.
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
