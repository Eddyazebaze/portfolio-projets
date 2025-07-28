import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Progress } from "./ui/progress";
import { mockProjects } from "../data/mockData";
import { calculateProjectValue } from "../utils/valueCalculator";

const ProjectValueCanvas = () => {
  const [project, setProject] = useState({
    name: "",
    objective: "",
    constraints: "",
    type: "",
    priority: "",
    userImpact: "",
    regulatory: "",
    strategic: ""
  });

  const [currentProject, setCurrentProject] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (field, value) => {
    setProject(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Use default values if fields are empty
    const processedProject = {
      name: project.name || "Projet sans nom",
      objective: project.objective || "Objectif non défini",
      constraints: project.constraints || "Aucune contrainte spécifiée",
      type: project.type || "Autre",
      priority: project.priority || "moyenne",
      userImpact: project.userImpact || "modéré",
      regulatory: project.regulatory || "Non",
      strategic: project.strategic || "Non"
    };

    const valueResults = calculateProjectValue(processedProject);
    setCurrentProject({ ...processedProject, ...valueResults });
    setShowResults(true);
  };

  const loadMockProject = (mockProject) => {
    setProject(mockProject);
    const valueResults = calculateProjectValue(mockProject);
    setCurrentProject({ ...mockProject, ...valueResults });
    setShowResults(true);
  };

  const resetForm = () => {
    setProject({
      name: "",
      objective: "",
      constraints: "",
      type: "",
      priority: "",
      userImpact: "",
      regulatory: "",
      strategic: ""
    });
    setCurrentProject(null);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Canvas de Valeur Projet
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Évaluez rapidement la valeur stratégique de votre projet avec notre matrice d'analyse multidimensionnelle
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card className="shadow-xl border-0 bg-white/70 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <CardTitle className="text-2xl flex items-center gap-2">
                📊 Informations Projet
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom du projet</Label>
                  <Input
                    id="name"
                    value={project.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Ex: Refonte du système CRM"
                    className="border-2 border-gray-200 focus:border-blue-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="objective">Objectif métier principal</Label>
                  <Textarea
                    id="objective"
                    value={project.objective}
                    onChange={(e) => handleInputChange("objective", e.target.value)}
                    placeholder="Ex: Améliorer la satisfaction client et augmenter les ventes"
                    className="border-2 border-gray-200 focus:border-blue-500 transition-colors"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="constraints">Contraintes ou exigences clés</Label>
                  <Textarea
                    id="constraints"
                    value={project.constraints}
                    onChange={(e) => handleInputChange("constraints", e.target.value)}
                    placeholder="Ex: Budget limité, délai serré, conformité RGPD"
                    className="border-2 border-gray-200 focus:border-blue-500 transition-colors"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Type de projet</Label>
                  <Select value={project.type} onValueChange={(value) => handleInputChange("type", value)}>
                    <SelectTrigger className="border-2 border-gray-200 focus:border-blue-500">
                      <SelectValue placeholder="Sélectionnez le type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="SI">Système d'Information</SelectItem>
                      <SelectItem value="IA">Intelligence Artificielle</SelectItem>
                      <SelectItem value="Data">Data / Analytics</SelectItem>
                      <SelectItem value="Réglementaire">Réglementaire</SelectItem>
                      <SelectItem value="Produit">Produit</SelectItem>
                      <SelectItem value="Autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label>Priorité métier</Label>
                  <RadioGroup
                    value={project.priority}
                    onValueChange={(value) => handleInputChange("priority", value)}
                    className="flex gap-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="basse" id="priority-low" />
                      <Label htmlFor="priority-low">Basse</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="moyenne" id="priority-medium" />
                      <Label htmlFor="priority-medium">Moyenne</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="haute" id="priority-high" />
                      <Label htmlFor="priority-high">Haute</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <Label>Impact utilisateur final</Label>
                  <RadioGroup
                    value={project.userImpact}
                    onValueChange={(value) => handleInputChange("userImpact", value)}
                    className="flex gap-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="faible" id="impact-low" />
                      <Label htmlFor="impact-low">Faible</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="modéré" id="impact-medium" />
                      <Label htmlFor="impact-medium">Modéré</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="fort" id="impact-high" />
                      <Label htmlFor="impact-high">Fort</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <Label>Contexte réglementaire</Label>
                  <RadioGroup
                    value={project.regulatory}
                    onValueChange={(value) => handleInputChange("regulatory", value)}
                    className="flex gap-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Non" id="regulatory-no" />
                      <Label htmlFor="regulatory-no">Non</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Oui" id="regulatory-yes" />
                      <Label htmlFor="regulatory-yes">Oui</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <Label>Urgence stratégique</Label>
                  <RadioGroup
                    value={project.strategic}
                    onValueChange={(value) => handleInputChange("strategic", value)}
                    className="flex gap-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Non" id="strategic-no" />
                      <Label htmlFor="strategic-no">Non</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Oui" id="strategic-yes" />
                      <Label htmlFor="strategic-yes">Oui</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button 
                    type="submit" 
                    className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105"
                  >
                    Analyser le Projet
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={resetForm}
                    className="border-2 border-gray-300 hover:border-gray-400 transition-colors"
                  >
                    Réinitialiser
                  </Button>
                </div>
              </form>

              <Separator className="my-6" />

              <div className="space-y-3">
                <Label className="text-sm font-medium text-gray-700">Exemples de projets :</Label>
                <div className="grid grid-cols-1 gap-2">
                  {mockProjects.map((mock, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      onClick={() => loadMockProject(mock)}
                      className="text-left justify-start p-3 h-auto hover:bg-blue-50 transition-colors"
                    >
                      <div>
                        <div className="font-medium text-sm">{mock.name}</div>
                        <div className="text-xs text-gray-500 mt-1">{mock.type}</div>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          {showResults && currentProject && (
            <Card className="shadow-xl border-0 bg-white/70 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                <CardTitle className="text-2xl flex items-center gap-2">
                  🎯 Analyse de Valeur
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {currentProject.name}
                    </h3>
                    <Badge 
                      variant={currentProject.positioning === "Projet stratégique" ? "default" : "secondary"}
                      className="text-sm"
                    >
                      {currentProject.positioning}
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-md font-semibold text-gray-800">
                      Matrice de Valeur Projet
                    </h4>
                    
                    {Object.entries(currentProject.valueMatrix).map(([key, value]) => (
                      <div key={key} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700">
                            {key}
                          </span>
                          <span className="text-sm text-gray-600">
                            {value}%
                          </span>
                        </div>
                        <Progress 
                          value={value} 
                          className="h-2"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-md font-semibold text-gray-800 mb-2">
                      Score Global
                    </h4>
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full ${
                        currentProject.globalScore === "Élevée" ? "bg-green-500" :
                        currentProject.globalScore === "Moyenne" ? "bg-yellow-500" : "bg-red-500"
                      }`}></div>
                      <span className="font-medium text-lg">
                        {currentProject.globalScore}
                      </span>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="text-md font-semibold text-gray-800 mb-2">
                      Recommandation
                    </h4>
                    <p className="text-sm text-gray-700">
                      {currentProject.recommendation}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectValueCanvas;