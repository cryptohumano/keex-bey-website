'use client';
import { useState } from 'react';
import { Calculator, TrendingUp, Users, DollarSign, Clock } from 'lucide-react';

interface ROICalculation {
  currentEngagement: number;
  targetEngagement: number;
  employeeCount: number;
  averageSalary: number;
  projectCost: number;
  implementationTime: number;
}

export function ROICalculator() {
  const [formData, setFormData] = useState<ROICalculation>({
    currentEngagement: 60,
    targetEngagement: 80,
    employeeCount: 100,
    averageSalary: 50000,
    projectCost: 50000,
    implementationTime: 12
  });

  const [results, setResults] = useState<{
    productivityGain: number;
    turnoverReduction: number;
    totalBenefits: number;
    roi: number;
    paybackPeriod: number;
  } | null>(null);

  const handleInputChange = (field: keyof ROICalculation, value: number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculateROI = () => {
    const { currentEngagement, targetEngagement, employeeCount, averageSalary, projectCost, implementationTime } = formData;
    
    // Cálculos basados en investigación de Gallup y estudios de transformación cultural
    const engagementImprovement = (targetEngagement - currentEngagement) / 100;
    
    // Productividad: 1% de mejora en engagement = 0.5% de mejora en productividad
    const productivityGain = employeeCount * averageSalary * 0.5 * engagementImprovement;
    
    // Reducción de rotación: 1% de mejora en engagement = 0.3% de reducción en rotación
    const turnoverReduction = employeeCount * averageSalary * 0.3 * engagementImprovement * 0.5; // 50% del costo de rotación
    
    const totalBenefits = productivityGain + turnoverReduction;
    const roi = ((totalBenefits - projectCost) / projectCost) * 100;
    const paybackPeriod = projectCost / (totalBenefits / implementationTime);
    
    setResults({
      productivityGain,
      turnoverReduction,
      totalBenefits,
      roi,
      paybackPeriod
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-keex-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Calculator className="w-8 h-8 text-keex-green" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-keex-green mb-2">
          Calculadora de ROI
        </h3>
        <p className="text-gray-600">
          Calcula el retorno de inversión de tu proyecto de transformación cultural
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Número de Empleados
          </label>
          <input
            type="number"
            value={formData.employeeCount}
            onChange={(e) => handleInputChange('employeeCount', parseInt(e.target.value) || 0)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-keex-green focus:border-transparent"
            placeholder="100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Salario Promedio Anual (USD)
          </label>
          <input
            type="number"
            value={formData.averageSalary}
            onChange={(e) => handleInputChange('averageSalary', parseInt(e.target.value) || 0)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-keex-green focus:border-transparent"
            placeholder="50000"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Engagement Actual (%)
          </label>
          <input
            type="number"
            min="0"
            max="100"
            value={formData.currentEngagement}
            onChange={(e) => handleInputChange('currentEngagement', parseInt(e.target.value) || 0)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-keex-green focus:border-transparent"
            placeholder="60"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Engagement Objetivo (%)
          </label>
          <input
            type="number"
            min="0"
            max="100"
            value={formData.targetEngagement}
            onChange={(e) => handleInputChange('targetEngagement', parseInt(e.target.value) || 0)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-keex-green focus:border-transparent"
            placeholder="80"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Costo del Proyecto (USD)
          </label>
          <input
            type="number"
            value={formData.projectCost}
            onChange={(e) => handleInputChange('projectCost', parseInt(e.target.value) || 0)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-keex-green focus:border-transparent"
            placeholder="50000"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tiempo de Implementación (meses)
          </label>
          <input
            type="number"
            value={formData.implementationTime}
            onChange={(e) => handleInputChange('implementationTime', parseInt(e.target.value) || 0)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-keex-green focus:border-transparent"
            placeholder="12"
          />
        </div>
      </div>

      <button
        onClick={calculateROI}
        className="w-full bg-keex-green text-white py-3 px-6 rounded-lg font-semibold hover:bg-keex-terracotta transition-colors duration-200 mb-8"
      >
        Calcular ROI
      </button>

      {results && (
        <div className="bg-gray-50 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-keex-green mb-4 text-center">
            Resultados del Cálculo
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-5 h-5 text-keex-ocre mr-2" />
                <span className="text-sm font-medium text-gray-600">Ganancia en Productividad</span>
              </div>
              <div className="text-2xl font-bold text-keex-green">
                ${results.productivityGain.toLocaleString()}
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-5 h-5 text-keex-ocre mr-2" />
                <span className="text-sm font-medium text-gray-600">Reducción de Rotación</span>
              </div>
              <div className="text-2xl font-bold text-keex-green">
                ${results.turnoverReduction.toLocaleString()}
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <DollarSign className="w-5 h-5 text-keex-ocre mr-2" />
                <span className="text-sm font-medium text-gray-600">ROI</span>
              </div>
              <div className="text-2xl font-bold text-keex-green">
                {results.roi.toFixed(1)}%
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <Clock className="w-5 h-5 text-keex-ocre mr-2" />
                <span className="text-sm font-medium text-gray-600">Período de Recuperación</span>
              </div>
              <div className="text-2xl font-bold text-keex-green">
                {results.paybackPeriod.toFixed(1)} meses
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600 mb-4">
              <strong>Beneficios Totales Anuales:</strong> ${results.totalBenefits.toLocaleString()}
            </p>
            <p className="text-xs text-gray-500">
              *Cálculos basados en investigación de Gallup y estudios de transformación cultural
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
