import CaseStudy from "./structure"

export default function CaseOne() {
  const caseStudyData = {
    caseStudyTitle: "6: Restaurant Table Allocation",

    businessChallenge: (
      <div>
        <p className="mb-4">
            A Zomato-partner restaurant layout with tables. In practice, Zomato Book partners must assign incoming 
            reservation parties (of varying size) to tables of different capacities. Optimizing this seating maximizes
            covers and reduces waitlists
        </p>
      </div>
    ),

    dataStructuresAndAlgorithms: {
      content: (
        <div>
          <p className="mb-4">
            For example, a simple approach sorts party sizes and uses a greedy “first-fit” algorithm: iterate through 
            parties and assign each to the first table with enough remaining seats. The algorithm keeps track of 
            each table’s available capacity (initially full). In Python, we can simulate this as following code:
          </p>
          <p className="mb-4">
            This greedy seating runs in linear time relative to the number of groups and tables (approximately O(n)).
            <a href="https://github.com/jasdipsekhon/Restaurant-Seating-Algorithm/tree/master" target="_blank">
            Ref: Github </a>
            In practice, one may modify this “next-fit” strategy by continuing to the next table rather than restarting 
            from the first, which still yields an O(n)-time allocation (using constant extra space)</p>
        </div>
      ),
      code: `# Assign party groups to restaurant tables (greedy bin-packing)
groups = [4, 2, 5, 3, 2]         # party sizes
table_capacity = 6               # e.g. all tables seat up to 6
remaining = []                   # remaining seats per table
for g in sorted(groups, reverse=True):
    placed = False
    for i in range(len(remaining)):
        if remaining[i] >= g:
            remaining[i] -= g
            placed = True
            break
    if not placed and table_capacity >= g:
        remaining.append(table_capacity - g)
# remaining[] now holds unused seats on each occupied table
print("Unused seats per table:", remaining)
`,
    },

    efficiencyAnalysis: {
      timeComplexity: (
        <div>
          <p className="mb-3">
            The greedy seating algorithm above runs in roughly O(n·m) time (n parties, m tables), 
            often simplified to O(n) when m ≈ n.
          </p>
          <a href="https://github.com/jasdipsekhon/Restaurant-Seating-Algorithm/tree/master" target="_blank" rel="noopener noreferrer">
            <strong>Ref: Github</strong>
          </a>
        </div>
      ),
      spaceComplexity: (
        <div>
          <p className="mb-3">
            Space usage is O(m) for tracking table capacities. More optimal variants can achieve O(n) 
            time and O(1) extra space
          </p>
          <a href="https://github.com/jasdipsekhon/Restaurant-Seating-Algorithm/tree/master" target="_blank" rel="noopener noreferrer">
            <strong>Ref: Github</strong>
          </a>
        </div>
      ),
    },

    overallImpactAndReferences: (
      <div>
        <p className="mb-4">
            Filling tables efficiently means more customers served and higher revenue. Zomato guidance notes that proper capacity management “can… fill more seats, and more efficiently run your front of house”
            <a href="https://support.zomatobook.com/hc/en-us/articles/115001183912-Capacity-management-setting-up-capacity-table-inventory-iPad-App#:~:text=I%20want%20to%20start%20off,may%20take%20a%20few%20minutes" 
            target="_blank"><br/> Ref: support.zomatobook.com</a>.
        </p>
        <p className="mb-4">
            In algorithmic terms, minimizing wasted seats (unused capacity) directly boosts covers per shift. 
            For Zomato restaurants, this translates to more orders fulfilled and increased turnover. An efficient 
            seating algorithm reduces idle table time and waitlists, improving customer satisfaction and loyalty.
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
