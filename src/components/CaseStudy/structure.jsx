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
    <div className="max-w-5xl mx-auto p-8 space-y-12 mt-20">
      {/* Case Study Title */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl md:text-6xl text-white font-extrabold bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 leading-tight">
          {caseStudyTitle}
        </h1>
        <div className="inline-flex items-center px-6 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-50 to-indigo-50 text-indigo-700 border border-indigo-200 shadow-sm">
          <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
          Technical Case Study
        </div>
      </div>

      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>

      {/* Business Challenge */}
      <div className="group hover:shadow-xl transition-all duration-300 bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
        <div className="px-8 py-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
            <div className="p-2 bg-blue-500 rounded-lg shadow-sm">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            Business Challenge
          </h2>
        </div>
        <div className="px-8 py-6">
          <div className="text-gray-700 leading-relaxed text-lg font-medium">{businessChallenge}</div>
        </div>
      </div>

      {/* Data Structures & Algorithms */}
      <div className="group hover:shadow-xl transition-all duration-300 bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
        <div className="px-8 py-6 bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-100">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
            <div className="p-2 bg-green-500 rounded-lg shadow-sm">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            Data Structures & Algorithms
          </h2>
        </div>
        <div className="px-8 py-6 space-y-6">
          <div className="text-gray-700 leading-relaxed text-lg font-medium">{dataStructuresAndAlgorithms.content}</div>
          <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-6 border border-gray-200 shadow-inner">
            <h4 className="font-bold mb-4 text-gray-800 text-lg flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              Implementation:
            </h4>
            <div className="relative">
              <pre className="bg-gradient-to-br text-left from-gray-900 to-slate-800 text-gray-100 p-6 rounded-xl overflow-x-auto text-sm border border-gray-700 shadow-lg">
                <code className="font-mono">{dataStructuresAndAlgorithms.code}</code>
              </pre>
              <div className="absolute top-4 right-4 flex space-x-1">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Models and Figures */}
      { modelsAndFigures &&       <div className="group hover:shadow-xl transition-all duration-300 bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
        <div className="px-8 py-6 bg-gradient-to-r from-purple-50 to-violet-50 border-b border-purple-100">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
            <div className="p-2 bg-purple-500 rounded-lg shadow-sm">
              <ImageIcon className="h-6 w-6 text-white" />
            </div>
            Models and Figures
          </h2>
        </div>
        <div className="px-8 py-6 space-y-6">
          <div className="flex justify-center">
            <div className={`relative group/image ${modelsAndFigures.imgStyle || ""}`}>
              <img
                src={modelsAndFigures.image || "/placeholder.svg?height=400&width=600"}
                alt="Case Study Figure"
                className={`max-w-full h-auto rounded-xl border border-gray-200 shadow-lg transition-transform duration-300  group-hover/image:scale-105`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          <div className="text-gray-700 leading-relaxed text-lg font-medium">{modelsAndFigures.description}</div>
        </div>
      </div>}

      {/* Efficiency Analysis */}
      <div className="group hover:shadow-xl transition-all duration-300 bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
        <div className="px-8 py-6 bg-gradient-to-r from-orange-50 to-amber-50 border-b border-orange-100">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
            <div className="p-2 bg-orange-500 rounded-lg shadow-sm">
              <Clock className="h-6 w-6 text-white" />
            </div>
            Efficiency Analysis
          </h2>
        </div>
        <div className="px-8 py-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border border-orange-100">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-500 rounded-lg shadow-sm">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <h4 className="font-bold text-gray-800 text-lg">Time Complexity</h4>
              </div>
              <div className="text-gray-700 leading-relaxed text-lg font-medium pl-2">
                {efficiencyAnalysis.timeComplexity}
              </div>
            </div>
            {efficiencyAnalysis.spaceComplexity && (
              <div className="space-y-4 p-6 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl border border-yellow-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-yellow-500 rounded-lg shadow-sm">
                    <HardDrive className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 text-lg">Space Complexity</h4>
                </div>
                <div className="text-gray-700 leading-relaxed text-lg font-medium pl-2">
                  {efficiencyAnalysis.spaceComplexity}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Overall Impact and References */}
      <div className="group hover:shadow-xl transition-all duration-300 bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
        <div className="px-8 py-6 bg-gradient-to-r from-red-50 to-pink-50 border-b border-red-100">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
            <div className="p-2 bg-red-500 rounded-lg shadow-sm">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            Overall Impact and References
          </h2>
        </div>
        <div className="px-8 py-6">
          <div className="text-gray-700 leading-relaxed text-lg font-medium">{overallImpactAndReferences}</div>
        </div>
      </div>

      {/* Inferences and Impact */}
      {inferencesAndImpact && <div className="group hover:shadow-xl transition-all duration-300 bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
        <div className="px-8 py-6 bg-gradient-to-r from-yellow-50 to-amber-50 border-b border-yellow-100">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
            <div className="p-2 bg-yellow-500 rounded-lg shadow-sm">
              <Lightbulb className="h-6 w-6 text-white" />
            </div>
            Inferences and Impact
          </h2>
        </div>
        <div className="px-8 py-6">
          <div className="text-gray-700 leading-relaxed text-lg font-medium">{inferencesAndImpact}</div>
        </div>
      </div>}
    </div>
  )
}
