import CaseStudy from "./structure"

export default function CaseFive() {
  const caseStudyData = {
    caseStudyTitle: "5: Real-Time Demand Forecasting for Supply and Operations",

    businessChallenge: (
      <div>
        <p className="mb-4">
          Zomato operates a three-sided marketplace (customers, restaurants, delivery partners). Predicting demand 
          spikes (by city, time of day, weather, events) is vital for inventory, staffing, and promotions. For 
          example, Zomato’s Hyperpure fresh ingredients business uses “AI-backed inventory management, demand 
          forecasting” to reduce costs
          <a href="https://medium.com/ivy-insights/base-camp-zomato-scaling-the-everest-of-foodtech-with-hyperpure-853bf9f57f8d#:~:text=,reduced%20par%20with%20competitive%20pricing" target="_blank"> Ref: Medium</a>.
        </p>
        <p className="mb-4">
          In delivery, real-time demand forecasting enables dynamic resource allocation and intelligent dispatch. 
          In fact, an equity report notes Zomato has built capabilities for “real-time, demand forecasting, 
          fleet optimization, … and intelligent dispatch”
          <a href="https://bsmedia.business-standard.com/_media/bs/data/market-reports/equity-brokertips/2021-09/16310789130.82535700.pdf#:~:text=strengthen%20its%20logistics%20network%20to,of%20orders%20and%20delivery%20partners" target="_blank"> Ref: bsmedia</a>.
        </p>
      </div>
    ),

    dataStructuresAndAlgorithms: {
      content: (
        <div>
          <p className="mb-4">
             We build a time-series forecasting pipeline. Historical order volumes are stored in a time-series database 
             (one series per city/zone or cuisine). We use a Seasonal ARIMA model (AutoRegressive Integrated Moving 
             Average) or a neural model (LSTM) to forecast short-term demand. For example, using Python’s statsmodels (see below code):
          </p>
          <p className="mb-4">
            ARIMA captures trends and seasonality (daily/weekly). Training is roughly O(n(p+q)^2)* and forecasting O(p+q) 
            per step. Alternatively, an LSTM (deep RNN) can handle complex patterns: its training is O(n·h²) per epoch 
            (h = hidden size) and predictions O(h²), which is heavier but done off-peak. For real-time updates, 
            we can use online learning (e.g. updating model with new data points). We may also employ lightweight 
            aggregations: storing sliding sums and counts in a queue or ring buffer for quick moving-average forecasts.
          </p>
        </div>
      ),
      code: `from statsmodels.tsa.arima.model import ARIMA
import pandas as pd

# Assume 'series' is a pandas Series of past hourly orders
model = ARIMA(series, order=(3,1,2))  # ARIMA(p=3, d=1, q=2)
model_fit = model.fit()
forecast = model_fit.forecast(steps=6)  # predict next 6 hours
`,
    },

    modelsAndFigures: {
      image: "https://miro.medium.com/v2/resize%3Afit%3A1400/0%2AK1MqVBBp4tOBtpzI.png",
      description: (
        <div>
          <p className="mb-4">
            <strong>Figure:</strong> Event-driven real-time forecasting pipeline. This architecture (adapted 
            from mobility platforms) shows data streaming through Kafka, real-time processing with Flink, and ML 
            serving. Zomato could use a similar pipeline: incoming order events update time-series aggregates, 
            an online model forecasts demand, and alerts/dispatch signals are generated. (See above figure adapted 
            from industry <a href="https://www.kai-waehner.de/blog/2025/04/28/fraud-detection-in-mobility-services-ride-hailing-food-delivery-with-data-streaming-using-apache-kafka-and-flink/#:~:text=Apache%20Kafka%3A%20The%20Backbone%20of,Driven%20Fraud%20Detection" target="_blank">Reference: kai-waehner</a>.)
          </p>
        </div>
      ),
    },

    efficiencyAnalysis: {
      timeComplexity: (
        <div>
          <p className="mb-3">
            In terms of time efficiency, ARIMA models offer moderate performance, scaling linearly with the amount of 
            data (O(n)), which is generally acceptable for modest forecasting horizons. LSTM models, however, are 
            relatively time-inefficient due to their high computational complexity and the need for GPU resources 
            during training. On the other hand, using a queue data structure for rolling averages is highly 
            time-efficient, achieving constant time (O(1)) updates and computations. Apache Flink enhances 
            time efficiency through real-time data ingestion and processing, ensuring that each new data point 
            is incorporated quickly. Kubernetes contributes by enabling parallelization of compute-heavy forecasting 
            jobs across regions, significantly reducing overall processing time.
          </p>
        </div>
      ),
      spaceComplexity: (
        <div>
          <p className="mb-3">
            From a space efficiency standpoint, ARIMA is favorable, requiring storage only for a limited set of model 
            parameters. LSTMs are more space-intensive, as they must store a large number of weights, internal states, 
            and possibly long input sequences. Queues used for rolling averages are space-efficient due to their 
            fixed-size, memory-bounded structure. Flink also maintains high space efficiency by processing data in 
            a streaming fashion, avoiding the need to store entire datasets in memory. Kubernetes, while vital for 
            scalability and orchestration, is generally neutral in terms of space efficiency, as it doesn't directly 
            influence the memory footprint of the models themselves.
          </p>
        </div>
      ),
    },

    overallImpactAndReferences: (
      <div>
        <p className="mb-4">
          According to Kotak Institutional research, Zomato has invested in “real-time demand forecasting” to handle 
          complex delivery logistics
          <a href="https://bsmedia.business-standard.com/_media/bs/data/market-reports/equity-brokertips/2021-09/16310789130.82535700.pdf#:~:text=strengthen%20its%20logistics%20network%20to,of%20orders%20and%20delivery%20partners" target="_blank"> Ref: bsmedia</a>. In Hyperpure 
          (restaurant supplies), demand forecasting is already used to optimize warehouse inventory. 
        </p>
        <p className="mb-4">
          Our solution mirrors this by merging real-time order streams and historical trends to predict future demand. 
          Confluent/Kafka case studies (e.g. DoorDash, Grab) similarly use stream processing for demand prediction 
          and dynamic supply matching. This fits Zomato’s model, where advance forecasting improves matching of 
          delivery partners and prepares supply in kitchens.
        </p>
        <p className="mb-4">
          Zomato’s own tech blog discusses its shift to real-time stream processing (Kafka, Flink) for critical use cases
          <a href="https://blog.zomato.com/apache-flink-journey-zomato-from-inception-to-innovation#:~:text=Our%20journey%20into%20real,where%20timely%20action%20is%20essential" target="_blank">Ref: Zomato Blogs</a>
          . Analyst reports note Zomato’s investment in machine-learning capabilities like demand forecasting and intelligent dispatch
                    <a href="https://bsmedia.business-standard.com/_media/bs/data/market-reports/equity-brokertips/2021-09/16310789130.82535700.pdf#:~:text=strengthen%20its%20logistics%20network%20to,of%20orders%20and%20delivery%20partners" target="_blank"> Ref: bsmedia</a>
          . Similar industry examples (Grab, Lyft) demonstrate data-driven fraud detection and demand forecasting in mobility services
                    <a href="https://www.kai-waehner.de/blog/2025/04/28/fraud-detection-in-mobility-services-ride-hailing-food-delivery-with-data-streaming-using-apache-kafka-and-flink/#:~:text=Apache%20Flink%20enables%20real,event%20correlation%20and%20applied%20AI" target="_blank"> Ref: kai-waehner</a>  
          . The use of churn analytics and forecasting is a well-known strategy in foodtech, as outlined in practitioner articles
                    <a href="https://medium.com/ivy-insights/base-camp-zomato-scaling-the-everest-of-foodtech-with-hyperpure-853bf9f57f8d#:~:text=,reduced%20par%20with%20competitive%20pricing" target="_blank"> Ref: Medium</a> 
          . These sources ground our case studies in realistic Zomato-like scenarios.
        </p>
      </div>
    ),

    inferencesAndImpact: (
      <div>
        <p className="mb-4">
          A robust forecasting system helps Zomato smooth operations: it can stock Hyperpure warehouses efficiently, 
          schedule delivery agents ahead of peak periods, and prompt restaurants to ramp up cooking capacity. 
        </p>
        <p className="mb-4">
          This minimizes stockouts, reduces delivery delays, and balances supply–demand automatically. 
          Ultimately, Zomato gains cost savings (less waste, idle time) and better customer experience 
          by anticipating demand surges.
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
