import { Clock, HardDrive, TrendingUp, BookOpen, Lightbulb, ImageIcon } from "lucide-react"

export default function CaseStudy({
  caseStudyTitle,
  businessChallenge,
  dataStructuresAndAlgorithms,
  modelsAndFigures,
  efficiencyAnalysis,
  overallImpactAndReferences,
  inferencesAndImpact,
}) {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Case Study Title */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{caseStudyTitle}</h1>
        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
          Technical Case Study
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* Business Challenge */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            Business Challenge
          </h2>
        </div>
        <div className="px-6 py-4">
          <div className="text-gray-700 leading-relaxed">{businessChallenge}</div>
        </div>
      </div>

      {/* Data Structures & Algorithms */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-green-600" />
            Data Structures & Algorithms
          </h2>
        </div>
        <div className="px-6 py-4 space-y-4">
          <div className="text-gray-700 leading-relaxed">{dataStructuresAndAlgorithms.content}</div>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h4 className="font-semibold mb-2 text-gray-800">Implementation:</h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
              <code>{dataStructuresAndAlgorithms.code}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Models and Figures */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
            <ImageIcon className="h-5 w-5 text-purple-600" />
            Models and Figures
          </h2>
        </div>
        <div className="px-6 py-4 space-y-4">
          <div className="flex justify-center">
            <img
              src={modelsAndFigures.image || "/placeholder.svg"}
              alt="Case Study Figure"
              className="max-w-full h-auto rounded-lg border border-gray-200 shadow-sm"
            />
          </div>
          <div className="text-gray-700 leading-relaxed">{modelsAndFigures.description}</div>
        </div>
      </div>

      {/* Efficiency Analysis */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
            <Clock className="h-5 w-5 text-orange-600" />
            Efficiency Analysis
          </h2>
        </div>
        <div className="px-6 py-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-orange-500" />
                <h4 className="font-semibold text-gray-800">Time Complexity</h4>
              </div>
              <div className="text-gray-700 leading-relaxed pl-6">{efficiencyAnalysis.timeComplexity}</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <HardDrive className="h-4 w-4 text-blue-500" />
                <h4 className="font-semibold text-gray-800">Space Complexity</h4>
              </div>
              <div className="text-gray-700 leading-relaxed pl-6">{efficiencyAnalysis.spaceComplexity}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Overall Impact and References */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-red-600" />
            Overall Impact and References
          </h2>
        </div>
        <div className="px-6 py-4">
          <div className="text-gray-700 leading-relaxed">{overallImpactAndReferences}</div>
        </div>
      </div>

      {/* Inferences and Impact */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-yellow-600" />
            Inferences and Impact
          </h2>
        </div>
        <div className="px-6 py-4">
          <div className="text-gray-700 leading-relaxed">{inferencesAndImpact}</div>
        </div>
      </div>
    </div>
  )
}
