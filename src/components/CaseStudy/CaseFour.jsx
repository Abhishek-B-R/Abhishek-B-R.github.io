import CaseStudy from "./structure"

export default function CaseFour() {
  const caseStudyData = {
    caseStudyTitle: "4: Predicting Customer Churn and Boosting Retention",

    businessChallenge: (
      <div>
        <p className="mb-4">
          Customer churn is when active users stop ordering. For Zomato, retaining a customer is far cheaper than 
          acquiring a new one. Identifying “which users are most likely to churn” enables targeted retention 
          (coupon offers, loyalty perks)
        </p>
        <p className="mb-4">
          In a competitive foodtech market, reducing churn directly improves revenue and lifetime value.
        </p>
      </div>
    ),

    dataStructuresAndAlgorithms: {
      content: (
        <div>
          <p className="mb-4">
            We build a churn prediction model using customer order history. Key features include order frequency, average
             spend, time since last order, variety of cuisines, loyalty program participation, and complaints logged. 
             We maintain per-user feature vectors in a database or key-value store (like DynamoDB) for fast lookups.
          </p>
          <p className="mb-4">
            For the predictive algorithm, we use a Logistic Regression or Random Forest classifier. In Python (using 
            scikit-learn) the code is below:
          </p>
          <p>
            This model outputs probability of churn. Training complexity is roughly O(n·d²) (where d = number of features). 
            Logistic regression stores d weights (space O(d)). For large feature sets, we use L1/L2 regularization to 
            avoid overfitting. Alternatively, a Random Forest or XGBoost can capture non-linearities; these have 
            O(n·m·log n) training complexity (with m trees) and O(m·log n) inference per sample, which is still 
            feasible for tens of features. We integrate this model into a daily ETL pipeline: user data (transactions, 
            reviews, sessions) are ingested (e.g. via Airflow), features are computed using Spark or Flink, and the model 
            scores users.
          </p>
        </div>
      ),
      code: `from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split

# X: feature matrix (num_users × num_features), y: churn label (0=no, 1=yes)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)
clf = LogisticRegression(max_iter=1000)
clf.fit(X_train, y_train)
preds = clf.predict(X_test)
`,
    },

    modelsAndFigures: {
      image: "https://www.researchgate.net/publication/331908752/figure/fig11/AS:108394471934976@1629938454221/Proposed-churn-Prediction-System-Architecture.png",
      description: (
        <div>
          <p className="mb-4">
            <strong>Figure:</strong> A typical churn prediction pipeline looks like the following (see figure): all 
            streaming and batch events (orders, app usage, support tickets) feed into analytics. A feature store 
            holds engineered features per user. Each night, the ML model trains on this data and produces churn 
            probabilities. (No specific external image found for Zomato’s pipeline; architecture can be abstracted 
            from generic churn prediction diagrams.)
          </p>
        </div>
      ),
    },

    efficiencyAnalysis: {
      timeComplexity: (
        <div>
          <p className="mb-3">
            Logistic Regression training is O(n·d²) and prediction O(d) per user, which scales to millions of users 
            with distributed frameworks. Random Forest is heavier but parallelizable (train each tree separately). 
            Using Flink SQL or Spark, feature computation on user-event streams is O(E) for E events. 
          </p>
        </div>
      ),
      spaceComplexity: (
        <div>
          <p className="mb-3">
            By incrementally updating features (e.g. sliding window counts), we keep memory usage low (storing only 
            user summaries). The approach scales: as user base grows, we can shard by region or user ID and run 
            models in parallel.
          </p>
        </div>
      ),
    },

    overallImpactAndReferences: (
      <div>
        <p className="mb-4">
          Many food delivery companies build churn models to drive retention. For instance, practitioners identify 
          patterns (e.g. single-cuisine consumers churn more <a href="https://medium.com" target="_blank">Ref: Medium</a>) and train classifiers 
          to score users. 
        </p>
        <p className="mb-4">
          A reference architecture involves streaming all user events, merging with historical data, and running an ML 
          model to flag churn risk. In industry terms, Zomato likely analyzes session logs, orders, and loyalty 
          engagement to compute features for churn scoring. (While we lack a public Zomato blog on churn, online 
          examples and Kaggle cases confirm its importance.)  <a href="https://medium.com" target="_blank">Ref: Medium</a>
        </p>
      </div>
    ),

    inferencesAndImpact: (
      <div>
        <p className="mb-4">
          The churn model allows Zomato to proactively offer personalized retention campaigns (discounts, 
          loyalty points) to high-risk users. This improves retention rate, increases average revenue per 
          user, and optimizes marketing spend. In sum, Zomato benefits from targeted interventions before 
          customers drift away, boosting long-term engagement and profits.
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
