import CaseStudy from "./structure"

export default function CaseOne() {
  const caseStudyData = {
    caseStudyTitle: "8: Coupon Allocation Optimization",

    businessChallenge: (
      <div>
        <p className="mb-4">
          Illustration of a knapsack-selection scenario. Zomato often issues limited promotional coupons to drive retention, 
          but with a finite budget. We can model the coupon allocation as a 0/1 knapsack problem: each potential 
          coupon (or user segment) is an “item” with a cost (coupon value) and an estimated benefit (expected 
          increase in revenue or retention). The goal is to select coupons under a total budget W to maximize benefit. 
          This is solved by dynamic programming.
        </p>
      </div>
    ),

    dataStructuresAndAlgorithms: {
      content: (
        <div>
          <p className="mb-4">
             For example, suppose Zomato has budget W and a list of coupons with cost[i] and value[i]. We create a DP 
             table dp[i][w] for the max value using the first i coupons with cost limit w:
          </p>
        </div>
      ),
      code: `def knapsack(values, weights, W):
    n = len(values)
    dp = [[0]*(W+1) for _ in range(n+1)]
    for i in range(1,n+1):
        for w in range(1,W+1):
            dp[i][w] = dp[i-1][w]
            if weights[i-1] <= w:
                dp[i][w] = max(dp[i][w], values[i-1] + dp[i-1][w-weights[i-1]])
    return dp[n][W]

# Example:
values = [15, 25, 35]    # expected revenue gains from coupons
weights = [5, 7, 9]      # coupon costs
budget = 10
print("Max gain:", knapsack(values, weights, budget))
`,
    },

    modelsAndFigures: {
      image: "./public/case8.png",
      description: (
        <div>
          <p className="mb-4">
            <strong>Figure:</strong> Here is an illustration of the idea, where the left represents picking up the item and the right giving up the item.
            It  visually outlines the dynamic programming paths for item selection.
          </p>
        </div>
      ),
    },

    efficiencyAnalysis: {
      timeComplexity: (
        <div>
          <p className="mb-3">
            This DP solution runs in O(n·W) time. With n coupons and budget W, the table has (n+1)×(W+1) entries.
          </p>
        </div>
      ),
      spaceComplexity: (
        <div>
          <p className="mb-3">
            This DP solution runs in O(n·W) space.One can optimize to O(W) space if needed.
          </p>
        </div>
      ),
    },

    overallImpactAndReferences: (
      <div>
        <p className="mb-4">
          Zomato business logic and optimization insights are drawn from official Zomato Book documentation
<a href="https://support.zomatobook.com/hc/en-us/articles/115001183912-Capacity-management-setting-up-capacity-table-inventory-iPad-App#:~:text=I%20want%20to%20start%20off,may%20take%20a%20few%20minutes">
  Ref:support.zomatobook.com 
</a>
, algorithmic matching literature
<a href="https://medium.com/data-science/optimum-assignment-and-the-hungarian-algorithm-8b1027628028#:~:text=minimized,book%20a%20Uber%20or%20Ola" target="_blank">
  Ref:medium.com </a>
<a href="https://www.geeksforgeeks.org/maximum-bipartite-matching/#:~:text=Time%20Complexity%3A%20O%28V" target="_blank">
  Ref:geeksforgeeks.org </a>
, and strategic analyses of Zomato’s coupon initiatives.
        </p>
      </div>
    ),

    inferencesAndImpact: (
      <div>
        <p className="mb-4">
           Smart coupon use greatly affects retention. Zomato reports that post-order coupons are a “brilliant move 
           to improve customer retention”. In fact, studies show even a 5% boost in purchase frequency (via coupons) 
           can raise profits by ~25%. Thus, maximizing “value” (repeat orders) under a coupon budget has big ROI. 
           An optimal allocation means issuing coupons to the users most likely to use them (highest expected return), 
           thereby maximizing repeat orders and revenue from a fixed marketing budget. This improves customer lifetime 
           value and lowers customer acquisition cost.
        </p>
        <p className="mb-4">
          By solving this knapsack formulation, Zomato can systematically decide which coupons to issue now to drive 
          long-term orders, rather than wasting budget on low-impact coupons. The approach yields measurable benefits 
          in retention and profit, making the firm’s promotions significantly more effective.
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
