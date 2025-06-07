import CaseStudy from "./structure"

export default function CaseThree() {
  const caseStudyData = {
    caseStudyTitle: "3. Real-Time Fraud Detection in Orders",

    businessChallenge: (
      <div>
        <p className="mb-4">
          Zomato’s platform handles millions of orders daily. Detecting fraudulent transactions (fake orders, 
          chargebacks, stolen accounts) in real time is critical to protect revenue and trust. Delays in fraud
          detection can result in lost revenue and reputation damage. In fast-moving food delivery, 
          traditional batch analysis is too slow
        </p>
        <p className="mb-4">
          Zomato’s own engineering blog highlights that “delays in data processing can hinder…identifying 
          fraudulent activities, where timely action is essential”
        </p>
      </div>
    ),

    dataStructuresAndAlgorithms: {
      content: (
        <div>
          <p className="mb-4">
            We implement a streaming anomaly detection pipeline. Incoming order streams (user ID, order amount, location, 
            device info, payment method, etc.) are ingested into a Kafka queue. A Flink job processes events in sliding
             time windows and extracts features (e.g. order amount vs. user average, order frequency, unusual location 
             changes). We train an Isolation Forest (unsupervised anomaly detector) or a supervised classifier (e.g. 
             XGBoost) on historical labeled transactions. In Python code it looks like the below code.
          </p>
        </div>
      ),
      code: `from sklearn.ensemble import IsolationForest
# Training data features: e.g. [order_amount, hour_of_day, distance_from_previous_order, ...]
features_train = ...  # shape (n_samples, n_features)
clf = IsolationForest(contamination=0.01, random_state=42)
clf.fit(features_train)

# We then score new transactions:
features_new = ...  # incoming order feature vector
score = clf.decision_function([features_new])
label = clf.predict([features_new])  # -1 => anomaxly (fraud), 1 => normal
`,
    },

    modelsAndFigures: {
      image: "https://miro.medium.com/v2/resize%3Afit%3A1400/0%2Ae7r98Y-fvxwm-NFE.png",
      description: (
        <div>
          <p className="mb-4">
            <strong>Figure:</strong> The algorithm isolates anomalies by recursively partitioning feature space; 
            anomalies require fewer splits. Training time is roughly O(N·logN) per tree and memory O(N·T) for T 
            trees. Prediction is O(N_nodes) per instance (fast). We also use hash tables (dicts) to maintain recent 
            user-order histories for feature computation (e.g. last order time) – constant-time access.
          </p>
          <p className="mb-4">
            Illustration of fraud anomalies and blocking. In a sample analytics dashboard, we plot the 
            count of suspicious connection attempts (green) over time. When a block rule is applied (red vertical 
            line), the fraudulent activity drops, and the system adapts. This exemplifies how detecting and stopping 
            fraud in real time protects the platform’s health.
          </p>
        </div>
      ),
    },

    efficiencyAnalysis: {
      timeComplexity: (
        <div>
          <p className="mb-3">
            Efficiency: The Isolation Forest model trains in roughly O(n·log n) per tree (where n is number of 
            training points) and makes predictions in O(d·n_estimators) time per instance. In practice, with 
            streaming frameworks (Kafka/Flink), the overhead is dominated by data ingestion.
          </p>
          <p className="mb-3">
            The solution scales horizontally: we can distribute the model and feature computation across 
            many Flink tasks. 
            For faster decision-making, we also implement threshold-based early stopping: if features are 
            extreme (e.g. order amount {">"} 10× user mean), we flag immediately (constant time).
          </p>
        </div>
      )
    },

    overallImpactAndReferences: (
      <div>
        <p className="mb-4">
          Zomato has built a real-time data platform with Kafka and Flink to handle time-critical tasks
          <a href="https://blog.zomato.com" target="_blank"><br/>Ref: zomato blogs </a>
          . Similar mobility platforms (Uber, Grab) use streaming to “detect anomalies in GPS, join payment
           and user streams, and apply ML to block suspicious transactions before completion”
          <a href="https://kai-waehner.de" target="_blank"> Ref: kai-waehner </a>
          . For example, Grab’s fraud engine ingests device fingerprints, payments, and ride data in-stream
           to produce fraud risk scores
          <a href="https://kai-waehner.de" target="_blank"> Ref: kai-waehner </a>
          . A Kafka–Flink pipeline can thus detect Zomato fraud in-flight. This aligns with industry practice
           of proactive fraud prevention (e.g. DoorDash migrating to real-time streaming
          <a href="https://kai-waehner.de" target="_blank"> Ref: kai-waehner </a>
          ).
        </p>
      </div>
    ),

    inferencesAndImpact: (
      <div>
        <p className="mb-4">
          By implementing a real-time anomaly detection system, Zomato can instantly flag or block fraudulent orders, 
          reducing chargebacks and abuse. The continuous model training on fresh data ensures evolving fraud patterns
          are caught. 
        </p>
        <p className="mb-4">
          This lowers fraud loss, improves customer trust, and avoids manual review costs. 
          Overall, Zomato gains higher platform security and trust from proactive fraud defense.
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
