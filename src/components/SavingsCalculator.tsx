import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Calculator, Info, Lightbulb } from "lucide-react";

const SavingsCalculator = () => {
  const [callsPerDay, setCallsPerDay] = useState(20);
  const [avgDuration, setAvgDuration] = useState(5);

  // Calculations
  const monthlyMinutes = callsPerDay * avgDuration * 30;
  const traditionalCost = 2500; // Fixed monthly cost
  const aiCost = monthlyMinutes * 0.10; // €0.10 per minute
  const monthlySavings = traditionalCost - aiCost;
  const savingsPercentage = Math.round((monthlySavings / traditionalCost) * 100);
  const yearlySavings = monthlySavings * 12;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500 mb-4">
          <Calculator className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Bereken Je <span className="font-bold">Besparing</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          Zie hoeveel je bespaart door over te stappen op AI
        </p>
      </div>

      {/* Calculator Card */}
      <Card className="max-w-4xl mx-auto p-8 md:p-12 space-y-8 bg-card border">
        {/* Sliders */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <label className="text-sm font-medium">
              Gesprekken per Dag: <span className="text-primary font-bold">{callsPerDay}</span>
            </label>
            <div className="space-y-2">
              <Slider
                value={[callsPerDay]}
                onValueChange={(value) => setCallsPerDay(value[0])}
                min={5}
                max={100}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>5</span>
                <span>100</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-sm font-medium">
              Gem. Duur (min): <span className="text-primary font-bold">{avgDuration}</span>
            </label>
            <div className="space-y-2">
              <Slider
                value={[avgDuration]}
                onValueChange={(value) => setAvgDuration(value[0])}
                min={2}
                max={15}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>2</span>
                <span>15</span>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Usage Info */}
        <Card className="p-6 bg-blue-50 border-blue-100">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 mt-1" />
            <div>
              <p className="font-semibold text-blue-900">Maandelijks Gebruik:</p>
              <p className="text-2xl font-bold text-blue-600 mt-1">
                {monthlyMinutes.toLocaleString('nl-NL')} minuten
              </p>
              <p className="text-sm text-blue-700 mt-1">
                ({callsPerDay} gesprekken × {avgDuration} min × 30 dagen)
              </p>
            </div>
          </div>
        </Card>

        {/* Cost Comparison Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 space-y-3 bg-red-50 border-red-100">
            <h3 className="text-sm font-medium text-muted-foreground">Traditionele Receptionist</h3>
            <p className="text-3xl font-bold text-red-600">€{traditionalCost.toLocaleString('nl-NL')}</p>
            <p className="text-xs text-muted-foreground">per maand (salaris)</p>
          </Card>

          <Card className="p-6 space-y-3 bg-blue-50 border-blue-100">
            <h3 className="text-sm font-medium text-muted-foreground">Vocari AI Agent</h3>
            <p className="text-3xl font-bold text-blue-600">€{aiCost.toLocaleString('nl-NL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            <p className="text-xs text-muted-foreground">€0.10 per minuut</p>
          </Card>

          <Card className="p-6 space-y-3 bg-green-50 border-green-100">
            <div className="flex items-center gap-2">
              <span className="text-green-600">💰</span>
              <h3 className="text-sm font-medium text-muted-foreground">Jouw Besparing</h3>
            </div>
            <p className="text-3xl font-bold text-green-600">€{monthlySavings.toLocaleString('nl-NL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            <p className="text-xs text-green-700 font-semibold">Bespaar {savingsPercentage}% per maand</p>
          </Card>
        </div>

        {/* Yearly Savings Banner */}
        <Card className="p-8 text-center bg-gradient-to-r from-blue-500 to-purple-600 border-0">
          <p className="text-xl font-bold text-white mb-2">
            Jaarlijkse Besparing: €{yearlySavings.toLocaleString('nl-NL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
          <p className="text-sm text-white/90">
            Dat is genoeg om terug te investeren in de groei van je bedrijf!
          </p>
        </Card>

        {/* Beta Tip */}
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground bg-yellow-50 border border-yellow-100 rounded-lg p-4">
          <Lightbulb className="w-4 h-4 text-yellow-600" />
          <p>
            <span className="font-semibold">Tip:</span> Tijdens de beta krijg je 200 gratis minuten per maand!
          </p>
        </div>
      </Card>
    </div>
  );
};

export default SavingsCalculator;
