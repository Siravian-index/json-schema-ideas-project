const ticket = {
  taskId: '',
  id: 1,
  title: '', //max 50 characters.
  description: '', // max 500 characters
  createdAt: '', // YYYY-MM-DD
  closedAt: '', // YYYY-MM-DD // nullable
  responsable: '',
  spottedAt: '', //(Planificación; Análisis; Diseño; Implementación; Pruebas; Despliegue; Uso o mantenimiento).
  proof: [''],
  severity: '', //(Bajo; Medio; Alto)
  priority: '', //(Bajo; Medio; Alto)
  importance: '', //(Bajo; Medio; Alto)
  status: '', // (asignado, cancelado, rechazado, cerrado con defectos, reinsidente, solucionado)
  conclusion: '', // 5000 max characters
  gobalProblems: '', // 5000 max characters
  email: '',
  developrObservations: '', // 5000 max characters
}
