// La tarea al momento de crearse notificará por correo a las personas
// que marquen como encargadas. Dentro del cuerpo del correo debe existir un enlace
// que lleve directamente al detalle de la tarea creada.

const task = {
  id: 1,
  projectId: '',
  name: '', // max 50 characters
  createdAt: '', // YYYY-MM-DD
  closedAt: '', // YYYY-MM-DD
  tags: [{}],
  description: '', // max 100 characters
  additionalFiles: [{}],
  status: '', // opened - closed - blocked
  responsables: ['emails'], // emails
  //
}

const tag = {
  title: '',
  id: '',
}
